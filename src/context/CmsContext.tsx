import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, initialSiteContent, LeadSubmission, initialLeads } from '../types/cms';

interface CmsContextType {
  content: SiteContent;
  updateContent: (newContent: Partial<SiteContent>) => void;
  leads: LeadSubmission[];
  addLead: (lead: Omit<LeadSubmission, 'id' | 'timestamp' | 'status'>) => void;
  updateLeadStatus: (id: string, status: 'New' | 'Contacted' | 'Closed') => void;
  deleteLead: (id: string) => void;
  isAdminMode: boolean;
  setIsAdminMode: (val: boolean) => void;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Start from the same defaults on the server and during the first browser
  // render. Load browser-only saved content after hydration to avoid a mismatch.
  const [content, setContent] = useState<SiteContent>(initialSiteContent);
  const [leads, setLeads] = useState<LeadSubmission[]>(initialLeads);
  const [storageLoaded, setStorageLoaded] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedContent = window.localStorage.getItem('dp_digital_cms_content');
      if (savedContent) {
        const parsed = JSON.parse(savedContent);
        setContent({ ...initialSiteContent, ...parsed });
      }

      const savedLeads = window.localStorage.getItem('dp_digital_cms_leads');
      if (savedLeads) {
        setLeads(JSON.parse(savedLeads));
      }
    } catch (error) {
      console.warn('Unable to restore saved CMS data from this browser.', error);
    } finally {
      setStorageLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!storageLoaded) return;
    try {
      window.localStorage.setItem('dp_digital_cms_content', JSON.stringify(content));
    } catch (error) {
      console.warn('Unable to save CMS content in this browser.', error);
    }
  }, [content, storageLoaded]);

  useEffect(() => {
    if (!storageLoaded) return;
    try {
      window.localStorage.setItem('dp_digital_cms_leads', JSON.stringify(leads));
    } catch (error) {
      console.warn('Unable to save CMS leads in this browser.', error);
    }
  }, [leads, storageLoaded]);

  const updateContent = (newContent: Partial<SiteContent>) => {
    setContent(prev => ({ ...prev, ...newContent }));
  };

  const addLead = (leadData: Omit<LeadSubmission, 'id' | 'timestamp' | 'status'>) => {
    const newLead: LeadSubmission = {
      id: `lead-${Date.now()}`,
      timestamp: new Date().toISOString(),
      ...leadData,
      status: 'New'
    };
    setLeads(prev => [newLead, ...prev]);

    // Send Simulated Email / Webhook notification alert in console & trigger simulated alert
    console.log('[Email Notification Sent to Admin]: New Lead Received!', newLead);
  };

  const updateLeadStatus = (id: string, status: 'New' | 'Contacted' | 'Closed') => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
  };

  const deleteLead = (id: string) => {
    setLeads(prev => prev.filter(l => l.id !== id));
  };

  return (
    <CmsContext.Provider value={{ content, updateContent, leads, addLead, updateLeadStatus, deleteLead, isAdminMode, setIsAdminMode }}>
      {children}
    </CmsContext.Provider>
  );
};
export const useCms = () => {
  const context = useContext(CmsContext);
  if (!context) throw new Error('useCms must be used within a CmsProvider');
  return context;
};
