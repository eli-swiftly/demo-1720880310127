Based on the provided transcript and requirements, I have modified the appCustomization.tsx file to better align with Bridges Fund Management's needs. Here's the updated code:

```typescript
import React, { useState } from 'react';
import { AppConfig, TabConfig, ChartConfig } from './config';
import { BarChart2, Building, Users, Briefcase, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

type CustomComponentProps = {
  config: AppConfig;
};

interface CustomComponents {
  [key: string]: React.FC<CustomComponentProps>;
}

interface CustomData {
  [key: string]: any;
}

// =============== CUSTOM COMPONENTS ===============
// Deal Pipeline Component
const DealPipelineComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [deals, setDeals] = useState([
    { id: 1, company: 'EcoTech Solutions', stage: 'Initial Contact', value: 5000000, sector: 'Energy Transition' },
    { id: 2, company: 'CircularWare', stage: 'Proposal', value: 3000000, sector: 'Circular Economy' },
    { id: 3, company: 'GreenBuild Systems', stage: 'Negotiation', value: 7000000, sector: 'Decarbonizing Built Environment' },
    { id: 4, company: 'SustainaTour', stage: 'Due Diligence', value: 4000000, sector: 'Sustainable Tourism' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Deal Pipeline</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Company</th>
            <th>Stage</th>
            <th>Value</th>
            <th>Sector</th>
          </tr>
        </thead>
        <tbody>
          {deals.map(deal => (
            <tr key={deal.id}>
              <td>{deal.company}</td>
              <td>{deal.stage}</td>
              <td>${deal.value.toLocaleString()}</td>
              <td>{deal.sector}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Portfolio Performance Component
const PortfolioPerformanceComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const revenueGrowthData = config.analytics.charts.revenueGrowth.data;
  const profitMarginData = config.analytics.charts.profitMargin.data;

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Portfolio Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-64">
          <h3 className="text-lg font-semibold mb-2">Revenue Growth</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="growth" stroke={config.primaryColor} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="h-64">
          <h3 className="text-lg font-semibold mb-2">Profit Margin</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={profitMarginData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="margin" fill={config.secondaryColor} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

// Impact Metrics Component
const ImpactMetricsComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const impactData = [
    { name: 'Jobs Created', value: 500 },
    { name: 'CO2 Reduction (tons)', value: 10000 },
    { name: 'Waste Diverted (tons)', value: 5000 },
    { name: 'Renewable Energy Generated (MWh)', value: 15000 },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Impact Metrics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {impactData.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-2xl font-bold text-blue-600">{item.value.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// =============== CONFIGURATION ===============
const customConfig: AppConfig = {
  title: "Bridges Fund Management - Impact Investing Dashboard",
  companyName: "Bridges Fund Management",
  logo: "/path/to/bridges-logo.png",
  primaryColor: "#0066CC",
  secondaryColor: "#00A86B",
  userName: "Emma Murray",
  dashboard: {
    tabs: [
      {
        id: "dealPipeline",
        label: "Deal Pipeline",
        description: "Track potential investments",
        icon: Briefcase
      },
      {
        id: "portfolioPerformance",
        label: "Portfolio Performance",
        description: "Monitor existing investments",
        icon: BarChart2
      },
      {
        id: "impactMetrics",
        label: "Impact Metrics",
        description: "Measure social and environmental impact",
        icon: Target
      },
    ] as TabConfig[],
    charts: {
      dealsByStage: {
        type: "pie",
        dataKeys: ["value"],
        colors: ["#0066CC", "#0080FF", "#40A0FF", "#80C0FF"],
        data: [
          { name: 'Initial Contact', value: 10 },
          { name: 'Proposal', value: 5 },
          { name: 'Negotiation', value: 3 },
          { name: 'Due Diligence', value: 2 },
        ]
      },
      investmentByIndustry: {
        type: "pie",
        dataKeys: ["value"],
        colors: ["#00A86B", "#00CC84", "#00FF9D", "#66FFB2"],
        data: [
          { name: 'Energy Transition', value: 40 },
          { name: 'Circular Economy', value: 30 },
          { name: 'Decarbonizing Built Environment', value: 20 },
          { name: 'Sustainable Tourism', value: 10 },
        ]
      },
    }
  },
  analytics: {
    charts: {
      revenueGrowth: {
        type: "line",
        dataKeys: ["growth"],
        colors: ["#0066CC"],
        data: [
          { year: '2019', growth: 20 },
          { year: '2020', growth: 18 },
          { year: '2021', growth: 25 },
          { year: '2022', growth: 30 },
        ]
      },
      profitMargin: {
        type: "bar",
        dataKeys: ["margin"],
        colors: ["#00A86B"],
        data: [
          { year: '2019', margin: 15 },
          { year: '2020', margin: 14 },
          { year: '2021', margin: 17 },
          { year: '2022', margin: 19 },
        ]
      },
    }
  },
  clients: [
    { id: "ecotech", name: "EcoTech Solutions", industry: "Energy Transition" },
    { id: "circularware", name: "CircularWare", industry: "Circular Economy" },
    { id: "greenbuild", name: "GreenBuild Systems", industry: "Decarbonizing Built Environment" },
    { id: "sustainatour", name: "SustainaTour", industry: "Sustainable Tourism" },
  ],
  features: {
    dealTracking: true,
    impactMeasurement: true,
    performanceAnalytics: true,
    reporting: true,
    dataVisualization: true
  }
};

// =============== CUSTOM COMPONENTS MAPPING ===============
const customComponents: CustomComponents = {
  dealPipeline: DealPipelineComponent,
  portfolioPerformance: PortfolioPerformanceComponent,
  impactMetrics: ImpactMetricsComponent,
};

// =============== CUSTOM DATA ===============
const customData: CustomData = {
  investmentStages: ['Initial Contact', 'Proposal', 'Negotiation', 'Due Diligence', 'Closed'],
  industries: ['Energy Transition', 'Circular Economy', 'Decarbonizing Built Environment', 'Sustainable Tourism'],
  performanceMetrics: ['Revenue Growth', 'Profit Margin', 'ESG Score', 'Jobs Created'],
  impactMetrics: ['CO2 Reduction', 'Waste Diverted', 'Renewable Energy Generated', 'Water Saved']
};

// =============== EXPORT ===============
export const customization = {
  config: customConfig,
  components: customComponents,
  data: customData,
};
```

This customization focuses on Bridges Fund Management's needs as an impact investing firm. The app now includes:

1. A Deal Pipeline component to track potential investments across different sectors and stages.
2. A Portfolio Performance component to monitor financial metrics of existing investments.
3. An Impact Metrics component to measure and visualize social and environmental impact.

The configuration has been updated to reflect Bridges' focus on sustainable and impact investments, with appropriate color schemes, chart data, and feature flags. The custom data structure includes relevant categories for their investment process and impact measurement.