import React from 'react';
import DashboardLayout1 from './DashboardLayout1';
import DashboardLayout2 from './DashboardLayout2';
import DashboardLayout3 from './DashboardLayout3';

const Overview = () => {
    return (
        <div className="w-full min-h-screen bg-gray-50 py-6 space-y-6">
            <DashboardLayout1 />
            <DashboardLayout2 />
            <DashboardLayout3 />
        </div>
    );
};

export default Overview;