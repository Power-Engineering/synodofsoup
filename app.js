// CREED & CONTROVERSY — app.js v3 Academic Edition
// Full confessional citations, council references, scholarly depth

const TOPICS = [

  // ══ AUTHORITY ══

  {
    id: 'sola-scriptura',
    name: 'Sola Scriptura',
    icon: '📖',
    controversy: 88,
    category: 'Authority',
    desc: 'Is Holy Scripture the sole infallible rule of faith and practice (norma normans non normata), or does Sacred Tradition possess co-equal magisterial authority alongside it?',
    subtopics: [
      { id: 'ss-authority', label: 'Scripture as final authority?' },
      { id: 'ss-tradition', label: 'Role of Tradition' },
      { id: 'ss-interpretation', label: 'Who interprets?' },
    ],
    denominations: [
      { name: 'Roman Catholic', stance: 'deny',
        position: 'The Council of Trent (Sess. IV, 1546) declared saving truth "is contained in the written books and in the unwritten traditions." Vatican II\'s Dei Verbum §9 teaches Scripture and Tradition "flow from the same divine wellspring." The Magisterium alone authentically interprets both (Dei Verbum §10). Crucially, the Church argues, the canon itself is known only through Tradition — making Tradition epistemically prior to Scripture.' },
      { name: 'Eastern Orthodox', stance: 'deny',
        position: 'Scripture exists within Tradition, not above it. Georges Florovsky\'s "The Authority of the Ancient Councils" (1972) argues Tradition is the living memory of the Holy Spirit in the Church. The Encyclical of the Eastern Patriarchs (1848) states: "the guardian of piety is the very body of the Church." The Bible was canonised by councils; to set it against Tradition is to saw off the branch on which one sits.' },
      { name: 'Lutheran', stance: 'affirm',
        position: 'Luther at the Diet of Worms (1521): "Unless I am convinced by Scripture and plain reason... my conscience is captive to the Word of God." The Augsburg Confession (1530), Art. XXVIII, subjects all church authority to Scripture. The Formula of Concord, Epitome (1577) establishes Scripture as the "only rule and norm according to which all doctrines and teachers alike must be appraised and judged" — norma normans non normata.' },
      { name: 'Reformed / Presbyterian', stance: 'affirm',
        position: 'Westminster Confession (1646), Ch. I §6: "the whole counsel of God... is either expressly set down in Scripture, or by good and necessary consequence may be deduced from Scripture." Ch. I §10: "The Supreme Judge by which all controversies of religion are to be determined... can be no other but the Holy Spirit speaking in the Scripture." The Second Helvetic Confession (1566), Ch. I, likewise declares Scripture "the true Word of God."' },
      { name: 'Anglican / Episcopal', stance: 'nuanced',
        position: 'The Thirty-Nine Articles (1571), Art. VI: Scripture "containeth all things necessary to salvation." Richard Hooker\'s Laws of Ecclesiastical Polity (1594) articulates the Anglican "three-legged stool" of Scripture, Tradition, and Reason. The Chicago-Lambeth Quadrilateral (1886/88) names Scripture as "the rule and ultimate standard of faith" — but reserves significant interpretive authority to the Church\'s received tradition and conciliar decisions.' },
      { name: 'Baptist', stance: 'affirm',
        position: 'The Second London Baptist Confession (1689), Ch. I §1: Scripture is "the only sufficient, certain, and infallible rule of all saving knowledge, faith, and obedience." The Baptist Faith & Message (2000), Art. I, concurs. The priesthood of all believers (1 Pet 2:9) means individual access to Scripture under the Spirit\'s guidance without clerical mediation — a radically democratic epistemology in contrast to both Catholic and magisterial Protestant models.' },
      { name: 'Anabaptist / Mennonite', stance: 'affirm',
        position: 'The Schleitheim Confession (1527) grounds all seven articles in New Testament texts. The Mennonite Confession of Faith (1995), Art. 4, affirms Scripture as "the authoritative source and standard." Distinctively, the Sermon on the Mount and the words of Jesus carry hermeneutical priority over Paul and the Old Testament — a "canon within the canon" Christocentric approach unusual among other confessional traditions.' },
    ],
    keyVerses: ['2 Tim 3:16–17', 'Matt 15:3–9', '2 Thess 2:15', 'Acts 17:11', 'Isa 8:20'],
    historicalNote: 'The formal principle of the Reformation. Luther\'s deeper question of authority surfaced at the Leipzig Debate (1519) when Eck cornered him into defending Hus. Trent\'s Decree on Scripture and Tradition (1546) codified the Catholic response. The question remains the most fundamental ecclesiological divide in Western Christianity.',
    relatedTopics: ['papacy', 'canon', 'womens-ordination'],
  },

  {
    id: 'papacy',
    name: 'Papal Primacy & Infallibility',
    icon: '⛪',
    controversy: 97,
    category: 'Authority',
    desc: 'Does the Bishop of Rome hold universal jurisdiction over the whole Church and the charism of infallibility when defining doctrine ex cathedra — or is he merely primus inter pares among the bishops?',
    subtopics: [
      { id: 'pa-jurisdiction', label: 'Universal jurisdiction?' },
      { id: 'pa-infallibility', label: 'Papal infallibility?' },
      { id: 'pa-petrine', label: 'The Petrine texts' },
    ],
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm',
        position: 'Vatican I, Pastor Aeternus (1870): "If anyone says that the Roman Pontiff has merely a function of supervision or guidance, and not full and supreme power of jurisdiction over the whole Church... let him be anathema." The same constitution defined papal infallibility ex cathedra on faith and morals. Vatican II\'s Lumen Gentium §22 situates this within episcopal collegiality. Only two ex cathedra definitions exist: the Immaculate Conception (Ineffabilis Deus, 1854) and the Assumption (Munificentissimus Deus, 1950).' },
      { name: 'Eastern Orthodox', stance: 'deny',
        position: 'The Orthodox recognise a primacy of honour for Rome among the ancient pentarchy but categorically reject universal jurisdiction and infallibility. The Encyclical of the Eastern Patriarchs (1848) states the guardian of orthodoxy is "the very body of the Church." Metropolitan Zizioulas\'s Being as Communion (1985) articulates primacy as relational, not juridical. The 1054 schism centred substantially on Rome\'s jurisdictional claims and the unilateral insertion of the Filioque.' },
      { name: 'Anglican / Episcopal', stance: 'deny',
        position: 'The Thirty-Nine Articles (1571), Art. XXXVII: the Bishop of Rome "hath no jurisdiction in this Realm of England." The ARCIC statements (Authority in the Church I, 1976; II, 1981) explored a "universal primacy" acceptable to Anglicans without agreement on infallibility. Saepius Officio (1897) responded to Leo XIII\'s Apostolicae Curae denial of Anglican orders, illustrating the ecclesiological depth of the Rome-Canterbury divide.' },
      { name: 'Lutheran', stance: 'deny',
        position: 'The Smalcald Articles (1537), written by Luther, call the Pope "the very Antichrist" — language retained in the Book of Concord. The Augsburg Confession (1530), Art. XXVIII, denies bishops may impose anything contrary to the Gospel. The Joint Declaration on Justification (1999) improved Lutheran-Catholic relations without resolving the structural ecclesiological question of papal authority and jurisdiction.' },
      { name: 'Reformed / Presbyterian', stance: 'deny',
        position: 'The Westminster Confession (1646), Ch. XXV §6, calls the Pope "that Antichrist, that man of sin, and son of perdition" — language later softened in some revisions. Ch. XXXI limits synods and councils to the Word of God. The Second Helvetic Confession (1566), Ch. XVII, denies any human being may arrogate the title of universal bishop. Presbyterian parity of presbyters is a direct structural refutation of hierarchical episcopacy.' },
      { name: 'Old Catholic', stance: 'nuanced',
        position: 'Old Catholics (formed after Vatican I) maintain apostolic succession and episcopal governance but reject the 1870 definitions. The Declaration of Utrecht (1889) affirms the ancient faith while denying "the new dogma of the infallibility and the universal episcopate of the Bishop of Rome." Communion with Canterbury was established in the Bonn Agreement (1931), creating a network bridging Catholic polity with Protestant confessionalism.' },
    ],
    keyVerses: ['Matt 16:18–19', 'John 21:15–17', 'Gal 2:11–14', '1 Pet 5:1–4', 'Matt 23:8–10'],
    historicalNote: 'Key milestones: the Great Schism (1054), the Western Schism (1378–1417, three simultaneous popes), Vatican I (1870), and Vatican II (1962–65). The 1054 anathemas were mutually lifted in 1964 by Paul VI and Patriarch Athenagoras I — a gesture of goodwill that did not resolve the underlying theological differences on jurisdiction and authority.',
    relatedTopics: ['sola-scriptura', 'apostolic-succession', 'womens-ordination'],
  },

  {
    id: 'canon',
    name: 'The Biblical Canon',
    icon: '📜',
    controversy: 71,
    category: 'Authority',
    desc: 'Which books belong in the Bible? Does the Old Testament deuterocanon (Apocrypha) carry scriptural authority, and how was the canon historically determined — by the Church, by the community of Israel, or by the self-attestation of the texts themselves?',
    subtopics: [
      { id: 'c-ot', label: 'Old Testament canon' },
      { id: 'c-deutero', label: 'Deuterocanonical books' },
      { id: 'c-process', label: 'How was the canon closed?' },
    ],
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm',
        position: 'The Council of Trent (Sess. IV, 1546) defined 73 books as canonical, including the deuterocanon (Tobit, Judith, 1–2 Maccabees, Wisdom, Sirach, Baruch, additions to Daniel and Esther), anathematising those who reject "the whole books with all their parts." Regional councils of Hippo (393) and Carthage (397, 419) had already listed these books; the Council of Florence (1442) enumerated them formally. Vatican I reaffirmed Trent\'s canon in its entirety.' },
      { name: 'Eastern Orthodox', stance: 'affirm',
        position: 'Orthodoxy uses the Septuagint (LXX) as its Old Testament — the Greek translation used by New Testament authors. The Orthodox canon includes the deuterocanonical books, plus 3 Maccabees and 1 Esdras (with the Ethiopian tradition adding further texts). The Council in Trullo (692) endorsed a canonical list, though Eastern tradition has been somewhat more flexible than Latin Tridentine precision on the exact boundaries.' },
      { name: 'Lutheran', stance: 'nuanced',
        position: 'Luther placed the deuterocanonical books in an appendix: "Apocrypha: books which are not held equal to the Holy Scriptures but are useful and good to read." He also questioned the canonicity of James ("an epistle of straw"), Revelation, Jude, and Hebrews — though all remain in Lutheran Bibles. The Formula of Concord (1577) operates on the 39-book Protestant OT canon as its doctrinal basis.' },
      { name: 'Reformed / Presbyterian', stance: 'deny',
        position: 'Westminster Confession (1646), Ch. I §3 explicitly lists the 66-book Protestant canon and states the deuterocanon, "not being of divine inspiration, are no part of the canon of the Scripture, and therefore are of no authority in the Church of God." This follows the Masoretic Hebrew canon — the Bible recognised by Second Temple Judaism — and Jerome\'s distinction between the Hebrew veritas and the LXX additions in his Prologus Galeatus.' },
      { name: 'Anglican / Episcopal', stance: 'nuanced',
        position: 'The Thirty-Nine Articles (1571), Art. VI, lists the 39-book OT canon as canonical and relegates the deuterocanon to books "the Church doth read for example of life and instruction of manners; but yet doth it not apply them to establish any doctrine." Anglican lectionaries regularly include deuterocanonical readings — a both/and approach steering between Tridentine inclusion and Reformed exclusion.' },
      { name: 'Baptist / Evangelical', stance: 'deny',
        position: 'The 66-book Protestant canon is virtually universal among Baptists and evangelicals. The Chicago Statement on Biblical Inerrancy (1978) presupposes this canon throughout. Arguments marshalled include: the New Testament\'s non-citation of deuterocanonical texts as authoritative Scripture; Jesus\'s apparent use of the Hebrew canon; and the Jewish community\'s own rejection of these books.' },
    ],
    keyVerses: ['2 Tim 3:16', 'Rev 22:18–19', '2 Macc 12:46', 'Sir 44:1'],
    historicalNote: 'The canon was not formally closed in the West until Trent (1546), directly responding to Luther\'s challenges. Athanasius\'s Festal Letter 39 (367 AD) is the earliest text to list precisely the 27 NT books. The Muratorian Fragment (c. 170 AD) is the earliest extant canonical list.',
    relatedTopics: ['sola-scriptura', 'real-presence'],
  },

  // ══ SACRAMENTS ══

  {
    id: 'real-presence',
    name: 'Real Presence in the Eucharist',
    icon: '🍞',
    controversy: 95,
    category: 'Sacraments',
    desc: 'Does Christ\'s body and blood become truly, substantially present in the Eucharistic elements — and if so, by what mechanism? Is the Mass a propitiatory sacrifice re-presenting Calvary, or a commemorative meal?',
    subtopics: [
      { id: 'rp-presence', label: 'Is Christ truly present?' },
      { id: 'rp-how', label: 'Manner of presence' },
      { id: 'rp-sacrifice', label: 'Is Mass a sacrifice?' },
      { id: 'rp-adoration', label: 'Eucharistic adoration?' },
    ],
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm',
        position: 'Council of Trent (Sess. XIII, 1551) defined transubstantiation: "by the consecration of the bread and wine there takes place a change of the whole substance of the bread into the substance of the body of Christ our Lord, and of the whole substance of the wine into the substance of his blood." The accidents remain; the substance is wholly converted. Trent (Sess. XXII) defined the Mass as a propitiatory sacrifice. Catechism of the Catholic Church §§1373–81 reaffirms all this. Eucharistic adoration follows necessarily: Christ is present in the reserved Sacrament.' },
      { name: 'Eastern Orthodox', stance: 'affirm',
        position: 'Orthodoxy affirms genuine transformation (metousiosis) while resisting Aristotelian substance/accident categories. The Confession of Dositheus (Synod of Jerusalem, 1672), Decree XVII, explicitly uses "transubstantiation" and anathematises symbolic interpretations. John of Damascus (De Fide Orthodoxa, IV.13): the bread and wine "are changed into the body and blood of Christ." The Divine Liturgy is both sacrifice and communion, celebrated in the context of theosis rather than primarily juridical satisfaction.' },
      { name: 'Lutheran', stance: 'nuanced',
        position: 'Augsburg Confession (1530), Art. X: "The true body and blood of Christ are truly present under the form of bread and wine in the Lord\'s Supper." Luther\'s Confession Concerning Christ\'s Supper (1528) insists on the literal meaning of "This is my body." The Formula of Concord (1577), Solid Declaration VII, affirms "sacramental union" — body and blood present "in, with, and under" the bread and wine. "Consubstantiation" is not a Lutheran term and is rejected. The Mass as propitiatory sacrifice is denied (Augsburg Conf., Art. XXIV).' },
      { name: 'Reformed / Presbyterian', stance: 'nuanced',
        position: 'Calvin\'s Institutes (IV.17) and Second Helvetic Confession (1566), Ch. XXI: Christ is truly present to faith through the Spirit, but his glorified body is locally at the right hand of the Father (the "extra Calvinisticum"). Westminster Confession (1646), Ch. XXIX §7, denies transubstantiation as "repugnant to Scripture" but affirms worthy receivers partake of Christ\'s body and blood "really and truly, yet not carnally and corporally, but spiritually." The Marburg Colloquy (1529) ended in failure precisely on this distinction.' },
      { name: 'Zwinglian / Baptist', stance: 'deny',
        position: 'Zwingli\'s On the Lord\'s Supper (1526) and A Clear Refutation (1527) argue "is" in "This is my body" means "signifies" — as "I am the door" (John 10:9). The Supper is a memorial (zikaron), pledge of faith, and community covenant. The Second London Baptist Confession (1689), Ch. XXX §6: the Supper is "a memorial of that one offering up of himself... upon the Cross." No change occurs in the elements; Christ\'s glorified body is in heaven.' },
      { name: 'Anglican / Episcopal', stance: 'varies',
        position: 'The Thirty-Nine Articles (1571) deliberately straddle positions. Art. XXVIII denies transubstantiation as "repugnant to the plain words of Scripture" but affirms "the Body of Christ is given, taken, and eaten." The Black Rubric (1552/1662) denies "any real and essential presence." Anglican theology spans from Catholic transubstantiation (Anglo-Catholics: E.B. Pusey, John Keble) to memorialism (evangelical Anglicans: J.C. Ryle), with many holding Calvinian spiritual real presence or receptionism.' },
      { name: 'Methodist / Wesleyan', stance: 'nuanced',
        position: 'Wesley\'s Hymns on the Lord\'s Supper (1745, 166 hymns with Charles) affirm genuine spiritual presence and call Communion a "converting ordinance." Wesley followed Calvin rather than Zwingli. Methodist Articles of Religion (1784), Art. XVIII, follow Anglican Article XXVIII. The United Methodist Book of Discipline (2016) speaks of "the real presence of Christ" without defining the mode — following Wesley\'s own reticence about metaphysical precision.' },
    ],
    keyVerses: ['Matt 26:26–28', 'John 6:51–58', '1 Cor 10:16–17', '1 Cor 11:23–29', 'Luke 22:19'],
    historicalNote: 'The Marburg Colloquy (October 1529): Luther and Zwingli agreed on 14 of 15 articles but could not reach accord on the Eucharist. Luther wrote "Hoc est corpus meum" on the table. This permanently divided Protestantism into Lutheran and Reformed streams and foreclosed a united Reformation front against Rome.',
    relatedTopics: ['baptism', 'number-of-sacraments', 'salvation-works'],
  },

  {
    id: 'baptism',
    name: 'Baptism: Subjects, Mode & Effect',
    icon: '💧',
    controversy: 87,
    category: 'Sacraments',
    desc: 'Three inseparable debates: (1) Who may be baptised — infants born to believers, or only professing believers? (2) What mode is valid — full immersion, affusion (pouring), or aspersion (sprinkling)? (3) What does baptism effect — regeneration, covenant membership, or the public declaration of prior faith?',
    subtopics: [
      { id: 'b-subjects', label: 'Paedobaptism or credobaptism?' },
      { id: 'b-mode', label: 'Mode: immersion or affusion?' },
      { id: 'b-effect', label: 'Baptismal regeneration?' },
      { id: 'b-rebaptism', label: 'Re-baptism permissible?' },
    ],
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm',
        position: 'Trent (Sess. VII, Canon 13) anathematises those who deny infants "are to be baptised." Canon 2 affirms baptismal regeneration: baptism "confers the grace of justification." Catechism of the Catholic Church §§1213–84: baptism removes original sin, imparts sanctifying grace, incorporates into the Church, and is "necessary for salvation" (John 3:5). Any mode is valid with water and the Trinitarian formula (CCC §1239). Origen (Homily on Romans V.9, c. 244 AD) and Cyprian attest infant baptism as apostolic tradition.' },
      { name: 'Eastern Orthodox', stance: 'affirm',
        position: 'Triple immersion is the sole valid mode — rooted in Romans 6:4, the Didache\'s (c. 90 AD) preference for "living water," and the Apostolic Canons. Confession of Dositheus (1672), Decree XVI, affirms baptismal regeneration. Infants are baptised, chrismated, and receive first Communion in one liturgical act — full sacramental initiation from birth. Re-baptism of converts from non-Trinitarian bodies is required; those from Trinitarian churches may be received by chrismation alone through economia.' },
      { name: 'Lutheran', stance: 'affirm',
        position: 'Augsburg Confession (1530), Art. IX: "Baptism is necessary for salvation... children are to be baptised, who through Baptism are committed to God and become pleasing to Him." Luther\'s Large Catechism: baptism "works forgiveness of sins, delivers from death and the devil, and grants eternal salvation." Mode is indifferent; the Word joined to water is the operative power. Luther\'s Concerning Rebaptism (1528) vigorously defended infant baptism against Anabaptist attack, arguing infants receive faith as a gift of the Spirit.' },
      { name: 'Reformed / Presbyterian', stance: 'affirm',
        position: 'Westminster Confession (1646), Ch. XXVIII §4: immersion, pouring, or sprinkling are all valid. §1: baptism is "a sacrament of the New Testament... for the solemn admission of the party baptised into the visible Church." §5 crucially distinguishes sign from effect: grace is not inseparably annexed to baptism. Infant baptism replaces circumcision as the covenant sign (Col 2:11–12), argued exhaustively in Calvin\'s Institutes IV.16.' },
      { name: 'Anglican / Episcopal', stance: 'affirm',
        position: 'Thirty-Nine Articles (1571), Art. XXVII: baptism "is a sign of Regeneration or New-Birth." The Book of Common Prayer baptismal rite declares the newly baptised "regenerate." High-church Anglicans (Pusey, Keble, Tractarians) hold baptismal regeneration firmly; evangelical Anglicans (J.C. Ryle, Stott) interpret this covenantally. The Gorham Controversy (1847–50) forced the Church of England to acknowledge permanent internal disagreement on this question.' },
      { name: 'Baptist', stance: 'deny',
        position: 'Second London Baptist Confession (1689), Ch. XXIX: "Baptism is an ordinance of the New Testament... to be unto the party baptised, a sign of his fellowship with him, in his death and resurrection." Immersion only — "dipping of the person into the water" — is the valid mode; burial language (Rom 6:4; Col 2:12) requires it. Subjects must be those "who do actually profess repentance... and obedience to our Lord Jesus Christ." Derived from John Spilsbury (A Treatise Concerning the Lawful Subject of Baptism, 1643).' },
      { name: 'Anabaptist / Mennonite', stance: 'deny',
        position: 'Schleitheim Confession (1527), Art. I: "Baptism shall be given to all those who have learned repentance... to all those who walk in the resurrection of Jesus Christ." Conrad Grebel baptised Georg Blaurock in Zurich on 21 January 1525 — the founding act of the Radical Reformation. "Anabaptist" ("re-baptiser") was a hostile epithet; the movement denied the validity of their infant baptism entirely. Felix Manz was drowned in the Limmat river by Zwinglian authorities on 5 January 1527.' },
      { name: 'Pentecostal', stance: 'deny',
        position: 'Believer\'s baptism by full immersion is universal among Pentecostals. Oneness Pentecostals (UPCI) baptise "in Jesus\' name only" (Acts 2:38), rejecting the Trinitarian formula. Trinitarian Pentecostals (Assemblies of God, Statement of Fundamental Truths, 1916, §5) baptise in the Trinitarian name. Spirit baptism evidenced by tongues is understood as distinct from water baptism — a separate post-conversion experience. The Assemblies of God does not affirm baptismal regeneration.' },
    ],
    keyVerses: ['Matt 28:19', 'Acts 2:38–41', 'Rom 6:3–4', 'Col 2:11–12', 'Titus 3:5', '1 Pet 3:21'],
    historicalNote: 'Felix Manz\'s drowning (Zurich, 5 Jan 1527) and Michael Sattler\'s burning (Rottenburg, 20 May 1527) are the defining Anabaptist martyrdoms. Harold Bender\'s The Anabaptist Vision (1944) rehabilitated the movement within 20th-century Protestant scholarship. The paedobaptist/credobaptist question drives more church splits today than almost any other single doctrinal issue.',
    relatedTopics: ['real-presence', 'number-of-sacraments', 'salvation-works'],
  },

  {
    id: 'number-of-sacraments',
    name: 'Number & Nature of the Sacraments',
    icon: '✨',
    controversy: 79,
    category: 'Sacraments',
    desc: 'Are there two dominical sacraments (baptism and the Lord\'s Supper) or seven? What constitutes a sacrament — requiring divine institution, an earthly element, and a promise? And do sacraments work ex opere operato — by their proper performance regardless of the minister\'s state of grace?',
    subtopics: [
      { id: 'ns-number', label: 'Two or seven?' },
      { id: 'ns-exopere', label: 'Ex opere operato?' },
      { id: 'ns-penance', label: 'Penance / confession' },
      { id: 'ns-ordination', label: 'Holy orders as sacrament?' },
    ],
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm',
        position: 'Trent (Sess. VII, Canon 1) anathematises anyone who says the sacraments are "more or fewer than seven": baptism, confirmation, Eucharist, penance, anointing of the sick, holy orders, and matrimony. Canon 8 affirms ex opere operato: sacraments confer grace by their proper performance, not by the merit of minister or recipient. Peter Lombard\'s Sentences (c. 1150) codified the seven; Council of Florence (Exsultate Deo, 1439) enumerated them; Trent confirmed them against Protestant reduction.' },
      { name: 'Eastern Orthodox', stance: 'affirm',
        position: 'Orthodoxy lists the same seven mysteries (mysteria), though enumeration became standard only in the 17th century under Western scholastic influence: Peter Mogila\'s Orthodox Confession (1643) and Confession of Dositheus (1672). The concept of mystery emphasises divine encounter over mechanical causality, resisting ex opere operato\'s automatic overtones. The seven include: baptism, chrismation, Eucharist, confession, holy unction, holy orders, marriage.' },
      { name: 'Lutheran', stance: 'nuanced',
        position: 'Luther\'s The Babylonian Captivity of the Church (1520) initially identified three sacraments (baptism, Eucharist, penance), then reduced to two: baptism and the Lord\'s Supper. He defined a sacrament as requiring (1) divine institution, (2) an earthly element, and (3) a promise. Luther rejected ex opere operato as magical; sacraments work through faith. The Augsburg Confession treats baptism, the Lord\'s Supper, and absolution as the primary rites, though only the first two are strictly sacramental.' },
      { name: 'Reformed / Presbyterian', stance: 'deny',
        position: 'Calvin\'s Institutes (IV.14–19): a sacrament is "an outward sign by which the Lord seals on our consciences the promises of his good will toward us." Only two qualify — baptism and the Supper. Westminster Confession (1646), Ch. XXVII §4, denies five of seven Catholic sacraments share the same nature. Penance is denied; marriage is a civil ordinance; ordination confers an office, not sacramental grace.' },
      { name: 'Anglican / Episcopal', stance: 'nuanced',
        position: 'Thirty-Nine Articles (1571), Art. XXV, distinguishes two dominical sacraments from five "commonly called sacraments" which "have not like nature of Sacraments with Baptism and the Lord\'s Supper." Yet Anglo-Catholic theology (the Tractarians) maintained seven sacraments in all but name. The Book of Common Prayer includes ordination, confirmation, marriage, and unction rites without formally calling them sacraments.' },
      { name: 'Baptist / Evangelical', stance: 'deny',
        position: 'Second London Baptist Confession (1689), Ch. XXVIII–XXX, treats only baptism and the Lord\'s Supper as "ordinances" — a deliberately weaker term rejecting sacramental causality. They are signs and seals, not vehicles of grace ex opere operato. The Baptist Faith & Message (2000) uses "ordinance" consistently throughout, reflecting the believer-church conviction that outward signs confirm inward realities rather than create them.' },
    ],
    keyVerses: ['Matt 28:19', 'Luke 22:19', 'John 20:23', 'Jas 5:14–15', 'Eph 5:32'],
    historicalNote: 'Peter Lombard\'s Sentences (c. 1150) standardised seven sacraments in Western theology. Luther\'s The Babylonian Captivity of the Church (1520) — reducing to two — was one of his most structurally radical moves. The Eastern Church adopted the number seven only gradually under Western influence in the 17th century; the Orthodox Confession of Mogila (1643) is the key document.',
    relatedTopics: ['real-presence', 'baptism', 'apostolic-succession'],
  },

  // ══ SALVATION ══

  {
    id: 'salvation-works',
    name: 'Justification: Faith, Works & Merit',
    icon: '⚖️',
    controversy: 91,
    category: 'Salvation',
    desc: 'Is justification forensic (a divine declaration of righteousness through imputation of Christ\'s merits) or transformative (an infusion of righteousness into the soul)? Is it received by faith alone (sola fide), or do human cooperation, sacramental reception, and meritorious works contribute to final justification before God?',
    subtopics: [
      { id: 'sw-forensic', label: 'Forensic or transformative?' },
      { id: 'sw-imputation', label: 'Imputation of righteousness?' },
      { id: 'sw-merit', label: 'Role of merit' },
      { id: 'sw-assurance', label: 'Assurance of salvation' },
    ],
    denominations: [
      { name: 'Roman Catholic', stance: 'nuanced',
        position: 'Trent (Sess. VI, 1547): Canon 9 anathematises the claim "the sinner is justified by faith alone." Canon 11 anathematises those who say men are justified "by the imputation of Christ\'s righteousness alone." Justification is both forensic and transformative: grace actually makes the soul righteous (inherent righteousness). Initial justification is by grace through faith; final justification requires cooperation, growth in charity, and the sacraments. Trent does not affirm merit independent of grace: all merit is a gift of grace (Sess. VI, Ch. XVI) — the debate is about whether such grace-enabled cooperation contributes to final standing.' },
      { name: 'Eastern Orthodox', stance: 'nuanced',
        position: 'Orthodoxy questions the entire Western juridical framework. Salvation is theosis — deification, participation in the divine energies following Gregory Palamas\'s essence/energies distinction. John Meyendorff (Byzantine Theology, 1974) argues Western categories (guilt, penalty, satisfaction, imputation) are foreign to the Greek Fathers. Athanasius (On the Incarnation, §54): "God became man so that man might become God." Neither sola fide nor Trent\'s synthesis captures the theotic vision of patristic Christianity — the legal framework itself is the problem.' },
      { name: 'Lutheran', stance: 'affirm',
        position: 'Justification by faith alone is "the article by which the Church stands or falls" (articulus stantis et cadentis ecclesiae — attributed to Luther, formalised by Löscher, 1718). Augsburg Confession (1530), Art. IV: "Men cannot be justified before God by their own strength, merits, or works, but are freely justified for Christ\'s sake, through faith." Formula of Concord (1577), Solid Declaration III, specifies forensic imputation. The Joint Declaration on Justification (LWF & Vatican, 1999) found substantial consensus on the basic truth while noting remaining differences.' },
      { name: 'Reformed / Presbyterian', stance: 'affirm',
        position: 'Westminster Confession (1646), Ch. XI: justification is "not by infusing righteousness into them, but by pardoning their sins, and by accounting and accepting their persons as righteous; not for anything wrought in them, or done by them, but for Christ\'s sake alone." The active obedience of Christ — his perfect law-keeping imputed to believers alongside forgiveness — is distinctive to the Reformed tradition. Heidelberg Catechism (1563), Q. 60, is the popular exposition. John Owen\'s Doctrine of Justification by Faith (1677) is the systematic masterwork.' },
      { name: 'Anglican / Episcopal', stance: 'affirm',
        position: 'Thirty-Nine Articles (1571), Art. XI: "We are accounted righteous before God, only for the merit of our Lord and Saviour Jesus Christ by Faith, and not for our own works or deservings." Richard Hooker\'s A Learned Discourse of Justification (1586) is the Anglican locus classicus — deeply Calvinian in structure. ARCIC II\'s Salvation and the Church (1987) found convergence with Rome on justification, though not universally accepted within Anglicanism itself.' },
      { name: 'Methodist / Wesleyan', stance: 'nuanced',
        position: 'Wesley\'s Standard Sermons define justification as pardon (forgiveness of past sins) distinct from sanctification (renewal of fallen nature). Wesley affirmed forensic justification by faith alone for initial justification but insisted on entire sanctification — a second work of grace producing "perfect love" (1 John 4:18). His sermon "The Scripture Way of Salvation" (1765) is the key text. Apostasy is genuinely possible; assurance is experiential and provisional, not grounded in an unconditional decree.' },
      { name: 'Baptist / Evangelical', stance: 'affirm',
        position: 'Second London Baptist Confession (1689), Ch. XI, mirrors Westminster on forensic justification by faith alone. Eternal security ("once saved, always saved") is affirmed by most Baptists: John 10:28–29; Romans 8:38–39. The Gospel Coalition\'s Confessional Statement (2007) makes forensic imputation and penal substitution explicit and confessionally binding for members.' },
    ],
    keyVerses: ['Rom 3:21–28', 'Rom 4:3–8', 'Gal 2:16', 'Eph 2:8–10', 'Jas 2:24', 'Phil 3:9'],
    historicalNote: 'The Joint Declaration on the Doctrine of Justification (1999), signed by the Lutheran World Federation and the Roman Catholic Church, endorsed by the World Methodist Council (2006) and the Anglican Consultative Council (2016), declared the 16th-century condemnations no longer applicable to the agreed statement — the most significant ecumenical achievement since the Reformation. Substantial differences on the role of works in final justification remain.',
    relatedTopics: ['predestination', 'atonement', 'real-presence'],
  },

  {
    id: 'predestination',
    name: 'Predestination, Election & Free Will',
    icon: '🔮',
    controversy: 93,
    category: 'Salvation',
    desc: 'Does God unconditionally elect individuals to salvation before creation, without regard to foreseen faith or merit? Is reprobation also decreed? Can the elect fall finally from grace? And what remains of free will after the Fall in Adam?',
    subtopics: [
      { id: 'p-election', label: 'Unconditional or conditional?' },
      { id: 'p-double', label: 'Double predestination?' },
      { id: 'p-perseverance', label: 'Perseverance of the saints?' },
      { id: 'p-freewill', label: 'Free will after the Fall?' },
    ],
    denominations: [
      { name: 'Reformed / Presbyterian', stance: 'affirm',
        position: 'Westminster Confession (1646), Ch. III §3: "By the decree of God, for the manifestation of His glory, some men and angels are predestinated unto everlasting life; and others foreordained to everlasting death." §5: election is "of His free grace and love, without any foresight of faith, or good works, or perseverance." The Canons of Dort (1619) systematise TULIP against the Remonstrance. Calvin\'s Institutes (III.21–24) is the locus classicus. Internal debate: supralapsarianism (Beza, Perkins) versus infralapsarianism (the Dort majority).' },
      { name: 'Lutheran', stance: 'nuanced',
        position: 'Formula of Concord (1577), Solid Declaration XI: God unconditionally elects the saved. But the Formula explicitly denies double predestination: "we should not investigate the secret counsel of God" regarding the reprobate. Reprobation results from human rejection, not divine decree — single predestination only. Lutheranism holds the tension between universal grace (Christ died for all) and particular election (only some believe) without synthetic resolution, following Luther\'s anti-Pelagian Bondage of the Will (1525).' },
      { name: 'Roman Catholic', stance: 'nuanced',
        position: 'Trent (Sess. VI) anathematises claims to certainty of personal election (Canon 15) and that grace is irresistible (Canon 4). The Molinist/Dominican controversy within Catholicism: Luis de Molina\'s Concordia (1588) argues God uses scientia media — middle knowledge of what free creatures would freely do in any circumstances — preserving libertarian freedom while ensuring providence. Thomists (Báñez) affirm divine physical premotion. The Congregation de Auxiliis debates (1597–1607) were left without papal resolution; both positions remain permissible.' },
      { name: 'Methodist / Arminian', stance: 'deny',
        position: 'Jacob Arminius\'s Declaration of Sentiments (1608) and the Remonstrance (1610): God elects those whom He foreknows will believe. Grace is resistible; the will retains genuine freedom through prevenient (preceding) grace. Wesley\'s sermon "Free Grace" (1739) attacked Calvinist predestination as making God the author of sin. John Fletcher\'s Checks to Antinomianism (1771–75) is the classic Wesleyan-Arminian systematic defence. Apostasy — loss of salvation — is genuinely possible; perseverance requires continued faith.' },
      { name: 'Eastern Orthodox', stance: 'deny',
        position: 'Synod of Jerusalem (1672), Decree III: "God foreknew those who would believe, but He did not predestinate them to do so." John Romanides\'s Ancestral Sin (1957) argues the Eastern tradition\'s understanding of the Fall — as mortality and corruptibility, not inherited legal guilt — makes the entire Western predestinarian framework unnecessary. Synergism (cooperation between divine grace and human will) is the patristic norm, rooted in Chrysostom, Theodoret, and the Cappadocians.' },
      { name: 'Open Theist', stance: 'deny',
        position: 'A minority evangelical position: Clark Pinnock (The Openness of God, 1994) and Gregory Boyd (God of the Possible, 2000) argue God does not possess exhaustive definite foreknowledge of genuinely free future choices — a voluntary self-limitation consistent with divine perfection. Election is corporate (in Christ) rather than individual. The ETS debate over Pinnock\'s membership exposed deep evangelical divisions. The SBC and most Reformed bodies regard open theism as incompatible with orthodox Christianity.' },
    ],
    keyVerses: ['Rom 8:29–30', 'Rom 9:11–23', 'Eph 1:4–5', 'John 6:37–44', '2 Pet 3:9', '1 Tim 2:4'],
    historicalNote: 'Augustine\'s anti-Pelagian writings (c. 412–430) established the Western parameters. The Synod of Orange (529) condemned semi-Pelagianism. The Synod of Dort (1618–19) produced the Canons of Dort against the Remonstrants. Arminius died in 1609 before Dort\'s verdict; his followers were expelled from the Dutch Reformed Church and became the Remonstrant Brotherhood, still active today.',
    relatedTopics: ['salvation-works', 'atonement', 'sola-scriptura'],
  },

  {
    id: 'atonement',
    name: 'Theories of the Atonement',
    icon: '🩸',
    controversy: 83,
    category: 'Salvation',
    desc: 'How does Christ\'s death save? Penal substitution, Anselmian satisfaction, Christus Victor, the moral exemplar, governmental theory, or participatory union — what transpired at Calvary, and for whom was it effective?',
    subtopics: [
      { id: 'at-psub', label: 'Penal substitution' },
      { id: 'at-scope', label: 'Definite or universal atonement?' },
      { id: 'at-victor', label: 'Christus Victor' },
      { id: 'at-moral', label: 'Moral exemplar / governmental' },
    ],
    denominations: [
      { name: 'Reformed / Presbyterian', stance: 'affirm',
        position: 'Westminster Confession (1646), Ch. VIII §5: Christ "fully satisfied the justice of His Father." Limited (definite) atonement: Canons of Dort (1619), Second Head, Art. 8 — Christ "effectually redeem... all those, and those only, who were from eternity chosen to salvation." John Owen\'s The Death of Death in the Death of Christ (1648) is the definitive defence. Francis Turretin\'s Institutes of Elenctic Theology (Vol. II, 1679) provides systematic elaboration. Penal substitution is non-negotiable; the elect\'s punishment was literally borne by Christ.' },
      { name: 'Lutheran', stance: 'affirm',
        position: 'Luther\'s theology of the cross (theologia crucis) affirms PSA alongside Christus Victor. Gustaf Aulén\'s Christus Victor (1931) argued the dual emphasis was the dominant patristic and Lutheran motif, eclipsed by Anselmian satisfaction theory. The Formula of Concord affirms Christ bore "the wrath of God" in our place. Universal atonement is axiomatic: Christ died for all — "God so loved the world" (John 3:16) taken without restriction. The tension between universal atonement and particular election is held without synthetic resolution.' },
      { name: 'Roman Catholic', stance: 'nuanced',
        position: 'Anselm\'s Cur Deus Homo (1098) established satisfaction theory: sin offends divine honour; only one both human and divine can render infinite satisfaction. Trent adopted this without making it the sole model. Catechism of the Catholic Church §§601–618 integrates satisfaction, sacrifice, merit, and solidarity. Universal atonement is standard. René Girard\'s scapegoat theory (Violence and the Sacred, 1972) has attracted Catholic interest as an anthropological complement to traditional theology.' },
      { name: 'Eastern Orthodox', stance: 'nuanced',
        position: 'Orthodoxy resists both Anselmian satisfaction and Western penal theories. The cross defeats death and the devil (Christus Victor), reveals divine love, and begins cosmic restoration. Athanasius (On the Incarnation, §54), Gregory of Nazianzus (Epistle 101), and John of Damascus are the patristic guides. Alexander Schmemann (For the Life of the World, 1963): Christ assumed fallen human nature to heal it from within — "recapitulation" in Irenaeus (Against Heresies III.18; V.21). The juridical framework is considered a Western distortion of the patristic vision.' },
      { name: 'Methodist / Arminian', stance: 'nuanced',
        position: 'Wesley held PSA in qualified form — Christ bore "the punishment due to our sins" (Sermon 20). The Governmental theory, associated with Hugo Grotius (Defensio fidei, 1617) and developed by John Miley (Atonement in Christ, 1879), has been influential: God as moral governor sets aside strict retributive justice to make forgiveness possible. Universal atonement is axiomatic in the Arminian framework: if Christ died only for the elect, the sincere universal offer of the gospel is a divine deception.' },
      { name: 'Evangelical (broad)', stance: 'affirm',
        position: 'The Lausanne Covenant (1974), §3, presupposes PSA. Steve Chalke\'s description of PSA as "cosmic child abuse" (The Lost Message of Jesus, 2003) caused a major UK evangelical controversy. Jeffrey, Ovey & Sach\'s Pierced for Our Transgressions (2007) provided a substantial confessional defence. The Gospel Coalition\'s Confessional Statement (2007) makes PSA explicit and confessionally binding for members. Universal vs. definite atonement remains the major internal evangelical division.' },
    ],
    keyVerses: ['Isa 53:4–6', 'Mark 10:45', 'Rom 3:25', '2 Cor 5:21', 'Gal 3:13', 'Col 2:15', 'Heb 2:14–15'],
    historicalNote: 'Anselm\'s Cur Deus Homo (1098) was the first systematic atonement theology. Peter Abelard\'s moral exemplar theory (c. 1120) was condemned by Bernard of Clairvaux at the Council of Sens (1140). Gustaf Aulén\'s Christus Victor (1931) rehabilitated patristic alternatives. Steve Chalke\'s 2003 provocation and Jeffrey, Ovey & Sach\'s response represent the sharpest recent confrontation over the doctrine\'s essentiality.',
    relatedTopics: ['salvation-works', 'predestination', 'hell'],
  },

  // ══ CHURCH & MINISTRY ══

  {
    id: 'womens-ordination',
    name: 'Women\'s Ordination',
    icon: '🌿',
    controversy: 94,
    category: 'Church & Ministry',
    desc: 'May women be ordained to the presbyterate (priesthood/eldership) and episcopate? Are the Pauline restrictions in 1 Timothy 2:12 and 1 Corinthians 14:34 universal and permanent, or culturally conditioned responses to specific local disorders in the early church?',
    subtopics: [
      { id: 'wo-exegesis', label: '1 Tim 2:12 & 1 Cor 14' },
      { id: 'wo-elders', label: 'Women as elders/pastors?' },
      { id: 'wo-bishops', label: 'Women as bishops?' },
      { id: 'wo-deacons', label: 'Women as deacons?' },
    ],
    denominations: [
      { name: 'Roman Catholic', stance: 'deny',
        position: 'Inter Insigniores (CDF, 1976): the Church has "no authority whatsoever to confer priestly ordination on women," based on Christ\'s example, unbroken apostolic tradition, and the priest\'s representative function (acting in persona Christi capitis). John Paul II\'s Ordinatio Sacerdotalis (1994) declared this "to be definitively held by all the Church\'s faithful." CDF\'s Responsum ad Dubium (1995) stated this belongs to the deposit of faith. Pope Francis opened the permanent female diaconate to theological study (2016, 2020 commissions) without altering the position on the priesthood.' },
      { name: 'Eastern Orthodox', stance: 'deny',
        position: 'The all-male priesthood reflects the Incarnation of God as male and constitutes binding apostolic Tradition. The female diaconate — attested in the Didascalia Apostolorum (c. 230 AD), Apostolic Constitutions (c. 380 AD), and numerous canons — has been restored in some jurisdictions: Patriarchate of Alexandria (2017) and the Church of Georgia (2017). Kyriaki FitzGerald\'s Women Deacons in the Orthodox Church (1998) is the major scholarly treatment. The episcopate and presbyterate remain theologically and canonically closed.' },
      { name: 'Anglican / Episcopal', stance: 'varies',
        position: 'The Episcopal Church (USA) ordained the "Philadelphia Eleven" irregularly in 1974; regular ordination from 1976. Barbara Harris became the first female Anglican bishop in 1989. The Church of England ordained women as priests in 1994 and as bishops in 2015 (Libby Lane). GAFCON and conservative African provinces (Nigeria, Uganda, Rwanda, Kenya — the majority of global Anglicans numerically) do not ordain women. The fracture in the Communion is deep and structural, threatening formal schism.' },
      { name: 'Lutheran (ELCA)', stance: 'affirm',
        position: 'The American Lutheran Church and Lutheran Church in America ordained women from 1970; the ELCA (formed 1988) continued this. Elizabeth Platz was the first woman ordained in American Lutheranism (29 Nov 1970). Basis: Galatians 3:28, the universal priesthood of believers, and a contextual reading of the Pauline restrictions. The Lutheran World Federation has reached near-universal member-church agreement. The Lutheran Church–Missouri Synod and Wisconsin Evangelical Lutheran Synod maintain male-only ordination.' },
      { name: 'Reformed / Presbyterian (PCA/OPC)', stance: 'deny',
        position: 'The Presbyterian Church in America (PCA) and the Orthodox Presbyterian Church (OPC) maintain male-only ordination to the offices of elder and deacon. Westminster Standards presuppose male officeholders. PCA Position Paper on Women in Ministry (2017 General Assembly) reaffirmed this. Thomas Schreiner and Andreas Köstenberger\'s Women in the Church (3rd ed. 2016) is the standard complementarian exegetical treatment. Wayne Grudem\'s Recovering Biblical Manhood and Womanhood (rev. 2006) is the comprehensive systematic defence.' },
      { name: 'Methodist / Wesleyan', stance: 'affirm',
        position: 'The Methodist Church (USA) ordained women from 1956. Phoebe Palmer\'s The Promise of the Father (1859) pioneered the theological defence of women\'s preaching within the Wesleyan tradition, marshalling Acts 2:17 extensively. Wesley himself licensed Sarah Crosby to preach in 1761: "I think the strength of the cause rests there — on your having an extraordinary call." The Wesleyan emphasis on spiritual gifts as determinative of ministerial calling overrides the Pauline restrictions, understood as occasional responses.' },
      { name: 'Baptist (SBC)', stance: 'deny',
        position: 'Baptist Faith & Message (2000), Art. VI: "the office of pastor is limited to men as qualified by Scripture." The SBC\'s 2023 amendment expelled churches with female senior pastors, including Saddleback Church. The Council on Biblical Manhood and Womanhood (CBMW, founded 1987) and the Danvers Statement (1987) underpin the SBC complementarian position. The Cooperative Baptist Fellowship (est. 1991) affirms women\'s ordination, creating a formal institutional division within Baptist life.' },
    ],
    keyVerses: ['Gal 3:28', '1 Tim 2:11–14', '1 Cor 14:34–35', 'Rom 16:1–7', 'Acts 2:17–18', 'Judg 4:4', 'Luke 8:1–3'],
    historicalNote: 'The question has fractured the Anglican Communion, split Presbyterian denominations (PCUSA vs. PCA, 1973), and divided Baptists. The SBC\'s 2023 action was its most decisive on this question. Phoebe Palmer (1807–74) and Catherine Booth (1829–90) were the pioneering 19th-century advocates. The complementarian/egalitarian terminology was standardised by the CBMW\'s Danvers Statement (1987).',
    relatedTopics: ['papacy', 'sola-scriptura', 'apostolic-succession'],
  },

  {
    id: 'apostolic-succession',
    name: 'Apostolic Succession & Church Order',
    icon: '🏛️',
    controversy: 76,
    category: 'Church & Ministry',
    desc: 'Is an unbroken chain of episcopal consecration back to the apostles necessary for valid ordination and authentic sacramental ministry? What are the marks of the true Church, and how does ecclesiology determine ecumenical possibility?',
    subtopics: [
      { id: 'as-episcopal', label: 'Episcopal succession required?' },
      { id: 'as-validity', label: 'Validity of non-episcopal orders?' },
      { id: 'as-marks', label: 'Marks of the true Church' },
    ],
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm',
        position: 'Apostolicae Curae (Leo XIII, 1896) declared Anglican orders "absolutely null and utterly void" due to defects in form and intention introduced at the Edwardian reformation. Vatican II\'s Lumen Gentium §8: the Church of Christ "subsists in" the Catholic Church. Unitatis Redintegratio (1964) acknowledges "elements of sanctification and truth" outside the visible Catholic Church, while maintaining the fullness of the means of salvation subsists only within it. Episcopal consecration in apostolic succession is necessary for valid ordination and Eucharist (Lumen Gentium §28).' },
      { name: 'Eastern Orthodox', stance: 'affirm',
        position: 'Valid apostolic succession is essential for sacramental ministry. Reception of converts varies by jurisdiction: some receive by chrismation only, others by full re-baptism. Ignatius of Antioch (Epistle to the Smyrnaeans 8:1, c. 107 AD): "Let no one do anything that has to do with the Church without the bishop." Cyprian of Carthage (On the Unity of the Church, 251 AD): "He cannot have God for his father who does not have the Church for his mother."' },
      { name: 'Anglican / Episcopal', stance: 'nuanced',
        position: 'Anglicanism claims genuine apostolic succession — challenged by Apostolicae Curae (1896) and defended by Saepius Officio (1897). The Chicago-Lambeth Quadrilateral (1886/88) lists the historic episcopate as one of four bases for Christian unity. The Porvoo Agreement (1992) established full communion between Anglican and Nordic/Baltic Lutheran churches, recognising each other\'s episcopal succession. Yet Anglican theology does not unchurch non-episcopal bodies.' },
      { name: 'Lutheran', stance: 'nuanced',
        position: 'Augsburg Confession (1530), Art. XIV: "No one should publicly teach in the Church, or administer the sacraments, without a regular call." The Apology of the Augsburg Confession argues the Reformers would have maintained bishops had they not been compelled to ordain without them. Lutheran theology distinguishes apostolic succession of doctrine (necessary) from succession of episcopal consecration (bene esse, not esse). The Porvoo Agreement (1992) brought Nordic Lutheran churches with historic episcopate into full Anglican communion.' },
      { name: 'Reformed / Presbyterian', stance: 'deny',
        position: 'Calvin\'s Institutes (IV.3): the office of ministry is created by the Word and Spirit, not by episcopal succession. Westminster Confession (1646), Ch. XXV: the universal Church is "the whole number of the elect." The Belgic Confession (1561), Art. XXIX, provides marks of the true Church: pure preaching of the Word, pure administration of sacraments, and church discipline — not episcopal lineage. The Apostles were a unique and unrepeatable office; their succession is doctrinal, not institutional.' },
      { name: 'Baptist / Evangelical', stance: 'deny',
        position: 'Baptist ecclesiology is congregational: the local church is self-governing and complete in itself. No doctrine of apostolic succession exists. Second London Baptist Confession (1689), Ch. XXVI, defines the universal church as the totality of the elect and the local church as particular gathered congregations. "Landmarkism" — J.R. Graves\'s doctrine (The Old Landmark Reset, 1854) that true Baptist churches have an unbroken succession from John the Baptist — remains influential in some Southern Baptist circles as a Baptist form of successionism.' },
    ],
    keyVerses: ['Matt 16:18', 'Acts 14:23', '1 Tim 3:1–7', 'Titus 1:5–9', 'Eph 4:11–13'],
    historicalNote: 'Ignatius of Antioch (c. 107 AD) is the earliest unambiguous advocate of episcopal necessity. Cyprian\'s On the Unity of the Church (251 AD) is foundational. The Reformation fractured episcopal continuity across most Protestant bodies. Apostolicae Curae (1896) and Saepius Officio (1897) represent the sharpest modern confrontation over validity of orders.',
    relatedTopics: ['papacy', 'number-of-sacraments', 'womens-ordination'],
  },

  // ══ HOLY SPIRIT ══

  {
    id: 'tongues',
    name: 'Spiritual Gifts: Cessationism vs. Continuationism',
    icon: '🔥',
    controversy: 79,
    category: 'Holy Spirit',
    desc: 'Have the miraculous charismata — speaking in tongues, prophecy, words of knowledge, miraculous healing — ceased with the close of the apostolic age and the completion of the canon, or does the Spirit continue to distribute them according to His sovereign will today?',
    subtopics: [
      { id: 'tg-tongues', label: 'Are tongues for today?' },
      { id: 'tg-prophecy', label: 'New Testament-level prophecy?' },
      { id: 'tg-healing', label: 'Miraculous healing ministry?' },
      { id: 'tg-evidence', label: 'Tongues as initial evidence?' },
    ],
    denominations: [
      { name: 'Cessationist (Reformed)', stance: 'deny',
        position: 'B.B. Warfield\'s Counterfeit Miracles (1918): miraculous gifts "were... distinctively the authentication of the Apostles." Once the apostolic foundation was laid and the canon closed, the sign gifts ceased their authenticating function. The argument from 1 Corinthians 13:8–10 ("when the perfect comes") is read as referring to the canon\'s completion. Richard Gaffin\'s Perspectives on Pentecost (1979) and Thomas Edgar\'s Satisfied by the Promise of the Spirit (1996) provide the scholarly framework. Westminster Confession (1646), Ch. I §1: former ways of revelation "have now ceased."' },
      { name: 'Pentecostal (Classical)', stance: 'affirm',
        position: 'Assemblies of God Statement of Fundamental Truths (1916), §7: "The baptism of believers in the Holy Ghost is witnessed by the initial physical sign of speaking with other tongues." This doctrine of "initial evidence" is distinctive to classical Pentecostalism, deriving from Charles Parham\'s Apostolic Faith Mission (Topeka, Kansas, 1901) and the Azusa Street Revival (Los Angeles, 1906) under William Seymour. Acts 2, 10, and 19 present a normative pattern. Gordon Fee\'s God\'s Empowering Presence (1994) is the major scholarly Pentecostal pneumatological treatment.' },
      { name: 'Charismatic (Catholic)', stance: 'affirm',
        position: 'The Catholic Charismatic Renewal began at Duquesne University in February 1967. The CDF\'s Iuvenescit Ecclesia (2016) cites Lumen Gentium §12 (Vatican II): "He also distributes special graces among the faithful of every rank." Tongues is a gift, not required for Spirit baptism — distinguishing Catholic charismatic theology from classical Pentecostalism\'s initial evidence doctrine. Pope Francis has spoken warmly of the movement; the International Catholic Charismatic Renewal Services (ICCRS) operates with Vatican recognition.' },
      { name: 'Third Wave / Open but Cautious', stance: 'nuanced',
        position: 'John Wimber\'s Vineyard movement and C. Peter Wagner\'s writings affirm all gifts without requiring tongues as initial evidence. Wayne Grudem (The Gift of Prophecy in the New Testament and Today, 1988) argues New Testament congregational prophecy is fallible and thus continues — distinct from infallible apostolic authority. D.A. Carson (Showing the Spirit, 1987) supports a similar "open but cautious" position. Sam Storms (The Beginner\'s Guide to Spiritual Gifts, 2002) represents the mature continuationist position within Reformed evangelicalism.' },
      { name: 'Baptist (SBC)', stance: 'deny',
        position: 'The SBC\'s International Mission Board prohibited tongues-speaking in missionary candidates from 1992 until policy revision in 2015. Cessationism is not formally confessionalised in the Baptist Faith & Message (2000) but is the dominant SBC position. John MacArthur\'s Strange Fire conference (2013) represents the hard cessationist critique, arguing charismatic phenomena are dangerous counterfeits. Tom Ascol and the Founders Ministry represent Reformed Baptist cessationism with systematic theological grounding.' },
      { name: 'Eastern Orthodox', stance: 'nuanced',
        position: 'Orthodoxy does not hold cessationism — the Spirit is continuously active in the Church\'s sacramental life, in the saints, and in genuine charismata. But independent charismatic phenomena outside the Church\'s sacramental and episcopal structure are viewed with deep suspicion; diakrisis (discernment of spirits) is essential. Symeon the New Theologian\'s Discourses (10th c.) and the Philokalia are the primary sources for Orthodox pneumatology. The yurodivy (Holy Fool) tradition in Russian Orthodoxy represents one form of recognised charismatic witness within the Church.' },
    ],
    keyVerses: ['1 Cor 12–14', 'Acts 2:1–4', 'Acts 19:1–7', 'Joel 2:28–29', '1 Cor 13:8–10', 'Eph 2:20'],
    historicalNote: 'The Azusa Street Revival (Los Angeles, 1906) under William Seymour launched classical Pentecostalism. Today Pentecostal/Charismatic Christianity numbers over 600 million adherents — the fastest-growing expression of Christianity globally. John MacArthur\'s Strange Fire conference (2013) and the sustained response from continuationist Reformed scholars (Grudem, Storms, Carson) represent the sharpest recent academic expression of the debate.',
    relatedTopics: ['sola-scriptura', 'apostolic-succession', 'predestination'],
  },

  {
    id: 'filioque',
    name: 'The Filioque Controversy',
    icon: '☁️',
    controversy: 68,
    category: 'Holy Spirit',
    desc: 'Does the Holy Spirit proceed from the Father alone (as the original Nicene-Constantinopolitan Creed of 381 AD states), or from the Father and the Son (Filioque — as the Western Church unilaterally added to the Creed, beginning c. 589 AD)?',
    subtopics: [
      { id: 'fi-theology', label: 'The theological question' },
      { id: 'fi-insertion', label: 'Legitimacy of the addition' },
      { id: 'fi-ecumenism', label: 'Ecumenical significance' },
    ],
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm',
        position: 'The Latin Church has confessed the Filioque since at least the Third Council of Toledo (589 AD). Council of Florence (1438–45) defined it dogmatically in Laetentur Caeli. Catechism of the Catholic Church §246: "The Latin tradition of the Creed confesses that the Spirit proceeds from the Father and the Son (filioque)." The CDF\'s "The Father as the Source of the Whole Trinity" (Clarifications on the Filioque, 1995) offered convergent language — the Spirit proceeds from the Father "through" the Son — without abandoning the Filioque\'s theological content.' },
      { name: 'Eastern Orthodox', stance: 'deny',
        position: 'The Filioque is the primary theological cause of the Great Schism. The Creed of Constantinople (381 AD) — "who proceeds from the Father" (John 15:26) — may not be altered by a regional council without an Ecumenical Council. Patriarch Photius\'s Mystagogy of the Holy Spirit (867 AD) is the first systematic Eastern refutation. Vladimir Lossky\'s The Mystical Theology of the Eastern Church (1944) argues the Filioque compromises the Father\'s monarchy (sole source/principle) within the immanent Trinity and distorts the entire trajectory of Western theology.' },
      { name: 'Anglican / Episcopal', stance: 'nuanced',
        position: 'Lambeth Conference (1978, Resolution 35) recommended the Filioque should not be included in the Nicene Creed liturgically, following the Faith and Order Commission. The 1988 Lambeth Conference reaffirmed this recommendation. The Episcopal Church\'s General Convention (1994) accepted the recommendation in principle. However, most Anglican churches continue to use the Filioque in practice. The question remains open in Anglican-Orthodox dialogue.' },
      { name: 'Lutheran', stance: 'affirm',
        position: 'Augsburg Confession (1530), Art. I, affirms the Nicene Creed with the Filioque; Lutheranism has never questioned its theological content. The Formula of Concord\'s Epitome opens by affirming all three ecumenical creeds, including the Nicene with Filioque. Luther\'s trinitarian theology follows Western Augustinian lines throughout. Lutheran scholars generally regard the Filioque as theologically correct while acknowledging the ecclesiological illegitimacy of its insertion without an ecumenical council.' },
      { name: 'Old Catholic', stance: 'deny',
        position: 'Old Catholic Churches have removed the Filioque from the Creed, returning to the 381 AD text. The Agreed Statement on the Filioque (1979) between Old Catholic and Eastern Orthodox theologians recommended mutual removal. Old Catholic ecclesiology, rooted in patristic conciliarism and the undivided Church of the first millennium, regards the Frankish insertion as ecclesiologically illegitimate regardless of its possible theological defensibility.' },
    ],
    keyVerses: ['John 15:26', 'John 16:7', 'Rom 8:9', 'Gal 4:6'],
    historicalNote: 'The Filioque was inserted by Frankish churches c. 589 AD (Toledo III) and spread under Carolingian influence. Pope Leo III refused Charlemagne\'s request to adopt it c. 809, on grounds that altering the Creed was impermissible even if the content were orthodox. Rome adopted it under Benedict VIII in 1014. The 1054 exchange of anathemas centred partly on this issue.',
    relatedTopics: ['sola-scriptura', 'papacy', 'tongues'],
  },

  // ══ LAST THINGS ══

  {
    id: 'eschatology',
    name: 'Eschatology: Millennium & Last Things',
    icon: '⏳',
    controversy: 75,
    category: 'Last Things',
    desc: 'What is the millennium of Revelation 20 — a literal future earthly reign, the present church age, or a post-Christian golden age? Is there a pre-tribulation Rapture distinct from the Second Coming? What prophetic role does national Israel play?',
    subtopics: [
      { id: 'es-mill', label: 'Pre / Post / Amillennialism' },
      { id: 'es-rapture', label: 'The Rapture' },
      { id: 'es-israel', label: 'Role of national Israel' },
    ],
    denominations: [
      { name: 'Dispensationalist (Baptist/Evangelical)', stance: 'affirm',
        position: 'John Nelson Darby (1800–82) developed dispensationalism: a sharp Israel/Church distinction, seven dispensations, and a pretribulation Rapture. C.I. Scofield\'s Reference Bible (1909, rev. 1917) disseminated these views across American evangelicalism. Dallas Theological Seminary (founded 1924): Charles Ryrie\'s Dispensationalism (1965, rev. 1995); John Walvoord\'s The Millennial Kingdom (1959). The Left Behind series (LaHaye & Jenkins, 1995–2007, 65 million copies) brought these views to mass popular culture. Israel\'s return to the land (1948) and capture of Jerusalem (1967) are seen as prophetic fulfilments.' },
      { name: 'Reformed / Presbyterian (Amillennial)', stance: 'nuanced',
        position: 'Amillennialism: the "millennium" of Revelation 20 represents the present church age between the two advents. Augustine\'s City of God (Books XIX–XXII) established this as the dominant Western patristic view. Geerhardus Vos\'s Biblical Theology (1948) and Anthony Hoekema\'s The Bible and the Future (1979) are the Reformed amillennial authorities. William Hendriksen\'s More Than Conquerors (1939) provides the classic Revelation commentary from this perspective. "Israel" in prophecy is fulfilled in Christ and the Church under covenant theology.' },
      { name: 'Reformed / Presbyterian (Postmillennial)', stance: 'nuanced',
        position: 'Postmillennialism: Christ will return after a "golden age" of gospel success in which Christianity transforms nations and cultures. Jonathan Edwards\'s History of the Work of Redemption (1774) is a classic text. Loraine Boettner\'s The Millennium (1957) is the standard 20th-century treatment. R.J. Rushdoony\'s Institutes of Biblical Law (1973) and Gary North\'s Christian Reconstruction revived postmillennialism in politically engaged form. Postmillennialism has experienced a revival in theonomic circles but remains a global minority position.' },
      { name: 'Roman Catholic', stance: 'nuanced',
        position: 'Millenarianism was condemned by the Holy Office in 1944. Catechism of the Catholic Church §675–77 addresses a "final trial" before the end without detailed prophetic schemes. CCC §1000–04 focuses on bodily resurrection, general judgment, heaven, purgatory, and hell. No special prophetic role for national Israel is affirmed; the Church is the new Israel. The Pontifical Biblical Commission\'s The Jewish People and Their Sacred Scriptures (2001) addresses this question with more nuance than simple supersessionism.' },
      { name: 'Lutheran', stance: 'nuanced',
        position: 'Luther rejected chiliasm as a Jewish fantasy. Augsburg Confession (1530), Art. XVII, condemns "certain Jewish opinions which are even now making an appearance, and which teach that before the resurrection of the dead, the godly shall occupy the kingdom of the world." Lutheranism is historically amillennial. Lutheran eschatology emphasises the two kingdoms, vocation in the present age, and the final resurrection rather than prophetic timetables. Johann Gerhard\'s Loci Theologici (1610–22) provides the classical Lutheran eschatological treatment.' },
      { name: 'Pentecostal', stance: 'affirm',
        position: 'Classical Pentecostalism is almost universally premillennial and pretribulationist, inheriting dispensationalism from the Keswick and holiness movements. Assemblies of God Statement of Fundamental Truths (1916), §14: "The second coming of Christ includes the rapture of the saints, which is our blessed hope, followed by the visible return of Christ with His saints to reign on earth for one thousand years." The restoration of Israel and the outpouring of the "latter rain" (Joel 2:28–29) are seen as immediately pre-eschatological signs.' },
    ],
    keyVerses: ['Rev 20:1–6', '1 Thess 4:13–18', 'Matt 24', 'Dan 9:24–27', 'Rom 11:25–29', '2 Thess 2:1–12'],
    historicalNote: 'The pretribulation Rapture was largely unknown before John Nelson Darby in the 1830s; Dave MacPherson (The Rapture Plot, 1994) traces its possible origin to a prophetic utterance in Edward Irving\'s congregation c. 1830. It became mainstream American evangelical eschatology through the Scofield Bible (1909). Hal Lindsey\'s The Late Great Planet Earth (1970, 28 million copies) and the Left Behind series (1995–2007, 65 million) represent its extraordinary cultural reach.',
    relatedTopics: ['predestination', 'hell', 'sola-scriptura'],
  },

  {
    id: 'hell',
    name: 'Hell: Eternal Punishment, Annihilationism & Universalism',
    icon: '🔦',
    controversy: 89,
    category: 'Last Things',
    desc: 'Is hell a place of eternal conscious torment (ECT)? Or do the finally impenitent simply cease to exist — annihilationism / conditional immortality? Or could all rational creatures ultimately be reconciled to God — apokatastasis / universalism? And what is purgatory?',
    subtopics: [
      { id: 'hl-ect', label: 'Eternal conscious torment' },
      { id: 'hl-anni', label: 'Annihilationism' },
      { id: 'hl-univ', label: 'Universalism / apokatastasis' },
      { id: 'hl-purgatory', label: 'Purgatory' },
    ],
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm',
        position: 'Fourth Lateran Council (1215) and Council of Florence (Laetentur Caeli, 1439) define hell as eternal punishment. Catechism of the Catholic Church §1035: "The teaching of the Church affirms the existence of hell and its eternity. Immediately after death the souls of those who die in a state of mortal sin descend into hell." Purgatory is defined for those dying in God\'s friendship but not yet fully purified — CCC §1030–32; formally defined against Protestant denial at Trent (Sess. XXV, 1563). Hans Urs von Balthasar\'s Dare We Hope? (1988) argued for a reasonable hope — not the assertion — that all may be saved, generating controversy without condemnation.' },
      { name: 'Eastern Orthodox', stance: 'affirm',
        position: 'Orthodoxy affirms eternal separation from God for the unrepentant. Yet hell is often described as the experience of divine love as consuming fire for those who reject it — following Isaac the Syrian\'s Ascetical Homilies and Maximus the Confessor. No purgatory in the Catholic sense exists, though prayer for the departed is universal in Orthodox worship. Origen\'s apokatastasis was condemned at Constantinople II (553 AD). Metropolitan Kallistos Ware (The Inner Kingdom, 2000) and Sergei Bulgakov have maintained the hope without the assertion of universal salvation.' },
      { name: 'Lutheran', stance: 'affirm',
        position: 'Augsburg Confession (1530), Art. XVII, affirms Christ will condemn "godless men, and the devil, to hell and eternal punishment." The entire Lutheran confessional corpus maintains eternal conscious torment. Purgatory is denied: the Apology of the Augsburg Confession (Art. XXIV) and the Smalcald Articles (III, Part III) both repudiate it as unscriptural and as undermining the sufficiency of Christ\'s atonement. For Luther, the law\'s threat of eternal condemnation is inseparable from the gospel\'s offer of complete and immediate justification by faith.' },
      { name: 'Reformed / Presbyterian', stance: 'affirm',
        position: 'Westminster Confession (1646), Ch. XXXIII §2: "the wicked, who know not God, and obey not the gospel of Jesus Christ, shall be cast into eternal torments, and punished with everlasting destruction." Westminster Larger Catechism, Q. 29, describes the soul\'s post-death condition in darkness and misery until final judgment. Jonathan Edwards\'s Sinners in the Hands of an Angry God (1741) is the most famous Reformed sermon on hell. Francis Turretin\'s Institutes (Vol. III) and W.G.T. Shedd\'s Dogmatic Theology (1888) provide the systematic treatment.' },
      { name: 'Evangelical (Annihilationist)', stance: 'nuanced',
        position: 'Conditional immortality / annihilationism: only those granted eternal life by God are immortal; the wicked are ultimately destroyed — "the second death" (Rev 20:14). John Stott\'s tentative endorsement in Essentials (1988, with David Edwards) brought the view into mainstream evangelical discussion. Edward Fudge\'s The Fire That Consumes (1982, 3rd ed. 2011) is the most thorough exegetical defence. Clark Pinnock, John W. Wenham, and Philip Hughes have also advocated it. Christopher Date and Gregory Stump\'s Rethinking Hell (2014) is the most recent substantial collection. The view is growing significantly among younger evangelical scholars and pastors.' },
      { name: 'Christian Universalist', stance: 'deny',
        position: 'Apokatastasis — universal restoration of all rational creatures to God. Origen\'s version was condemned at Constantinople II (553 AD). Modern advocates: Karl Barth\'s quasi-universalism in Church Dogmatics II/2 (the elect humanity of Christ logically implies universal salvation, though Barth refused to draw this conclusion formally); Thomas Talbott (The Inescapable Love of God, 1999); Robin Parry (The Evangelical Universalist, 2006, as "Gregory MacDonald"); David Bentley Hart (That All Shall Be Saved, 2019), who argues universalism is the only intellectually honest reading of the New Testament. Rob Bell\'s Love Wins (2011) provoked massive popular evangelical debate.' },
    ],
    keyVerses: ['Matt 25:41–46', 'Rev 20:10–15', 'Mark 9:43–48', '2 Thess 1:8–9', 'Rom 6:23', 'Rev 21:8'],
    historicalNote: 'Origen\'s apokatastasis was condemned at Constantinople II (553 AD). F.D. Maurice\'s Theological Essays (1853) — questioning eternal punishment — cost him his King\'s College London professorship. Rob Bell\'s Love Wins (2011) generated the largest popular evangelical debate on the question in a generation. David Bentley Hart\'s That All Shall Be Saved (2019) is the most recent sustained scholarly universalist statement.',
    relatedTopics: ['eschatology', 'predestination', 'atonement'],
  },

];

