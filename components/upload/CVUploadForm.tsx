'use client';

import React from "react"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Upload, FileText } from 'lucide-react';

interface CVUploadFormProps {
  sessionId: string;
}

export default function CVUploadForm({ sessionId }: CVUploadFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const uploadedFile = files[0];
      if (uploadedFile.type === 'application/pdf' || uploadedFile.name.endsWith('.docx')) {
        setFile(uploadedFile);
      } else {
        toast({
          title: 'Invalid file type',
          description: 'Please upload a PDF or DOCX file',
          variant: 'destructive',
        });
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast({
        title: 'Error',
        description: 'Please select a file',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('orderSessionId', sessionId);

      const token = localStorage.getItem('token');
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      toast({
        title: 'Success',
        description: 'CV uploaded successfully. You will receive updates on your email.',
      });

      router.push('/dashboard');
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Upload failed',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Your CV</CardTitle>
        <CardDescription>
          Supported formats: PDF, DOCX (Maximum 10MB)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
              dragActive
                ? 'border-blue-500 bg-blue-50'
                : 'border-muted-foreground/25 hover:border-muted-foreground/50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="font-semibold text-foreground mb-2">
              {file ? file.name : 'Drag and drop your CV here'}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              or click to select from your computer
            </p>
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.docx"
              required
            />
            <label htmlFor="file">
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('file')?.click()}
              >
                <FileText className="w-4 h-4 mr-2" />
                Select File
              </Button>
            </label>
          </div>

          {file && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <span className="font-semibold">Selected:</span> {file.name}
              </p>
              <p className="text-xs text-blue-700 mt-1">
                Size: {(file.size / 1024 / 1024).toFixed(2)}MB
              </p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={loading || !file}
          >
            {loading ? 'Uploading...' : 'Upload CV'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
