import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Participant1,
  Participant2,
  Participant3,
  Participant4,
  Participant5,
  Speaker1,
  Speaker2,
  Speaker3,
} from '../../assets';

type Event = {
  chatType: 'main-event' | 'room';
  content: string;
  eventName: string;
  eventNumber: number;
  label: string;
  presenters: number;
  title: string;
  jpeg?: string;
  viewers?: number;
};

const s1 = { video: Speaker1, name: 'Lita Sherman' };
const s2 = { video: Speaker2, name: 'Zach Costello' };
const s3 = { video: Speaker3, name: 'Tyler Stevens' };
const s4 = { video: Speaker1, name: 'Lita Sherman' };
const s5 = { video: Speaker2, name: 'Zach Costello' };
const s6 = { video: Speaker3, name: 'Tyler Stevens' };
const p1 = { video: Participant1, name: 'Kirk Purdie' };
const p2 = { video: Participant2, name: 'Halide Nursultan' };
const p3 = { video: Participant3, name: 'Khalid Ignác' };
const p4 = { video: Participant4, name: 'Jaana Kirstie' };
const p5 = { video: Participant5, name: 'Neal Sameera' };

export const getParticipantOrder = (number?: number) => {
  switch (number) {
    case 0:
      return { 0: s1, 1: p1, 2: p2, 3: p3, 4: p4, 5: p5 };

    case 1:
      return { 0: s2, 1: p2, 2: p3, 3: p4, 4: p5, 5: p1 };

    case 2:
      return { 0: s3, 1: p3, 2: p4, 3: p5, 4: p1, 5: p2 };

    case 3:
      return { 0: s4, 1: p4, 2: p5, 3: p1, 4: p2, 5: p3 };

    case 4:
      return { 0: s5, 1: p5, 2: p1, 3: p2, 4: p3, 5: p4 };

    default:
      return { 0: s6, 1: p1, 2: p2, 3: p3, 4: p4, 5: p5 };
  }
};

export const mainEvents: Event[] = [
  {
    chatType: "main-event",
    content:
      "Millions of American lives are impacted daily by mental health conditions.",
    eventName: "cybersecurity",
    eventNumber: 0,
    jpeg: Card1,
    label: "Moderated",
    presenters: 6,
    title: "Mental Health Awareness Month",
    viewers: 150,
  },
  {
    chatType: "main-event",
    content:
      "Millions of American lives are impacted daily by mental health conditions.",
    eventName: "data",
    eventNumber: 1,
    jpeg: Card4,
    label: "Open",
    presenters: 1,
    title: "Mental Health Awareness Month",
    viewers: 150,
  },
  {
    chatType: "main-event",
    content:
      "Millions of American lives are impacted daily by mental health conditions.",
    eventName: "roi",
    eventNumber: 2,
    jpeg: Card1,
    label: "04 June 2021, 09:00 AM MT",
    presenters: 2,
    title: "Mental Health Awareness Month",
  },
  {
    chatType: "main-event",
    content:
      "Millions of American lives are impacted daily by mental health conditions.",
    eventName: "data",
    eventNumber: 3,
    jpeg: Card4,
    label: "04 June 2021, 11:00 AM MT",
    presenters: 2,
    title: "Mental Health Awareness Month",
  },
];

export const rooms: Event[] = [
  {
    chatType: "room",
    content: "Start your day with healthy morning vibe",
    eventName: "esg",
    eventNumber: 0,
    jpeg: Card1,
    label: "Private",
    presenters: 2,
    title: "Start your day with healthy morning vibe",
    viewers: 150,
  },
  {
    chatType: "room",
    content:
      "Millions of American lives are impacted daily by mental health conditions.",
    eventName: "qa",
    eventNumber: 1,
    jpeg: Card4,
    label: "Moderated",
    presenters: 6,
    title: "Mental Health Awareness Month",
    viewers: 150,
  },
  {
    chatType: "room",
    content:
      "Millions of American lives are impacted daily by mental health conditions.",
    eventName: "git",
    eventNumber: 2,
    jpeg: Card1,
    label: "Moderated",
    presenters: 2,
    title: "National Children’s Mental Health Awareness Day",
    viewers: 86,
  },
  {
    chatType: "room",
    content:
      "Millions of American lives are impacted daily by mental health conditions.",
    eventName: "entertainment",
    eventNumber: 3,
    jpeg: Card4,
    label: "Open",
    presenters: 6,
    title: "Suicide Prevention Awareness Month",
    viewers: 150,
  },
  {
    chatType: "room",
    content:
      "Millions of American lives are impacted daily by mental health conditions.",
    eventName: "tools",
    eventNumber: 4,
    jpeg: Card1,
    label: "Closed",
    presenters: 5,
    title: "Suicide Prevention Awareness Month",
    viewers: 100,
  },
  {
    chatType: "room",
    content:
      "Millions of American lives are impacted daily by mental health conditions.",
    eventName: "roi",
    eventNumber: 5,
    jpeg: Card4,
    label: "Open",
    presenters: 6,
    title: "Suicide Prevention Awareness Month",
    viewers: 150,
  },
];
