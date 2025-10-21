import { useState, useEffect, useRef } from "react";
import IconBackButton from "@/apps/user/components/IconBackButton";

import useCustomersPaginated from "@/hooks/api/customer/useCustomersPaginated";
import useDeleteCustomer from "@/hooks/api/customer/useDeleteCustomer";
import { Transaction } from "@/constants/object/transaction";
import isAllFiltersEmpty from "@/utils/isAllFiltersEmpty";
import { useIsMobile } from "@/utils/useIsMobile";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  ThSort,
  ThSL,
  TdSL,
  TdDate,
  TdMenu,
  ThMenu,
  TableCaption,
  ThContainer,
  ThSearchOrFilterPopover,
  ThFilterContainer,
} from "@/components/Table";
import AddButton from "@/components/AddButton";
import VStack from "@/components/VStack/component.jsx";
import HStack from "@/components/HStack/component.jsx";
import PageHeader from "@/components/PageHeader";
import PageTitle from "@/components/PageTitle";
import InputField from "@/components/InputField";
import MobileSearchField from "@/components/MobileSearchField";
import PhoneNoField from "@/components/PhoneNoField";
import SearchField from "@/components/SearchField";
import TableFooter from "@/components/TableFooter";
import PopUpFilter from "@/components/PopUpFilter";
import RefreshButton from "@/components/RefreshButton";
import Loader from "@/components/Loader";
import TextArea from "@/components/TextArea";
import DateField from "@/components/DateField";
import AddCustomer from "./components/AddCustomer";
import { useToast } from "@/context/ToastContext";
import { CRUDTYPE, CRUDITEM } from "@/constants/object/crud";
import ContainerWrapper from "@/components/ContainerWrapper";
import ScrollContainer from "@/components/ScrollContainer";
import ListItem from "@/apps/user/components/ListItem/component";
import Spacer from "@/components/Spacer";
import DateFilter from "@/components/DateFilter";
import TitleContainer from "@/components/TitleContainer"; // 1. Import DateFilter
import TableTopContainer from "@/components/TableTopContainer";

import "./style.scss";

const formatDate = (dateString) => {
  if (!dateString) return "-";
  try {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  } catch (error) {
    return dateString;
  }
};

