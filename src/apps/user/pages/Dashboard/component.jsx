import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/utils/useIsMobile';

// Reusable UI Components
import ContainerWrapper from '@/components/ContainerWrapper';
import TitleContainer from '@/components/TitleContainer';
import IconBackButton from '@/apps/user/components/IconBackButton';
import PageTitle from '@/components/PageTitle';
import TableTopContainer from '@/components/TableTopContainer';
import PageHeader from '@/components/PageHeader';
import ScrollContainer from '@/components/ScrollContainer';
import HStack from '@/components/HStack';
import DateField from '@/components/DateField';
import Button from '@/components/Button';
import RefreshButton from '@/components/RefreshButton';

// Charting Library and Icons
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';
import {
  FaUsers,
  FaDollarSign,
  FaFileInvoiceDollar,
  FaChartLine,
  FaCalendarCheck,
} from 'react-icons/fa';

// Stylesheet
import './style.scss'; // Ensure this path is correct

// --- DEMO DATA ---

// Demo data for the summary cards
const demoSummaryData = {
  totalMembers: 580,
  activeMembers: 450,
  totalRevenue: 850000,
  totalExpenses: 320000,
  netProfit: 530000, // (850k - 320k)
  memberCheckins: 125,
};

// Demo data for the daily line chart (last 15 days)
const demoDailyData = Array.from({ length: 15 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (14 - i));
  const revenue = 20000 + Math.random() * 15000 + (i * 500); // Trend upwards
  const expenses = 8000 + Math.random() * 5000;
  return {
    date: date.toISOString().split('T')[0],
    revenue: Math.round(revenue),
    expenses: Math.round(expenses),
  };
});

// Helper to format date for chart axis (e.g., "Jan 15")
const formatAxisDate = (dateStr) => {
    try {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } catch (e) {
        return dateStr;
    }
};

const Dashboard = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // --- State Management ---
  const [startDate, setStartDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() - 14);
    return date.toISOString().split('T')[0];
  });
  const [endDate, setEndDate] = useState(() => new Date().toISOString().split('T')[0]);

  // --- Event Handlers ---
  const handleApplyFilters = () => {
    console.log('Applying filters:', { startDate, endDate });
    alert('Filters applied! (Note: Data is static for this demo)');
  };

  const handleRefresh = () => {
    console.log('Dashboard refreshed.');
    alert('Dashboard refreshed! (Note: Data is static for this demo)');
  };
  
  const handleNavigate = (path) => navigate(path);

  // --- Render Logic ---
  const renderContent = () => (
      <>
        <SummaryCardsGrid data={demoSummaryData} onNavigate={handleNavigate} />
        <div className="dashboard__charts-grid">
            <LineChartCard data={demoDailyData} />
            <PieChartCard data={demoSummaryData} />
        </div>
      </>
    );

  return (
    <ContainerWrapper>
      {!isMobile ? (
        // --- DESKTOP VIEW ---
        <>
          <TitleContainer>
            <IconBackButton />
            <PageTitle title="Dashboard" />
          </TitleContainer>
          <TableTopContainer isMargin={true}>
            <HStack>
              <DateField
                label="Start Date"
                value={startDate ? new Date(startDate) : null}
                onChange={(date) => setStartDate(date ? date.toISOString().split('T')[0] : '')}
              />
              <DateField
                label="End Date"
                value={endDate ? new Date(endDate) : null}
                onChange={(date) => setEndDate(date ? date.toISOString().split('T')[0] : '')}
              />
              <Button onClick={handleApplyFilters}>Apply</Button>
            </HStack>
            <RefreshButton onClick={handleRefresh} />
          </TableTopContainer>
          <div className="dashboard-content-area">{renderContent()}</div>
        </>
      ) : (
        // --- MOBILE VIEW ---
        <>
          <TitleContainer>
            <IconBackButton />
            <PageTitle title="Dashboard" />
          </TitleContainer>
          <ScrollContainer>
            <PageHeader>
              <DateField
                label="Start Date"
                value={startDate ? new Date(startDate) : null}
                onChange={(date) => setStartDate(date ? date.toISOString().split('T')[0] : '')}
              />
              <DateField
                label="End Date"
                value={endDate ? new Date(endDate) : null}
                onChange={(date) => setEndDate(date ? date.toISOString().split('T')[0] : '')}
              />
              <HStack>
                <Button onClick={handleApplyFilters}>Apply</Button>
                <RefreshButton onClick={handleRefresh} />
              </HStack>
            </PageHeader>
            <div className="dashboard-content-area">{renderContent()}</div>
          </ScrollContainer>
        </>
      )}
    </ContainerWrapper>
  );
};


// --- SUB-COMPONENTS ---