// ── Constants ──────────────────────────────────────────────────
const CATEGORIES = [...new Set(TOPICS.map(t => t.category))];
const DENOMINATIONS = [
  'Roman Catholic', 'Eastern Orthodox', 'Anglican / Episcopal', 'Lutheran',
  'Presbyterian / Reformed', 'Baptist', 'Methodist / Wesleyan', 'Pentecostal',
  'Charismatic', 'Anabaptist / Mennonite', 'Non-denominational',
  'Exploring / No tradition', 'Other'
];

// ── State ──────────────────────────────────────────────────────
let supabaseClient = null;
let currentUser = null;
let currentUserProfile = null;
let currentTopic = null;
let currentSubtopic = null;
let allComments = [];
let userVotes = new Set();
let activeCategory = 'All';
let searchQuery = '';

// ── Init ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSupabase();
  renderCategoryFilters();
  renderTopics();
  setupCharCount();
  setupSearch();
});

function initSupabase() {
  if (typeof SUPABASE_CONFIGURED === 'undefined' || !SUPABASE_CONFIGURED) {
    document.getElementById('config-banner').classList.remove('hidden');
    updateAuthUI();
    return;
  }
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    document.getElementById('config-banner').classList.add('hidden');
    checkSession();
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      currentUser = session?.user ?? null;
      if (currentUser) loadUserProfile();
      updateAuthUI();
      if (currentTopic) updateCommentFormVisibility();
    });
  } catch (e) { console.error('Supabase init failed:', e); updateAuthUI(); }
}