const CustomerList = () => {
  const showToast = useToast();
  const isMobile = useIsMobile();
  const searchRef = useRef(null);

  const [showFilter, setShowFilter] = useState(false);
  const [listData, setListData] = useState([]);

  // Pop-up filter states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // 2. Add state for DateFilter
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [headerStartDate, setHeaderStartDate] = useState("");
  const [headerEndDate, setHeaderEndDate] = useState("");
  const isDateFilterActive = !!headerStartDate || !!headerEndDate;

  const [headerFilters, setHeaderFilters] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [sort, setSort] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchKey, setSearchKey] = useState("");

  const [state, setState] = useState({
    page: 1,
    page_size: 10,
    name: "",
    email: "",
    address: "",
    phone: "",
    start_date: "",
    end_date: "",
    sort: "",
    searchType: "",
    searchKey: "",
  });

  const { data, isLoading } = useCustomersPaginated(state);
  const { mutateAsync: deleteCustomer } = useDeleteCustomer();

  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (data?.data) {
      setListData(data.data);
      setTotalPages(data.total_pages || 1);
      setTotalItems(data.count || 0);
    }
  }, [data]);
  useEffect(() => {
    setHeaderFilters({
      name: state.name || "",
      email: state.email || "",
      phone: state.phone || "",
    });
  }, [state.name, state.email, state.phone]);

  const handleSort = (value) => {
    setState({ ...state, page: 1, sort: value });
  };

  const handleSearch = () => {
    setState({ ...state, page: 1, searchType, searchKey });
  };

  const handlePageLimitSelect = (value) => {
    setState({ ...state, page_size: value, page: 1 });
  };

  const handlePageChange = (value) => {
    setState({ ...state, page: value });
  };

  // 3. Create handlers for DateFilter
  const handleDateFilter = ({ startdate, enddate }) => {
    setState((prev) => ({
      ...prev,
      start_date: startdate,
      end_date: enddate,
      page: 1,
    }));
  };

  const handleClearDateFilter = () => {
    setHeaderStartDate("");
    setHeaderEndDate("");
    setState((prev) => ({ ...prev, start_date: "", end_date: "", page: 1 }));
  };

  const handleFilter = () => {
    setState({
      ...state,
      name: name,
      address: address,
      phone: phone,
      email: email,
      start_date: startDate,
      end_date: endDate,
      page: 1,
    });
    setShowFilter(false);
  };

  const handleRefresh = () => {
    // Reset pop-up filter states
    setName("");
    setAddress("");
    setPhone("");
    setEmail("");
    setStartDate("");
    setEndDate("");
    // Reset header filter states
    setHeaderName("");
    setHeaderEmail("");
    setHeaderPhone("");
    // Reset search, sort, and main state
    setSearchKey("");
    setSearchType("");
    setSort("");

    // 4. Update handleRefresh
    setShowDateFilter(false);
    setHeaderStartDate("");
    setHeaderEndDate("");

    setState({
      page: 1,
      page_size: 10,
      name: "",
      email: "",
      address: "",
      phone: "",
      start_date: "",
      end_date: "",
      sort: "",
      searchType: "",
      searchKey: "",
    });
  };

  // Header Filter Handlers
  const handleHeaderNameFilter = (value) => {
    setHeaderName(value);
    setState((prevState) => ({ ...prevState, page: 1, name: value }));
  };

  const handleHeaderEmailFilter = (value) => {
    setHeaderEmail(value);
    setState((prevState) => ({ ...prevState, page: 1, email: value }));
  };

  const handleHeaderPhoneFilter = (value) => {
    setHeaderPhone(value);
    setState((prevState) => ({ ...prevState, page: 1, phone: value }));
  };

  const searchOptions = [
    { value: "name", name: "Name" },
    { value: "email", name: "Email" },
    { value: "address", name: "Address" },
    { value: "phone", name: "Phone" },
  ];

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [mode, setMode] = useState("view");
  const [isOpenCustomerModal, setIsOpenCustomerModal] = useState(false);

  const handleAddClick = () => {
    setMode("add");
    setSelectedCustomer(null);
    setIsOpenCustomerModal(true);
  };
  const handleHeaderKeyDown = (e, key) => {
    if (e.key === "Enter") {
      setState((prevState) => ({
        ...prevState,
        page: 1,
        [key]: headerFilters[key],
      }));
    }
  };

  const handleEditClick = (customer) => {
    setSelectedCustomer(customer);
    setMode("edit");
    setIsOpenCustomerModal(true);
  };
  const handleViewClick = (customer) => {
    setSelectedCustomer(customer);
    setMode("view");
    setIsOpenCustomerModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteCustomer(id);
      showToast({
        crudItem: CRUDITEM.CUSTOMER,
        crudType: CRUDTYPE.DELETE_SUCCESS,
      });
    } catch (error) {
      showToast({
        crudItem: CRUDITEM.CUSTOMER,
        crudType: CRUDTYPE.DELETE_ERROR,
      });
    }
  };

  const filterProps = {
    showFilter,
    setShowFilter,
    handleFilter,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  };

  return (
    <>
      <ContainerWrapper>
        {!isMobile ? (
          <>
            <TitleContainer>
              <IconBackButton />
              <PageTitle title="Customers" />
            </TitleContainer>
            <TableTopContainer
              isMargin={true}
              mainActions={
                <>
                  <DateFilter
                    isOpen={showDateFilter}
                    setIsOpen={setShowDateFilter}
                    onApply={handleDateFilter}
                    onClear={handleClearDateFilter}
                    isFilterActive={isDateFilterActive}
                  />
                  <ListFilter {...filterProps} />
                  <RefreshButton onClick={handleRefresh} />
                  <SearchField
                    searchRef={searchRef}
                    searchKey={searchKey}
                    setSearchKey={setSearchKey}
                    searchType={searchType}
                    setSearchType={setSearchType}
                    handleSearch={handleSearch}
                    searchOptions={searchOptions}
                  />
                  <AddButton onClick={handleAddClick}>Add Customer</AddButton>
                </>
              }
            />
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <Table>
                  <Thead>
                    <ThSL />
                    <Th>
                      <ThContainer>
                        Name
                        <ThFilterContainer>
                          <ThSort
                            {...{ sort, setSort, value: "name", handleSort }}
                          />
                          <ThSearchOrFilterPopover
                            isSearch={true}
                            popoverWidth={220}
                          >
                            <InputField
                              placeholder="Enter Name and press Enter"
                              value={headerFilters.name}
                              onChange={(e) =>
                                setHeaderFilters((prev) => ({
                                  ...prev,
                                  name: e.target.value,
                                }))
                              }
                              onKeyDown={(e) => handleHeaderKeyDown(e, "name")}
                              isLabel={false}
                            />
                          </ThSearchOrFilterPopover>
                        </ThFilterContainer>
                      </ThContainer>
                    </Th>
                    <Th>Address</Th>
                    <Th>
                      <ThContainer>
                        Phone
                        <ThFilterContainer>
                          <ThSearchOrFilterPopover
                            isSearch={true}
                            popoverWidth={220}
                          >
                            <InputField
                              placeholder="Enter Address and press Enter"
                              value={headerFilters.phone}
                              onChange={(e) =>
                                setHeaderFilters((prev) => ({
                                  ...prev,
                                  phone: e.target.value,
                                }))
                              }
                              onKeyDown={(e) => handleHeaderKeyDown(e, "phone")}
                              isLabel={false}
                            />
                          </ThSearchOrFilterPopover>
                        </ThFilterContainer>
                      </ThContainer>
                    </Th>
                    <Th>
                      <ThContainer>
                        Email
                        <ThFilterContainer>
                          <ThSort
                            {...{ sort, setSort, value: "email", handleSort }}
                          />
                          <ThSearchOrFilterPopover
                            isSearch={true}
                            popoverWidth={220}
                          >
                            <InputField
                              placeholder="Enter Email and press Enter"
                              value={headerFilters.email}
                              onChange={(e) =>
                                setHeaderFilters((prev) => ({
                                  ...prev,
                                  email: e.target.value,
                                }))
                              }
                              onKeyDown={(e) => handleHeaderKeyDown(e, "email")}
                              isLabel={false}
                            />
                          </ThSearchOrFilterPopover>
                        </ThFilterContainer>
                      </ThContainer>
                    </Th>
                    <Th>
                      <ThContainer>
                        Date
                        <ThSort
                          {...{
                            sort,
                            setSort,
                            value: "created_at",
                            handleSort,
                          }}
                        />
                      </ThContainer>
                    </Th>
                    <ThMenu />
                  </Thead>
                  <Tbody>
                    {listData.length > 0 ? (
                      listData.map((cust, index) => (
                        <Tr key={cust.id}>
                          <TdSL
                            index={index}
                            page={state.page}
                            pageSize={state.page_size}
                          />
                          <Td>{cust.name}</Td>
                          <Td>{cust.address}</Td>
                          <Td>{cust.phone}</Td>
                          <Td>{cust.email}</Td>
                          <TdDate>{cust.created_at}</TdDate>
                          <TdMenu
                            onEdit={() => handleEditClick(cust)}
                            onView={() => handleViewClick(cust)}
                            onDelete={() => handleDelete(cust.id)}
                          />
                        </Tr>
                      ))
                    ) : (
                      <TableCaption item={Transaction.Customer} noOfCol={7} />
                    )}
                  </Tbody>
                </Table>
              </>
            )}
            {!isLoading && listData.length > 0 && (
              <TableFooter
                totalItems={totalItems}
                currentPage={state.page}
                itemsPerPage={state.page_size}
                totalPages={totalPages}
                handlePageLimitSelect={handlePageLimitSelect}
                handlePageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <>
            <TitleContainer>
              <IconBackButton />
              <PageTitle title="Customers" />
            </TitleContainer>
            <ScrollContainer>
              <PageHeader>
                <HStack>
                  <DateFilter
                    isOpen={showDateFilter}
                    setIsOpen={setShowDateFilter}
                    onApply={handleDateFilter}
                    onClear={handleClearDateFilter}
                    isFilterActive={isDateFilterActive}
                  />
                  <ListFilter {...filterProps} />
                  <RefreshButton onClick={handleRefresh} />
                  <MobileSearchField
                    searchRef={searchRef}
                    searchKey={searchKey}
                    setSearchKey={setSearchKey}
                    searchType={searchType}
                    setSearchType={setSearchType}
                    handleSearch={handleSearch}
                    searchOptions={searchOptions}
                  />
                </HStack>

                <div className="customer_list__add_button">
                  <AddButton onClick={handleAddClick}>Add Customer</AddButton>
                </div>
              </PageHeader>
              {isLoading ? (
                <Loader />
              ) : listData.length === 0 ? (
                <TableCaption item={Transaction.Customer} />
              ) : (
                <div>
                  {listData.map((cust) => (
                    <ListItem
                      key={cust.id}
                      title={cust.name}
                      subtitle={
                        <>
                          <div>{formatDate(cust.date)}</div>
                          <div>{cust.phone || "No phone number"}</div>
                          <div>{cust.address || "No address"}</div>
                        </>
                      }
                      onView={() => handleViewClick(cust)}
                      onEdit={() => handleEditClick(cust)}
                      onDelete={() => handleDelete(cust.id)}
                    />
                  ))}
                </div>
              )}
              <Spacer />
              {!isLoading && listData.length > 0 && (
                <TableFooter
                  totalItems={totalItems}
                  currentPage={state.page}
                  itemsPerPage={state.page_size}
                  totalPages={totalPages}
                  handlePageLimitSelect={handlePageLimitSelect}
                  handlePageChange={handlePageChange}
                />
              )}
            </ScrollContainer>
          </>
        )}
      </ContainerWrapper>

      <AddCustomer
        isOpen={isOpenCustomerModal}
        onClose={() => setIsOpenCustomerModal(false)}
        mode={mode}
        selectedCustomer={selectedCustomer}
      />
    </>
  );
};

