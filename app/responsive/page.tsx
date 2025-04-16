'use client';

import { DeviceAwareComponent } from '@/components/device-aware-component';
import MobileNav from '@/components/mobile/mobile-nav';
import TabletNav from '@/components/tablet/mobile-nav';
import DesktopNav from '@/components/desktop/mobile-nav';
import MobileSidebar from '@/components/mobile/sidebar';
import TabletSidebar from '@/components/tablet/sidebar';
import DesktopSidebar from '@/components/desktop/sidebar';
import MobileJobCard from '@/components/mobile/job-card';
import TabletJobCard from '@/components/tablet/job-card';
import DesktopJobCard from '@/components/desktop/job-card';

export default function ResponsivePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <DeviceAwareComponent
        mobile={MobileNav}
        tablet={TabletNav}
        desktop={DesktopNav}
      />

      <div className="flex">
        {/* Sidebar */}
        <DeviceAwareComponent
          mobile={MobileSidebar}
          tablet={TabletSidebar}
          desktop={DesktopSidebar}
        />

        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Responsive Job Listings</h1>
          
          {/* Job Cards */}
          <div className="grid gap-4">
            <DeviceAwareComponent
              mobile={MobileJobCard}
              tablet={TabletJobCard}
              desktop={DesktopJobCard}
              job={{
                title: "Sample Job",
                company: "Sample Company",
                location: "Sample Location",
                salary: "₹50,000 - ₹70,000",
                type: "Full-time"
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
} 