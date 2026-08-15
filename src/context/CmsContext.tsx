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
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('dp_digital_cms_content');
    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        return { ...initialSiteContent, ...parsed };
      } catch (e) { 
        return initialSiteContent; 
      }
    }
    return initialSiteContent;
  });

  const [leads, setLeads] = useState<LeadSubmission[]>(() => {
    const saved = localStorage.getItem('dp_digital_cms_leads');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return initialLeads; }
    }
    return initialLeads;
  });

  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('dp_digital_cms_content', JSON.stringify(content));
  }, [content]);

  useEffect(() => {
    localStorage.setItem('dp_digital_cms_leads', JSON.stringify(leads));
  }, [leads]);

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