const SummaryCardsGrid = ({ data, onNavigate }) => {
  const formatCurrency = (num) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(num || 0);
  const formatNumber = (num) => new Intl.NumberFormat('en-IN').format(num || 0);
  return (
    <div className="dashboard__stats-grid">
        <div className="summary-card" onClick={() => onNavigate('/members/paginated')}>
            <div className="summary-card__icon-wrapper summary-card__icon-wrapper--members">
                <FaUsers className="summary-card__icon" />
            </div>
            <div className="summary-card__info">
                <span className="summary-card__label">Active Members</span>
                <span className="summary-card__value">{formatNumber(data.activeMembers)}</span>
                <span className="summary-card__sub-value">/ {formatNumber(data.totalMembers)} Total</span>
            </div>
        </div>
        <div className="summary-card" onClick={() => onNavigate('/subscriptions/paginated')}>
            <div className="summary-card__icon-wrapper summary-card__icon-wrapper--revenue">
                <FaDollarSign className="summary-card__icon" />
            </div>
            <div className="summary-card__info">
                <span className="summary-card__label">Total Revenue</span>
                <span className="summary-card__value">{formatCurrency(data.totalRevenue)}</span>
                <span className="summary-card__sub-value">From subscriptions</span>
            </div>
        </div>
        <div className="summary-card" onClick={() => onNavigate('/expenses/paginated')}>
            <div className="summary-card__icon-wrapper summary-card__icon-wrapper--expenses">
                <FaFileInvoiceDollar className="summary-card__icon" />
            </div>
            <div className="summary-card__info">
                <span className="summary-card__label">Total Expenses</span>
                <span className="summary-card__value">{formatCurrency(data.totalExpenses)}</span>
                <span className="summary-card__sub-value">Incl. Payroll</span>
            </div>
        </div>
        <div className="summary-card summary-card--non-clickable">
            <div className="summary-card__icon-wrapper summary-card__icon-wrapper--profit">
                <FaChartLine className="summary-card__icon" />
            </div>
            <div className="summary-card__info">
                <span className="summary-card__label">Net Profit</span>
                <span className="summary-card__value" style={{ color: data.netProfit < 0 ? '#e03131' : '#2f9e44' }}>
                    {formatCurrency(data.netProfit)}
                </span>
                <span className="summary-card__sub-value">Revenue - Expenses</span>
            </div>
        </div>
        <div className="summary-card" onClick={() => onNavigate('/member-attendance/paginated')}>
            <div className="summary-card__icon-wrapper summary-card__icon-wrapper--checkins">
                <FaCalendarCheck className="summary-card__icon" />
            </div>
            <div className="summary-card__info">
                <span className="summary-card__label">Today's Check-ins</span>
                <span className="summary-card__value">{formatNumber(data.memberCheckins)}</span>
                <span className="summary-card__sub-value">As of now</span>
            </div>
        </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const formattedLabel = formatAxisDate(label);
        return (
            <div className="custom-tooltip">
                <p className="custom-tooltip__label">{formattedLabel}</p>
                {payload.map((pld, index) => (
                    <p key={index} style={{ color: pld.color }}>
                        {`${pld.name}: ₹${pld.value.toLocaleString('en-IN')}`}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const LineChartCard = ({ data }) => {
    if (!data || data.length === 0) {
        return <div className="chart-card"><div className="chart-no-data">No daily data available.</div></div>;
    }
    return (
        <div className="chart-card">
            <h3 className="chart-card__title">Daily Revenue & Expenses</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#dee2e6" />
                    <XAxis dataKey="date" tickFormatter={formatAxisDate} stroke="#868e96" dy={10} />
                    <YAxis stroke="#868e96" tickFormatter={(value) => `₹${value/1000}k`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line type="monotone" name="Revenue" dataKey="revenue" stroke="#2f9e44" strokeWidth={2.5} activeDot={{ r: 8 }} dot={{ r: 4 }} />
                    <Line type="monotone" name="Expenses" dataKey="expenses" stroke="#e03131" strokeWidth={2.5} activeDot={{ r: 8 }} dot={{ r: 4 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

const PieChartCard = ({ data }) => {
    const pieData = [
        { name: 'Total Revenue', value: data.totalRevenue > 0 ? data.totalRevenue : 0 },
        { name: 'Total Expenses', value: data.totalExpenses > 0 ? data.totalExpenses : 0 },
    ].filter(item => item.value > 0);

    if (pieData.length === 0) {
      return <div className="chart-card"><div className="chart-no-data">No revenue or expense data.</div></div>;
    }

    const COLORS = ['#2f9e44', '#e03131'];
    return (
        <div className="chart-card">
            <h3 className="chart-card__title">Revenue vs. Expenses</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} labelLine={false}
                        label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                            const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                            const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                            return (
                                <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                                    {`${(percent * 100).toFixed(0)}%`}
                                </text>
                            );
                        }}
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;