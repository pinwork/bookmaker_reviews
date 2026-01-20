import { Calendar, FileText } from 'lucide-react';

interface ArticleFooterProps {
  lastUpdated?: string;
  dataSource?: string;
}

export function ArticleFooter({ lastUpdated, dataSource }: ArticleFooterProps) {
  if (!lastUpdated && !dataSource) return null;

  return (
    <footer className="mt-12 pt-6 border-t border-gray-200">
      <div className="space-y-3 text-sm text-gray-500">
        {lastUpdated && (
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        )}

        {dataSource && (
          <div className="flex items-start gap-2">
            <FileText className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>{dataSource}</span>
          </div>
        )}
      </div>
    </footer>
  );
}
