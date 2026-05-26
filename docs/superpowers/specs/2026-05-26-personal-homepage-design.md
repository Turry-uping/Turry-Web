# Personal Homepage Design

## Goal

Build a single-page personal homepage for Wang Baozhong that introduces his background, skills, projects, experience, and contact information. The page should feel cold, technical, and precise. Football and motion elements should support memorability, but the site must remain a professional self-introduction page first.

## Audience

The page is for general personal presentation: classmates, teachers, recruiters, collaborators, and people who want a quick sense of who Wang Baozhong is. It should be useful without needing prior context from the resume.

## Source Content

The content is derived from the resume at `E:\就业\简历\简历v1_with_6\简历_op_v2.pdf`.

Primary identity:

- Name: Wang Baozhong / 王保忠
- Positioning: Surveying Engineering master's student; C++ high-performance systems; GNSS/INS integrated navigation; GIS and deep learning background
- Contact: 18553498689, turrybaozhongw@163.com

Important background:

- M.S. in Surveying Engineering, China University of Petroleum (East China), 2024.09-2027.06
- Joint training at China Research Institute of Radiowave Propagation / CETC 22nd Research Institute, 2025.09-2027.01
- B.S. in Geographic Information Science, China University of Petroleum (East China), 2020.09-2024.06
- CPC member, scholarships, excellent graduate student, excellent student cadre, excellent CPC member, excellent undergraduate thesis, and related honors

Core technical themes:

- C++17, STL, Linux system programming
- TCP/IP, Socket programming, Reactor model, epoll, multithreading, synchronization
- Data structures including linked list, red-black tree, hash table, array, binary tree, and sorting
- Memory pool, thread pool, high-performance server architecture
- MATLAB, Python deep learning environment, BERT/LERT/BiLSTM/CRF, GIS, GNSS navigation

Featured projects:

- High-performance enterprise KV storage engine
- Adaptive unscented Kalman filter based on improved Harris Hawks optimization
- Chinese fine-grained geographic named entity recognition model with representation enhancement

## Experience Shape

The homepage will be a single vertical scroll page with five main sections:

1. Hero
2. Capability radar
3. Core projects
4. Experience timeline
5. Contact and closing interaction

Navigation should be fixed or sticky and allow quick jumps between sections. The first screen should immediately communicate name, technical identity, and the cold-tech visual direction.

## Visual Direction

The dominant style is cold high-tech:

- Deep black or near-black background
- Subtle steel blue, cyan, and white highlights
- Fine grid lines, scan lines, coordinate ticks, and thin borders
- Sharp, compact panels rather than rounded decorative cards
- Minimal color accents from football pitch lines, kept muted and technical

Football elements must be integrated as abstract motion and field geometry:

- Low-opacity football pitch lines in the hero background
- Ball trajectory arcs as particle or line animation
- A small football object used as an interaction trigger
- Project and skill visuals may reference scoreboards, tactical boards, or performance metrics, but should not become a sports game interface

The page should not use cute, cartoon, warm, or casual football styling.

## Section Design

### Hero

Purpose: introduce the person in the first few seconds.

Content:

- Large name: 王保忠
- English/technical line: C++ High-Performance Systems / GNSS Integrated Navigation / GIS + AI
- Short Chinese summary: 测绘工程硕士，聚焦高性能服务端、组合导航与地理智能。
- Primary actions: View Projects, Contact

Visual and interaction:

- Full-viewport dark background with animated grid and subtle pitch-line geometry
- Animated trajectory line that suggests a football shot or navigation path
- A small interactive football indicator that can be clicked to trigger a brief shot-path animation
- The next section should be partially hinted below the fold so the page does not feel like a static poster

### Capability Radar

Purpose: summarize skill areas in a scannable way.

Content groups:

- Systems: C++17, STL, Linux, multithreading, synchronization
- Network: TCP/IP, Socket, Reactor, epoll
- Performance: memory pool, thread pool, high-concurrency architecture
- Navigation: GNSS/INS, factor graph, Kalman filtering
- AI/GIS: BERT, LERT, BiLSTM, CRF, GIS, geographic entity recognition
- Tools: MATLAB, Python deep learning environment

Visual:

- Radar or hexagonal stat panel inspired by athlete performance analysis
- Compact metric chips for key technologies
- No exaggerated self-rating numbers unless clearly presented as thematic visualization

### Core Projects

Purpose: show technical depth through three strong project cards.

Project 1: High-performance enterprise KV storage engine

