export const committeeOptions = [
  {
    code: "FOMC",
    name: "Federal Open Market Committee",
    members: [
      "Amir Yaron", "Anna Paulson", "Elon Musk", "Javier Milei", "John C. Williams",
      "Kevin Maxwell Warsh", "Lisa D. Cook", "Michelle W. Bowman", "Neel Kashkari",
      "Pablo Hernández de Cos", "U.S. Department of the Treasury", "Zohran Kwame Mamdani",
    ],
  },
  {
    code: "BRICS",
    name: "BRICS",
    members: [
      "Brazil", "China", "Egypt", "Ethiopia", "Federal Reserve System", "India",
      "Indonesia", "International Monetary Fund", "Iran", "New Development Bank",
      "Russian Federation", "South Africa", "United Arab Emirates", "United States",
    ],
  },
  {
    code: "WTO",
    name: "World Trade Organization",
    members: [
      "Argentina", "Australia", "Bangladesh", "Brazil", "Canada", "China", "Ethiopia",
      "European Union", "India", "Japan", "Mexico", "Nigeria", "United Kingdom",
      "United States", "Venezuela", "Viet Nam",
    ],
  },
  {
    code: "HESOC",
    name: "Historical Economic and Social Council",
    members: [
      "Boris Yeltsin (Russia)", "Fernando Collor de Mello (Brazil)", "Fidel Castro (Cuba)",
      "François Mitterrand (France)", "George H. W. Bush (USA)", "Helmut Kohl (Germany)",
      "Jiang Zemin (China)", "John Major (UK)", "John Paul II (Holy See)",
      "Kiichi Miyazawa (Japan)", "Kim Il Sung (DPRK)", "King Fahd bin Abdulaziz Al Saud (Saudi Arabia)",
      "Lech Wałęsa (Poland)", "Nelson Mandela (South Africa)", "Roh Tae-woo (South Korea)",
      "Saddam Hussein (Iraq)", "Václav Havel (Czechoslovakia)",
    ],
  },
] as const;

export type CommitteeCode = (typeof committeeOptions)[number]["code"];

export function getCommittee(code: string) {
  return committeeOptions.find((committee) => committee.code === code);
}