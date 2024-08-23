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
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
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
  profile?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
};

export type CandidateInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['PhoneNumber']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  personalEmail?: InputMaybe<Scalars['EmailAddress']['input']>;
  profile?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type CandidateJoining = {
  __typename?: 'CandidateJoining';
  candidate?: Maybe<Candidate>;
  joinings?: Maybe<Array<Maybe<JoiningOpening>>>;
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
  logo?: InputMaybe<Scalars['Upload']['input']>;
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

export type CompanyJoining = {
  __typename?: 'CompanyJoining';
  candidate?: Maybe<Candidate>;
  vendor?: Maybe<Vendor>;
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

export type DocumentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Documents = {
  __typename?: 'Documents';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ObjectID']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['ObjectID']['output']>;
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
  timesheetApprover?: InputMaybe<PersonInput>;
  vendor: Scalars['ObjectID']['input'];
  vendorAcctSpoc?: InputMaybe<PersonInput>;
  vendorRate: RateInput;
  vendorSpoc?: InputMaybe<PersonInput>;
};

export type JoiningOpening = {
  __typename?: 'JoiningOpening';
  joining?: Maybe<Joining>;
  opening?: Maybe<Opening>;
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
  addDocument?: Maybe<Scalars['ObjectID']['output']>;
  addJoining?: Maybe<Scalars['ObjectID']['output']>;
  addOpening?: Maybe<Scalars['ObjectID']['output']>;
  addSecret?: Maybe<Scalars['String']['output']>;
  addUser?: Maybe<Scalars['String']['output']>;
  addVendor?: Maybe<Scalars['ObjectID']['output']>;
  deleteDocument?: Maybe<Scalars['String']['output']>;
  deleteSecret?: Maybe<Scalars['String']['output']>;
  deleteUser?: Maybe<Scalars['String']['output']>;
  updateCandidate?: Maybe<Scalars['String']['output']>;
  updateClient?: Maybe<Scalars['String']['output']>;
  updateCompany?: Maybe<Scalars['String']['output']>;
  updateDocument?: Maybe<Scalars['String']['output']>;
  updateJoining?: Maybe<Scalars['String']['output']>;
  updateOpening?: Maybe<Scalars['String']['output']>;
  updateSecret?: Maybe<Scalars['String']['output']>;
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


export type MutationAddDocumentArgs = {
  data: DocumentInput;
  ownerId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddJoiningArgs = {
  data?: InputMaybe<JoiningInput>;
  openingId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddOpeningArgs = {
  data: OpeningInput;
  vendorId: Scalars['String']['input'];
};


export type MutationAddSecretArgs = {
  data: VaultInput;
};


export type MutationAddUserArgs = {
  data: UserInput;
};


export type MutationAddVendorArgs = {
  data?: InputMaybe<VendorInput>;
};


export type MutationDeleteDocumentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteSecretArgs = {
  id: Scalars['String']['input'];
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


export type MutationUpdateDocumentArgs = {
  data: DocumentInput;
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


export type MutationUpdateSecretArgs = {
  data: VaultInput;
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
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  suggestedRate?: Maybe<Rate>;
};

export type OpeningInput = {
  endClient?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
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

export type PaginatedDocuments = {
  __typename?: 'PaginatedDocuments';
  results?: Maybe<Array<Documents>>;
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

export type PaginatedVault = {
  __typename?: 'PaginatedVault';
  results?: Maybe<Array<Vault>>;
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
  documents?: Maybe<PaginatedDocuments>;
  getTimeSheet?: Maybe<TimeSheet>;
  joining?: Maybe<Joining>;
  joiningByBank?: Maybe<Array<Maybe<CompanyJoining>>>;
  joiningByCandidate?: Maybe<CandidateJoining>;
  login?: Maybe<LoginResponse>;
  opening: Opening;
  searchCandidate?: Maybe<Array<Maybe<Candidate>>>;
  searchClient?: Maybe<Array<Maybe<Client>>>;
  searchCompany?: Maybe<Array<Maybe<Client>>>;
  secret?: Maybe<Vault>;
  secrets: PaginatedVault;
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


export type QueryDocumentsArgs = {
  ownerId: Scalars['String']['input'];
  pageNum?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTimeSheetArgs = {
  candidate?: InputMaybe<Scalars['ID']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJoiningArgs = {
  id?: InputMaybe<Scalars['ObjectID']['input']>;
};


export type QueryJoiningByBankArgs = {
  companyId?: InputMaybe<Scalars['ObjectID']['input']>;
};


export type QueryJoiningByCandidateArgs = {
  candidateId?: InputMaybe<Scalars['ObjectID']['input']>;
  openingId?: InputMaybe<Scalars['ObjectID']['input']>;
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


export type QuerySecretArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySecretsArgs = {
  pageNum?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
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

export type Vault = {
  __typename?: 'Vault';
  description?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type VaultInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
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


export const SearchCandidateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchCandidate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCandidate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<SearchCandidateQuery, SearchCandidateQueryVariables>;
export const SearchCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}}]}}]} as unknown as DocumentNode<SearchCompanyQuery, SearchCompanyQueryVariables>;
export const QueryCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageNum"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"ownerName"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bankName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<QueryCompanyQuery, QueryCompanyQueryVariables>;
export const LoginQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LoginQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<LoginQueryQuery, LoginQueryQueryVariables>;
export const UpdateTimeSheetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTimeSheet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TimeSheetInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTimeSheet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UpdateTimeSheetMutation, UpdateTimeSheetMutationVariables>;
export const QueryBasicCandidateByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryBasicCandidateById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"candidate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<QueryBasicCandidateByIdQuery, QueryBasicCandidateByIdQueryVariables>;
export const QueryTimeSheetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryTimeSheet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"month"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"candidate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTimeSheet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"month"},"value":{"kind":"Variable","name":{"kind":"Name","value":"month"}}},{"kind":"Argument","name":{"kind":"Name","value":"candidate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"candidate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timeSheet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"standardHours"}},{"kind":"Field","name":{"kind":"Name","value":"OTHours"}}]}},{"kind":"Field","name":{"kind":"Name","value":"submissionDate"}},{"kind":"Field","name":{"kind":"Name","value":"approvalDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<QueryTimeSheetQuery, QueryTimeSheetQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}}]}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const QueryUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageNum"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<QueryUserQuery, QueryUserQueryVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;