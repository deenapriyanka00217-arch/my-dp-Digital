import { StrictMode } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { PassThrough } from 'node:stream';
import { AppShell } from './App';

export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: string[] = [];
    const errors: unknown[] = [];
    const output = new PassThrough();

    output.on('data', (chunk) => chunks.push(chunk.toString()));
    output.on('error', reject);
    output.on('end', () => {
      if (errors.length > 0) {
        const firstError = errors[0];
        reject(firstError instanceof Error ? firstError : new Error(String(firstError)));
        return;
      }
      resolve(chunks.join(''));
    });

    try {
      const { pipe } = renderToPipeableStream(
        <StrictMode>
          <StaticRouter location={url}>
            <AppShell />
          </StaticRouter>
        </StrictMode>,
        {
          onAllReady() {
            pipe(output);
          },
          onShellError(error) {
            reject(error);
          },
          onError(error) {
            errors.push(error);
          },
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}
