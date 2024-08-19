/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Banking account number is a string of 5 to 17 alphanumeric values for representing an generic account number */
  AccountNumber: { input: any; output: any; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any; }
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: { input: any; output: any; }
  /** A country code as defined by ISO 3166-1 alpha-2 */
  CountryCode: { input: any; output: any; }
  /** A field whose value conforms to the standard cuid format as specified in https://github.com/ericelliott/cuid#broken-down */
  Cuid: { input: any; output: any; }
  /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
  Currency: { input: any; output: any; }
  /** A field whose value conforms to the standard DID format as specified in did-core: https://www.w3.org/TR/did-core/. */
  DID: { input: any; output: any; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** A field whose value conforms to the standard DeweyDecimal format as specified by the OCLC https://www.oclc.org/content/dam/oclc/dewey/resources/summaries/deweysummaries.pdf */
  DeweyDecimal: { input: any; output: any; }
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  Duration: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  GUID: { input: any; output: any; }
  /** A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSL: { input: any; output: any; }
  /** A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSLA: { input: any; output: any; }
  /** A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors. */
  HexColorCode: { input: any; output: any; }
  /** A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal. */
  Hexadecimal: { input: any; output: any; }
  /** A field whose value is an International Bank Account Number (IBAN): https://en.wikipedia.org/wiki/International_Bank_Account_Number. */
  IBAN: { input: any; output: any; }
  /** A field whose value is either an IPv4 or IPv6 address: https://en.wikipedia.org/wiki/IP_address. */
  IP: { input: any; output: any; }
  /** A field whose value is an IPC Class Symbol within the International Patent Classification System: https://www.wipo.int/classifications/ipc/en/ */
  IPCPatent: { input: any; output: any; }
  /** A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4. */
  IPv4: { input: any; output: any; }
  /** A field whose value is a IPv6 address: https://en.wikipedia.org/wiki/IPv6. */
  IPv6: { input: any; output: any; }
  /** A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number. */
  ISBN: { input: any; output: any; }
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  ISO8601Duration: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: { input: any; output: any; }
  /** A field whose value conforms to the Library of Congress Subclass Format ttps://www.loc.gov/catdir/cpso/lcco/ */
  LCCSubclass: { input: any; output: any; }
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: { input: any; output: any; }
  /** A local date string (i.e., with no associated timezone) in `YYYY-MM-DD` format, e.g. `2020-01-01`. */
  LocalDate: { input: any; output: any; }
  /** A local date-time string (i.e., with no associated timezone) in `YYYY-MM-DDTHH:mm:ss` format, e.g. `2020-01-01T00:00:00`. */
  LocalDateTime: { input: any; output: any; }
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`.  This scalar is very similar to the `LocalTime`, with the only difference being that `LocalEndTime` also allows `24:00` as a valid value to indicate midnight of the following day.  This is useful when using the scalar to represent the exclusive upper bound of a time block. */
  LocalEndTime: { input: any; output: any; }
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
  LocalTime: { input: any; output: any; }
  /** The locale in the format of a BCP 47 (RFC 5646) standard string */
  Locale: { input: any; output: any; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: { input: any; output: any; }
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: { input: any; output: any; }
  /** A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address. */
  MAC: { input: any; output: any; }
  /** Floats that will have a value less than 0. */
  NegativeFloat: { input: any; output: any; }
  /** Integers that will have a value less than 0. */
  NegativeInt: { input: any; output: any; }
  /** A string that cannot be passed as an empty value */
  NonEmptyString: { input: any; output: any; }
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: { input: any; output: any; }
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: { input: any; output: any; }
  /** Floats that will have a value of 0 or less. */
  NonPositiveFloat: { input: any; output: any; }
  /** Integers that will have a value of 0 or less. */
  NonPositiveInt: { input: any; output: any; }
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  ObjectID: { input: any; output: any; }
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: { input: any; output: any; }
  /** A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports */
  Port: { input: any; output: any; }
  /** Floats that will have a value greater than 0. */
  PositiveFloat: { input: any; output: any; }
  /** Integers that will have a value greater than 0. */
  PositiveInt: { input: any; output: any; }
  /** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg. */
  PostalCode: { input: any; output: any; }
  /** A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGB: { input: any; output: any; }
  /** A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGBA: { input: any; output: any; }
  /** In the US, an ABA routing transit number (`ABA RTN`) is a nine-digit code to identify the financial institution. */
  RoutingNumber: { input: any; output: any; }
  /** A field whose value conforms to the standard personal number (personnummer) formats for Sweden */
  SESSN: { input: any; output: any; }
  /** The `SafeInt` scalar type represents non-fractional signed whole numeric values that are considered safe as defined by the ECMAScript specification. */
  SafeInt: { input: any; output: any; }
  /** A field whose value is a Semantic Version: https://semver.org */
  SemVer: { input: any; output: any; }
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: { input: any; output: any; }
  /** A field whose value exists in the standard IANA Time Zone Database: https://www.iana.org/time-zones */
  TimeZone: { input: any; output: any; }
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: { input: any; output: any; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: any; output: any; }
  /** A currency string, such as $21.25 */
  USCurrency: { input: any; output: any; }
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: { input: any; output: any; }
  /** Floats that will have a value of 0 or more. */
  UnsignedFloat: { input: any; output: any; }
  /** Integers that will have a value of 0 or more. */
  UnsignedInt: { input: any; output: any; }
  /** A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  UtcOffset: { input: any; output: any; }
  /** Represents NULL values */
  Void: { input: any; output: any; }
  _Any: { input: any; output: any; }
  _FieldSet: { input: any; output: any; }
};

export type Bank = {
  __typename?: 'Bank';
  accountName?: Maybe<Scalars['String']['output']>;
  accountNumber?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressLine3?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  routingNumber?: Maybe<Scalars['String']['output']>;
};

export type BankInput = {
  accountName?: InputMaybe<Scalars['String']['input']>;
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  routingNumber?: InputMaybe<Scalars['String']['input']>;
};

export type Candidate = {
  __typename?: 'Candidate';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressLine3?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<Scalars['PhoneNumber']['output']>;
  id?: Maybe<Scalars['ObjectID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  personalEmail?: Maybe<Scalars['EmailAddress']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
};

export type CandidateInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['PhoneNumber']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  personalEmail?: InputMaybe<Scalars['EmailAddress']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type Client = {
  __typename?: 'Client';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressLine3?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ObjectID']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  signingAuthDesignation?: Maybe<Scalars['String']['output']>;
  signingAuthEmail?: Maybe<Scalars['EmailAddress']['output']>;
  signingAuthName?: Maybe<Scalars['String']['output']>;
};

export type ClientInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  signingAuthDesignation?: InputMaybe<Scalars['String']['input']>;
  signingAuthEmail?: InputMaybe<Scalars['EmailAddress']['input']>;
  signingAuthName?: InputMaybe<Scalars['String']['input']>;
};

export type Company = {
  __typename?: 'Company';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressLine3?: Maybe<Scalars['String']['output']>;
  bank: Bank;
  companyName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ObjectID']['output']>;
  ownerName?: Maybe<Scalars['String']['output']>;
};

export type CompanyInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  bank: BankInput;
  companyName?: InputMaybe<Scalars['String']['input']>;
  ownerName?: InputMaybe<Scalars['String']['input']>;
};

export type DayTime = {
  __typename?: 'DayTime';
  OTHours?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  standardHours?: Maybe<Scalars['Int']['output']>;
};

export type DayTimeInput = {
  OTHours?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  standardHours?: InputMaybe<Scalars['Int']['input']>;
};

export type Joining = {
  __typename?: 'Joining';
  actualStartDate?: Maybe<Scalars['Date']['output']>;
  candidate: Candidate;
  candidateRate: Rate;
  client: Client;
  company?: Maybe<Company>;
  empId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ObjectID']['output']>;
  joiningDate?: Maybe<Scalars['Date']['output']>;
  officialEmail?: Maybe<Scalars['EmailAddress']['output']>;
  paymentTerms?: Maybe<Scalars['Int']['output']>;
  projectLocation?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  timesheetApprover?: Maybe<Person>;
  vendor: Vendor;
  vendorAcctSpoc?: Maybe<Person>;
  vendorRate: Rate;
  vendorSpoc?: Maybe<Person>;
};

export type JoiningInput = {
  actualStartDate?: InputMaybe<Scalars['Date']['input']>;
  candidate: Scalars['ObjectID']['input'];
  candidateRate: RateInput;
  client: Scalars['ObjectID']['input'];
  company?: InputMaybe<Scalars['ObjectID']['input']>;
  empId?: InputMaybe<Scalars['String']['input']>;
  joiningDate?: InputMaybe<Scalars['Date']['input']>;
  officialEmail?: InputMaybe<Scalars['EmailAddress']['input']>;
  paymentTerms?: InputMaybe<Scalars['Int']['input']>;
  projectLocation?: InputMaybe<Scalars['String']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  timesheetApprover?: InputMaybe<PersonInput>;
  vendor: Scalars['ObjectID']['input'];
  vendorAcctSpoc?: InputMaybe<PersonInput>;
  vendorRate: RateInput;
  vendorSpoc?: InputMaybe<PersonInput>;
};

export type JoiningUpdateInput = {
  actualStartDate?: InputMaybe<Scalars['Date']['input']>;
  candidate: Scalars['ObjectID']['input'];
  candidateRate: RateInput;
  company?: InputMaybe<Scalars['ObjectID']['input']>;
  empId?: InputMaybe<Scalars['String']['input']>;
  joiningDate?: InputMaybe<Scalars['Date']['input']>;
  officialEmail?: InputMaybe<Scalars['EmailAddress']['input']>;
  paymentTerms?: InputMaybe<Scalars['Int']['input']>;
  projectLocation?: InputMaybe<Scalars['String']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  timesheetApprover?: InputMaybe<PersonInput>;
  vendorAcctSpoc?: InputMaybe<PersonInput>;
  vendorRate: RateInput;
  vendorSpoc?: InputMaybe<PersonInput>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  role?: Maybe<Scalars['String']['output']>;
  tokens?: Maybe<Token>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCandidate?: Maybe<Scalars['ObjectID']['output']>;
  addClient?: Maybe<Scalars['ObjectID']['output']>;
  addCompany?: Maybe<Scalars['ObjectID']['output']>;
  addJoining?: Maybe<Scalars['ObjectID']['output']>;
  addOpening?: Maybe<Scalars['ObjectID']['output']>;
  addUser?: Maybe<Scalars['String']['output']>;
  addVendor?: Maybe<Scalars['ObjectID']['output']>;
  deleteUser?: Maybe<Scalars['String']['output']>;
  updateCandidate?: Maybe<Scalars['String']['output']>;
  updateClient?: Maybe<Scalars['String']['output']>;
  updateCompany?: Maybe<Scalars['String']['output']>;
  updateJoining?: Maybe<Scalars['String']['output']>;
  updateOpening?: Maybe<Scalars['String']['output']>;
  updateTimeSheet?: Maybe<Scalars['String']['output']>;
  updateUser?: Maybe<Scalars['String']['output']>;
  updateVendor?: Maybe<Scalars['String']['output']>;
};


export type MutationAddCandidateArgs = {
  data?: InputMaybe<CandidateInput>;
};


export type MutationAddClientArgs = {
  data?: InputMaybe<ClientInput>;
};


export type MutationAddCompanyArgs = {
  data?: InputMaybe<CompanyInput>;
};


export type MutationAddJoiningArgs = {
  data?: InputMaybe<JoiningInput>;
  openingId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddOpeningArgs = {
  data: OpeningInput;
  vendorId: Scalars['String']['input'];
};


export type MutationAddUserArgs = {
  data: UserInput;
};


export type MutationAddVendorArgs = {
  data?: InputMaybe<VendorInput>;
};


export type MutationDeleteUserArgs = {
  username: Scalars['String']['input'];
};


export type MutationUpdateCandidateArgs = {
  data?: InputMaybe<CandidateInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateClientArgs = {
  data?: InputMaybe<ClientInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCompanyArgs = {
  data?: InputMaybe<CompanyInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateJoiningArgs = {
  data?: InputMaybe<JoiningUpdateInput>;
  joiningId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateOpeningArgs = {
  data: OpeningInput;
  openingId: Scalars['String']['input'];
};


export type MutationUpdateTimeSheetArgs = {
  data?: InputMaybe<TimeSheetInput>;
};


export type MutationUpdateUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  role: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateVendorArgs = {
  data?: InputMaybe<VendorInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Opening = {
  __typename?: 'Opening';
  endClient?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  joinings?: Maybe<Array<Maybe<Joining>>>;
  name?: Maybe<Scalars['String']['output']>;
  suggestedRate?: Maybe<Rate>;
};

export type OpeningInput = {
  endClient?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  suggestedRate?: InputMaybe<RateInput>;
};

export type PaginatedCandidate = {
  __typename?: 'PaginatedCandidate';
  results?: Maybe<Array<Candidate>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedClient = {
  __typename?: 'PaginatedClient';
  results?: Maybe<Array<Client>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedCompany = {
  __typename?: 'PaginatedCompany';
  results?: Maybe<Array<Company>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedOpening = {
  __typename?: 'PaginatedOpening';
  results?: Maybe<Array<Opening>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedUsers = {
  __typename?: 'PaginatedUsers';
  results?: Maybe<Array<User>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedVendor = {
  __typename?: 'PaginatedVendor';
  results?: Maybe<Array<Vendor>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Person = {
  __typename?: 'Person';
  email?: Maybe<Scalars['EmailAddress']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['PhoneNumber']['output']>;
};

export type PersonInput = {
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['PhoneNumber']['input']>;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  candidate?: Maybe<Candidate>;
  candidates: PaginatedCandidate;
  client?: Maybe<Client>;
  clients: PaginatedClient;
  companies: PaginatedCompany;
  company?: Maybe<Company>;
  getTimeSheet?: Maybe<TimeSheet>;
  joining?: Maybe<Joining>;
  login?: Maybe<LoginResponse>;
  opening: Opening;
  searchCandidate?: Maybe<Array<Maybe<Candidate>>>;
  searchClient?: Maybe<Array<Maybe<Client>>>;
  searchCompany?: Maybe<Array<Maybe<Client>>>;
  users: PaginatedUsers;
  vendor?: Maybe<Vendor>;
  vendors: PaginatedVendor;
};


export type QueryCandidateArgs = {
  id?: InputMaybe<Scalars['ObjectID']['input']>;
};


export type QueryCandidatesArgs = {
  pageNum?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryClientArgs = {
  id?: InputMaybe<Scalars['ObjectID']['input']>;
};


export type QueryClientsArgs = {
  pageNum?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCompaniesArgs = {
  pageNum?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCompanyArgs = {
  id?: InputMaybe<Scalars['ObjectID']['input']>;
};


export type QueryGetTimeSheetArgs = {
  candidate?: InputMaybe<Scalars['ID']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJoiningArgs = {
  id?: InputMaybe<Scalars['ObjectID']['input']>;
};


export type QueryLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type QueryOpeningArgs = {
  id?: InputMaybe<Scalars['ObjectID']['input']>;
};


export type QuerySearchCandidateArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchClientArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchCompanyArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersArgs = {
  pageNum?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVendorArgs = {
  id?: InputMaybe<Scalars['ObjectID']['input']>;
};


export type QueryVendorsArgs = {
  pageNum?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type Rate = {
  __typename?: 'Rate';
  otRate?: Maybe<Scalars['Int']['output']>;
  rate?: Maybe<Scalars['Int']['output']>;
};

export type RateInput = {
  otRate?: InputMaybe<Scalars['Int']['input']>;
  rate?: InputMaybe<Scalars['Int']['input']>;
};

export enum Roles {
  Admin = 'Admin',
  User = 'User'
}

export type TimeSheet = {
  __typename?: 'TimeSheet';
  approvalDate?: Maybe<Scalars['Date']['output']>;
  candidate?: Maybe<Candidate>;
  id?: Maybe<Scalars['ID']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<TimeSheetStatus>;
  submissionDate?: Maybe<Scalars['Date']['output']>;
  timeSheet?: Maybe<Array<DayTime>>;
};

export type TimeSheetInput = {
  approvalDate?: InputMaybe<Scalars['Date']['input']>;
  candidate?: InputMaybe<Scalars['ObjectID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TimeSheetStatus>;
  submissionDate?: InputMaybe<Scalars['Date']['input']>;
  timeSheet?: InputMaybe<Array<DayTimeInput>>;
};

export enum TimeSheetStatus {
  Approved = 'APPROVED',
  Submitted = 'SUBMITTED'
}

export type Token = {
  __typename?: 'Token';
  accessToken?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['Date']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Roles>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  password: Scalars['String']['input'];
  role?: InputMaybe<Roles>;
  username: Scalars['String']['input'];
};

export type Vendor = {
  __typename?: 'Vendor';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressLine3?: Maybe<Scalars['String']['output']>;
  authSignDesig?: Maybe<Scalars['String']['output']>;
  authSignEmail?: Maybe<Scalars['EmailAddress']['output']>;
  authSignName?: Maybe<Scalars['String']['output']>;
  bank?: Maybe<Bank>;
  client: Client;
  einNumber?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  openings?: Maybe<Array<Opening>>;
  paymentTerms?: Maybe<Scalars['Int']['output']>;
  vendorId?: Maybe<Scalars['String']['output']>;
};

export type VendorInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  authSignDesig?: InputMaybe<Scalars['String']['input']>;
  authSignEmail?: InputMaybe<Scalars['EmailAddress']['input']>;
  authSignName?: InputMaybe<Scalars['String']['input']>;
  bank?: InputMaybe<BankInput>;
  client?: InputMaybe<Scalars['ObjectID']['input']>;
  einNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  paymentTerms?: InputMaybe<Scalars['Int']['input']>;
  vendorId?: InputMaybe<Scalars['String']['input']>;
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

export type SearchCandidateQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type SearchCandidateQuery = { __typename?: 'Query', searchCandidate?: Array<{ __typename?: 'Candidate', id?: any | null, name?: string | null } | null> | null };

export type SearchCompanyQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type SearchCompanyQuery = { __typename?: 'Query', searchCompany?: Array<{ __typename?: 'Client', id?: any | null, companyName?: string | null } | null> | null };

export type UpdateCandidateMutationVariables = Exact<{
  data: CandidateInput;
  id: Scalars['String']['input'];
}>;


export type UpdateCandidateMutation = { __typename?: 'Mutation', updateCandidate?: string | null };

export type GetCandidateQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ObjectID']['input']>;
}>;


export type GetCandidateQuery = { __typename?: 'Query', candidate?: { __typename?: 'Candidate', name?: string | null, personalEmail?: any | null, contact?: any | null, timezone?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressLine3?: string | null } | null };

export type QueryCandidateByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ObjectID']['input']>;
}>;


export type QueryCandidateByIdQuery = { __typename?: 'Query', candidate?: { __typename?: 'Candidate', name?: string | null, personalEmail?: any | null, contact?: any | null, timezone?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressLine3?: string | null } | null };

export type QueryCandidateQueryVariables = Exact<{
  pageNum?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type QueryCandidateQuery = { __typename?: 'Query', candidates: { __typename?: 'PaginatedCandidate', total?: number | null, results?: Array<{ __typename?: 'Candidate', id?: any | null, name?: string | null, personalEmail?: any | null, contact?: any | null, timezone?: string | null }> | null } };

export type CreateClientMutationVariables = Exact<{
  data: ClientInput;
}>;


export type CreateClientMutation = { __typename?: 'Mutation', addClient?: any | null };

export type UpdateClientMutationVariables = Exact<{
  data: ClientInput;
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateClientMutation = { __typename?: 'Mutation', updateClient?: string | null };

export type GetClientByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ObjectID']['input']>;
}>;


export type GetClientByIdQuery = { __typename?: 'Query', client?: { __typename?: 'Client', companyName?: string | null, logo?: string | null, signingAuthName?: string | null, signingAuthEmail?: any | null, signingAuthDesignation?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressLine3?: string | null } | null };

export type QueryClientByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ObjectID']['input']>;
}>;


export type QueryClientByIdQuery = { __typename?: 'Query', client?: { __typename?: 'Client', companyName?: string | null, logo?: string | null, signingAuthName?: string | null, signingAuthEmail?: any | null, signingAuthDesignation?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressLine3?: string | null } | null };

export type QueryClientQueryVariables = Exact<{
  pageNum?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type QueryClientQuery = { __typename?: 'Query', clients: { __typename?: 'PaginatedClient', total?: number | null, results?: Array<{ __typename?: 'Client', id?: any | null, companyName?: string | null, signingAuthName?: string | null, signingAuthEmail?: any | null, signingAuthDesignation?: string | null, addressLine1?: string | null }> | null } };

export type CreateCompanyMutationVariables = Exact<{
  data: CompanyInput;
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', addCompany?: any | null };

export type UpdateCompanyMutationVariables = Exact<{
  data: CompanyInput;
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateCompanyMutation = { __typename?: 'Mutation', updateCompany?: string | null };

export type GetCompanyQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ObjectID']['input']>;
}>;


export type GetCompanyQuery = { __typename?: 'Query', company?: { __typename?: 'Company', companyName?: string | null, ownerName?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressLine3?: string | null, bank: { __typename?: 'Bank', bankName?: string | null, accountName?: string | null, routingNumber?: string | null, accountNumber?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressLine3?: string | null } } | null };

export type QueryCompanyByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ObjectID']['input']>;
}>;


export type QueryCompanyByIdQuery = { __typename?: 'Query', company?: { __typename?: 'Company', companyName?: string | null, ownerName?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressLine3?: string | null, bank: { __typename?: 'Bank', bankName?: string | null, accountName?: string | null, accountNumber?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressLine3?: string | null, routingNumber?: string | null } } | null };

export type QueryCompanyQueryVariables = Exact<{
  pageNum?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type QueryCompanyQuery = { __typename?: 'Query', companies: { __typename?: 'PaginatedCompany', total?: number | null, results?: Array<{ __typename?: 'Company', id?: any | null, companyName?: string | null, ownerName?: string | null, addressLine1?: string | null, bank: { __typename?: 'Bank', bankName?: string | null } }> | null } };

export type LoginQueryQueryVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginQueryQuery = { __typename?: 'Query', login?: { __typename?: 'LoginResponse', role?: string | null, tokens?: { __typename?: 'Token', accessToken?: string | null } | null } | null };

export type UpdateTimeSheetMutationVariables = Exact<{
  data?: InputMaybe<TimeSheetInput>;
}>;


export type UpdateTimeSheetMutation = { __typename?: 'Mutation', updateTimeSheet?: string | null };

export type QueryBasicCandidateByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ObjectID']['input']>;
}>;


export type QueryBasicCandidateByIdQuery = { __typename?: 'Query', candidate?: { __typename?: 'Candidate', name?: string | null } | null };

export type QueryTimeSheetQueryVariables = Exact<{
  month?: InputMaybe<Scalars['Int']['input']>;
  candidate?: InputMaybe<Scalars['ID']['input']>;
}>;


export type QueryTimeSheetQuery = { __typename?: 'Query', getTimeSheet?: { __typename?: 'TimeSheet', id?: string | null, submissionDate?: any | null, approvalDate?: any | null, status?: TimeSheetStatus | null, timeSheet?: Array<{ __typename?: 'DayTime', date?: any | null, standardHours?: number | null, OTHours?: number | null }> | null } | null };

export type CreateUserMutationVariables = Exact<{
  data: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', addUser?: string | null };

export type UpdateUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  role: Scalars['String']['input'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: string | null };

export type QueryUserQueryVariables = Exact<{
  pageNum?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type QueryUserQuery = { __typename?: 'Query', users: { __typename?: 'PaginatedUsers', total?: number | null, results?: Array<{ __typename?: 'User', username?: string | null, createdAt?: any | null, role?: Roles | null }> | null } };

export type DeleteUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: string | null };

export type CreateVendorMutationVariables = Exact<{
  data: VendorInput;
}>;


export type CreateVendorMutation = { __typename?: 'Mutation', addVendor?: any | null };

export type SearchClientQueryVariables = Exact<{
  data?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchClientQuery = { __typename?: 'Query', searchClient?: Array<{ __typename?: 'Client', id?: any | null, companyName?: string | null } | null> | null };

export type UpdateVendorMutationVariables = Exact<{
  data: VendorInput;
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateVendorMutation = { __typename?: 'Mutation', updateVendor?: string | null };

export type GetVendorByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ObjectID']['input']>;
}>;


export type GetVendorByIdQuery = { __typename?: 'Query', vendor?: { __typename?: 'Vendor', name?: string | null, vendorId?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressLine3?: string | null, einNumber?: string | null, authSignName?: string | null, authSignEmail?: any | null, authSignDesig?: string | null, paymentTerms?: number | null, bank?: { __typename?: 'Bank', bankName?: string | null, accountName?: string | null, accountNumber?: string | null, routingNumber?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressLine3?: string | null } | null, client: { __typename?: 'Client', id?: any | null, companyName?: string | null } } | null };

export type AddOpeningMutationVariables = Exact<{
  data: OpeningInput;
  vendorId: Scalars['String']['input'];
}>;


export type AddOpeningMutation = { __typename?: 'Mutation', addOpening?: any | null };

export type UpdateOpeningMutationVariables = Exact<{
  data: OpeningInput;
  openingId: Scalars['String']['input'];
}>;


export type UpdateOpeningMutation = { __typename?: 'Mutation', updateOpening?: string | null };

export type GetOpeningByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ObjectID']['input']>;
}>;


export type GetOpeningByIdQuery = { __typename?: 'Query', opening: { __typename?: 'Opening', name?: string | null, endClient?: string | null, suggestedRate?: { __typename?: 'Rate', rate?: number | null, otRate?: number | null } | null } };

export type QueryVendorByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ObjectID']['input']>;
}>;


export type QueryVendorByIdQuery = { __typename?: 'Query', vendor?: { __typename?: 'Vendor', name?: string | null, vendorId?: string | null, einNumber?: string | null, paymentTerms?: number | null, addressLine1?: string | null, addressLine2?: string | null, addressLine3?: string | null, authSignName?: string | null, authSignEmail?: any | null, authSignDesig?: string | null, client: { __typename?: 'Client', id?: any | null, companyName?: string | null }, bank?: { __typename?: 'Bank', bankName?: string | null, accountName?: string | null, accountNumber?: string | null, routingNumber?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressLine3?: string | null } | null, openings?: Array<{ __typename?: 'Opening', id?: string | null, name?: string | null, endClient?: string | null, suggestedRate?: { __typename?: 'Rate', otRate?: number | null, rate?: number | null } | null, joinings?: Array<{ __typename?: 'Joining', id?: any | null, paymentTerms?: number | null, actualStartDate?: any | null, joiningDate?: any | null, candidate: { __typename?: 'Candidate', id?: any | null, name?: string | null }, candidateRate: { __typename?: 'Rate', rate?: number | null } } | null> | null }> | null } | null };

export type QueryVendorQueryVariables = Exact<{
  pageNum?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type QueryVendorQuery = { __typename?: 'Query', vendors: { __typename?: 'PaginatedVendor', total?: number | null, results?: Array<{ __typename?: 'Vendor', id?: string | null, name?: string | null, authSignName?: string | null, paymentTerms?: number | null, client: { __typename?: 'Client', companyName?: string | null } }> | null } };


export const SearchCandidateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchCandidate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCandidate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<SearchCandidateQuery, SearchCandidateQueryVariables>;
export const SearchCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}}]}}]} as unknown as DocumentNode<SearchCompanyQuery, SearchCompanyQueryVariables>;
export const UpdateCandidateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCandidate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CandidateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCandidate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<UpdateCandidateMutation, UpdateCandidateMutationVariables>;
export const GetCandidateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCandidate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"candidate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"personalEmail"}},{"kind":"Field","name":{"kind":"Name","value":"contact"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine3"}}]}}]}}]} as unknown as DocumentNode<GetCandidateQuery, GetCandidateQueryVariables>;
export const QueryCandidateByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryCandidateById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"candidate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"personalEmail"}},{"kind":"Field","name":{"kind":"Name","value":"contact"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine3"}}]}}]}}]} as unknown as DocumentNode<QueryCandidateByIdQuery, QueryCandidateByIdQueryVariables>;
export const QueryCandidateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryCandidate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"candidates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageNum"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"personalEmail"}},{"kind":"Field","name":{"kind":"Name","value":"contact"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<QueryCandidateQuery, QueryCandidateQueryVariables>;
export const CreateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<CreateClientMutation, CreateClientMutationVariables>;
export const UpdateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClientInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<UpdateClientMutation, UpdateClientMutationVariables>;
export const GetClientByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"signingAuthName"}},{"kind":"Field","name":{"kind":"Name","value":"signingAuthEmail"}},{"kind":"Field","name":{"kind":"Name","value":"signingAuthDesignation"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine3"}}]}}]}}]} as unknown as DocumentNode<GetClientByIdQuery, GetClientByIdQueryVariables>;
export const QueryClientByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryClientById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"signingAuthName"}},{"kind":"Field","name":{"kind":"Name","value":"signingAuthEmail"}},{"kind":"Field","name":{"kind":"Name","value":"signingAuthDesignation"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine3"}}]}}]}}]} as unknown as DocumentNode<QueryClientByIdQuery, QueryClientByIdQueryVariables>;
export const QueryClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageNum"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"signingAuthName"}},{"kind":"Field","name":{"kind":"Name","value":"signingAuthEmail"}},{"kind":"Field","name":{"kind":"Name","value":"signingAuthDesignation"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<QueryClientQuery, QueryClientQueryVariables>;
export const CreateCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const UpdateCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<UpdateCompanyMutation, UpdateCompanyMutationVariables>;
export const GetCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"ownerName"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine3"}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"routingNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine3"}}]}}]}}]}}]} as unknown as DocumentNode<GetCompanyQuery, GetCompanyQueryVariables>;
export const QueryCompanyByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryCompanyById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"ownerName"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine3"}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine3"}},{"kind":"Field","name":{"kind":"Name","value":"routingNumber"}}]}}]}}]}}]} as unknown as DocumentNode<QueryCompanyByIdQuery, QueryCompanyByIdQueryVariables>;
export const QueryCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageNum"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"ownerName"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bankName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<QueryCompanyQuery, QueryCompanyQueryVariables>;
export const LoginQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LoginQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<LoginQueryQuery, LoginQueryQueryVariables>;
export const UpdateTimeSheetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTimeSheet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TimeSheetInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTimeSheet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UpdateTimeSheetMutation, UpdateTimeSheetMutationVariables>;
export const QueryBasicCandidateByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryBasicCandidateById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"candidate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<QueryBasicCandidateByIdQuery, QueryBasicCandidateByIdQueryVariables>;
export const QueryTimeSheetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryTimeSheet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"month"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"candidate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTimeSheet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"month"},"value":{"kind":"Variable","name":{"kind":"Name","value":"month"}}},{"kind":"Argument","name":{"kind":"Name","value":"candidate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"candidate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timeSheet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"standardHours"}},{"kind":"Field","name":{"kind":"Name","value":"OTHours"}}]}},{"kind":"Field","name":{"kind":"Name","value":"submissionDate"}},{"kind":"Field","name":{"kind":"Name","value":"approvalDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<QueryTimeSheetQuery, QueryTimeSheetQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}}]}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const QueryUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageNum"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<QueryUserQuery, QueryUserQueryVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const CreateVendorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateVendor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VendorInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addVendor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<CreateVendorMutation, CreateVendorMutationVariables>;
export const SearchClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}}]}}]} as unknown as DocumentNode<SearchClientQuery, SearchClientQueryVariables>;
export const UpdateVendorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateVendor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VendorInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateVendor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<UpdateVendorMutation, UpdateVendorMutationVariables>;
export const GetVendorByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVendorById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"vendorId"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine3"}},{"kind":"Field","name":{"kind":"Name","value":"einNumber"}},{"kind":"Field","name":{"kind":"Name","value":"authSignName"}},{"kind":"Field","name":{"kind":"Name","value":"authSignEmail"}},{"kind":"Field","name":{"kind":"Name","value":"authSignDesig"}},{"kind":"Field","name":{"kind":"Name","value":"paymentTerms"}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"routingNumber"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine3"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}}]}}]}}]} as unknown as DocumentNode<GetVendorByIdQuery, GetVendorByIdQueryVariables>;
export const AddOpeningDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddOpening"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OpeningInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addOpening"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"vendorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vendorId"}}}]}]}}]} as unknown as DocumentNode<AddOpeningMutation, AddOpeningMutationVariables>;
export const UpdateOpeningDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOpening"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OpeningInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"openingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOpening"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"openingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"openingId"}}}]}]}}]} as unknown as DocumentNode<UpdateOpeningMutation, UpdateOpeningMutationVariables>;
export const GetOpeningByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOpeningById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"opening"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"endClient"}},{"kind":"Field","name":{"kind":"Name","value":"suggestedRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rate"}},{"kind":"Field","name":{"kind":"Name","value":"otRate"}}]}}]}}]}}]} as unknown as DocumentNode<GetOpeningByIdQuery, GetOpeningByIdQueryVariables>;
export const QueryVendorByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryVendorById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"vendorId"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"einNumber"}},{"kind":"Field","name":{"kind":"Name","value":"paymentTerms"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine3"}},{"kind":"Field","name":{"kind":"Name","value":"authSignName"}},{"kind":"Field","name":{"kind":"Name","value":"authSignEmail"}},{"kind":"Field","name":{"kind":"Name","value":"authSignDesig"}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"routingNumber"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine3"}}]}},{"kind":"Field","name":{"kind":"Name","value":"openings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"endClient"}},{"kind":"Field","name":{"kind":"Name","value":"suggestedRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"otRate"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"joinings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"candidate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"candidateRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentTerms"}},{"kind":"Field","name":{"kind":"Name","value":"actualStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"joiningDate"}}]}}]}}]}}]}}]} as unknown as DocumentNode<QueryVendorByIdQuery, QueryVendorByIdQueryVariables>;
export const QueryVendorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryVendor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageNum"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"authSignName"}},{"kind":"Field","name":{"kind":"Name","value":"paymentTerms"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<QueryVendorQuery, QueryVendorQueryVariables>;