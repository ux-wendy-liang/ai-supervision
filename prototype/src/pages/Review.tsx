import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Mic, FileAudio, Clock, ChevronRight, Check, Loader } from 'lucide-react';

const recentClients = [
  { id: 1, name: 'Li Ming', sessions: 8, lastSession: '3 days ago' },
  { id: 2, name: 'Zhang Wei', sessions: 5, lastSession: '1 week ago' },
  { id: 3, name: 'Wang Fang', sessions: 12, lastSession: '2 days ago' },
];

export default function Review() {
  const navigate = useNavigate();
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'processing' | 'done'>('idle');
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleUpload = () => {
    setUploadState('uploading');
    setTimeout(() => {
      setUploadState('processing');
      setTimeout(() => {
        setUploadState('done');
        setTimeout(() => {
          navigate('/review/session');
        }, 1000);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate('/dashboard')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Session Review</h1>
          <p className="text-gray-600">Upload and analyze your real coaching sessions</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Upload Area */}
        <div className="col-span-2">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Recording</h2>

            {uploadState === 'idle' && (
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => { e.preventDefault(); setDragOver(false); handleUpload(); }}
                className={`border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                  dragOver
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Drag and drop your recording here</h3>
                <p className="text-sm text-gray-500 mb-4">Supports MP3, WAV, M4A (Max 500MB)</p>
                <button
                  onClick={handleUpload}
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  Browse Files
                </button>
              </div>
            )}

            {uploadState === 'uploading' && (
              <div className="border-2 border-indigo-200 bg-indigo-50 rounded-xl p-12 text-center">
                <Loader className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">Uploading...</h3>
                <div className="w-64 h-2 bg-indigo-200 rounded-full mx-auto overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                </div>
              </div>
            )}

            {uploadState === 'processing' && (
              <div className="border-2 border-purple-200 bg-purple-50 rounded-xl p-12 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileAudio className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Processing Recording...</h3>
                <p className="text-sm text-gray-500 mb-4">Transcribing and analyzing with AI</p>
                <div className="flex items-center justify-center gap-2">
                  <Loader className="w-5 h-5 text-purple-600 animate-spin" />
                  <span className="text-purple-600">This may take a few minutes</span>
                </div>
              </div>
            )}

            {uploadState === 'done' && (
              <div className="border-2 border-green-200 bg-green-50 rounded-xl p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Analysis Complete!</h3>
                <p className="text-sm text-gray-500">Redirecting to session review...</p>
              </div>
            )}

            {/* Alternative: Live Recording */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Mic className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Live Recording</div>
                  <div className="text-sm text-gray-500">Record a session directly in the app</div>
                </div>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                  Coming Soon
                </button>
              </div>
            </div>

            {/* Zoom Integration */}
            <div className="mt-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.5 4.5C4.5 3.12 5.62 2 7 2h10c1.38 0 2.5 1.12 2.5 2.5v15c0 1.38-1.12 2.5-2.5 2.5H7c-1.38 0-2.5-1.12-2.5-2.5v-15zm8.5 6l4 2.5v-5l-4 2.5z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Connect Zoom</div>
                  <div className="text-sm text-gray-500">Auto-import recordings from Zoom meetings</div>
                </div>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Client Selection */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Client</h2>
            <p className="text-sm text-gray-500 mb-4">Which client was this session with?</p>

            <div className="space-y-2">
              {recentClients.map((client) => (
                <button
                  key={client.id}
                  onClick={() => setSelectedClient(client.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                    selectedClient === client.id
                      ? 'bg-indigo-50 border-2 border-indigo-500'
                      : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                  }`}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                    {client.name.charAt(0)}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-gray-900">{client.name}</div>
                    <div className="text-xs text-gray-500">{client.sessions} sessions • {client.lastSession}</div>
                  </div>
                  {selectedClient === client.id && (
                    <Check className="w-5 h-5 text-indigo-600" />
                  )}
                </button>
              ))}
            </div>

            <button className="w-full mt-4 py-2 text-indigo-600 text-sm font-medium hover:bg-indigo-50 rounded-lg transition-colors">
              + Add New Client
            </button>
          </div>

          {/* Recent Sessions */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Reviews</h2>
              <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">View All</button>
            </div>
            <div className="space-y-3">
              <div
                onClick={() => navigate('/review/session')}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileAudio className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Session with Li Ming</div>
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    32 min • 3 days ago
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileAudio className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Session with Wang Fang</div>
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    45 min • 5 days ago
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