async function checkSession() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  currentUser = session?.user ?? null;
  if (currentUser) await loadUserProfile();
  updateAuthUI();
}

async function loadUserProfile() {
  if (!supabaseClient || !currentUser) return;
  const { data } = await supabaseClient.from('profiles').select('*').eq('id', currentUser.id).single();
  currentUserProfile = data;
  updateAuthUI();
}

function updateAuthUI() {
  const authArea = document.getElementById('header-auth');
  if (currentUser && currentUserProfile) {
    const initials = (currentUserProfile.display_name || 'U').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    authArea.innerHTML = `
      <div class="user-pill">
        <div class="user-avatar">${initials}</div>
        <span>${currentUserProfile.display_name}</span>
        ${currentUserProfile.denomination ? `<span class="comment-denom-tag">${currentUserProfile.denomination}</span>` : ''}
      </div>
      <button class="btn btn-ghost" onclick="handleLogout()">Sign out</button>`;
  } else {
    authArea.innerHTML = `
      <button class="btn btn-ghost" onclick="openModal('login')">Sign in</button>
      <button class="btn btn-gold" onclick="openModal('signup')">Join the discussion</button>`;
  }
  if (currentTopic) updateCommentFormVisibility();
}

function updateCommentFormVisibility() {
  const loggedOut = document.getElementById('logged-out-prompt');
  const loggedIn = document.getElementById('logged-in-form');
  if (!loggedOut || !loggedIn) return;
  const hasDB = supabaseClient && SUPABASE_CONFIGURED;
  if (!hasDB) {
    loggedOut.style.display = 'block';
    loggedOut.innerHTML = '⚙️ Comments require Supabase configuration.';
    loggedIn.style.display = 'none';
  } else if (currentUser) {
    loggedOut.style.display = 'none';
    loggedIn.style.display = 'block';
  } else {
    loggedOut.style.display = 'block';
    loggedOut.innerHTML = '<a onclick="openModal(\'login\')">Sign in</a> or <a onclick="openModal(\'signup\')">create a free account</a> to share your perspective.';
    loggedIn.style.display = 'none';
  }
}