- Emphasize C++17, Reactor, epoll, RESP protocol, memory pool, AOF/RDB persistence, master-slave sync, mmap, eBPF, RDMA
- Highlight independently implemented red-black tree, hash table, and array
- Highlight Chunk-based fixed-size memory pool and recovery design

Project 2: Adaptive UKF based on improved Harris Hawks optimization

- Emphasize GNSS/INS loose-coupled navigation error accumulation
- Highlight MHHO-based adaptive UKF
- Mention Gaussian mixture and heavy-tailed impulsive noise simulation
- Mention Monte Carlo experiments and PSINS vehicle measured data validation

Project 3: Chinese fine-grained geographic named entity recognition

- Emphasize BERT, LERT, BiLSTM, CRF, representation enhancement, Scrapy, jieba, BIOE/BEMS
- Highlight 2.9 million Weibo data crawl, data cleaning, and 4,000 manually labeled TrafficNER samples
- Mention SCI submission status carefully as "SCI manuscript under submission" rather than accepted publication

Visual:

- Each project appears as a system module panel with tech stack, role, and result
- Hover states can reveal deeper technical details
- Small animated circuit/trajectory accents are allowed

### Experience Timeline

Purpose: make education, internship, research training, and leadership easy to understand.

Content:

- 2020.09-2024.06: B.S. Geographic Information Science, China University of Petroleum (East China)
- 2024.07-2024.09: Software Development Intern, Beijing Yuanwang Jingsheng Technology Development Co., Ltd.
- 2024.09-2027.06: M.S. Surveying Engineering, China University of Petroleum (East China)
- 2025.09-2027.01: Integrated Navigation Algorithm Engineer / Joint Training, CETC 22nd Research Institute
- Campus leadership: Student Union Sports and Culture Department Minister; College Party Branch Secretary

Visual:

- Chronological vertical line with coordinate markers
- Important nodes can use short labels such as "Education", "Research", "Internship", and "Leadership"
- Student leadership should be included but visually secondary to technical and academic identity

### Contact And Closing

Purpose: make it easy to reach him and leave a memorable closing impression.

Content:

- Phone: 18553498689
- Email: turrybaozhongw@163.com
- Short closing line: 面向复杂系统，追求稳定、精确与高性能。

Interaction:

- Copy email button
- Copy phone button
- Optional final football shot animation that travels along a pitch/navigation path and lands near the contact panel

## Architecture

Use a simple static frontend unless later implementation planning finds a strong reason for a framework.

Recommended implementation structure:

- `index.html`: semantic content and section layout
- `styles.css`: visual system, responsive layout, animation
- `script.js`: navigation behavior, football shot animation, copy actions, and small interaction state

This keeps the first version easy to inspect, deploy, and modify. The project can later migrate to React/Vite if the interaction scope grows.

## Data Flow

All content can be stored directly in the HTML for the first version. JavaScript should only handle UI behavior:

- Scroll navigation
- Hero football trajectory animation
- Project card hover/focus expansion
- Copy-to-clipboard actions

No backend, database, or remote API is required.

## Responsiveness

The site must work on desktop and mobile:

- Desktop: immersive hero, side-by-side panels where space allows, denser project information
- Mobile: stacked sections, compact navigation, readable cards, reduced animation intensity
- Text must not overlap panels or controls
- Interactive targets must remain usable on touch screens

## Accessibility

- Use semantic headings and section landmarks
- Maintain strong contrast on dark backgrounds
- Respect reduced motion preferences by disabling or simplifying non-essential animations
- Buttons must have accessible labels
- Copy actions should give visible feedback

## Error Handling

The page has no backend errors. UI edge cases:

- If clipboard copy fails, show a fallback message telling the user to copy manually
- If JavaScript is disabled, core content remains visible and navigable as a static page
- Animations should not block reading or navigation

## Testing And Verification

Implementation should be verified with:

- Manual desktop viewport check
- Manual mobile viewport check
- Browser inspection that all sections are reachable
- Copy email and phone interactions
- Reduced-motion behavior
- Visual check that football elements support the personal homepage rather than overpowering it

## Out Of Scope For First Version

- Full football mini-game
- Backend analytics
- Blog system
- Content management system
- User accounts or comments
- Downloadable generated resume
- Real-time data integrations

## Success Criteria

The first version is successful if:

- Visitors understand who Wang Baozhong is within the first screen
- The site clearly presents education, skills, projects, experience, and contact information
- The cold-tech visual direction feels coherent
- Football elements are memorable but secondary
- The page is responsive and usable on desktop and mobile
- The implementation remains simple enough for future edits