export default CustomerList;

const ListFilter = ({
  showFilter,
  setShowFilter,
  handleFilter,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const isMobile = useIsMobile();
  return (
    <PopUpFilter
      isOpen={showFilter}
      setIsOpen={setShowFilter}
      onApply={handleFilter}
    >
      <VStack>
        <InputField
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <InputField
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <PhoneNoField
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
        />
        <TextArea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
        />
        {isMobile ? (
          <>
            <DateField
              label="Start Date"
              value={startDate ? new Date(startDate) : null}
              onChange={(date) =>
                setStartDate(date ? date.toISOString().split("T")[0] : "")
              }
            />
            <DateField
              label="End Date"
              value={endDate ? new Date(endDate) : null}
              onChange={(date) =>
                setEndDate(date ? date.toISOString().split("T")[0] : "")
              }
            />
          </>
        ) : (
          <HStack justifyContent="flex-start">
            <DateField
              label="Start Date"
              value={startDate ? new Date(startDate) : null}
              onChange={(date) =>
                setStartDate(date ? date.toISOString().split("T")[0] : "")
              }
            />
            <DateField
              label="End Date"
              value={endDate ? new Date(endDate) : null}
              onChange={(date) =>
                setEndDate(date ? date.toISOString().split("T")[0] : "")
              }
            />
          </HStack>
        )}
      </VStack>
    </PopUpFilter>
  );
};