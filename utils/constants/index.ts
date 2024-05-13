export const LOCAL = false;

export const ROUTES = {
  SIGN_UP: "/sign-up",
  SIGN_IN: "/sign-in",
  VERIFICATION: "/verification",
  REGISTRATION_TYPE: "/registration-type",
  ORGANIZATION_REGISTRATION: "/register-organization",
  APPLY: "/apply",
  CALENDAR: "/calendar",
  REQUESTS: "/requests",
  ENTITLEMENT: "/entitlement",
  DASHBOARD: "/dashboard",
  REPORTS: "/reports",
  BILLING: "/billing",
};

export const PROTECTED_ROUTES = [
  ROUTES.APPLY,
  ROUTES.CALENDAR,
  ROUTES.REQUESTS,
  ROUTES.ENTITLEMENT,
  ROUTES.DASHBOARD,
  ROUTES.REPORTS,
  ROUTES.BILLING,
];

export const AUTH_ROUTES = [
  ROUTES.SIGN_UP,
  ROUTES.SIGN_IN,
  ROUTES.VERIFICATION,
  ROUTES.REGISTRATION_TYPE,
  ROUTES.ORGANIZATION_REGISTRATION,
];

export const AUTH_BASE_URL = process.env.NEXT_PUBLIC_AUTH_BASE_URL;

export const ORG_SIZE_OPTIONS = [
  {
    value: "0-10",
    label: "0-10",
  },
  { value: "11-50", label: "11-50" },
  {
    value: "51-200",
    label: "51-200",
  },
  {
    value: "201-1000",
    label: "201-1000",
  },
  {
    value: "1000+",
    label: "1000+",
  },
];