function renderCategoryFilters() {
  const container = document.getElementById('category-filters');
  if (!container) return;
  const cats = ['All', ...CATEGORIES];
  container.innerHTML = cats.map(c => `<button class="cat-pill ${c === activeCategory ? 'active' : ''}" onclick="setCategory('${c}')">${c}</button>`).join('');
}

function setCategory(cat) { activeCategory = cat; renderCategoryFilters(); renderTopics(); }

function setupSearch() {
  const input = document.getElementById('topic-search');
  if (!input) return;
  input.addEventListener('input', e => { searchQuery = e.target.value.toLowerCase(); renderTopics(); });
}

function renderTopics() {
  const grid = document.getElementById('topic-grid');
  let filtered = TOPICS;
  if (activeCategory !== 'All') filtered = filtered.filter(t => t.category === activeCategory);
  if (searchQuery) filtered = filtered.filter(t =>
    t.name.toLowerCase().includes(searchQuery) || t.desc.toLowerCase().includes(searchQuery) || t.category.toLowerCase().includes(searchQuery)
  );
  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--ink-light)">No topics match your search.</div>';
    return;
  }
  grid.innerHTML = filtered.map(t => `
    <div class="topic-card" onclick="showTopic('${t.id}')" id="tc-${t.id}">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:8px">
        <div class="topic-icon">${t.icon}</div>
        <div class="cat-badge">${t.category}</div>
      </div>
      <div class="topic-name">${t.name}</div>
      <div class="topic-desc-preview">${t.desc}</div>
      <div style="margin-top:10px">
        <div class="controversy-bar-mini"><div class="controversy-fill-mini" style="width:${t.controversy}%"></div></div>
        <div style="display:flex;justify-content:space-between;margin-top:4px">
          <span class="topic-count">${t.controversy}% controversial</span>
          <span class="topic-count">${t.denominations.length} traditions</span>
        </div>
      </div>
    </div>`).join('');
}

