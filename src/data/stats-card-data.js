import {
  BanknotesIcon,
  ArchiveBoxIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Today's Sales",
    value: "$10k",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: ArchiveBoxIcon,
    title: "Today's Orders",
    value: "90",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: ArrowUturnLeftIcon,
    title: "Return Orders",
    value: "15",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
