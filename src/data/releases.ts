// Copied from DevKit's CHANGELOG.md. Newest first; the first entry is shown as Latest.
export type ChangeCategory = 'Added' | 'Changed' | 'Fixed' | 'Removed';

export interface Change {
  title: string;
  body: string;
}

export interface Release {
  version: string;
  build: number;
  date: string;
  // Placeholder until builds are hosted.
  downloadHref: string;
  changes: Partial<Record<ChangeCategory, Change[]>>;
}

export const releases: Release[] = [
  {
    version: '0.33.2',
    build: 73,
    date: '2026-09-25',
    downloadHref: '#',
    changes: {
      Changed: [
        {
          title: 'Save on belt click is off to begin with, and says what it costs.',
          body: "An icon that writes a file the moment it is clicked is not what the rest of the belt does, so it is now something you turn on rather than something you discover. Switched on, Replay's settings say plainly that a click saves with nothing to confirm, and that the panel moves to a right-click in place of the belt's usual menu.",
        },
      ],
    },
  },
  {
    version: '0.33.1',
    build: 72,
    date: '2026-09-25',
    downloadHref: '#',
    changes: {
      Fixed: [
        {
          title: 'Recording a shortcut from a tool panel works.',
          body: 'Clicking Shortcut started listening, but a tool panel is non-activating, so DevKit never came to the front and the chord went to whatever app was there instead. The field waited and nothing arrived. DevKit now takes the front for the moment it takes to read one chord.',
        },
      ],
    },
  },
  {
    version: '0.33.0',
    build: 71,
    date: '2026-09-25',
    downloadHref: '#',
    changes: {
      Added: [
        {
          title: 'Save on belt click is back, as a setting.',
          body: "Replay's gear has the switch again: on, a click on the belt icon saves the buffer and a right-click opens the panel; off, a click opens Replay and the icon keeps the belt's usual menu. The Saved confirmation beside the belt shows either way.",
        },
      ],
    },
  },
  {
    version: '0.32.1',
    build: 70,
    date: '2026-09-25',
    downloadHref: '#',
    changes: {
      Fixed: [
        {
          title: 'DevKit no longer crashes on launch.',
          body: 'It read its appearance setting onto the application before macOS had finished creating one, which on some Macs stopped the app dead before its first window. The appearance is applied once the application is there, which is where it was already being set a second time.',
        },
      ],
    },
  },
  {
    version: '0.32.0',
    build: 69,
    date: '2026-09-24',
    downloadHref: '#',
    changes: {
      Changed: [
        {
          title: 'A click on Replay opens it.',
          body: 'The belt icon no longer saves the buffer. A click opens the panel, and a right-click shows the same menu as every other tool: Open, Settings, Favorite, Pin, and the rest.',
        },
      ],
      Added: [
        {
          title: 'Saving Replay shows a short confirmation.',
          body: "A small \"Saved\" popup appears beside the belt, next to Replay's icon, and fades out after a second. It stays off the belt itself.",
        },
      ],
    },
  },
  {
    version: '0.31.1',
    build: 68,
    date: '2026-09-24',
    downloadHref: '#',
    changes: {
      Fixed: [
        {
          title: 'Opening a Stats row no longer shoves the panel for a frame.',
          body: 'The history graph was laid out inside the previous window height, so the rows jumped and then snapped back. The panel now takes the new height on the same turn the graph appears.',
        },
      ],
    },
  },
];
