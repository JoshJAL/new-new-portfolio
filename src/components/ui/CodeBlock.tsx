'use client';

import GlassButton from './GlassButton';

import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

import type { ReactElement } from 'react';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);

const CopyIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect width='14' height='14' x='8' y='8' rx='2' ry='2' />
    <path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='3'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M20 6 9 17l-5-5' />
  </svg>
);

interface CodeElementProps {
  className?: string;
  children?: string;
}

interface CodeBlockProps {
  children: ReactElement<CodeElementProps>;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  const codeProps = children?.props;
  const language = codeProps?.className?.replace(/language-/, '') || 'text';
  const codeString = String(codeProps?.children ?? '').trim();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <div className='group relative'>
      <div className='absolute top-4 right-4 z-10 cursor-pointer opacity-100 transition-opacity duration-300 group-hover:opacity-100 focus:opacity-100 md:opacity-0'>
        <GlassButton onClick={handleCopy} disabled={isCopied} aria-label='Copy code to clipboard'>
          {isCopied ? <CheckIcon /> : <CopyIcon />}
        </GlassButton>
      </div>

      <SyntaxHighlighter language={language} style={oneDark} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
