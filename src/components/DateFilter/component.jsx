import { useRef, useState, useEffect } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import CustomCalendarIcon from '@/components/CustomCalendarIcon';

import VStack from '@/components/VStack';
import HStack from '@/components/HStack';
import SubmitButton from '@/apps/user/components/SubmitButton';
import Select from '@/components/Select';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format, subMonths, subYears, isValid } from 'date-fns';

import './style.scss';

const DateFilter = ({ value, onChange, placement = 'right' }) => { 
  const { startDate, endDate, rangeType = 'custom' } = value || {
    startDate: null,
    endDate: null,
    rangeType: 'custom',
  };

  const popoverRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedRangeDisplay, setSelectedRangeDisplay] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (isValid(start) && isValid(end)) {
      const formattedRange = `${format(start, 'MMM d, yyyy')} → ${format(end, 'MMM d, yyyy')}`;
      setSelectedRangeDisplay(formattedRange);
    } else {
      setSelectedRangeDisplay('');
    }
  }, [startDate, endDate]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        !isDatePickerOpen
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDatePickerOpen]);

  const handleDateChange = (newValues) => {
    if (onChange) {
      onChange({ ...value, ...newValues });
    }
  };

  const handleQuickSelect = (type) => {
    if (type === 'custom') {
      handleDateChange({
        startDate: null,
        endDate: null,
        rangeType: 'custom',
      });
      return;
    }

    const today = new Date();
    let from = today;
    const to = today;

    if (type === 'today') {
      from = today;
    } else if (type === 'month') {
      from = subMonths(today, 1);
    } else if (type === 'year') {
      from = subYears(today, 1);
    }

    handleDateChange({
      startDate: format(from, 'yyyy-MM-dd'),
      endDate: format(to, 'yyyy-MM-dd'),
      rangeType: type,
    });
    setIsOpen(false);
  };
  
  const handleApply = () => {
    if (startDate && endDate) {
        setIsOpen(false);
    }
  }
  
  const isFilterActive = !!startDate && !!endDate;

  return (
    <div className="date-range-filter-popover fs16" ref={popoverRef}>
      {isMobile || !selectedRangeDisplay ? (
        <button
          className={`th-filter-btn ${isFilterActive ? 'active' : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Open date filter"
        >
          <HStack alignItems="center" gap="0.1rem" className="date-filter-icon-container">
            <CustomCalendarIcon size={27} 
            value="1" />
            <BsArrowRightShort size={20} />
            <CustomCalendarIcon size={27} 
            value="30" />
          </HStack>
        </button>
      ) : (
        <div
          className="selected-date-display"
          onClick={() => setIsOpen((prev) => !prev)}
          title="Click to change date"
        >
          <HStack alignItems="center" gap="0.3rem">
            <IoCalendarNumberOutline size={20} />
            <span>{selectedRangeDisplay}</span>
          </HStack>
        </div>
      )}

      {isOpen && (
        <div className={`date-range-filter-popover__content popover-placement--${placement}`}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <VStack gap="1rem">
              {rangeType === 'custom' && (
                <>
                  <DatePicker
                    label="From"
                    value={startDate ? new Date(startDate) : null}
                    onChange={(date) => {
                      const isoDate = date ? format(date, 'yyyy-MM-dd') : null;
                      handleDateChange({ startDate: isoDate, rangeType: 'custom' });
                    }}
                    onOpen={() => setIsDatePickerOpen(true)}
                    onClose={() => setIsDatePickerOpen(false)}
                    slotProps={{
                      textField: { fullWidth: true, size: 'small' },
                      popper: { sx: { zIndex: 99999 }, disablePortal: false },
                    }}
                  />

                  <DatePicker
                    label="To"
                    value={endDate ? new Date(endDate) : null}
                    onChange={(date) => {
                      const isoDate = date ? format(date, 'yyyy-MM-dd') : null;
                      handleDateChange({ endDate: isoDate, rangeType: 'custom' });
                    }}
                    onOpen={() => setIsDatePickerOpen(true)}
                    onClose={() => setIsDatePickerOpen(false)}
                    slotProps={{
                      textField: { fullWidth: true, size: 'small' },
                      popper: { sx: { zIndex: 99999 }, disablePortal: false },
                    }}
                  />
                </>
              )}
              <Select
                value={rangeType}
                onChange={(e) => handleQuickSelect(e.target.value)}
                options={[
                  { label: 'Custom Range', value: 'custom' },
                  { label: 'Today', value: 'today' },
                  { label: 'Last Month', value: 'month' },
                  { label: 'Last Year', value: 'year' },
                ]}
                placeholder="Choose Range"
              />

              <HStack justifyContent="space-between" className="date-range-filter-popover__actions">
                <SubmitButton onClick={handleApply} type="add" />
              </HStack>
            </VStack>
          </LocalizationProvider>
        </div>
      )}
    </div>
  );
};

export default DateFilter;