'use client';

import { Share2, Copy, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

export function SocialShare({ url, title, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  
  useEffect(() => {
    setCanShare(typeof navigator !== 'undefined' && 'share' in navigator);
  }, []);
  
  const fullUrl = url.startsWith('http') ? url : `https://largolabs.dev${url}`;
  const shareText = description || title;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
    reddit: `https://reddit.com/submit?url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`,
    hackernews: `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(fullUrl)}&t=${encodeURIComponent(title)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: shareText,
          url: fullUrl,
        });
      } catch (err) {
        console.error('Native sharing failed:', err);
      }
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center space-x-3 mb-4">
        <Share2 className="h-5 w-5 text-slate-600 dark:text-slate-400" />
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Share Research Note</h3>
      </div>
      
      <div className="space-y-3">
        {/* Social Platform Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Twitter</span>
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-3 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm rounded-md transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={shareLinks.reddit}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm rounded-md transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Reddit</span>
          </a>
          <a
            href={shareLinks.hackernews}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-md transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span>HN</span>
          </a>
        </div>

        {/* Utility Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={copyToClipboard}
            className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-slate-600 hover:bg-slate-700 text-white text-sm rounded-md transition-colors"
          >
            <Copy className="h-4 w-4" />
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
          
          {canShare && (
            <button
              onClick={shareNative}
              className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md transition-colors"
            >
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          )}
        </div>
      </div>

      {/* Lab Status */}
      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600">
        <div className="text-xs font-mono text-slate-500 dark:text-slate-500">
          SHARE_PROTOCOL: {copied ? 'LINK_COPIED_TO_BUFFER' : 'READY_FOR_TRANSMISSION'}
        </div>
      </div>
    </div>
  );
}