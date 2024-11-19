"use client";
import React, { useState } from "react";
import * as Icons from "lucide-react";
import Support from "../../../components/Support";
import { motion } from "framer-motion";
import { useTranslations } from "../../../components/useTranslations";

// Helper function to safely access icons
const getIcon = (name) => {
  return Icons[name]
    ? React.createElement(Icons[name], { className: "h-5 w-5" })
    : null;
};

const Tab = ({ active, onClick, children }) => (
  <button
    className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
      active ? "bg-red-50 border-b-2 border-[#D61414]" : "hover:bg-gray-100"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Alert = ({ variant = "warning", icon, title, children }) => {
  const alertStyles = {
    warning: "bg-yellow-50 border-yellow-400",
    danger: "bg-red-50 border-red-400",
    info: "bg-yellow-50 border-yellow-400",
  };

  return (
    <div className={`border-l-4 p-4 ${alertStyles[variant]}`}>
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center h-5 w-5">{icon}</div>
        <p className="font-semibold">{title}</p>
      </div>
      <p className="mt-2">{children}</p>
    </div>
  );
};

export default function InstallationGuide() {
  const [activeTab, setActiveTab] = useState("manipulation");
  const translations = useTranslations();
  if (!translations) {
    return (
      <div className="flex justify-center items-center text-[#d61414] font-bold">
        Loading...
      </div>
    );
  }

  const tabs = [
    { id: "manipulation", label: translations.MANIPULATION },
    { id: "storage", label: translations.STORAGE },
    { id: "tools", label: translations.TOOLS },
    { id: "preparation", label: translations.PREPARATION },
    { id: "installation", label: translations.INSTALLATION },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "manipulation":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              {getIcon("Package")}
              <motion.h2 className="text-xl font-semibold">
                {translations.MANIPULATION_CONTENT}
              </motion.h2>
            </div>
            <br />

            <ul className="list-disc pl-6 space-y-2">
              <li>{translations.MANIPULATION_TIP_1}</li>
              <li>{translations.MANIPULATION_TIP_2}</li>
              <li>{translations.MANIPULATION_TIP_3}</li>
            </ul>

            <Alert
              variant="warning"
              icon={getIcon("AlertTriangle")}
              title={translations.IMPORTANT_WARNING}
            >
              {translations.WARNING_CONTENT}
            </Alert>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">
                {translations.CUTTING}
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{translations.CUTTING_TIP_1}</li>
                <li>{translations.CUTTING_TIP_2}</li>
                <li>{translations.CUTTING_TIP_3}</li>
              </ul>
            </div>
          </div>
        );

      case "storage":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              {getIcon("Package")}
              <h2 className="text-xl font-semibold">{translations.STORAGE}</h2>
            </div>
            <br />

            <div className="space-y-2">
              <h3 className="font-semibold">
                {translations.BASIC_REQUIREMENTS}
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{translations.STORAGE_TIP_1}</li>
                <li>{translations.STORAGE_TIP_2}</li>
                <li>{translations.STORAGE_TIP_3}</li>
                <li>{translations.STORAGE_TIP_4}</li>
              </ul>
            </div>

            <Alert
              variant="danger"
              icon={getIcon("AlertTriangle")}
              title={translations.WARRANTY_CONDITIONS}
            >
              {translations.STORAGE_WARNING}
            </Alert>
          </div>
        );

      case "tools":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              {getIcon("Hammer")}
              <motion.h2 className="text-xl font-semibold">
                {translations.TOOLS}
              </motion.h2>
            </div>
            <br />

            <div className="space-y-2">
              <h3 className="font-semibold">{translations.TOOLS_LIST}</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{translations.TOOL_1}</li>
                <li>{translations.TOOL_2}</li>
                <li>{translations.TOOL_3}</li>
                <li>{translations.TOOL_4}</li>
              </ul>
            </div>
          </div>
        );

      case "preparation":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              {getIcon("Package")}
              <motion.h2 className="text-xl font-semibold">
                {translations.PREPARATION}
              </motion.h2>
            </div>
            <br />

            <div className="space-y-2">
              <h3 className="font-semibold">
                {translations.PREPARATION_STEPS}
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{translations.PREPARATION_STEP_1}</li>
                <li>{translations.PREPARATION_STEP_2}</li>
                <li>{translations.PREPARATION_STEP_3}</li>
              </ul>
            </div>

            <Alert
              variant="info"
              icon={getIcon("Info")}
              title={translations.PREPARATION_WARNING}
            >
              {translations.PREPARATION_WARNING_CONTENT}
            </Alert>
          </div>
        );

      case "installation":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              {getIcon("Tool")}
              <motion.h2 className="text-xl font-semibold">
                {translations.INSTALLATION}
              </motion.h2>
            </div>
            <br />

            <div className="space-y-2">
              <h3 className="font-semibold">
                {translations.INSTALLATION_GUIDELINES}
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{translations.INSTALLATION_STEP_1}</li>
                <li>{translations.INSTALLATION_STEP_2}</li>
                <li>{translations.INSTALLATION_STEP_3}</li>
              </ul>
            </div>

            <Alert
              variant="warning"
              icon={getIcon("AlertTriangle")}
              title={translations.INSTALLATION_WARNING}
            >
              {translations.INSTALLATION_WARNING_CONTENT}
            </Alert>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full mx-auto space-y-6">
      <div className="w-full bg-[#D61414]">
        <div className="container mx-auto px-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-white text-center pt-16"
          >
            {translations.ASSEMBLY_RECOMMENDATIONS}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold mb-8"
        >
          {translations.ASSEMBLY_INSTRUCTION}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full shadow-md hover:shadow-lg p-2"
        >
          <div className="flex flex-wrap gap-2 border-b">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Tab>
            ))}
          </div>

          <div className="mt-4">{renderContent()}</div>
        </motion.div>
        <Support></Support>
      </div>
    </div>
  );
}