export const COUNTRIES = [
  { label: "Afghanistan", value: "Afghanistan" },
  { label: "Albania", value: "Albania" },
  { label: "Algeria", value: "Algeria" },
  { label: "Andorra", value: "Andorra" },
  { label: "Angola", value: "Angola" },
  { label: "Antigua and Barbuda", value: "Antigua and Barbuda" },
  { label: "Argentina", value: "Argentina" },
  { label: "Armenia", value: "Armenia" },
  { label: "Australia", value: "Australia" },
  { label: "Austria", value: "Austria" },
  { label: "Azerbaijan", value: "Azerbaijan" },
  { label: "Bahamas", value: "Bahamas" },
  { label: "Bahrain", value: "Bahrain" },
  { label: "Bangladesh", value: "Bangladesh" },
  { label: "Barbados", value: "Barbados" },
  { label: "Belarus", value: "Belarus" },
  { label: "Belgium", value: "Belgium" },
  { label: "Belize", value: "Belize" },
  { label: "Benin", value: "Benin" },
  { label: "Bhutan", value: "Bhutan" },
  { label: "Bolivia", value: "Bolivia" },
  { label: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina" },
  { label: "Botswana", value: "Botswana" },
  { label: "Brazil", value: "Brazil" },
  { label: "Brunei Darussalam", value: "Brunei Darussalam" },
  { label: "Bulgaria", value: "Bulgaria" },
  { label: "Burkina Faso", value: "Burkina Faso" },
  { label: "Burundi", value: "Burundi" },
  { label: "Cabo Verde", value: "Cabo Verde" },
  { label: "Cambodia", value: "Cambodia" },
  { label: "Cameroon", value: "Cameroon" },
  { label: "Canada", value: "Canada" },
  { label: "Central African Republic", value: "Central African Republic" },
  { label: "Chad", value: "Chad" },
  { label: "Chile", value: "Chile" },
  { label: "China", value: "China" },
  { label: "Colombia", value: "Colombia" },
  { label: "Comoros", value: "Comoros" },
  { label: "Congo", value: "Congo" },
  { label: "Costa Rica", value: "Costa Rica" },
  { label: "Croatia", value: "Croatia" },
  { label: "Cuba", value: "Cuba" },
  { label: "Cyprus", value: "Cyprus" },
  { label: "Czech Republic", value: "Czech Republic" },
  { label: "Denmark", value: "Denmark" },
  { label: "Djibouti", value: "Djibouti" },
  { label: "Dominica", value: "Dominica" },
  { label: "Dominican Republic", value: "Dominican Republic" },
  { label: "Ecuador", value: "Ecuador" },
  { label: "Egypt", value: "Egypt" },
  { label: "El Salvador", value: "El Salvador" },
  { label: "Equatorial Guinea", value: "Equatorial Guinea" },
  { label: "Eritrea", value: "Eritrea" },
  { label: "Estonia", value: "Estonia" },
  { label: "Eswatini", value: "Eswatini" },
  { label: "Ethiopia", value: "Ethiopia" },
  { label: "Fiji", value: "Fiji" },
  { label: "Finland", value: "Finland" },
  { label: "France", value: "France" },
  { label: "Gabon", value: "Gabon" },
  { label: "Gambia", value: "Gambia" },
  { label: "Georgia", value: "Georgia" },
  { label: "Germany", value: "Germany" },
  { label: "Ghana", value: "Ghana" },
  { label: "Greece", value: "Greece" },
  { label: "Grenada", value: "Grenada" },
  { label: "Guatemala", value: "Guatemala" },
  { label: "Guinea", value: "Guinea" },
  { label: "Guinea-Bissau", value: "Guinea-Bissau" },
  { label: "Guyana", value: "Guyana" },
  { label: "Haiti", value: "Haiti" },
  { label: "Honduras", value: "Honduras" },
  { label: "Hungary", value: "Hungary" },
  { label: "Iceland", value: "Iceland" },
  { label: "India", value: "India" },
  { label: "Indonesia", value: "Indonesia" },
  { label: "Iran", value: "Iran" },
  { label: "Iraq", value: "Iraq" },
  { label: "Ireland", value: "Ireland" },
  { label: "Israel", value: "Israel" },
  { label: "Italy", value: "Italy" },
  { label: "Jamaica", value: "Jamaica" },
  { label: "Japan", value: "Japan" },
  { label: "Jordan", value: "Jordan" },
  { label: "Kazakhstan", value: "Kazakhstan" },
  { label: "Kenya", value: "Kenya" },
  { label: "Kiribati", value: "Kiribati" },
  { label: "Korea", value: "Korea" },
  { label: "Kuwait", value: "Kuwait" },
  { label: "Kyrgyzstan", value: "Kyrgyzstan" },
  {
    label: "Lao People's Democratic Republic",
    value: "Lao People's Democratic Republic",
  },
  { label: "Latvia", value: "Latvia" },
  { label: "Lebanon", value: "Lebanon" },
  { label: "Lesotho", value: "Lesotho" },
  { label: "Liberia", value: "Liberia" },
  { label: "Libya", value: "Libya" },
  { label: "Liechtenstein", value: "Liechtenstein" },
  { label: "Lithuania", value: "Lithuania" },
  { label: "Luxembourg", value: "Luxembourg" },
  { label: "Madagascar", value: "Madagascar" },
  { label: "Malawi", value: "Malawi" },
  { label: "Malaysia", value: "Malaysia" },
  { label: "Maldives", value: "Maldives" },
  { label: "Mali", value: "Mali" },
  { label: "Malta", value: "Malta" },
  { label: "Marshall Islands", value: "Marshall Islands" },
  { label: "Mauritania", value: "Mauritania" },
  { label: "Mauritius", value: "Mauritius" },
  { label: "Mexico", value: "Mexico" },
  { label: "Micronesia", value: "Micronesia" },
  { label: "Moldova", value: "Moldova" },
  { label: "Monaco", value: "Monaco" },
  { label: "Mongolia", value: "Mongolia" },
  { label: "Montenegro", value: "Montenegro" },
  { label: "Morocco", value: "Morocco" },
  { label: "Mozambique", value: "Mozambique" },
  { label: "Myanmar", value: "Myanmar" },
  { label: "Namibia", value: "Namibia" },
  { label: "Nauru", value: "Nauru" },
  { label: "Nepal", value: "Nepal" },
  { label: "Netherlands", value: "Netherlands" },
  { label: "New Zealand", value: "New Zealand" },
  { label: "Nicaragua", value: "Nicaragua" },
  { label: "Niger", value: "Niger" },
  { label: "Nigeria", value: "Nigeria" },
  { label: "North Macedonia", value: "North Macedonia" },
  { label: "Norway", value: "Norway" },
  { label: "Oman", value: "Oman" },
  { label: "Pakistan", value: "Pakistan" },
  { label: "Palau", value: "Palau" },
  { label: "Palestine", value: "Palestine" },
  { label: "Panama", value: "Panama" },
  { label: "Papua New Guinea", value: "Papua New Guinea" },
  { label: "Paraguay", value: "Paraguay" },
  { label: "Peru", value: "Peru" },
  { label: "Philippines", value: "Philippines" },
  { label: "Poland", value: "Poland" },
  { label: "Portugal", value: "Portugal" },
  { label: "Qatar", value: "Qatar" },
  { label: "Romania", value: "Romania" },
  { label: "Russia", value: "Russia" },
  { label: "Rwanda", value: "Rwanda" },
  { label: "Saint Kitts and Nevis", value: "Saint Kitts and Nevis" },
  { label: "Saint Lucia", value: "Saint Lucia" },
  {
    label: "Saint Vincent and the Grenadines",
    value: "Saint Vincent and the Grenadines",
  },
  { label: "Samoa", value: "Samoa" },
  { label: "San Marino", value: "San Marino" },
  { label: "Sao Tome and Principe", value: "Sao Tome and Principe" },
  { label: "Saudi Arabia", value: "Saudi Arabia" },
  { label: "Senegal", value: "Senegal" },
  { label: "Serbia", value: "Serbia" },
  { label: "Seychelles", value: "Seychelles" },
  { label: "Sierra Leone", value: "Sierra Leone" },
  { label: "Singapore", value: "Singapore" },
  { label: "Slovakia", value: "Slovakia" },
  { label: "Slovenia", value: "Slovenia" },
  { label: "Solomon Islands", value: "Solomon Islands" },
  { label: "Somalia", value: "Somalia" },
  { label: "South Africa", value: "South Africa" },
  { label: "South Sudan", value: "South Sudan" },
  { label: "Spain", value: "Spain" },
  { label: "Sri Lanka", value: "Sri Lanka" },
  { label: "Sudan", value: "Sudan" },
  { label: "Suriname", value: "Suriname" },
  { label: "Sweden", value: "Sweden" },
  { label: "Switzerland", value: "Switzerland" },
  { label: "Syrian Arab Republic", value: "Syrian Arab Republic" },
  { label: "Tajikistan", value: "Tajikistan" },
  { label: "Tanzania", value: "Tanzania" },
  { label: "Thailand", value: "Thailand" },
  { label: "Timor-Leste", value: "Timor-Leste" },
  { label: "Togo", value: "Togo" },
  { label: "Tonga", value: "Tonga" },
  { label: "Trinidad and Tobago", value: "Trinidad and Tobago" },
  { label: "Tunisia", value: "Tunisia" },
  { label: "Turkey", value: "Turkey" },
  { label: "Turkmenistan", value: "Turkmenistan" },
  { label: "Tuvalu", value: "Tuvalu" },
  { label: "Uganda", value: "Uganda" },
  { label: "Ukraine", value: "Ukraine" },
  { label: "United Arab Emirates", value: "United Arab Emirates" },
  { label: "United Kingdom", value: "United Kingdom" },
  { label: "United States", value: "United States" },
  { label: "Uruguay", value: "Uruguay" },
  { label: "Uzbekistan", value: "Uzbekistan" },
  { label: "Vanuatu", value: "Vanuatu" },
  { label: "Vatican City", value: "Vatican City" },
  { label: "Venezuela", value: "Venezuela" },
  { label: "Viet Nam", value: "Viet Nam" },
  { label: "Zambia", value: "Zambia" },
  { label: "Zimbabwe", value: "Zimbabwe" },
];

export const TIMEZONES = [
  { label: "Eniwetok, Kwajalein", value: "-12:00" },
  { label: "Midway Island, Samoa", value: "-11:00" },
  { label: "Hawaii", value: "-10:00" },
  { label: "Taiohae", value: "-09:50" },
  { label: "Alaska", value: "-09:00" },
  { label: "Pacific Time (US & Canada)", value: "-08:00" },
  { label: "Mountain Time (US & Canada)", value: "-07:00" },
  { label: "Central Time (US & Canada), Mexico City", value: "-06:00" },
  { label: "Eastern Time (US & Canada), Bogota, Lima", value: "-05:00" },
  { label: "Caracas", value: "-04:50" },
  { label: "Atlantic Time (Canada), Caracas, La Paz", value: "-04:00" },
  { label: "Newfoundland", value: "-03:50" },
  { label: "Brazil, Buenos Aires, Georgetown", value: "-03:00" },
  { label: "Mid-Atlantic", value: "-02:00" },
  { label: "Azores, Cape Verde Islands", value: "-01:00" },
  { label: "Western Europe Time, London, Lisbon, Casablanca", value: "+00:00" },
  { label: "Brussels, Copenhagen, Madrid, Paris", value: "+01:00" },
  { label: "Kaliningrad, South Africa", value: "+02:00" },
  { label: "Baghdad, Riyadh, Moscow, St. Petersburg", value: "+03:00" },
  { label: "Tehran", value: "+03:50" },
  { label: "Abu Dhabi, Muscat, Baku, Tbilisi", value: "+04:00" },
  { label: "Kabul", value: "+04:50" },
  { label: "Islamabad, Karachi, Ekaterinburg, Tashkent", value: "+05:00" },
  { label: "Bombay, Calcutta, Madras, New Delhi", value: "+05:50" },
  { label: "Kathmandu, Pokhara", value: "+05:75" },
  { label: "Almaty, Dhaka, Colombo", value: "+06:00" },
  { label: "Yangon, Mandalay", value: "+06:50" },
  { label: "Bangkok, Hanoi, Jakarta", value: "+07:00" },
  { label: "Beijing, Perth, Singapore, Hong Kong", value: "+08:00" },
  { label: "Eucla", value: "+08:75" },
  { label: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk", value: "+09:00" },
  { label: "Adelaide, Darwin", value: "+09:50" },
  { label: "Eastern Australia, Guam, Vladivostok", value: "+10:00" },
  { label: "Lord Howe Island", value: "+10:50" },
  { label: "Magadan, Solomon Islands, New Caledonia", value: "+11:00" },
  { label: "Norfolk Island", value: "+11:50" },
  { label: "Auckland, Wellington, Fiji, Kamchatka", value: "+12:00" },
  { label: "Chatham Islands", value: "+12:75" },
  { label: "Apia, Nukualofa", value: "+13:00" },
  { label: "Line Islands, Tokelau", value: "+14:00" },
];
export const SOCIAL_LINKS = {
  GOOGLE: `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/google/login`,
  SLACK: `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/slack/login`,
};