function showHome() {
  document.getElementById('home-view').style.display = 'block';
  document.getElementById('detail-view').style.display = 'none';
  currentTopic = null; currentSubtopic = null;
}

async function showTopic(id) {
  const topic = TOPICS.find(t => t.id === id);
  if (!topic) return;
  currentTopic = topic; currentSubtopic = null;
  document.getElementById('home-view').style.display = 'none';
  document.getElementById('detail-view').style.display = 'block';
  document.getElementById('detail-title').textContent = topic.name;
  document.getElementById('detail-desc').textContent = topic.desc;
  document.getElementById('controversy-fill').style.width = topic.controversy + '%';
  document.getElementById('controversy-text').textContent = topic.controversy + '% controversy rating';
  const catBadgeEl = document.getElementById('detail-category');
  if (catBadgeEl) catBadgeEl.textContent = topic.category;
  renderSubtopics(topic);
  const histEl = document.getElementById('historical-note');
  if (histEl) {
    histEl.style.display = topic.historicalNote ? 'block' : 'none';
    if (topic.historicalNote) histEl.innerHTML = `<span class="hist-label">📜 Historical context</span> ${topic.historicalNote}`;
  }
  const versesEl = document.getElementById('key-verses');
  if (versesEl && topic.keyVerses) versesEl.innerHTML = topic.keyVerses.map(v => `<span class="verse-pill">${v}</span>`).join('');
  const relatedEl = document.getElementById('related-topics');
  if (relatedEl && topic.relatedTopics) {
    relatedEl.innerHTML = topic.relatedTopics.map(rid => {
      const rel = TOPICS.find(t => t.id === rid);
      return rel ? `<button class="related-pill" onclick="showTopic('${rid}')">${rel.icon} ${rel.name}</button>` : '';
    }).join('');
  }
  renderDenominations(topic);
  updateCommentFormVisibility();
  await loadComments(topic.id);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderSubtopics(topic) {
  const container = document.getElementById('subtopic-tabs');
  if (!container) return;
  if (!topic.subtopics || topic.subtopics.length === 0) { container.style.display = 'none'; return; }
  container.style.display = 'flex';
  container.innerHTML = [{ id: null, label: 'Overview' }, ...topic.subtopics].map(s =>
    `<button class="subtopic-tab ${currentSubtopic === s.id ? 'active' : ''}" onclick="setSubtopic('${s.id}')">${s.label}</button>`).join('');
}

function setSubtopic(id) { currentSubtopic = id === 'null' ? null : id; renderSubtopics(currentTopic); }

function renderDenominations(topic) {
  const grid = document.getElementById('denom-grid');
  grid.innerHTML = topic.denominations.map(d => `
    <div class="denom-card stance-${d.stance}">
      <div class="denom-card-top">
        <div class="denom-name">${d.name}</div>
        <div class="stance-badge badge-${d.stance}">${stanceLabel(d.stance)}</div>
      </div>
      <div class="denom-position">${d.position}</div>
    </div>`).join('');
}

function stanceLabel(stance) {
  return { affirm: 'Affirms', deny: 'Denies', nuanced: 'Nuanced', varies: 'Varies' }[stance] || stance;
}

async function loadComments(topicId) {
  const list = document.getElementById('comment-list');
  const countLabel = document.getElementById('comment-count-label');
  if (!supabaseClient || !SUPABASE_CONFIGURED) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">⚙️</div>Configure Supabase to enable live comments.</div>';
    countLabel.textContent = 'Comments disabled'; return;
  }
  list.innerHTML = '<div class="loading-spinner">Loading comments…</div>';
  try {
    const { data, error } = await supabaseClient.from('comments').select('*').eq('topic_id', topicId)
      .order('upvotes', { ascending: false }).order('created_at', { ascending: false });
    if (error) throw error;
    allComments = data || [];
    if (currentUser && allComments.length > 0) {
      const ids = allComments.map(c => c.id);
      const { data: votes } = await supabaseClient.from('upvotes').select('comment_id').eq('user_id', currentUser.id).in('comment_id', ids);
      userVotes = new Set((votes || []).map(v => v.comment_id));
    } else { userVotes = new Set(); }
    countLabel.textContent = allComments.length === 0 ? 'No comments yet — be the first!' : `${allComments.length} comment${allComments.length !== 1 ? 's' : ''}`;
    renderComments(allComments);
  } catch (err) {
    console.error(err);
    list.innerHTML = `<div class="error-msg">Failed to load comments: ${err.message}</div>`;
  }
}

