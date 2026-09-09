import React, { useState, useRef, useEffect } from 'react';
import { Bell, Check, Clock, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const NotificationPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { notifications, markAllNotificationsRead } = useAuth();
  const dropdownRef = useRef(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'verification':
        return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 'skill':
        return <Sparkles className="w-4 h-4 text-indigo-600" />;
      default:
        return <Clock className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="View notifications"
        className="relative p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full animate-pulse" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-elevation border border-slate-200 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          <div className="p-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800 text-xs">Notifications</span>
              {unreadCount > 0 && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700">
                  {unreadCount} new
                </span>
              )}
            </div>
            {unreadCount > 0 && (
              <button
                onClick={markAllNotificationsRead}
                className="text-[11px] text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
              >
                <Check className="w-3.5 h-3.5" />
                Mark read
              </button>
            )}
          </div>

          <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
            {notifications.map((n) => (
              <div
                key={n.id}
                className={`p-3.5 text-xs hover:bg-slate-50 transition-colors flex gap-3 ${
                  !n.read ? 'bg-indigo-50/30' : ''
                }`}
              >
                <div className="shrink-0 mt-0.5">{getIcon(n.type)}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-slate-800">{n.title}</h5>
                    <span className="text-[10px] text-slate-400">{n.time}</span>
                  </div>
                  <p className="text-slate-600 mt-1 leading-normal">{n.message}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2.5 border-t border-slate-100 bg-slate-50 text-center">
            <span className="text-[11px] text-slate-500 font-medium">
              SkillTrack Real-time Event Stream (SIH26135)
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationPanel;
