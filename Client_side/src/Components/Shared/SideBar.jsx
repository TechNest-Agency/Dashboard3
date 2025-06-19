import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FiHome, FiPieChart, FiUsers, FiShoppingCart, FiBookOpen, FiTruck, 
  FiFileText, FiChevronDown, FiChevronRight, FiLayers, FiFile,
  FiUser, FiLock, FiLayout, FiLogIn, FiSliders, FiMessageSquare,
  FiCheckSquare, FiTable, FiBarChart, FiShield
} from 'react-icons/fi';

const SideBar = () => {
    const [expandedItems, setExpandedItems] = useState({
        dashboards: true,
        frontPages: false,
        pages: false,
        formsTables: false
    });

    const toggleSubMenu = (item) => {
        setExpandedItems(prev => ({ ...prev, [item]: !prev[item] }));
    };

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-sky-600">TNA</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-4 py-2">
                <ul className="space-y-1">
                    {/* Dashboards */}
                    <li>
                        <button 
                            onClick={() => toggleSubMenu('dashboards')}
                            className="flex items-center w-full p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <FiHome className="w-5 h-5 mr-3" />
                            <span className="font-medium">Dashboards</span>
                            {expandedItems.dashboards ? (
                                <FiChevronDown className="w-5 h-5 ml-auto" />
                            ) : (
                                <FiChevronRight className="w-5 h-5 ml-auto" />
                            )}
                        </button>

                        {expandedItems.dashboards && (
                            <ul className="mt-2 space-y-1 pl-11">
                                <li>
                                    <NavLink
                                        to="/dashboard/analytics"
                                        className={({ isActive }) =>
                                            `flex items-center p-2 text-sm rounded-lg transition-colors ${
                                                isActive
                                                    ? 'text-sky-600 bg-sky-50'
                                                    : 'text-gray-600 hover:bg-gray-100'
                                            }`
                                        }
                                    >
                                        <FiPieChart className="w-4 h-4 mr-3" />
                                        Analytics
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/crm"
                                        className={({ isActive }) =>
                                            `flex items-center p-2 text-sm rounded-lg transition-colors ${
                                                isActive
                                                    ? 'text-sky-600 bg-sky-50'
                                                    : 'text-gray-600 hover:bg-gray-100'
                                            }`
                                        }
                                    >
                                        <FiUsers className="w-4 h-4 mr-3" />
                                        CRM
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/ecommerce"
                                        className={({ isActive }) =>
                                            `flex items-center p-2 text-sm rounded-lg transition-colors ${
                                                isActive
                                                    ? 'text-sky-600 bg-sky-50'
                                                    : 'text-gray-600 hover:bg-gray-100'
                                            }`
                                        }
                                    >
                                        <FiShoppingCart className="w-4 h-4 mr-3" />
                                        Ecommerce
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/academy"
                                        className={({ isActive }) =>
                                            `flex items-center p-2 text-sm rounded-lg transition-colors ${
                                                isActive
                                                    ? 'text-sky-600 bg-sky-50'
                                                    : 'text-gray-600 hover:bg-gray-100'
                                            }`
                                        }
                                    >
                                        <FiBookOpen className="w-4 h-4 mr-3" />
                                        Academy
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/logistics"
                                        className={({ isActive }) =>
                                            `flex items-center p-2 text-sm rounded-lg transition-colors ${
                                                isActive
                                                    ? 'text-sky-600 bg-sky-50'
                                                    : 'text-gray-600 hover:bg-gray-100'
                                            }`
                                        }
                                    >
                                        <FiTruck className="w-4 h-4 mr-3" />
                                        Logistics
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Front Pages */}
                    <li>
                        <NavLink
                            to="/front-pages"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded-lg transition-colors ${
                                    isActive
                                        ? 'text-sky-600 bg-sky-50'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`
                            }
                        >
                            <FiFileText className="w-5 h-5 mr-3" />
                            <span className="font-medium">Front Pages</span>
                        </NavLink>
                    </li>

                    {/* Section Divider */}
                    <li className="pt-4 pb-2">
                        <div className="px-3">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                Apps & Pages
                            </p>
                        </div>
                    </li>

                    {/* Apps & Pages Links */}
                    <li>
                        <NavLink
                            to="/kanban"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded-lg transition-colors ${
                                    isActive
                                        ? 'text-sky-600 bg-sky-50'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`
                            }
                        >
                            <FiLayers className="w-5 h-5 mr-3" />
                            <span>Kanban</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;