function renderComments(comments) {
  const list = document.getElementById('comment-list');
  if (comments.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🕊️</div>No comments yet on this topic.<br>Be the first to share your perspective.</div>`; return;
  }
  list.innerHTML = comments.map(c => {
    const initials = (c.display_name || 'A').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const voted = userVotes.has(c.id);
    const date = new Date(c.created_at).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
    const isOwn = currentUser && c.user_id === currentUser.id;
    return `<div class="comment-item" id="comment-${c.id}">
        <div class="comment-avatar">${initials}</div>
        <div class="comment-body">
          <div class="comment-meta">
            <span class="comment-author">${escHtml(c.display_name)}</span>
            ${c.denomination ? `<span class="comment-denom-tag">${escHtml(c.denomination)}</span>` : ''}
            <span class="comment-date">${date}</span>
          </div>
          <div class="comment-text">${escHtml(c.body)}</div>
          <div class="comment-actions">
            <button class="upvote-btn ${voted ? 'voted' : ''}" onclick="toggleUpvote(${c.id})" id="upvote-${c.id}">
              ${voted ? '▲' : '△'} <span id="upvote-count-${c.id}">${c.upvotes}</span>
            </button>
            ${isOwn ? `<button class="delete-btn" onclick="deleteComment(${c.id})">Delete</button>` : ''}
          </div>
        </div>
      </div>`;
  }).join('');
}

function filterComments() {
  const val = document.getElementById('denom-filter').value;
  const sortEl = document.getElementById('comment-sort');
  const sort = sortEl ? sortEl.value : 'top';
  let filtered = val ? allComments.filter(c => c.denomination === val) : [...allComments];
  if (sort === 'top') filtered.sort((a, b) => b.upvotes - a.upvotes);
  else filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  renderComments(filtered);
}

async function submitComment() {
  const body = document.getElementById('comment-text').value.trim();
  const btn = document.getElementById('submit-btn');
  if (!body) { showFormMsg('error', 'Please write something before posting.'); return; }
  if (body.length > 600) { showFormMsg('error', 'Keep it under 600 characters.'); return; }
  if (!currentUser || !currentUserProfile) { showFormMsg('error', 'Please sign in first.'); return; }
  btn.disabled = true; btn.textContent = 'Posting…';
  try {
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: currentTopic.id, user_id: currentUser.id,
      display_name: currentUserProfile.display_name,
      denomination: currentUserProfile.denomination || null, body, upvotes: 0,
    });
    if (error) throw error;
    document.getElementById('comment-text').value = '';
    document.getElementById('char-count').textContent = '0 / 600';
    showFormMsg('success', 'Comment posted!');
    await loadComments(currentTopic.id);
  } catch (err) { showFormMsg('error', err.message || 'Failed to post. Try again.'); }
  finally { btn.disabled = false; btn.textContent = 'Post comment'; }
}

async function deleteComment(commentId) {
  if (!confirm('Delete this comment?')) return;
  try { await supabaseClient.from('comments').delete().eq('id', commentId); await loadComments(currentTopic.id); }
  catch (err) { console.error(err); }
}

function showFormMsg(type, text) {
  const el = document.getElementById('form-message');
  el.innerHTML = `<div class="${type}-msg">${text}</div>`;
  setTimeout(() => { el.innerHTML = ''; }, 4000);
}

async function toggleUpvote(commentId) {
  if (!currentUser) { openModal('login'); return; }
  if (!supabaseClient) return;
  const btn = document.getElementById(`upvote-${commentId}`);
  const countEl = document.getElementById(`upvote-count-${commentId}`);
  const wasVoted = userVotes.has(commentId);
  const current = parseInt(countEl.textContent) || 0;
  if (wasVoted) { userVotes.delete(commentId); countEl.textContent = current - 1; btn.classList.remove('voted'); }
  else { userVotes.add(commentId); countEl.textContent = current + 1; btn.classList.add('voted'); }
  try {
    if (wasVoted) {
      await supabaseClient.from('upvotes').delete().eq('user_id', currentUser.id).eq('comment_id', commentId);
      await supabaseClient.from('comments').update({ upvotes: Math.max(0, current - 1) }).eq('id', commentId);
    } else {
      await supabaseClient.from('upvotes').insert({ user_id: currentUser.id, comment_id: commentId });
      await supabaseClient.from('comments').update({ upvotes: current + 1 }).eq('id', commentId);
    }
    const { data } = await supabaseClient.from('comments').select('upvotes').eq('id', commentId).single();
    if (data) countEl.textContent = data.upvotes;
  } catch (err) {
    console.error('Upvote error:', err); countEl.textContent = current;
    if (wasVoted) { userVotes.add(commentId); btn.classList.add('voted'); }
    else { userVotes.delete(commentId); btn.classList.remove('voted'); }
  }
}

function openModal(mode) { document.getElementById('auth-modal').classList.add('open'); switchModal(mode); }
function closeModal() { document.getElementById('auth-modal').classList.remove('open'); clearModalErrors(); }
function switchModal(mode) {
  document.getElementById('modal-login').style.display = mode === 'login' ? 'block' : 'none';
  document.getElementById('modal-signup').style.display = mode === 'signup' ? 'block' : 'none';
  clearModalErrors();
}
function clearModalErrors() {
  ['modal-error', 'signup-error', 'signup-success'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.style.display = 'none'; el.textContent = ''; }
  });
}

document.getElementById('auth-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('auth-modal')) closeModal();
});

async function handleLogin() {
  if (!supabaseClient) return;
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const errEl = document.getElementById('modal-error');
  if (!email || !password) { errEl.textContent = 'Please fill in both fields.'; errEl.style.display = 'block'; return; }
  const btn = document.querySelector('#modal-login .btn-gold');
  btn.textContent = 'Signing in…'; btn.disabled = true;
  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
  btn.textContent = 'Sign in'; btn.disabled = false;
  if (error) { errEl.textContent = error.message; errEl.style.display = 'block'; } else closeModal();
}

async function handleSignup() {
  if (!supabaseClient) return;
  const name = document.getElementById('signup-name').value.trim();
  const denom = document.getElementById('signup-denom').value;
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  const errEl = document.getElementById('signup-error');
  const successEl = document.getElementById('signup-success');
  if (!name || !email || !password) { errEl.textContent = 'Please fill in your name, email, and password.'; errEl.style.display = 'block'; return; }
  if (password.length < 6) { errEl.textContent = 'Password must be at least 6 characters.'; errEl.style.display = 'block'; return; }
  const btn = document.querySelector('#modal-signup .btn-gold');
  btn.textContent = 'Creating account…'; btn.disabled = true;
  const { error } = await supabaseClient.auth.signUp({
    email, password, options: { data: { display_name: name, denomination: denom || null } }
  });
  btn.textContent = 'Create account'; btn.disabled = false;
  if (error) { errEl.textContent = error.message; errEl.style.display = 'block'; }
  else { errEl.style.display = 'none'; successEl.textContent = '✓ Account created! Check your email to confirm, then sign in.'; successEl.style.display = 'block'; }
}

async function handleLogout() {
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
  currentUser = null; currentUserProfile = null; userVotes = new Set();
  updateAuthUI();
}

function escHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function setupCharCount() {
  const ta = document.getElementById('comment-text');
  if (!ta) return;
  ta.addEventListener('input', () => {
    const len = ta.value.length;
    const el = document.getElementById('char-count');
    el.textContent = `${len} / 600`;
    el.style.color = len > 500 ? 'var(--crimson)' : 'var(--ink-light)';
  });
}

function toggleSetup() {
  const el = document.getElementById('setup-guide');
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}
