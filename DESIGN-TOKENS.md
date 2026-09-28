# DevKit design tokens

Dark macOS-utility marketing site. Neutral canvas. Teal is a headline gradient, a faint hero glow, and inline links. Buttons, nav, cards, and section backgrounds stay gray.

Measured from cursor.com, discord.com, mac-stats.com, and platform.claude.com at a 1440px desktop width. The page shape follows mac-stats.com. Color discipline follows Cursor and Claude Platform.

## Color

| Token | Value | Use |
|---|---|---|
| `canvas` | `#111111` | Page background |
| `surface` | `#171717` | Cards and elevated panels |
| `text` | `#f4f4f1` | Headlines, card titles, primary button fill |
| `muted` | `#a3a3a3` | Body copy and nav links |
| `eyebrow` | `#737373` | Eyebrows, captions, footer |
| `hairline` | `rgba(255, 255, 255, 0.08)` | Borders, footer rule |
| `teal-a` | `#5eead4` | Gradient start, focus ring |
| `teal-b` | `#7dd3fc` | Gradient end |
| `glow` | `rgba(94, 234, 212, 0.12)` | One radial behind the hero, top center |
| `dot` | warm gray, about 30% opacity | Optional 1px dot grid, like Claude. Untinted |

Gradient, text only: `linear-gradient(90deg, #5eead4, #7dd3fc)`.

Primary button: fill `#f4f4f1`, label `#111111`. Secondary button: transparent fill, hairline border.

Light mode is later. Canvas `#f7f7f4`, ink `#1a1a1a`, same gradient used more sparingly. First version is dark.

## Type

Stack: `-apple-system, system-ui, sans-serif`.

| Token | Size | Weight | Tracking | Line height | Notes |
|---|---|---|---|---|---|
| `eyebrow` | 14px | 500 | `0.1em` | 1.4 | Uppercase |
| `display` | 72px | 600 | `-0.025em` | 1.1 | 40px below 800px. Centered. Gradient on one phrase only |
| `lede` | 18px | 400 | 0 | 1.6 | Max width 576px. Color `muted` |
| `section` | 30px | 600 | `-0.02em` | 1.2 | Centered |
| `card-title` | 16px | 600 | `-0.01em` | 1.3 | |
| `card-body` | 15px | 400 | 0 | 1.5 | Color `muted` |
| `nav` | 14px | 400 | 0 | 1 | Color `muted` |
| `button` | 15px | 500 | `-0.01em` | 1 | Nav pill may drop to 14px |

## Space

Base unit `8px`.

| Token | Value | Use |
|---|---|---|
| `gutter` | 24px | Page inset, each side |
| `col` | 896px | Centered text column |
| `frame` | 1120px | Product frame max width |
| `header` | 68px | Nav height |
| `hero-top` | 144px | Space above the eyebrow. 88px below 800px |
| `eyebrow-gap` | 24px | Eyebrow to headline |
| `lede-gap` | 24px | Headline to subcopy |
| `cta-gap` | 40px | Subcopy to button |
| `frame-gap` | 64px | Button to product frame |
| `section` | 128px | Space between sections. 96px below 800px |
| `grid-gap` | 32px | Tool cards, and between session steps |
| `card-pad` | 24px | Inside a tool card |
| `nav-gap` | 28px | Between nav links |

## Shape

| Token | Value | Use |
|---|---|---|
| `pill` | 999px | Primary and nav buttons |
| `card` | 16px | Tool cards and the product frame |
| `button-height` | 44px | Hero button. Padding `12px 28px` |
| `nav-button-height` | 32px | Download pill in the header. Padding `0 16px` |

## Layout

Header is transparent. Logo left, a few links centered, one light pill on the right.

Hero is centered in `col`. One eyebrow, one headline, one paragraph, Download for Mac, then “macOS 14 or later”.

Product frame sits under the hero, up to `frame` wide. One visual: the Utility Belt on a screen edge.

Tool grid is 3 columns inside `col`, gap `32px`. One column below 700px, two columns from 700px, three from 960px.

Session steps are a short list, gap `32px`, inside about 560px.

Footer carries version `0.33.2`, the macOS requirement, and quiet links. A hairline separates it from the page.

## Page content

- Nav: DevKit, Tools, How it works, Download.
- Headline phrase for the gradient: “screen edge” or “Utility Belt”. The rest of the headline stays `text`.
- Tools, one line each: Replay, Converter, Shrinker, Clipboard, Notes, Stats, Tasks.
- Session: press the edge, the belt slides in, a tool opens from its icon, Escape hides it, work continues.
- Footer: DevKit 0.33.2, macOS 14 or later.
- Writing style: Keep it concise but informative, do not conform to typical AI writing styles. For example "Every build, newest first." is a bad example.

## Reference measures

These are what the live sites were doing. DevKit uses the token tables above, which were taken from this set.

**cursor.com.** Canvas `#14120b`, text `#edecec`, accent `#f54e00` on links only. Primary button is the light text color. Column `1300px`, gutter `20px`, header `52px`. Hero padding `112px 20px 67px`. Headline `26px` / weight `400` / tracking `-0.325px`. `56px` from the buttons to a `4px`-radius product frame. Feature text column about `380px`. Spacing steps `2.5 / 5 / 10 / 15 / 20 / 30px`, vertical rhythm `22 / 34 / 45 / 56 / 67px`.

**discord.com.** Full-bleed indigo. Header `80px`. Hero padding `144px 0 125px`. Headline `56px` / weight `700` / uppercase / line-height `0.86` / tracking `-0.56px`, column `491px`. Body `20px / 26px`. Buttons `65px` tall, radius `12px`, `24px` apart. Feature stages `1240px` wide, radius `120px`, padding `28px`, column gap about `35px`, section padding `95–140px`. Color stays inside the illustrations.

**mac-stats.com.** Canvas `#111111`, system font. One blue-to-violet gradient on the phrase “your Mac’s menu bar”. Light pill button. Column `896px`, header `68px`. Eyebrow `14px` / weight `500` / tracking `1.4px`, then `24px`. Headline `72px` / weight `600` / tracking `-1.8px` / line-height `1.1`. Subcopy `18px` / line-height `1.625` / max `576px`, `24px` under the headline. Button `40px` under that: height `44px`, padding `12px 28px`, pill. Sections use `128px` bottom margin. Feature grid is 3 columns, `32px` gap, inside `896px`.

**platform.claude.com.** Canvas `#151515`, text `#f0efec`, muted `#c3c2b7`. Header `84px`. Dots are `1px` warm gray at 30% opacity. Headline `36px` / weight `500` / about `20ch`. `12px` to a `14px` subcopy, `40px` to the card. Card `448px`, padding `24px`, radius `32px`, border white at 10%. Button height `40px`, radius `10px`. Inline links are a soft blue, `#6da7ec`.
