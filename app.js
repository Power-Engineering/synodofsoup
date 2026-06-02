// ═══════════════════════════════════════════════════════════
// SYNOD OF SOUP — THE DOCTRINE LEDGER
// app.js v4 — Full academic edition with biblical apparatus
// ═══════════════════════════════════════════════════════════

const TOPICS = [

  // ╔══════════════════════════════════════════════════════════╗
  // ║  AUTHORITY                                                ║
  // ╚══════════════════════════════════════════════════════════╝

  {
    id: 'sola-scriptura',
    name: 'Sola Scriptura',
    icon: '📖',
    controversy: 88,
    category: 'Authority',
    desc: 'Is Holy Scripture the sole infallible rule of faith and practice (norma normans non normata), or does Sacred Tradition possess co-equal magisterial authority alongside it?',
    definition: `<p><strong>Sola Scriptura</strong> ("Scripture alone") is the formal principle of the Protestant Reformation. The doctrine asserts that the Bible is the only infallible, ultimate authority for Christian faith and practice — the <em>norma normans non normata</em>, the "norming norm that is not normed by anything else."</p>
      <p>It does not mean the Bible is the <em>only</em> authority (Protestants accept creeds, councils, confessions, and tradition as <em>subordinate</em> authorities). It means that all other authorities are answerable to Scripture, and that Scripture alone is the final court of appeal in matters of doctrine.</p>
      <p>The Catholic and Orthodox counter-position is that Sacred Tradition (the lived faith of the Church handed down from the Apostles) and Scripture are two streams from the same source of divine revelation, and that the Church — through its Magisterium or its conciliar life — is the authoritative interpreter of both. To set Scripture above Tradition, on this view, is to forget that the Church canonised Scripture in the first place.</p>`,
    subtopics: [
      { id: 'ss-authority', label: 'Scripture as final authority?' },
      { id: 'ss-tradition', label: 'Role of Tradition' },
      { id: 'ss-interpretation', label: 'Who interprets?' },
      { id: 'ss-perspicuity', label: 'Perspicuity of Scripture' },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'deny',
        position: `The Catholic Church teaches that divine revelation comes to us through two inseparable channels: <em>Sacred Scripture</em> and <em>Sacred Tradition</em>. The Council of Trent (Sess. IV, 1546) declared that saving truth "is contained in the written books and in the unwritten traditions which, received by the Apostles from the mouth of Christ himself, or from the Apostles themselves, the Holy Ghost dictating, have come down even to us, transmitted as it were from hand to hand."
      <br><br>
      Vatican II's dogmatic constitution <em>Dei Verbum</em> §9 (1965) teaches that Scripture and Tradition "flow from the same divine wellspring, come together in some fashion to form one thing, and move towards the same goal." The Magisterium — the teaching office of the Pope and bishops in communion with him — is the authentic interpreter of both (<em>Dei Verbum</em> §10), though this office is "not above the Word of God, but serves it."
      <br><br>
      Crucially, the Catholic argues, Sola Scriptura is self-refuting: the canon of Scripture itself (which books belong in the Bible) is nowhere listed within Scripture. The Church discerned the canon at councils such as Hippo (393) and Carthage (397). Therefore Scripture itself rests on the prior authority of the Church's Tradition. Without the Church, there is no Bible to appeal to.
      <br><br>
      Furthermore, 2 Thessalonians 2:15 — "stand firm and hold to the traditions you were taught, either by word of mouth or by letter" — explicitly distinguishes apostolic written and oral teaching as both authoritative.`,
        verses: ['2 Thess 2:15', '1 Tim 3:15', '2 Thess 3:6', 'John 21:25', '1 Cor 11:2', 'Matt 16:18–19'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'deny',
        position: `For Orthodoxy, Scripture exists <em>within</em> the Holy Tradition of the Church, not above it. Tradition is not a separate body of doctrines added to the Bible, but the living, Spirit-guided life of the Church through which Scripture itself was written, canonised, preserved, and interpreted.
      <br><br>
      The Encyclical of the Eastern Patriarchs (1848), responding to Pope Pius IX, declares: "The defender of religion is the very body of the Church, even the people themselves, who desire their religious worship to be ever unchanged and of the same kind as that of their fathers." Authority is not located in a magisterium above the Church but in the conciliar, Spirit-led life of the whole Church.
      <br><br>
      Georges Florovsky, the great 20th-century Orthodox theologian, argued in <em>Bible, Church, Tradition</em> (1972) that "Tradition is the witness of the Spirit; the Spirit's unceasing revelation and preaching of good tidings." The seven Ecumenical Councils, the liturgical worship of the Church, the writings of the Fathers, the iconographic tradition — all are part of the one Tradition in which Scripture lives.
      <br><br>
      To attempt Sola Scriptura is, on this view, to extract the Bible from the very community that produced it — like trying to learn a language from a dictionary while refusing to speak with native speakers.`,
        verses: ['John 16:13', '2 Thess 2:15', '1 Cor 11:2', '2 Tim 2:2', 'Acts 15:28', 'Matt 18:17'],
      },
      {
        name: 'Lutheran',
        stance: 'affirm',
        position: `Lutheran theology gave us the formal principle of <em>Sola Scriptura</em>. Luther's famous stand at the Diet of Worms (April 18, 1521) crystallised it: <em>"Unless I am convinced by the testimony of the Scriptures or by clear reason — for I do not trust either in the pope or in councils alone, since it is well known that they have often erred and contradicted themselves — I am bound by the Scriptures I have quoted and my conscience is captive to the Word of God. I cannot and will not retract anything, since it is neither safe nor right to go against conscience. Here I stand. I cannot do otherwise. God help me. Amen."</em>
      <br><br>
      The Formula of Concord, Epitome (1577), articulates this principle confessionally: Scripture is "the only rule and norm according to which all doctrines and all teachers alike must be appraised and judged" — the <em>norma normans non normata</em>. Creeds and confessions (including the Lutheran ones) are subordinate norms (<em>norma normata</em>) — they norm doctrine only insofar as they themselves are normed by Scripture.
      <br><br>
      Lutherans do not reject tradition outright; the Augsburg Confession (1530) explicitly retains much of catholic tradition, ceremony, and church order. But where tradition contradicts Scripture, Scripture wins. The clarity of Scripture (<em>claritas Scripturae</em>) on matters necessary for salvation is essential — Luther held that the central message of the gospel is plain enough that any believer, with the Spirit's help, can read it rightly.
      <br><br>
      The decisive proof-text is 2 Timothy 3:16–17: Scripture is <em>theopneustos</em> ("God-breathed") and sufficient to make the man of God "thoroughly equipped for every good work."`,
        verses: ['2 Tim 3:16–17', 'Matt 15:3–9', 'Mark 7:8–13', 'Acts 17:11', 'Gal 1:8–9', 'Isa 8:20'],
      },
      {
        name: 'Reformed / Presbyterian',
        stance: 'affirm',
        position: `The Reformed tradition gives the most rigorous confessional articulation of Sola Scriptura. The Westminster Confession of Faith (1646), Chapter I, is the locus classicus. §6 declares: "The whole counsel of God concerning all things necessary for His own glory, man's salvation, faith, and life, is either expressly set down in Scripture, or by good and necessary consequence may be deduced from Scripture: unto which nothing at any time is to be added, whether by new revelations of the Spirit, or traditions of men."
      <br><br>
      §10 settles the question of ultimate authority: "The supreme judge by which all controversies of religion are to be determined, and all decrees of councils, opinions of ancient writers, doctrines of men, and private spirits, are to be examined, and in whose sentence we are to rest, can be no other but the Holy Spirit speaking in the Scripture."
      <br><br>
      The Second Helvetic Confession (1566), Chapter I — drafted by Heinrich Bullinger — likewise declares Scripture "the true Word of God" needing no other testimony than its own divine character authenticated by the Spirit (the <em>testimonium Spiritus Sancti internum</em>).
      <br><br>
      Calvin's <em>Institutes of the Christian Religion</em> (1559), Book I, chapters 6–10, gives the most developed Reformation argument: Scripture is self-authenticating (<em>autopistos</em>) because the same Spirit who inspired the prophets and apostles bears witness in the believer's heart. Tradition has a real but ministerial role — it summarises, transmits, and clarifies — but it never <em>establishes</em> doctrine. Only Scripture does that.
      <br><br>
      Hermeneutically, Reformed exegesis rests on the principle "Scripture interprets Scripture" (<em>Scriptura sui ipsius interpres</em>): obscure passages are to be understood in light of clearer ones, with the whole counsel of God read in its grammatical-historical sense.`,
        verses: ['2 Tim 3:16–17', 'Ps 19:7–11', 'Ps 119:105', 'Isa 8:20', '2 Pet 1:19–21', 'John 10:35', 'Acts 17:11'],
      },
      {
        name: 'Anglican / Episcopal',
        stance: 'nuanced',
        position: `Anglicanism affirms a qualified form of Scripture's supremacy that distinguishes it from both Catholic and continental Reformed positions. The Thirty-Nine Articles (1571), Article VI ("Of the Sufficiency of the Holy Scriptures for Salvation"), states: "Holy Scripture containeth all things necessary to salvation: so that whatsoever is not read therein, nor may be proved thereby, is not to be required of any man, that it should be believed as an article of the Faith, or be thought requisite or necessary to salvation."
      <br><br>
      Note the careful wording: Scripture contains all things <em>necessary to salvation</em> — a narrower claim than continental Reformed Sola Scriptura. Tradition and reason retain genuine authority in matters not strictly necessary for salvation.
      <br><br>
      Richard Hooker's <em>Of the Laws of Ecclesiastical Polity</em> (1594) gave Anglicanism its distinctive three-legged stool: <em>Scripture, Tradition, and Reason</em>. Scripture is supreme, but tradition (the consensus of the early Church and its councils) and reason (the God-given faculty by which Scripture is interpreted) work alongside it. Hooker memorably wrote: "Be it in matter of the one kind or of the other, what Scripture doth plainly deliver, to that the first place both of credit and obedience is due; the next whereunto is whatsoever any man can necessarily conclude by force of reason; after these the voice of the Church succeedeth."
      <br><br>
      The Chicago-Lambeth Quadrilateral (1886/88) — the basis for Anglican ecumenical engagement — names Scripture as "the rule and ultimate standard of faith." But the Quadrilateral also includes the historic creeds and the historic episcopate, signalling that for Anglicans, Scripture is supreme but never read in isolation from the Church's tradition.
      <br><br>
      This middle path (<em>via media</em>) is why Anglicans have historically struggled to settle between Catholic and Protestant readings on contested issues.`,
        verses: ['2 Tim 3:16–17', 'Isa 8:20', '2 Pet 1:19–21', '2 Thess 2:15', 'Acts 15:28', 'Eph 2:20'],
      },
      {
        name: 'Baptist',
        stance: 'affirm',
        position: `Baptists hold to Sola Scriptura with particular intensity, combining the Reformed confessional commitment with a radical congregationalism. The Second London Baptist Confession (1689), Chapter I §1 — which closely follows the Westminster Confession — declares Scripture is "the only sufficient, certain, and infallible rule of all saving knowledge, faith, and obedience."
      <br><br>
      The Baptist Faith & Message (2000), Article I, states: "The Holy Bible was written by men divinely inspired and is God's revelation of Himself to man. It is a perfect treasure of divine instruction. It has God for its author, salvation for its end, and truth, without any mixture of error, for its matter. Therefore, all Scripture is totally true and trustworthy. It reveals the principles by which God judges us, and therefore is, and will remain to the end of the world, the true center of Christian union, and the supreme standard by which all human conduct, creeds, and religious opinions should be tried."
      <br><br>
      What makes the Baptist articulation distinctive is its combination with the doctrine of <em>the priesthood of all believers</em> (1 Peter 2:9). Every Christian has direct access to Scripture under the Spirit's illumination; no priest, magisterium, or denominational hierarchy mediates between the believer and the Word. This is the theological root of the Baptist suspicion of bishops, councils, and creeds as binding authorities.
      <br><br>
      The Chicago Statement on Biblical Inerrancy (1978), endorsed by many Baptists and evangelicals, defends not only Scripture's sufficiency but its complete inerrancy in all that it affirms — including history, geography, and science where these are addressed.
      <br><br>
      Baptists historically have been suspicious of all creedalism; many congregations still recite "no creed but Christ, no book but the Bible," even while writing confessions to define their shared faith. The tension between sola scriptura and confessional Baptist identity remains a live issue.`,
        verses: ['2 Tim 3:16–17', '1 Pet 2:9', 'Acts 17:11', 'John 5:39', 'Rev 22:18–19', '2 Pet 1:20–21', 'Heb 4:12'],
      },
      {
        name: 'Anabaptist / Mennonite',
        stance: 'affirm',
        position: `Anabaptists affirm Sola Scriptura but with a distinctive Christocentric and ethical hermeneutic. The Schleitheim Confession (1527), drafted by Michael Sattler shortly before his martyrdom, grounds all its seven articles directly in New Testament texts, with conspicuous reliance on the Sermon on the Mount and the words of Jesus.
      <br><br>
      The Dordrecht Confession (1632) and the Mennonite Confession of Faith (1995, Article 4) likewise affirm Scripture as "the authoritative source and standard for preaching and teaching in the church." But Anabaptist exegesis has historically operated a "canon within the canon": the words of Jesus (especially the Sermon on the Mount, Matthew 5–7) carry interpretive priority over Paul, and the New Testament over the Old Testament.
      <br><br>
      This Christocentric hermeneutic has profound implications. Where most Reformation traditions read the Old Testament's warfare narratives and Pauline language about the state (Romans 13) as authorising Christian participation in violence and government, Anabaptists read both through the lens of Jesus's "Love your enemies" (Matthew 5:44) and "Put your sword back in its place" (Matthew 26:52). The historic Anabaptist commitments to nonviolence, refusal of oaths, and rejection of magistracy flow directly from this reading.
      <br><br>
      Anabaptists also emphasised <em>communal</em> rather than individualistic interpretation: the gathered congregation, led by the Spirit, discerns the meaning of Scripture together. This is sometimes called the "hermeneutic community" — a contrast both to the Catholic magisterium (one official interpreter) and to the radically individualist tendency of Lutheran and Baptist piety.
      <br><br>
      John Howard Yoder's <em>The Politics of Jesus</em> (1972) is the modern theological masterpiece of this approach.`,
        verses: ['Matt 5–7', 'Matt 26:52', 'Acts 5:29', 'John 14:23–26', 'Matt 18:18–20', 'Jas 1:22', '1 John 2:6'],
      },
      {
        name: 'Pentecostal',
        stance: 'nuanced',
        position: `Pentecostals affirm Scripture's supreme authority but combine it with a robust doctrine of ongoing prophetic gifts. The Assemblies of God Statement of Fundamental Truths (1916), §1, declares: "The Scriptures, both the Old and New Testaments, are verbally inspired of God and are the revelation of God to man, the infallible, authoritative rule of faith and conduct." On paper, this is identical to Baptist/Reformed Sola Scriptura.
      <br><br>
      In practice, Pentecostal piety holds together two things that other Protestants tend to keep apart: (1) the supreme written authority of Scripture, closed and complete; and (2) the ongoing, congregational ministry of prophecy, words of knowledge, and spiritual gifts (1 Corinthians 12; Acts 2:17–18).
      <br><br>
      Pentecostal hermeneutics typically distinguishes between <em>logos</em> (the written Word, Scripture) and <em>rhema</em> (a specific word from God spoken now). Rhema utterances must be tested against logos — they cannot contradict Scripture or add doctrines to it — but they are nevertheless treated as genuine communications from God to the gathered church.
      <br><br>
      Gordon Fee, the Pentecostal New Testament scholar, in <em>Gospel and Spirit</em> (1991) and <em>God's Empowering Presence</em> (1994), argued that classical Pentecostalism's narrative hermeneutic (taking Acts 2 as normative for all Christian experience) is sometimes in tension with the historical-grammatical method standard in Evangelical exegesis, but defended a chastened continuationism that respects the Bible's primacy.`,
        verses: ['2 Tim 3:16–17', 'Joel 2:28–29', 'Acts 2:17–18', '1 Cor 12:7–11', '1 Cor 14:1', '1 Thess 5:19–21', 'Rev 19:10'],
      },
    ],
    keyVerses: ['2 Tim 3:16–17', '2 Pet 1:19–21', 'Matt 15:3–9', 'Mark 7:8–13', '2 Thess 2:15', '2 Thess 3:6', 'Acts 17:11', 'Isa 8:20', 'John 10:35', 'Rev 22:18–19', '1 Tim 3:15', 'Eph 2:20'],
    historicalNote: 'The formal principle of the Reformation. Luther\'s 95 Theses (October 31, 1517) attacked indulgences, but the deeper question of authority surfaced at the Leipzig Debate (June–July 1519) when Johann Eck cornered Luther into defending Jan Hus and admitting that even councils could err. The Diet of Worms (1521), Trent\'s Decree on Scripture and Tradition (1546), and Vatican II\'s Dei Verbum (1965) are the key documents. The Joint Declaration on the Doctrine of Justification (1999) reduced — but did not abolish — the Catholic-Lutheran divide on how Scripture and Tradition relate.',
    relatedTopics: ['papacy', 'canon', 'womens-ordination'],
  },

  {
    id: 'papacy',
    name: 'Papal Primacy & Infallibility',
    icon: '⛪',
    controversy: 97,
    category: 'Authority',
    desc: 'Does the Bishop of Rome hold universal jurisdiction over the whole Church and the charism of infallibility when defining doctrine ex cathedra — or is he merely primus inter pares among the bishops?',
    definition: `<p>The doctrine of <strong>papal primacy</strong> claims that the Bishop of Rome — the Pope — is the universal head of the Christian Church on earth, holding full and supreme jurisdictional authority over every bishop, priest, and layperson. <strong>Papal infallibility</strong> is the further claim, dogmatically defined at Vatican I (1870), that when the Pope speaks <em>ex cathedra</em> ("from the chair" of Peter) on matters of faith and morals, his definitions are preserved from error by divine assistance.</p>
      <p>The Catholic case rests on Matthew 16:18–19 — Christ's words to Peter, "You are Peter, and on this rock I will build my church... I will give you the keys of the kingdom of heaven" — combined with the historical claim that Peter died in Rome and that his Roman successors inherit his unique office.</p>
      <p>Eastern Orthodoxy and Protestantism reject this. The Orthodox grant Rome an honorary primacy among the ancient five great sees (Rome, Constantinople, Alexandria, Antioch, Jerusalem) but deny universal jurisdiction and infallibility — these are seen as innovations of the second millennium. Protestants reject all of it: the Pope is, at best, the bishop of a particular church, and at worst (in classical Reformation polemic) the Antichrist of 2 Thessalonians 2.</p>`,
    subtopics: [
      { id: 'pa-jurisdiction', label: 'Universal jurisdiction?' },
      { id: 'pa-infallibility', label: 'Papal infallibility?' },
      { id: 'pa-petrine', label: 'The Petrine texts' },
      { id: 'pa-succession', label: 'Roman succession from Peter' },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'affirm',
        position: `Vatican I's dogmatic constitution <em>Pastor Aeternus</em> (1870) is the definitive statement: "If anyone says that the Roman Pontiff has merely a function of supervision or guidance, and not full and supreme power of jurisdiction over the whole Church, not only in matters of faith and morals but also in matters of discipline and government of the Church spread throughout the whole world... let him be anathema."
      <br><br>
      The same constitution defined papal infallibility: "When the Roman Pontiff speaks <em>ex cathedra</em>, that is, when, in the exercise of his office as shepherd and teacher of all Christians, in virtue of his supreme apostolic authority, he defines a doctrine concerning faith or morals to be held by the whole Church, he possesses, by the divine assistance promised to him in blessed Peter, that infallibility which the divine Redeemer willed his Church to enjoy in defining doctrine concerning faith or morals." Only two definitions in history have been formally pronounced <em>ex cathedra</em>: the Immaculate Conception (<em>Ineffabilis Deus</em>, 1854) and the bodily Assumption of Mary (<em>Munificentissimus Deus</em>, 1950).
      <br><br>
      Vatican II's <em>Lumen Gentium</em> §22 (1964) situates papal authority within episcopal collegiality: "The order of bishops is the successor to the college of the apostles in teaching authority and pastoral rule... Together with its head, the Roman Pontiff, and never without this head, [it] is the subject of supreme and full power over the universal Church." Papal primacy is therefore not absolute monarchy but the headship of a college.
      <br><br>
      The scriptural foundation rests above all on Matthew 16:18–19, where Christ gives Peter the keys and the power of binding and loosing. Luke 22:31–32 ("I have prayed for you, Simon, that your faith may not fail; and when you have turned again, strengthen your brothers") and John 21:15–17 (Christ's threefold "Feed my sheep" commission to Peter) complete the trio. Peter alone receives such commissions; his preeminence in the apostolic college is reflected throughout Acts (chapters 1–12).
      <br><br>
      Historically, the Catholic case appeals to early witnesses such as Irenaeus (<em>Against Heresies</em> III.3.2, c. 180 AD) recognising Rome's "preeminent authority" and tracing its succession from Peter and Paul; Cyprian of Carthage's <em>De Unitate Ecclesiae</em>; and the appeals to Rome made in early conciliar disputes.`,
        verses: ['Matt 16:18–19', 'Luke 22:31–32', 'John 21:15–17', 'Acts 1:15', 'Acts 2:14', 'Acts 10:9–48', 'Acts 15:7'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'deny',
        position: `Orthodox theology recognises a <em>primacy of honour</em> for the Bishop of Rome within the ancient pentarchy of patriarchal sees (Rome, Constantinople, Alexandria, Antioch, Jerusalem) but categorically rejects universal jurisdiction and infallibility. These are seen as innovations of the second millennium — products of the increasing political and ecclesiastical centralisation of the Latin West that culminated in Vatican I.
      <br><br>
      The Orthodox argument has several layers. <em>Historically</em>, no Pope in the first millennium claimed or exercised the kind of authority Vatican I would define. Pope Gregory the Great (590–604) explicitly rejected the title "Universal Bishop" when his rival in Constantinople appropriated it, calling such claims "the title of pride" and "the proud and pestilential title." When the Eastern patriarchs appealed to Rome, they did so as one ancient see appealing to another, not as subjects appealing to their universal sovereign.
      <br><br>
      <em>Theologically</em>, the Encyclical of the Eastern Patriarchs (1848), responding to Pope Pius IX's overtures, declared: "The defender of religion is the very body of the Church, even the people themselves." Authority resides in the conciliar life of the whole Church, not in any single bishop. The Holy Spirit guides the Church through Ecumenical Councils received by the universal Christian conscience — not through one office isolated from the rest.
      <br><br>
      <em>Exegetically</em>, the "rock" of Matthew 16:18 is variously identified by the Fathers: sometimes as Peter himself, sometimes as Peter's confession ("You are the Christ, the Son of the living God"), sometimes as Christ. Even when Peter is identified as the rock, his role is representative — he speaks for all the apostles. The binding and loosing of Matthew 16:19 is given to all the apostles in Matthew 18:18.
      <br><br>
      Metropolitan John Zizioulas's <em>Being as Communion</em> (1985) articulates the Orthodox alternative: primacy is real but relational, not juridical. The first bishop convenes councils, signs encyclicals on behalf of the consensus, and serves the communion of churches — but does not rule them as subordinates.
      <br><br>
      The Filioque controversy (Western insertion of "and the Son" into the Nicene Creed) and the 1054 mutual excommunications crystallised the difference, formally resolved only with the lifting of anathemas by Paul VI and Athenagoras I in 1964.`,
        verses: ['Matt 18:18', 'Matt 23:8–10', 'Mark 10:42–45', 'Gal 2:11–14', '1 Pet 5:1–3', 'Acts 15:1–29', 'John 21:17'],
      },
      {
        name: 'Anglican / Episcopal',
        stance: 'deny',
        position: `Anglicanism's foundational documents are explicit in rejecting papal jurisdiction. The Thirty-Nine Articles (1571), Article XXXVII ("Of the Civil Magistrates"), states baldly: "The Bishop of Rome hath no jurisdiction in this Realm of England." This was first asserted at the Reformation under Henry VIII (Act of Supremacy, 1534) and reaffirmed throughout the Anglican settlement.
      <br><br>
      Article XIX ("Of the Church") further distances Anglicanism: "As the Church of Jerusalem, Alexandria, and Antioch have erred; so also the Church of Rome hath erred, not only in their living and manner of Ceremonies, but also in matters of Faith." A church that has erred cannot be the universal infallible authority.
      <br><br>
      Modern Anglican-Roman Catholic dialogue (ARCIC) has nevertheless explored whether some form of "universal primacy" might be acceptable. The ARCIC statements <em>Authority in the Church I</em> (1976), <em>Authority in the Church II</em> (1981), and especially <em>The Gift of Authority</em> (1999) discussed a possible role for the Bishop of Rome as a "universal primate" exercising a ministry of unity — though one quite different from the Vatican I model. ARCIC could not agree on infallibility.
      <br><br>
      Saepius Officio (1897) was the formal Anglican response to Leo XIII's <em>Apostolicae Curae</em> (1896), which had declared Anglican holy orders "absolutely null and utterly void." The Anglican reply, by the Archbishops of Canterbury and York, defended the validity of Anglican orders by appeal to early Church practice and the actual rite of consecration used — illustrating that questions of jurisdiction and orders cannot be cleanly separated.
      <br><br>
      The recent emergence of Anglicanorum Coetibus (2009) — the Vatican's structure for receiving entire Anglican parishes into Rome — and the corresponding Personal Ordinariates indicate that Rome regards Anglican orders as still invalid, even as it welcomes Anglican converts.`,
        verses: ['Matt 23:8–10', 'Gal 2:11–14', '1 Pet 5:1–4', 'Acts 15:1–29', 'Eph 2:20', 'Rev 1:6', '2 Cor 11:13'],
      },
      {
        name: 'Lutheran',
        stance: 'deny',
        position: `Lutheran rejection of the papacy is among the most thunderous in Christian history. The Smalcald Articles (1537), composed by Martin Luther himself as a confessional document for an anticipated council, declared: "The Pope is the very Antichrist, who has exalted himself above and opposed himself against Christ, because he will not permit Christians to be saved without his power, which, nevertheless, is nothing, and is neither ordained nor commanded by God." This language is retained in the Book of Concord (1580), the binding confessional collection for Lutheran orthodoxy.
      <br><br>
      The Treatise on the Power and Primacy of the Pope (1537), drafted by Philip Melanchthon and appended to the Smalcald Articles, gives the systematic case: (1) Christ alone is the head of the Church; (2) all bishops are by divine right equal; (3) Roman primacy is by human, not divine, institution; (4) the Roman insistence on its own divine institution makes the Pope a tyrant of consciences.
      <br><br>
      The Augsburg Confession (1530), Article XXVIII, addresses ecclesiastical authority more moderately: bishops may not, by Christian liberty, impose anything contrary to the Gospel. The article retains episcopal authority in its proper sphere while denying that any bishop — including the Bishop of Rome — may bind consciences beyond Scripture.
      <br><br>
      Modern Lutheran-Catholic dialogue has softened the polemic considerably. The Joint Declaration on the Doctrine of Justification (1999) achieved a substantial measure of agreement on the central Reformation issue, and the Lutheran-Catholic statement <em>From Conflict to Communion</em> (2013) marked the 500th anniversary of the Reformation with calls for reconciliation. The structural question of papal authority, however, remains unresolved.`,
        verses: ['2 Thess 2:3–10', 'Matt 23:8–12', 'Matt 20:25–28', '1 Pet 5:1–4', 'Gal 1:8–9', '1 Tim 4:1–3', 'Rev 13:11–18'],
      },
      {
        name: 'Reformed / Presbyterian',
        stance: 'deny',
        position: `The Reformed tradition's rejection of the papacy is sharp and confessional. The Westminster Confession (1646), Chapter XXV §6, declares: "There is no other head of the Church but the Lord Jesus Christ. Nor can the Pope of Rome, in any sense, be head thereof; but is that Antichrist, that man of sin, and son of perdition, that exalteth himself, in the Church, against Christ and all that is called God."
      <br><br>
      This Antichrist identification was the standard Reformed reading of 2 Thessalonians 2 and Revelation 13 throughout the 16th–17th centuries. Modern American revisions of the Westminster Confession (e.g., the PCUSA's 1903 revision and the PCA's adoption) have generally removed or softened this language, but the structural rejection of papal authority remains.
      <br><br>
      Chapter XXXI of Westminster ("Of Synods and Councils") limits the authority of all church courts to "ministerial" and "declarative" power — they may bind only insofar as their decrees agree with Scripture. This forecloses any infallibility for Pope, council, or General Assembly.
      <br><br>
      The Second Helvetic Confession (1566), Chapter XVII, denies that any single human being may claim universal episcopal authority: "We do not allow of the doctrine of the Romish clergy who make their pope of Rome the universal pastor and supreme head of the Church Militant here on earth, and the very vicar of Jesus Christ."
      <br><br>
      The Belgic Confession (1561), Article XXXI, insists that all ministers of the Word have equal power and authority: "All ministers of God's Word have the same power and authority, wheresoever they are, as they are all ministers of Christ, the only universal Bishop, and the only Head of the Church."
      <br><br>
      Presbyterian polity itself — government by elders in graded courts (session, presbytery, general assembly) — is structurally anti-hierarchical and was developed precisely as the alternative to episcopal and papal models.`,
        verses: ['2 Thess 2:3–10', 'Rev 13:11–18', 'Matt 23:8–12', 'Eph 1:22–23', 'Eph 5:23', 'Col 1:18', '1 Tim 2:5'],
      },
      {
        name: 'Old Catholic',
        stance: 'nuanced',
        position: `Old Catholics represent a unique position: they accept the first millennium Catholic faith fully — including apostolic succession, episcopal governance, seven sacraments, and devotion to Mary and the saints — but reject Vatican I's definitions of papal jurisdiction and infallibility as innovations alien to the patristic and conciliar tradition of the undivided Church.
      <br><br>
      The Old Catholic movement formed in 1870–73 in protest against Vatican I. The Declaration of Utrecht (1889) is the founding confessional document: "We reject the declarations of the Vatican Council [I] concerning the infallibility and the universal episcopate of the Pope of Rome, which are in contradiction with the faith of the ancient Church, and which destroy her ancient canonical constitution, by attributing to the Pope the plenitude of ecclesiastical powers over all dioceses and over all the faithful."
      <br><br>
      Old Catholics accept the first seven Ecumenical Councils (the same as Eastern Orthodoxy) and reject all subsequent Western "ecumenical" councils insofar as they contradict the patristic consensus. Communion was established with the Anglican Communion via the Bonn Agreement (1931), creating an ecclesial network bridging Catholic sacramental life with Protestant suspicion of papal monarchy.
      <br><br>
      The movement remains small (perhaps half a million members worldwide) but theologically significant: it demonstrates that one can be fully catholic in faith and order while denying Vatican I's specific definitions.`,
        verses: ['Matt 23:8–10', 'Acts 15:1–29', 'Eph 4:11–13', '1 Pet 5:1–3', 'Gal 2:11–14', 'Acts 20:28', '1 Cor 12:28'],
      },
      {
        name: 'Baptist / Evangelical',
        stance: 'deny',
        position: `Baptist ecclesiology has no formal place for the papacy because it has no formal place for any extra-congregational authority. The Baptist Faith & Message (2000), Article VI ("The Church"), defines a New Testament church as "an autonomous local congregation of baptised believers" — making universal ecclesiastical jurisdiction structurally inconceivable. Local congregations cooperate freely (e.g., in the Southern Baptist Convention) but no body above the local church has jurisdiction over it.
      <br><br>
      The Second London Baptist Confession (1689) is more polemical, repeating Westminster's Antichrist identification in Chapter XXVI §4: the Pope is "that Antichrist, that man of sin, and son of perdition, that exalts himself in the church against Christ, and all that is called God."
      <br><br>
      Historically, evangelical Protestant attitudes toward Rome have softened considerably in the late 20th century. Billy Graham's positive engagement with Pope John Paul II; the Evangelicals and Catholics Together initiative (1994, led by Charles Colson and Richard John Neuhaus); and the Manhattan Declaration (2009) on shared moral concerns all represent a rapprochement around shared opposition to secularism, abortion, and the redefinition of marriage. Many evangelicals would now distinguish between rejecting Catholic doctrine (still firm) and demonising the Pope personally (now generally seen as inappropriate).
      <br><br>
      But on the structural question, evangelical and Baptist ecclesiology remains incompatible with papal authority in any form. Christ alone is the head of the Church (Ephesians 1:22–23; 5:23). All believers are priests (1 Peter 2:9). No mediator between God and humanity exists except Christ Jesus (1 Timothy 2:5). These convictions are non-negotiable.`,
        verses: ['Eph 1:22–23', 'Eph 5:23', 'Col 1:18', '1 Pet 2:9', '1 Tim 2:5', '2 Thess 2:3–10', 'Matt 23:8–10'],
      },
    ],
    keyVerses: ['Matt 16:18–19', 'Matt 18:18', 'Luke 22:31–32', 'John 21:15–17', 'Gal 2:11–14', '1 Pet 5:1–4', 'Acts 15:1–29', '2 Thess 2:3–10', 'Eph 1:22–23', 'Col 1:18', 'Matt 23:8–12', '1 Tim 2:5'],
    historicalNote: 'Key historical milestones: the Great Schism between Rome and Constantinople (1054, anathemas mutually lifted in 1964 by Paul VI and Athenagoras I); the Western Schism (1378–1417, when three rival popes claimed the throne simultaneously, resolved by the Council of Constance); the Conciliar Crisis (which Constance temporarily favoured councils over popes); the Reformation (1517–); Vatican I (1870, defining infallibility), which prompted the Old Catholic schism; and Vatican II (1962–65), which softened the language of "outside the Church no salvation" to the "subsistit in" formulation.',
    relatedTopics: ['sola-scriptura', 'apostolic-succession', 'womens-ordination'],
  },

  {
    id: 'canon',
    name: 'The Biblical Canon',
    icon: '📜',
    controversy: 71,
    category: 'Authority',
    desc: 'Which books belong in the Bible? Does the Old Testament deuterocanon (Apocrypha) carry scriptural authority, and how was the canon historically determined — by the Church, by the community of Israel, or by the self-attestation of the texts themselves?',
    definition: `<p>The <strong>biblical canon</strong> is the authoritative list of books recognised as Holy Scripture. The New Testament canon — 27 books — is agreed upon by all major Christian traditions (with marginal historical exceptions for books like Hebrews, James, 2 Peter, 2–3 John, Jude, and Revelation, whose status was once disputed but is now universally accepted).</p>
      <p>The <strong>Old Testament canon</strong>, however, is genuinely divided. Protestants accept 39 books, following the Hebrew Bible recognised by post-Temple Judaism. Roman Catholics accept 46 books, adding the seven <em>deuterocanonical</em> books — Tobit, Judith, 1–2 Maccabees, Wisdom, Sirach (Ecclesiasticus), Baruch — plus expansions to Esther and Daniel. The Eastern Orthodox accept these plus 3 Maccabees, 1 Esdras, and Psalm 151. The Ethiopian Tewahedo Church accepts an even wider canon including Enoch and Jubilees.</p>
      <p>The question is not merely about which books to read. It is about who has authority to define Scripture itself: the Church (Catholic/Orthodox view) or the texts' own self-attestation, ratified by Israel's pre-Christian canonisation (Protestant view).</p>`,
    subtopics: [
      { id: 'c-ot', label: 'Old Testament canon' },
      { id: 'c-deutero', label: 'Deuterocanonical books' },
      { id: 'c-nt', label: 'New Testament canon' },
      { id: 'c-process', label: 'How was the canon closed?' },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'affirm',
        position: `The Council of Trent (Session IV, April 8, 1546) defined the Catholic canon dogmatically against the Protestant reduction: 73 books in total — 46 in the Old Testament (including the deuterocanon) and 27 in the New. Anyone who "does not accept as sacred and canonical the said books entire with all their parts" is, in Trent's words, anathema.
      <br><br>
      The Catholic position rests on three pillars. <em>First</em>, the Septuagint (LXX) — the Greek translation of the Hebrew Scriptures produced by Alexandrian Jews in the 3rd–2nd centuries BC — included the deuterocanonical books. This was the Bible used by the Apostles and by the early Greek-speaking Church. The New Testament cites the LXX extensively, and the early Christians inherited a wider canon than the rabbis would later codify at Jamnia/Yavneh.
      <br><br>
      <em>Second</em>, the regional councils of Hippo (393 AD) and Carthage (397 AD, with similar lists in 419 AD) — chaired by Augustine and recognised by Rome — explicitly listed the deuterocanonical books as Scripture. Pope Damasus's commissioning of Jerome to produce the Vulgate (c. 382 AD) followed a list that included these books, even though Jerome himself personally preferred the Hebrew canon. Augustine, against Jerome, defended the wider canon in <em>The City of God</em> (XVIII.36) and <em>On Christian Doctrine</em> (II.8.13).
      <br><br>
      <em>Third</em>, the Council of Florence (1442) and Trent (1546) made this Catholic and binding. Vatican I (1870) reaffirmed Trent's canon. Vatican II's <em>Dei Verbum</em> (1965) gives the most recent magisterial articulation.
      <br><br>
      The deuterocanon is not "Apocrypha" (a Protestant term implying spurious origin). These books are read at Mass, are cited as Scripture, and provide essential support for Catholic doctrines including prayer for the dead (2 Maccabees 12:42–46), the intercession of saints, and the value of almsgiving for atonement (Tobit 12:9; Sirach 3:30).`,
        verses: ['2 Macc 12:42–46', 'Wisdom 3:1–4', 'Sirach 3:30', 'Tobit 12:9', 'Wisdom 2:23–24', 'Sirach 44:1–15'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'affirm',
        position: `Orthodoxy uses the Septuagint (LXX) as its Old Testament — the Greek translation used by the Apostles and quoted throughout the New Testament. The Orthodox canon includes all of the Catholic deuterocanon plus several additional texts: 1 Esdras, 3 Maccabees, Psalm 151, and the Prayer of Manasseh. 4 Maccabees appears in an appendix in many Orthodox Bibles. The Ethiopian Tewahedo Church accepts an even wider canon including 1 Enoch and Jubilees, which are quoted in the New Testament (Jude 14–15 cites 1 Enoch).
      <br><br>
      The Orthodox position is that the Church recognised which texts were inspired by the Holy Spirit and used them in her liturgy — the Bible is fundamentally a <em>liturgical</em> book. This recognition occurred organically over centuries, formalised in part by the Council of Trullo (Quinisext, 692 AD), which endorsed the canonical lists of earlier regional councils.
      <br><br>
      However, Orthodox tradition has been less precise than Latin Trent in defining the exact boundary. The Synod of Jerusalem (1672), responding to Calvinist incursions, gave the most explicit Orthodox canonical list. Earlier, the regional councils accepted variously slightly different lists, and Orthodox scholars maintain a distinction between the "protocanonical" books (universally received) and the "anagignoskomena" — books "to be read" — which are read in liturgy and accepted as profitable but treated by some Fathers as having a marginally lower status than the books of the Hebrew canon.
      <br><br>
      This is a more flexible approach than either Catholic dogmatic definition or Protestant rejection. Metropolitan Kallistos Ware writes in <em>The Orthodox Church</em> (1963): "The Old Testament books which Orthodox Christians have always considered as Scripture stand in the Greek and not in the Hebrew Bible." The Orthodox use the Septuagint because the Apostles did.`,
        verses: ['Sirach 1:1', 'Wisdom 7:25–27', 'Baruch 3:9', '2 Macc 7:9', 'Sirach 24:1–29', 'Wisdom 9:1–18'],
      },
      {
        name: 'Lutheran',
        stance: 'nuanced',
        position: `Luther's treatment of the canon is fascinating and, by Lutheran orthodoxy's own admission, idiosyncratic. In his 1534 Bible, Luther placed the deuterocanonical books in a separate section between the Old and New Testaments, with the heading: "Apocrypha: These books are not held equal to the Holy Scriptures, but are useful and good to read." This established the Protestant convention of treating them as secondary devotional literature rather than as Scripture proper.
      <br><br>
      But Luther went further: he questioned the canonicity of several New Testament books, especially James, Hebrews, Jude, and Revelation. James was his most famous target — in his 1522 Preface he called it "an epistle of straw" because (in his reading) it "contains nothing evangelical about it" and seemed to contradict Pauline justification. Luther grouped Hebrews, James, Jude, and Revelation at the end of his New Testament without numbers, indicating their reduced status in his judgement.
      <br><br>
      The Formula of Concord (1577) and confessional Lutheranism subsequently affirmed the 27-book New Testament canon without Luther's personal reservations and treated the deuterocanon as Apocrypha — useful but not authoritative for doctrine.
      <br><br>
      The principle Luther articulated remained influential: "What preaches Christ" (<em>was Christum treibet</em>) is the criterion of canonicity. Books that drive home the gospel of Christ crucified are unambiguously Scripture; books that seem to dilute or contradict it are at the margin. This Christocentric hermeneutic gave Luther a critical-theological stance toward the canon unusual in the Reformation.`,
        verses: ['John 5:39', 'John 5:46', 'Luke 24:27', 'Luke 24:44', '2 Tim 3:15–16', 'Rom 16:25–26'],
      },
      {
        name: 'Reformed / Presbyterian',
        stance: 'deny',
        position: `The Westminster Confession (1646), Chapter I §3 enumerates the 66-book Protestant canon explicitly and gives the decisive Reformed verdict on the Apocrypha: "The books commonly called Apocrypha, not being of divine inspiration, are no part of the canon of the Scripture, and therefore are of no authority in the Church of God, nor to be any otherwise approved, or made use of, than other human writings."
      <br><br>
      The Reformed case has several strands. <em>Historically</em>, the Jewish community itself never accepted the deuterocanon — these books are not in the Hebrew Bible, were not deposited in the Temple, and were excluded by Pharisaic Judaism even before the Christian era. Jerome (340–420), the most learned biblical scholar of the patristic age, distinguished between the <em>Hebrew veritas</em> (the truth of the Hebrew text) and the Greek additions in his Prologus Galeatus, treating only the Hebrew canon as Scripture proper. The Reformers, in returning to the Hebrew Old Testament (sola scriptura applied to the canon question), followed Jerome rather than Augustine.
      <br><br>
      <em>Theologically</em>, the deuterocanonical books contain teachings that the Reformers regarded as contrary to Scripture: 2 Maccabees 12:46 ("It is a holy and wholesome thought to pray for the dead, that they may be loosed from sins") supports the Catholic doctrine of purgatory; Tobit 12:9 ("almsgiving delivers from death and purges away every sin") supports the doctrine of meritorious works. The Reformers regarded these as later accretions inconsistent with the apostolic gospel.
      <br><br>
      <em>Exegetically</em>, while the New Testament freely cites the Greek OT in its phrasing, it never explicitly cites the deuterocanonical books as Scripture (introduced by "it is written" or similar formulae). The argument from absence is not conclusive but suggestive.
      <br><br>
      The Belgic Confession (1561), Article VI, distinguishes the canonical books from the apocryphal: "The Church may certainly read these books and learn from them as far as they agree with the canonical books. But they do not have such power and virtue that one could confirm from their testimony any point of faith or of the Christian religion."`,
        verses: ['2 Tim 3:15–17', '2 Pet 1:20–21', 'Rev 22:18–19', 'Deut 4:2', 'Deut 12:32', 'Prov 30:5–6', 'Luke 24:44'],
      },
      {
        name: 'Anglican / Episcopal',
        stance: 'nuanced',
        position: `Anglicanism takes a characteristically <em>via media</em> position. The Thirty-Nine Articles (1571), Article VI ("Of the Sufficiency of the Holy Scriptures for Salvation"), explicitly lists the 39 books of the Hebrew canon as the Old Testament. It then names the deuterocanonical books separately: "And the other Books (as Hierome saith) the Church doth read for example of life and instruction of manners; but yet doth it not apply them to establish any doctrine."
      <br><br>
      The position derives from Jerome (via Hooker) and gives the deuterocanon a real but limited place. These books are read in the lectionary of the Book of Common Prayer — they appear in daily morning and evening prayer readings. Anthems and choral pieces use deuterocanonical texts. Anglican worship is shaped by Sirach and Wisdom and Tobit in ways most Protestant traditions are not.
      <br><br>
      But Anglicans do not derive doctrine from these books. The classic Article VI distinction stands: read for edification, not used as the foundation of doctrine.
      <br><br>
      In recent Anglican biblical scholarship — N.T. Wright, Christopher Bryan, John Goldingay — the Apocrypha is treated as crucial Second Temple Jewish literature without which the New Testament cannot be properly understood. 1–2 Maccabees provide the historical background for the Hasmonean period; Sirach and Wisdom develop the wisdom theology that Paul presupposes; the apocalyptic of 1 Enoch (in the Ethiopian canon) illuminates Jude. Whether these books are "Scripture" in the strict sense or essential historical-theological background remains an internal Anglican question.`,
        verses: ['2 Tim 3:15–17', 'Luke 24:27', 'Luke 24:44', 'Acts 17:11', 'John 10:35', '1 Cor 10:11'],
      },
      {
        name: 'Baptist / Evangelical',
        stance: 'deny',
        position: `The 66-book Protestant canon is universal among Baptists, evangelicals, and Pentecostals. The Baptist Faith & Message (2000), Article I, presupposes this canon without listing the books individually. The Chicago Statement on Biblical Inerrancy (1978) treats the 66-book canon as a given.
      <br><br>
      The standard evangelical argument compresses the Reformed case: the deuterocanonical books were not in the Hebrew Bible recognised by Jesus and the Apostles (who Jesus describes as "the Law of Moses and the prophets and the Psalms," Luke 24:44 — the threefold Hebrew canon); the New Testament does not cite them as Scripture; the early Church included them sometimes in liturgy and edification but did not consistently treat them as authoritative; and the Reformers, properly, returned to the Hebrew Old Testament.
      <br><br>
      Among evangelical scholars, F.F. Bruce's <em>The Canon of Scripture</em> (1988) gives the definitive defence of the 66-book canon. Roger Beckwith's <em>The Old Testament Canon of the New Testament Church</em> (1985) argues that the Jewish canon was effectively closed by the time of Jesus and that Jesus and the Apostles accepted essentially the Protestant 39-book OT.
      <br><br>
      The doctrine of sola scriptura is functionally complete only when paired with a closed and clearly defined canon. Evangelical conviction holds that the Holy Spirit, in the providential life of the Church, has given us a complete and inerrant 66-book Scripture and that adding to or subtracting from this is a serious matter (Revelation 22:18–19).`,
        verses: ['Luke 24:44', '2 Tim 3:15–17', '2 Pet 1:20–21', 'Rev 22:18–19', 'Deut 4:2', 'Prov 30:5–6', 'Rom 3:1–2'],
      },
    ],
    keyVerses: ['2 Tim 3:15–17', '2 Pet 1:20–21', 'Luke 24:44', 'John 10:35', 'Rev 22:18–19', 'Deut 4:2', '2 Macc 12:42–46', 'Sirach 24:1–29', 'Rom 3:1–2', 'Acts 17:11'],
    historicalNote: 'The canon was not formally closed in the Western Church until Trent (1546), partly in reaction to Luther\'s and the Reformers\' canonical reductions. The Muratorian Fragment (c. 170 AD) is the earliest extant list — incomplete, missing James, Hebrews, and 1–2 Peter, but including the Apocalypse of Peter. Athanasius\'s Festal Letter 39 (367 AD) is the first text to list precisely the 27 NT books as we now have them. The regional councils of Hippo (393) and Carthage (397, 419) settled the Western Church\'s practice; the Council in Trullo (692) settled the Eastern. The Reformation reopened the question definitively for Protestantism.',
    relatedTopics: ['sola-scriptura', 'real-presence', 'papacy'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  SACRAMENTS                                               ║
  // ╚══════════════════════════════════════════════════════════╝

  {
    id: 'real-presence',
    name: 'Real Presence in the Eucharist',
    icon: '🍞',
    controversy: 95,
    category: 'Sacraments',
    desc: 'Does Christ\'s body and blood become truly, substantially present in the Eucharistic elements — and if so, by what mechanism? Is the Mass a propitiatory sacrifice re-presenting Calvary, or a commemorative meal?',
    definition: `<p>The <strong>Real Presence</strong> debate asks what happens when a Christian community celebrates the Lord's Supper / Eucharist / Holy Communion / Mass. The question is whether Christ — body, blood, soul, and divinity — becomes truly, objectively, locally present in the consecrated bread and wine, or whether the bread and wine remain ordinary elements that signify and remember Christ's sacrifice without ontologically becoming his body and blood.</p>
      <p>Four main positions divide Christianity:</p>
      <p><strong>(1) Transubstantiation</strong> (Roman Catholic): the <em>substance</em> of the bread and wine is wholly converted into the substance of Christ's body and blood, while the <em>accidents</em> (the sensible appearances: shape, taste, colour) remain those of bread and wine.</p>
      <p><strong>(2) Sacramental Union / Real Presence "in, with, and under"</strong> (Lutheran): Christ's body and blood are truly and substantially present together with the bread and wine, without the bread becoming the body. Sometimes loosely called consubstantiation, though Lutherans reject that label.</p>
      <p><strong>(3) Spiritual Real Presence / Virtualism</strong> (Reformed): Christ is truly present to faith through the Holy Spirit, who unites the believer to the ascended Christ in heaven — but Christ's glorified body remains locally at the right hand of the Father, not in the elements.</p>
      <p><strong>(4) Memorialism</strong> (Zwinglian, most Baptist): the bread and wine remain ordinary; the Supper is a commemoration, a pledge of faith, and a community covenant, with no real change in the elements.</p>
      <p>The Eastern Orthodox affirm a genuine transformation but resist the precise scholastic categories of "substance" and "accidents" — they speak of <em>metousiosis</em> (change of being) while preferring the language of mystery.</p>`,
    subtopics: [
      { id: 'rp-presence', label: 'Is Christ truly present?' },
      { id: 'rp-how', label: 'Manner of presence' },
      { id: 'rp-sacrifice', label: 'Is Mass a sacrifice?' },
      { id: 'rp-adoration', label: 'Eucharistic adoration?' },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'affirm',
        position: `The Council of Trent (Session XIII, October 11, 1551) defined transubstantiation dogmatically: "By the consecration of the bread and wine there takes place a change of the whole substance of the bread into the substance of the body of Christ our Lord, and of the whole substance of the wine into the substance of his blood. This change the holy Catholic Church has fittingly and properly called transubstantiation."
      <br><br>
      The metaphysics rests on the Aristotelian-Thomistic distinction between substance (what a thing essentially is) and accidents (its sensible properties). At the moment of consecration, when the priest pronounces the words of institution ("This is my body... this is my blood"), the substance of bread is wholly converted into the substance of Christ's body, and the substance of wine into the substance of his blood, while the accidents of bread and wine remain. The change is total: Christ is present "body, blood, soul, and divinity" (Trent) under each species and in every particle of the consecrated host.
      <br><br>
      Trent (Session XXII, September 17, 1562) also defined the Mass as a true propitiatory sacrifice: "In this divine sacrifice which is celebrated in the Mass, that same Christ is contained and offered in an unbloody manner who once offered himself in a bloody manner on the altar of the cross." The Mass is not a new sacrifice but the same sacrifice of Calvary, re-presented in a sacramental mode.
      <br><br>
      The Catechism of the Catholic Church §§1373–1381 reaffirms transubstantiation, the real presence, and the propitiatory character of the Mass. Eucharistic adoration follows necessarily from these convictions: Christ being substantially present in the reserved Sacrament, he is to be worshipped wherever the consecrated host is reserved.
      <br><br>
      The scriptural argument rests above all on John 6:51–58, where Jesus declares "the bread that I will give for the life of the world is my flesh" — language so realistic that "many of his disciples turned back and no longer walked with him" (John 6:66). At the Last Supper (Matthew 26:26–28; Mark 14:22–24; Luke 22:19–20; 1 Corinthians 11:23–25), Christ declares of the bread "This is my body" and of the cup "This is my blood" — and Paul warns those who eat unworthily are "guilty concerning the body and blood of the Lord" (1 Corinthians 11:27), implying real and not merely symbolic presence.
      <br><br>
      The patristic witness — Ignatius of Antioch (<em>To the Smyrnaeans</em> 7), Justin Martyr (<em>First Apology</em> 66), Irenaeus (<em>Against Heresies</em> IV.18; V.2), Cyril of Jerusalem (<em>Mystagogical Catecheses</em> IV–V), Ambrose, Augustine, John Chrysostom — uniformly affirms a real and substantial presence, though the precise metaphysical categories of transubstantiation are a medieval Latin contribution.`,
        verses: ['John 6:51–58', 'Matt 26:26–28', 'Mark 14:22–24', 'Luke 22:19–20', '1 Cor 10:16–17', '1 Cor 11:23–29', 'Heb 13:10', 'Mal 1:11'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'affirm',
        position: `Orthodoxy affirms a genuine, substantial transformation in the Eucharist — sometimes called <em>metousiosis</em> (the Greek equivalent of transubstantiation) — while resisting the precise Aristotelian-scholastic framework that Latin theology developed. The change is real and objective, but its mode is mystery.
      <br><br>
      The Confession of Dositheus (Synod of Jerusalem, 1672), composed in response to Calvinist incursions among Orthodox communities, gives the most explicit Orthodox statement, Decree XVII: "In the celebration [of the Eucharist] we believe the Lord Jesus Christ to be present, not typically, nor figuratively, nor by superabundant grace, as in the other Mysteries, nor by a bare presence... but truly and really, so that after the consecration of the bread and of the wine, the bread is changed, transubstantiated, converted, transformed, into the actual true Body of the Lord... and the wine is changed and transubstantiated into the actual true Blood of the Lord."
      <br><br>
      The Confession explicitly uses the Greek <em>metousiōsis</em> ("change of being") — though many Orthodox theologians today prefer earlier, more apophatic language. John of Damascus's <em>Exposition of the Orthodox Faith</em> (IV.13, c. 730 AD): "The bread and the wine are not merely figures of the body and blood of Christ (God forbid!), but the deified body of the Lord himself."
      <br><br>
      The Divine Liturgy of St. John Chrysostom — celebrated weekly throughout Orthodoxy — explicitly invokes the Holy Spirit upon the gifts in the <em>epiklesis</em>: "Make this bread the precious body of thy Christ. And that which is in this cup the precious blood of thy Christ. Changing them by thy Holy Spirit." Note: Orthodoxy locates the moment of consecration not at the institution narrative ("This is my body") but at the epiklesis (the calling-down of the Spirit) — a difference from Latin liturgical theology.
      <br><br>
      Orthodoxy emphasises the Eucharist as the <em>eschatological banquet</em>: the foretaste of the Kingdom, in which the Church becomes the Body of Christ by partaking of his Body. Theosis — deification, participation in the divine nature — is enacted in the Eucharist. Alexander Schmemann's <em>For the Life of the World</em> (1963) is the modern masterpiece of Orthodox eucharistic theology.
      <br><br>
      The Divine Liturgy is sacrifice as well as communion, but Orthodoxy does not develop the precise propitiatory metaphysics of Trent. The sacrifice is the one self-offering of Christ, made present in the liturgical celebration of the Church.`,
        verses: ['John 6:51–58', '1 Cor 10:16–17', 'Matt 26:26–28', 'Acts 2:42', 'Acts 20:7', 'Mal 1:11', 'Heb 9:24–28'],
      },
      {
        name: 'Lutheran',
        stance: 'nuanced',
        position: `Lutheranism teaches the <em>sacramental union</em> (<em>unio sacramentalis</em>): Christ's true body and blood are truly, substantially, and bodily present together with the bread and wine — "in, with, and under" them — to be received orally (the <em>manducatio oralis</em>) by all communicants, believers and unbelievers alike. The famous Lutheran phrase: <em>"true body and true blood, truly present"</em>.
      <br><br>
      The Augsburg Confession (1530), Article X: "Of the Supper of the Lord they teach that the body and blood of Christ are truly present, and are distributed to those who eat the Supper of the Lord; and they reject those that teach otherwise." The Smalcald Articles (1537) and especially the Formula of Concord (1577), Article VII, gave this its most systematic expression.
      <br><br>
      Luther's defining stand came at the Marburg Colloquy (October 1–4, 1529) against Ulrich Zwingli. Zwingli argued the body of Christ is now in heaven and cannot be locally present on earth; "is" in "This is my body" must mean "signifies." Luther insisted: the words mean what they say. He famously wrote <em>"Hoc est corpus meum"</em> on the table in chalk, refusing to negotiate the literal sense. Luther's <em>That These Words of Christ, "This Is My Body," etc., Still Stand Firm Against the Fanatics</em> (1527) and <em>Confession Concerning Christ's Supper</em> (1528) are the polemical masterpieces.
      <br><br>
      Lutherans reject the term "consubstantiation" — which suggests a third compound entity (bread-body) — and instead speak of the sacramental union. The bread remains bread; Christ's body is present with the bread. The doctrine rests on the <em>ubiquity</em> of Christ's glorified body: since Christ's human nature, by virtue of the personal union with the divine nature, partakes of divine omnipresence (the <em>communicatio idiomatum</em>), his body can be locally and bodily present wherever he wills — including in the Eucharist on countless altars simultaneously.
      <br><br>
      Lutherans reject transubstantiation as an unnecessary philosophical speculation that goes beyond what Scripture warrants. They equally reject the Reformed view as denying the plain sense of Christ's words. The Lutheran position is deliberately a middle path: full real presence without the Aristotelian metaphysics.
      <br><br>
      However, Lutherans firmly reject the Mass as a propitiatory sacrifice. Augsburg Confession Article XXIV: "The Mass... was instituted that the faith of those who use the sacraments should be exercised... and not that it should be a propitiatory sacrifice for the living and the dead." Christ's one self-offering on the cross is complete; the Lord's Supper applies its benefits but does not repeat or re-present them as a sacrifice.`,
        verses: ['Matt 26:26–28', '1 Cor 10:16–17', '1 Cor 11:23–29', 'John 6:53–58', 'Mark 14:22–24', '1 Cor 11:27', 'Luke 22:19–20'],
      },
      {
        name: 'Reformed / Presbyterian',
        stance: 'nuanced',
        position: `The Reformed tradition affirms a genuine but spiritual real presence: Christ is truly and really present in the Lord's Supper — but to faith, by the power of the Holy Spirit, rather than locally in the elements. Calvin called the Supper "a mystery so high that we cannot comprehend it" while insisting on its reality.
      <br><br>
      Calvin's <em>Institutes</em> Book IV, Chapter 17 ("The Sacred Supper of Christ, and What It Brings to Us") is the locus classicus. Calvin rejected both Catholic transubstantiation (which "destroys the truth of Christ's natural body") and Zwinglian memorialism (which makes the Supper "an empty figure"). Instead, in the Supper, the Holy Spirit raises the believer's heart to the ascended Christ in heaven and there nourishes the soul on Christ's true body and blood. The believer truly partakes — not in a bodily mode through the mouth, but really and spiritually through faith united to Christ by the Spirit.
      <br><br>
      The famous Reformed doctrine of the <em>extra Calvinisticum</em> grounds this: Christ's glorified humanity is locally seated at the right hand of the Father (Acts 3:21, Hebrews 9:24); his body cannot be locally present in millions of pieces of bread on millions of altars; therefore his presence must be Spirit-mediated. The Heidelberg Catechism, Question 47, expresses this: Christ is "with us, according to His human nature, no longer on earth; but according to His Godhead, majesty, grace, and Spirit, He is never absent from us."
      <br><br>
      The Westminster Confession (1646), Chapter XXIX §7, articulates the Reformed position formally: "Worthy receivers, outwardly partaking of the visible elements, in this sacrament, do then also, inwardly by faith, really and indeed, yet not carnally and corporally, but spiritually, receive, and feed upon, Christ crucified, and all benefits of His death: the body and blood of Christ being then, not corporally or carnally, in, with, or under the bread and wine; yet, as really, but spiritually, present to the faith of believers in that ordinance."
      <br><br>
      The Second Helvetic Confession (1566), Chapter XXI, and the Belgic Confession (1561), Article XXXV, give similar statements.
      <br><br>
      The Westminster Confession (Chapter XXIX §6) sharply rejects transubstantiation as "repugnant, not to Scripture alone, but even to common sense, and reason; overthroweth the nature of the sacrament, and hath been, and is, the cause of manifold superstitions; yea, of gross idolatries." The Reformed condemnation of the Mass as a propitiatory sacrifice is equally sharp (Westminster XXIX §2): the Lord's Supper is "for the remembrance" of Christ's sacrifice and "not at all" a continuing sacrifice.`,
        verses: ['John 6:35', 'John 6:63', '1 Cor 10:16', 'Mark 14:25', 'Acts 3:21', 'Heb 9:24–28', 'Heb 10:11–14', 'Matt 26:64'],
      },
      {
        name: 'Zwinglian / Baptist',
        stance: 'deny',
        position: `Zwingli and most Baptists hold a memorial view: the Lord's Supper is a remembrance of Christ's once-for-all sacrifice, a proclamation of his death until he comes, a community covenant meal, and a pledge of faith — but the bread and wine remain ordinary bread and wine. No change occurs in the elements. Christ's glorified body is locally in heaven.
      <br><br>
      Ulrich Zwingli's <em>On the Lord's Supper</em> (1526) and <em>A Clear Refutation</em> (1527) lay out the case. His decisive exegetical move: "is" in "This is my body" means "signifies" — exactly as in "I am the door" (John 10:9), "I am the vine" (John 15:1), or Paul's "the rock was Christ" (1 Corinthians 10:4). To take "is" with crude literalism is to misread Hebrew and Greek idiom.
      <br><br>
      Theologically, Zwingli argued that the body of Christ ascended to heaven (Acts 1:9–11) and remains there until the parousia (Acts 3:21). It cannot be locally present on earthly altars. The Holy Spirit unites the believer to the ascended Christ — but the bread itself is bread.
      <br><br>
      The Second London Baptist Confession (1689), Chapter XXX §6, gives the Particular Baptist version: "The Lord's Supper is not a sacrifice but only a memorial of that one offering up of himself, by himself, upon the Cross, once for all, and a spiritual oblation of all possible praise unto God for the same; so that the popish sacrifice of the Mass... is most abominably injurious to Christ's one only sacrifice, the alone propitiation for all the sins of the elect."
      <br><br>
      The Baptist Faith & Message (2000), Article VII, gives the simpler statement: "The Lord's Supper is a symbolic act of obedience whereby members of the church, through partaking of the bread and the fruit of the vine, memorialise the death of the Redeemer and anticipate His second coming."
      <br><br>
      The memorial view emphasises the corporate dimension: the Supper proclaims Christ's death "until he comes" (1 Corinthians 11:26) and unites the community in a covenantal meal of remembrance, anticipation, and pledge. It is rich in meaning even without substantial presence.
      <br><br>
      Critics of memorialism (Reformed and Lutheran alike) argue it reduces the Supper to a bare symbol, missing the New Testament's emphasis on real participation in Christ's body and blood (1 Corinthians 10:16). Zwinglians reply: real spiritual participation, mediated by faith, is fully compatible with the elements remaining bread and wine.`,
        verses: ['Luke 22:19', '1 Cor 11:24–26', 'Acts 1:9–11', 'Acts 3:21', 'John 6:63', 'John 10:9', 'John 15:1', '1 Cor 10:4'],
      },
      {
        name: 'Anglican / Episcopal',
        stance: 'varies',
        position: `Anglicanism is famously divided on the Eucharist, and this is the result of deliberate confessional ambiguity. The Thirty-Nine Articles (1571), Article XXVIII ("Of the Lord's Supper"), denies transubstantiation as "repugnant to the plain words of Scripture, overthroweth the nature of a Sacrament, and hath given occasion to many superstitions" — but affirms that "the body of Christ is given, taken, and eaten in the Supper, only after a heavenly and spiritual manner. And the mean whereby the body of Christ is received and eaten in the Supper is Faith."
      <br><br>
      Article XXIX adds that "the Wicked, and such as be void of a lively faith... eat not the body of Christ" — a deliberate rejection of the Lutheran <em>manducatio impiorum</em> (the unworthy still eat the body of Christ, to their own judgement).
      <br><br>
      The famous "Black Rubric" was first added to the Book of Common Prayer in 1552 to disavow any "real and essential presence" in the elements. It was removed under Elizabeth I (1559), restored in modified form in 1662 disavowing only "any corporal presence of Christ's natural flesh and blood," and remains a touchstone of Reformed-leaning Anglican identity.
      <br><br>
      The result is an Anglican spectrum:
      <br><br>
      <strong>Anglo-Catholic / High Church</strong>: E.B. Pusey, John Keble, John Henry Newman (before his conversion to Rome), the Tractarians — affirmed a doctrine of the real objective presence essentially identical to Catholic transubstantiation while sometimes using slightly different language. Pusey's <em>The Doctrine of the Real Presence</em> (1855) is the classic Tractarian treatment.
      <br><br>
      <strong>Central / Calvinian</strong>: most mainstream Anglican theology follows Calvin: real spiritual presence to faith, mediated by the Spirit, the body of Christ locally in heaven.
      <br><br>
      <strong>Low Church / Evangelical</strong>: J.C. Ryle, John Stott — closer to a memorial view, emphasising remembrance and self-examination over presence.
      <br><br>
      The Book of Common Prayer's actual eucharistic language is rich and sacramental — "the Body of our Lord Jesus Christ, which was given for thee, preserve thy body and soul unto everlasting life" — supporting a higher view than the Articles alone. The tension between Article and Prayer Book is itself characteristically Anglican.`,
        verses: ['Matt 26:26–28', '1 Cor 10:16', '1 Cor 11:23–29', 'John 6:53–58', 'Acts 3:21', 'Luke 22:19'],
      },
      {
        name: 'Methodist / Wesleyan',
        stance: 'nuanced',
        position: `Methodism affirms a genuine spiritual real presence — closer to Calvin than to Zwingli, and notably warmer in its eucharistic piety than most Reformed traditions. John and Charles Wesley's <em>Hymns on the Lord's Supper</em> (1745, 166 hymns) is the great Methodist eucharistic monument. The hymns are unmistakably high in their language:
      <br><br>
      <em>"Author of life divine, who hast a table spread, / Furnish'd with mystic wine and everlasting bread, / Preserve the life thyself hast given, / And feed and train us up for heaven."</em>
      <br><br>
      And: <em>"Yet hath he in the sacred meal his real presence stamp'd."</em>
      <br><br>
      John Wesley taught that the Lord's Supper is a "converting ordinance" — that is, a means of grace by which God may bring people into saving faith, not merely a confirming ordinance for those already converted. This is unusual; most Reformed traditions restrict the Supper to professing believers.
      <br><br>
      Wesley followed his Anglican formation closely. He retained Article XXVIII of the Thirty-Nine Articles in the Methodist Articles of Religion (1784), Article XVIII, which became the doctrinal basis for American Methodism: Christ is given, taken, and eaten in the Supper, "only after a heavenly and spiritual manner."
      <br><br>
      The United Methodist Book of Discipline (2016) describes the Lord's Supper as one of two sacraments (with baptism) and speaks of "the real presence of Christ" without legislating the mode. Wesley himself deliberately avoided metaphysical precision, preferring the language of "mystery." His sermon "The Duty of Constant Communion" (1787) urges frequent reception — once a week or more — far more often than was typical among 18th-century Anglicans.
      <br><br>
      Methodism rejects transubstantiation, the Mass as propitiatory sacrifice, and Eucharistic adoration of the reserved Sacrament — but maintains a high Eucharistic theology in worship and piety that rises well above mere memorialism.`,
        verses: ['Matt 26:26–28', '1 Cor 10:16–17', '1 Cor 11:23–29', 'John 6:53–58', 'Luke 22:19–20', 'John 6:35', 'Acts 2:42'],
      },
      {
        name: 'Pentecostal',
        stance: 'deny',
        position: `Classical Pentecostalism, growing out of Wesleyan and Holiness traditions, has tended toward a memorial view of the Lord's Supper — closer to Baptist memorialism than to Wesleyan spiritual presence, despite Pentecostalism's Wesleyan roots.
      <br><br>
      The Assemblies of God Statement of Fundamental Truths (1916), §6, treats the Lord's Supper as one of two "ordinances": "The Lord's Supper, consisting of the elements — bread and the fruit of the vine — is the symbol expressing our sharing the divine nature of our Lord Jesus Christ; a memorial of His suffering and death; and a prophecy of His second coming; and is enjoined on all believers 'until He come!'"
      <br><br>
      Pentecostal theological reflection has tended to focus on the experiential and pneumatic dimensions of worship rather than on the metaphysics of the Supper. The Spirit's manifest presence in worship — through tongues, prophecy, healing, and the gifts of the Spirit — is the locus of the Spirit's work in Pentecostal piety, more than the consecrated bread and wine.
      <br><br>
      However, more recent Pentecostal scholarship (e.g., Wolfgang Vondey's <em>Pentecostal Theology</em>, 2017) has called for a richer Pentecostal eucharistic theology. Some Pentecostals, especially those influenced by ecumenical dialogue or by liturgical renewal, have moved toward warmer views of real presence.
      <br><br>
      Charismatic Catholics, Charismatic Anglicans, and Charismatic Lutherans, of course, retain the eucharistic theology of their parent traditions. The "charismatic" element supplements but does not replace their sacramental theology.`,
        verses: ['Luke 22:19–20', '1 Cor 11:23–26', 'Acts 2:42', 'Acts 20:7', '1 Cor 10:16–17', 'John 6:63'],
      },
    ],
    keyVerses: ['John 6:51–58', 'Matt 26:26–28', 'Mark 14:22–24', 'Luke 22:19–20', '1 Cor 10:16–17', '1 Cor 11:23–29', 'John 6:63', 'Acts 1:9–11', 'Acts 3:21', 'Heb 9:24–28', 'Heb 10:11–14', 'Mal 1:11'],
    historicalNote: 'The Marburg Colloquy (October 1–4, 1529): Luther and Zwingli (with Oecolampadius, Bucer, and Melanchthon present) agreed on 14 of 15 articles but could not reach accord on the Eucharist. Luther repeatedly wrote "Hoc est corpus meum" on the table in chalk. This permanently divided Protestantism into Lutheran and Reformed streams and foreclosed a united Reformation front against Rome. Trent\'s Decree on the Most Holy Eucharist (1551) and Decree on the Sacrifice of the Mass (1562) codified the Catholic response. The Lutheran-Catholic dialogue\'s "The Eucharist" (1978) and the Reformed-Catholic "Towards a Common Understanding of the Church" (1990) have narrowed the differences considerably.',
    relatedTopics: ['baptism', 'number-of-sacraments', 'salvation-works'],
  },


  {
    id: 'baptism',
    name: 'Baptism: Subjects, Mode & Effect',
    icon: '💧',
    controversy: 87,
    category: 'Sacraments',
    desc: 'Three inseparable debates: (1) Who may be baptised — infants born to believers, or only professing believers? (2) What mode is valid — full immersion, affusion (pouring), or aspersion (sprinkling)? (3) What does baptism effect — regeneration, covenant membership, or the public declaration of prior faith?',
    definition: `<p><strong>Baptism</strong> is the Christian rite of initiation, instituted by Christ (Matthew 28:19) using water and the Trinitarian formula. All Christians agree it is essential — but they disagree fundamentally on three points that cannot be separated:</p>
      <p><strong>(1) Subjects.</strong> Should infants born to Christian parents be baptised (<em>paedobaptism</em>, "infant baptism") or only professing believers (<em>credobaptism</em>, "believer's baptism")? Catholics, Orthodox, Lutherans, Reformed, Anglicans, Methodists baptise infants. Baptists, Anabaptists, Pentecostals, most non-denominationals baptise only believers.</p>
      <p><strong>(2) Mode.</strong> Must baptism be by full immersion (<em>baptizo</em> in Greek means "to dip, plunge")? Or are pouring (affusion) and sprinkling (aspersion) valid? Orthodoxy and most Baptists insist on immersion. Catholics, Lutherans, Reformed accept all three modes. Methodists allow choice. Anglicans typically pour or sprinkle infants and may immerse adults.</p>
      <p><strong>(3) Effect.</strong> Does baptism <em>cause</em> regeneration and forgive sins (baptismal regeneration), or does it merely <em>signify and seal</em> a prior work of grace, or is it merely a public testimony? Catholics, Orthodox, Lutherans, and high-church Anglicans affirm baptismal regeneration. Reformed traditions affirm a covenant sign that does not necessarily impart grace. Baptists hold baptism as an ordinance — a public testimony of faith already received.</p>`,
    subtopics: [
      { id: 'b-subjects', label: 'Paedobaptism or credobaptism?' },
      { id: 'b-mode', label: 'Mode: immersion or affusion?' },
      { id: 'b-effect', label: 'Baptismal regeneration?' },
      { id: 'b-rebaptism', label: 'Re-baptism permissible?' },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'affirm',
        position: `The Council of Trent (Session VII, March 3, 1547, "Canons on the Sacraments in General" and "Canons on the Sacrament of Baptism") defined the Catholic doctrine sharply. Canon 13 anathematises those who deny that infants "are to be baptised." Canon 5 anathematises those who say baptism "is not necessary for salvation." Canon 2 affirms baptismal regeneration: baptism "confers the grace of justification" and washes away original sin.
      <br><br>
      The Catechism of the Catholic Church §§1213–1284 gives the systematic exposition. Baptism is "the basis of the whole Christian life, the gateway to life in the Spirit, and the door which gives access to the other sacraments" (CCC §1213). It removes original sin, forgives personal sins committed before baptism, imparts sanctifying grace, incorporates the baptised into the Body of Christ (1 Corinthians 12:13), and bestows an indelible spiritual character that cannot be effaced (CCC §1272). For these reasons, baptism is "necessary for salvation" (CCC §1257), citing Christ's words in John 3:5: "Unless one is born of water and the Spirit, he cannot enter the kingdom of God."
      <br><br>
      Any mode is valid provided water is used with the Trinitarian formula (CCC §1239–1240): "I baptise you in the name of the Father and of the Son and of the Holy Spirit." Immersion, affusion, and aspersion all suffice. The minister is ordinarily the bishop, priest, or deacon; but in case of necessity, any person — even an unbaptised person — can validly baptise if they intend to do what the Church does (CCC §1256).
      <br><br>
      Infant baptism is defended historically and theologically. Origen (<em>Homily on Romans</em> V.9, c. 244 AD) calls infant baptism "a tradition received from the Apostles." Cyprian of Carthage's letter to Fidus (Letter 64, c. 253 AD) affirms infant baptism within days of birth. Augustine's controversies against the Pelagians made infant baptism a touchstone of orthodox doctrine on original sin (since infants are baptised "for the remission of sins," they must have sin to be remitted — original sin inherited from Adam).
      <br><br>
      Theologically, baptism is the New Covenant counterpart to circumcision (Colossians 2:11–12), which was administered to eight-day-old males throughout the Old Covenant. The household baptisms of the New Testament — Lydia and her household (Acts 16:15), the Philippian jailer and "all his family" (Acts 16:33), Crispus and his household (Acts 18:8), the household of Stephanas (1 Corinthians 1:16) — provide further support.
      <br><br>
      Christ's command "let the little children come to me, and do not forbid them, for to such belongs the kingdom of heaven" (Matthew 19:14) is taken as warrant for bringing infants into the visible Church through baptism.`,
        verses: ['John 3:5', 'Matt 28:19', 'Acts 2:38–39', 'Acts 16:15', 'Acts 16:33', 'Col 2:11–12', 'Titus 3:5', 'Matt 19:14', '1 Cor 12:13'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'affirm',
        position: `Orthodoxy practises baptism by triple full immersion as the sole valid mode — based on Romans 6:4 ("we were buried therefore with him by baptism into death"), the Didache's preference for "living water" (Didache 7, c. 90 AD), and the unbroken tradition of the early Church reflected in the baptisteries of ancient basilicas. Each immersion is in the name of one Person of the Trinity: "The servant of God [name] is baptised in the name of the Father, Amen. And of the Son, Amen. And of the Holy Spirit, Amen."
      <br><br>
      The Confession of Dositheus (1672), Decree XVI, affirms baptismal regeneration: through baptism, the baptised is "freed from the ancestral transgression" (Adam's sin) and "made a partaker of the divine nature." Baptism is necessary for salvation. The baptism of infants is the long-standing apostolic tradition of the Church.
      <br><br>
      A distinctive feature: infants in Orthodox practice are baptised, <em>chrismated</em> (anointed with holy chrism — equivalent to Western confirmation), and receive their first Holy Communion in one unified liturgical act, all within weeks of birth. This means Orthodox infants are full sacramental members of the Church from the very beginning of their lives, receiving communion as soon as they can swallow. The Western fragmentation of these three rites (delaying confirmation and first communion to "the age of reason") is regarded as a medieval anomaly.
      <br><br>
      Reception of converts varies. Those baptised in non-Trinitarian groups (Mormons, Jehovah's Witnesses, Oneness Pentecostals) must be baptised in Orthodoxy because their baptism was not Trinitarian. Those baptised by triple immersion in the Trinitarian name in another church <em>may</em> be received by chrismation alone (the principle of <em>economia</em>, pastoral discretion), or in stricter jurisdictions may be re-baptised. Practices vary between the various autocephalous Orthodox churches.
      <br><br>
      Theologically, baptism for Orthodoxy is the beginning of <em>theosis</em>, the lifelong process of deification. It plants the seed of divine life that grows through the sacraments, prayer, fasting, ascesis, and the communion of saints. Baptism is not a single transaction but the launching of an eternal trajectory.`,
        verses: ['Rom 6:3–4', 'Col 2:12', 'John 3:5', 'Matt 28:19', 'Acts 2:38', 'Titus 3:5', '1 Pet 3:21', 'Gal 3:27'],
      },
      {
        name: 'Lutheran',
        stance: 'affirm',
        position: `Lutheran theology teaches a robust doctrine of baptismal regeneration. The Augsburg Confession (1530), Article IX: "Of Baptism they teach that it is necessary to salvation, and that through Baptism is offered the grace of God, and that children are to be baptised who, being offered to God through Baptism are received into God's grace. They condemn the Anabaptists, who reject the baptism of children, and say that children are saved without Baptism."
      <br><br>
      Luther's Small Catechism (1529) gives the catechetical formulation: "Baptism is not simple water only, but it is the water comprehended in God's command and connected with God's Word." When asked what baptism gives: "It works forgiveness of sins, delivers from death and the devil, and grants eternal salvation to all who believe this, as the words and promises of God declare." The basis: "Baptism saves you" (1 Peter 3:21) and "He saved us by the washing of regeneration" (Titus 3:5).
      <br><br>
      Luther's Large Catechism gives the systematic treatment. The water of baptism is "not water only," but "water united with God's Word." The power is not in the water as such — it is in God's Word joined to the water that effects what it signifies.
      <br><br>
      Mode is indifferent: immersion, affusion, or aspersion are all valid, as long as the Trinitarian formula is used. Luther himself preferred immersion as more biblically resonant but recognised the validity of pouring.
      <br><br>
      Infant baptism is defended vigorously. Luther's <em>Concerning Rebaptism</em> (1528), against the Anabaptists, argued that infants receive faith as a gift of the Spirit. Faith does not require articulate intellectual confession; the Spirit can create faith in an infant just as he can in an adult. The Catholic and Reformed defence of infant baptism by appeal to the household baptisms and the analogy with circumcision (Colossians 2:11–12) is also marshalled.
      <br><br>
      A characteristic Lutheran emphasis: baptism is not just a one-time event but the foundation for the entire Christian life. Luther taught Christians to "remember your baptism daily." Repentance is a return to one's baptism. The "old Adam" is drowned daily in the waters of baptism; the "new man" rises daily by faith. Baptism is the constant identity of the Christian.`,
        verses: ['Titus 3:5', '1 Pet 3:21', 'Rom 6:3–4', 'John 3:5', 'Acts 2:38–39', 'Gal 3:27', 'Eph 5:26', 'Col 2:11–12'],
      },
      {
        name: 'Reformed / Presbyterian',
        stance: 'affirm',
        position: `The Reformed tradition affirms infant baptism on covenantal grounds — and is the most theologically articulate tradition on this point — while distinguishing more sharply than Catholics or Lutherans between the <em>sign</em> of baptism and the <em>thing signified</em> (the inward grace).
      <br><br>
      The Westminster Confession (1646), Chapter XXVIII §4: "Not only those that do actually profess faith in and obedience unto Christ, but also the infants of one, or both, believing parents, are to be baptised." §1 defines baptism as "a sacrament of the New Testament, ordained by Jesus Christ... for the solemn admission of the party baptised into the visible Church; but also, to be unto him a sign and seal of the covenant of grace, of his ingrafting into Christ, of regeneration, of remission of sins, and of his giving up unto God, through Jesus Christ, to walk in newness of life."
      <br><br>
      The decisive distinction is in §5–6: "Although it be a great sin to condemn or neglect this ordinance, yet grace and salvation are not so inseparably annexed unto it, as that no person can be regenerated, or saved, without it; or, that all that are baptised are undoubtedly regenerated." Baptism signs and seals — it does not invariably <em>cause</em> regeneration. The grace promised in baptism is granted "by the Holy Ghost, to such (whether of age or infants) as that grace belongeth unto, according to the counsel of God's own will, in His appointed time."
      <br><br>
      The covenantal argument is decisive. Calvin's <em>Institutes</em> IV.16 ("On Infant Baptism") gives the foundational case: baptism is the New Covenant sign analogous to circumcision in the Old (Colossians 2:11–12). God commanded Abraham to circumcise his infant sons not because they had personally exercised faith, but because they were members of the covenant community by virtue of God's promise to Abraham and his offspring. Genesis 17:7 ("I will establish my covenant... to be God to you and to your offspring after you") establishes the principle: covenant inclusion extends to the children of believers.
      <br><br>
      In the New Covenant, the covenant sign changes from circumcision (an Old Testament sign limited to males, sealed with blood) to baptism (a New Testament sign for both sexes, sealed with water), but the principle of including children of believers remains. The household baptisms of Acts confirm this (Acts 16:15, 33; 18:8; 1 Corinthians 1:16).
      <br><br>
      Peter's Pentecost sermon (Acts 2:38–39) is taken as decisive: "Repent and be baptised every one of you in the name of Jesus Christ for the forgiveness of your sins... For the promise is for you <em>and for your children</em>." The covenantal continuity is explicit.
      <br><br>
      Mode is open: Westminster Chapter XXVIII §3 — "Dipping of the person into the water is not necessary; but Baptism is rightly administered by pouring, or sprinkling water upon the person."
      <br><br>
      The Heidelberg Catechism (1563), Q. 74, gives the popular Reformed expression: "Are infants also to be baptised? Yes; for since they, as well as their parents, belong to the covenant and people of God, and through the blood of Christ both redemption from sin and the Holy Spirit, who works faith, are promised to them no less than to their parents."`,
        verses: ['Gen 17:7', 'Col 2:11–12', 'Acts 2:38–39', 'Acts 16:15', 'Acts 16:33', '1 Cor 7:14', 'Mark 10:13–16', 'Rom 4:11'],
      },
      {
        name: 'Anglican / Episcopal',
        stance: 'affirm',
        position: `Anglicanism affirms infant baptism and uses a strong doctrine of baptismal regeneration in its liturgy, though the precise theological interpretation varies across the spectrum from Anglo-Catholic to evangelical.
      <br><br>
      The Thirty-Nine Articles (1571), Article XXVII ("Of Baptism"), defines baptism as "not only a sign of profession, and mark of difference, whereby Christian men are discerned from others that be not christened, but it is also a sign of Regeneration or New-Birth, whereby, as by an instrument, they that receive Baptism rightly are grafted into the Church; the promises of the forgiveness of sin, and of our adoption to be the sons of God by the Holy Ghost, are visibly signed and sealed." The Article concludes: "The Baptism of young Children is in any wise to be retained in the Church, as most agreeable with the institution of Christ."
      <br><br>
      The Book of Common Prayer baptismal rite is unambiguous: after baptism the minister declares the child "regenerate" and gives thanks to God "that it hath pleased thee to regenerate this Infant with thy Holy Spirit, to receive him for thine own Child by adoption, and to incorporate him into thy holy Church."
      <br><br>
      The Anglo-Catholic / Tractarian / High Church tradition (Pusey, Keble, John Henry Newman before Rome, Charles Gore, Eric Mascall) reads this language realistically: baptism truly effects regeneration. E.B. Pusey's <em>Scriptural Views of Holy Baptism</em> (1835) is the major Anglo-Catholic treatment, defending baptismal regeneration as essential to Anglican identity.
      <br><br>
      The Evangelical Anglican tradition (J.C. Ryle, John Stott, Alister McGrath) reads the same language more covenantally: baptism signifies and seals regeneration to those who, by God's grace, come to faith — but does not necessarily cause it in every infant baptised. J.C. Ryle's <em>Knots Untied</em> (1874) argues at length against the absolute baptismal regeneration position.
      <br><br>
      The Gorham Controversy (1847–50) brought this division to crisis. Bishop Henry Phillpotts of Exeter refused to institute George Cornelius Gorham to a parish because Gorham denied that regeneration always accompanied baptism. The case reached the Judicial Committee of the Privy Council, which sided with Gorham (1850), effectively ruling that both views were permissible in the Church of England. This decision precipitated the conversion of Manning, Robert Wilberforce, and others to Rome.
      <br><br>
      The result: Anglicans practise infant baptism universally, use rich sacramental language in their liturgy, and permit two coexisting theological interpretations.`,
        verses: ['John 3:5', 'Titus 3:5', 'Acts 2:38–39', 'Acts 22:16', 'Rom 6:3–4', 'Col 2:11–12', '1 Pet 3:21', 'Eph 5:26'],
      },
      {
        name: 'Baptist',
        stance: 'deny',
        position: `Baptists are defined by their rejection of infant baptism and their insistence on believer's baptism by full immersion only. The Second London Baptist Confession (1689), Chapter XXIX, gives the systematic statement:
      <br><br>
      §1: "Baptism is an ordinance of the New Testament, ordained by Jesus Christ, to be unto the party baptised, a sign of his fellowship with him, in his death and resurrection; of his being engrafted into him; of remission of sins; and of giving up into God, through Jesus Christ, to live and walk in newness of life."
      <br><br>
      §2: "Those who do actually profess repentance towards God, faith in, and obedience to, our Lord Jesus Christ, are the only proper subjects of this ordinance."
      <br><br>
      §4: "Immersion, or dipping of the person in water, is necessary to the due administration of this ordinance."
      <br><br>
      The Baptist Faith & Message (2000), Article VII, gives the simpler modern formulation: "Christian baptism is the immersion of a believer in water in the name of the Father, the Son, and the Holy Spirit. It is an act of obedience symbolising the believer's faith in a crucified, buried, and risen Saviour, the believer's death to sin, the burial of the old life, and the resurrection to walk in newness of life in Christ Jesus."
      <br><br>
      The exegetical case has several layers. <em>First</em>, the Greek <em>baptizo</em> means "to dip, plunge, immerse." The Septuagint uses it for full immersion (Naaman dipping himself seven times in the Jordan, 2 Kings 5:14 LXX). Burial imagery (Romans 6:4: "buried with him by baptism into death") requires immersion — sprinkling or pouring does not symbolise burial.
      <br><br>
      <em>Second</em>, every clearly described baptism in the New Testament involves substantial water. John the Baptist baptised in the Jordan "because there was much water there" (John 3:23). Jesus "went up out of the water" after his baptism (Matthew 3:16). Philip and the Ethiopian eunuch "went down into the water" and "came up out of the water" (Acts 8:38–39). These descriptions favour immersion.
      <br><br>
      <em>Third</em>, every commanded subject of baptism in the New Testament is a professing believer. The Great Commission specifies "make disciples of all nations, baptising them" — discipleship precedes baptism (Matthew 28:19). The order in Acts 2:38 is "Repent and be baptised." Faith is the precondition.
      <br><br>
      The household baptisms (Acts 16, 18; 1 Corinthians 1:16) are interpreted as households of believers, not as evidence of indiscriminate infant baptism — the texts do not mention infants, and Acts 16:34 specifies that the Philippian jailer "rejoiced with his entire household that he had believed in God," implying the whole household believed.
      <br><br>
      Baptists insist on re-baptism (or, in Baptist terms, the first true baptism) for any adult who comes to faith having been baptised as an infant. This is not "anabaptism" (re-baptism) because the infant ceremony was not valid baptism at all.`,
        verses: ['Matt 28:19', 'Acts 2:38–41', 'Acts 8:36–38', 'Acts 16:31–33', 'Rom 6:3–5', 'Col 2:12', 'Mark 16:16', '1 Pet 3:21'],
      },
      {
        name: 'Anabaptist / Mennonite',
        stance: 'deny',
        position: `Anabaptists were the first to insist consistently on believer's baptism in the Reformation era, and they paid for it with their lives. The Schleitheim Confession (February 24, 1527), drafted by Michael Sattler shortly before his torture and execution by burning at the hands of Catholic authorities, gives Article I:
      <br><br>
      "Baptism shall be given to all those who have learned repentance and amendment of life, and who believe truly that their sins are taken away by Christ, and to all those who walk in the resurrection of Jesus Christ, and wish to be buried with him in death, so that they may be resurrected with him, and to all those who with this significance request it [baptism] of us and demand it for themselves. This excludes all infant baptism, the highest and chief abomination of the Pope."
      <br><br>
      The Dordrecht Confession (1632), Article VII, confirms believer's baptism as definitive of Anabaptist identity.
      <br><br>
      Historically, Anabaptist baptism began in Zurich on January 21, 1525, when Conrad Grebel baptised Georg Blaurock in defiance of Zwingli and the Zurich city council, which had ordered the baptism of all infants the day before. This was the founding act of the Radical Reformation. Within months, Felix Manz was drowned in the Limmat River (January 5, 1527) by the Zwinglian authorities — a deliberate mockery: "If they want immersion, give them immersion."
      <br><br>
      The Anabaptist label ("re-baptiser") was a hostile epithet imposed by their opponents. Anabaptists themselves denied being re-baptisers — their infant ceremony, they insisted, was no baptism at all, since it lacked the essential element of believing repentance. They were the first to baptise these adults rightly.
      <br><br>
      Theologically, Anabaptism roots baptism in the visible, gathered church of committed disciples. The state churches of Reformation Europe — Lutheran, Reformed, Anglican — baptised every infant born in the parish and thus baptised the entire population into a Christian society. This <em>corpus Christianum</em> was, to the Anabaptists, a counterfeit church: the gathered community of regenerate believers, not the population at large, is the true Church.
      <br><br>
      Mode is typically affusion or immersion. Mennonite practice has varied; many modern Mennonites pour or sprinkle, though immersion is also practised, especially in the Brethren in Christ and similar Anabaptist groups.
      <br><br>
      The contemporary heirs of Anabaptism — Mennonites, Hutterites, Amish, Old Order Brethren — preserve this conviction. Their theology of baptism is inseparable from their commitments to discipleship, peace, simplicity, and community.`,
        verses: ['Matt 28:19', 'Mark 16:16', 'Acts 2:38–41', 'Acts 8:36–38', 'Acts 18:8', 'Rom 6:3–5', '1 Pet 3:21', 'Heb 10:22'],
      },
      {
        name: 'Pentecostal',
        stance: 'deny',
        position: `Pentecostals universally practise believer's baptism by full immersion — there are no exceptions among historic Pentecostal denominations. The Assemblies of God Statement of Fundamental Truths (1916), §6, defines water baptism as "an ordinance of identification with our Lord Jesus Christ" by immersion, for believers only.
      <br><br>
      A distinctive feature: Pentecostals sharply distinguish between <em>water baptism</em> (a believer's outward identification with Christ in death and resurrection) and <em>Spirit baptism</em> (a subsequent empowering experience, evidenced in classical Pentecostalism by speaking in tongues — see the separate topic on Spirit baptism).
      <br><br>
      The Pentecostal exegetical case combines the Baptist arguments (Greek <em>baptizo</em> means immersion; New Testament order is repentance then baptism; household baptisms are believing households) with a distinctive emphasis on the post-conversion gift of the Spirit. Acts 8:14–17 (the Samaritan believers received water baptism but had not yet received the Spirit) and Acts 19:1–7 (the Ephesian disciples were re-baptised in Jesus' name and then received the Spirit) are read as showing that water baptism and Spirit baptism are distinct events.
      <br><br>
      <strong>Oneness Pentecostalism</strong> (United Pentecostal Church International, founded 1945) takes a distinctive position: water baptism must be in the name of Jesus only — "in the name of Jesus Christ" (Acts 2:38; 8:16; 10:48; 19:5) — not in the Trinitarian formula. Oneness Pentecostals reject the doctrine of the Trinity as developed in the post-apostolic creeds; they hold to a modalist or "Jesus' Name" doctrine of God. Their baptism is therefore not recognised as valid by Trinitarian Christians.
      <br><br>
      <strong>Trinitarian Pentecostals</strong> (the Assemblies of God, the Church of God, the International Pentecostal Holiness Church) baptise in the Trinitarian formula (Matthew 28:19).
      <br><br>
      Pentecostal theology does not affirm baptismal regeneration. Salvation comes through repentance and faith; baptism is the public ordinance by which the new believer identifies with Christ.`,
        verses: ['Matt 28:19', 'Acts 2:38', 'Acts 8:16', 'Acts 10:47–48', 'Acts 19:5', 'Mark 16:16', 'Rom 6:3–4', 'Acts 8:36–38'],
      },
      {
        name: 'Methodist / Wesleyan',
        stance: 'affirm',
        position: `Methodism, inheriting its sacramental theology from Anglicanism, practises both infant and believer's baptism and accepts any mode (immersion, affusion, or aspersion) at the candidate's or family's preference.
      <br><br>
      The Methodist Articles of Religion (1784), Article XVII, retains the substance of the Anglican Article XXVII: "Baptism is not only a sign of profession and mark of difference, whereby Christians are distinguished from others that are not baptised; but it is also a sign of regeneration, or the new birth. The baptism of young children is to be retained in the Church."
      <br><br>
      Wesley himself affirmed baptismal regeneration in a high Anglican sense. His sermon "The New Birth" (1760) distinguishes between baptism (the outward sign) and the new birth (the inward reality), with the two normally but not always coinciding. Wesley wrote that infants baptised receive the benefits of Christ's atoning death and are born again — but adults who have not been brought to personal faith must, even if baptised in infancy, undergo conscious conversion.
      <br><br>
      This produced a characteristic Methodist tension. Wesley retained the high Anglican baptismal doctrine but combined it with a passionate emphasis on the new birth as a conscious experience of justifying grace. The Wesleyan revival's altar calls, mourner's benches, and conversion narratives produced a Methodist piety that often functionally treats infant baptism as preliminary, with adult conversion and conscious experience of grace as the decisive moment.
      <br><br>
      Modern United Methodist practice (Book of Discipline 2016) reflects this tension. Baptism is one of two sacraments; it is regarded as a means of grace; infant baptism is normal; but the conscious appropriation of one's baptism through confirmation and through ongoing growth in grace is also central. A "baptismal covenant" liturgy emphasises the ongoing dimension.
      <br><br>
      Some Methodist denominations (especially in the African Methodist Episcopal and Wesleyan-Holiness traditions) have moved more toward believer's baptism by immersion under the influence of revivalist and Baptist piety.`,
        verses: ['John 3:5', 'Matt 28:19', 'Titus 3:5', 'Acts 2:38–39', 'Mark 10:13–16', 'Acts 16:31–33', 'Rom 6:3–4', '1 Cor 7:14'],
      },
    ],
    keyVerses: ['Matt 28:19', 'Mark 16:16', 'John 3:5', 'Acts 2:38–41', 'Acts 8:36–39', 'Acts 16:31–33', 'Rom 6:3–5', 'Col 2:11–12', 'Titus 3:5', '1 Pet 3:21', 'Gal 3:27', 'Eph 5:26', 'Gen 17:7', '1 Cor 7:14'],
    historicalNote: 'The Anabaptists\' insistence on believer\'s baptism led to vicious persecution by both Catholic and Protestant authorities. The drowning of Felix Manz in the Limmat river in Zurich (January 5, 1527) — by Protestant Zwinglian magistrates — and the burning of Michael Sattler at Rottenburg (May 20, 1527) are the defining martyrdoms. Thousands of Anabaptists were executed in the 16th century. Harold Bender\'s "The Anabaptist Vision" (1944) rehabilitated the movement within 20th-century Protestant scholarship. Today the paedobaptist/credobaptist question drives more church splits and re-baptism controversies than almost any other single doctrinal issue, and it is the most common reason for adult converts to be re-baptised when changing denominations.',
    relatedTopics: ['real-presence', 'number-of-sacraments', 'salvation-works'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  SALVATION                                                ║
  // ╚══════════════════════════════════════════════════════════╝

  {
    id: 'salvation-works',
    name: 'Justification: Faith, Works & Merit',
    icon: '⚖️',
    controversy: 91,
    category: 'Salvation',
    desc: 'Is justification forensic (a divine declaration of righteousness through imputation of Christ\'s merits) or transformative (an infusion of righteousness into the soul)? Is it received by faith alone (sola fide), or do human cooperation, sacramental reception, and meritorious works contribute to final justification before God?',
    definition: `<p><strong>Justification</strong> is the doctrine of how a sinner is made (or declared) righteous before God. It is the central material question of the Reformation. The dispute turns on two related questions:</p>
      <p><strong>(1) What is justification?</strong> Is it <em>forensic</em> — a divine verdict that declares the sinner righteous on the basis of Christ's righteousness imputed (credited) to them, while the sinner remains intrinsically sinful (the Lutheran/Reformed <em>simul iustus et peccator</em> — "at once righteous and sinful")? Or is it <em>transformative</em> — an actual infusion of righteousness into the soul that makes the sinner ontologically righteous (the Catholic/Orthodox view)?</p>
      <p><strong>(2) How is it received?</strong> By <em>faith alone</em> (<em>sola fide</em>) — Christ's righteousness imputed to the believer instrumentally received by faith without any contribution from human works? Or by faith <em>and</em> works in cooperation with grace?</p>
      <p>Luther called justification by faith alone "the article by which the Church stands or falls" (<em>articulus stantis et cadentis ecclesiae</em>). The Council of Trent (1547) anathematised this position. The Joint Declaration on the Doctrine of Justification (Lutheran World Federation and Vatican, 1999) declared that the 16th-century condemnations no longer apply to the agreed statement — though substantial differences in detail remain.</p>`,
    subtopics: [
      { id: 'sw-forensic', label: 'Forensic or transformative?' },
      { id: 'sw-imputation', label: 'Imputation of righteousness?' },
      { id: 'sw-merit', label: 'Role of merit' },
      { id: 'sw-assurance', label: 'Assurance of salvation' },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'nuanced',
        position: `The Council of Trent (Session VI, January 13, 1547), "Decree on Justification," is the definitive Catholic statement and was a direct response to the Protestant Reformers. The decree carefully distinguishes between an initial justification (gratuitous, received in baptism, prepared for by grace working in cooperation with human freedom) and a final justification (at the end of life, in which growth in inherent righteousness through good works performed in grace plays a role).
      <br><br>
      The 33 canons attached to the decree make the boundaries sharp. <strong>Canon 9</strong>: "If anyone says that the sinner is justified by faith alone, meaning that nothing else is required to cooperate in order to obtain the grace of justification, and that it is not in any way necessary that he should be prepared and disposed by the action of his own will: let him be anathema."
      <br><br>
      <strong>Canon 11</strong>: "If anyone says that men are justified either by the sole imputation of the justice of Christ, or by the sole remission of sins, to the exclusion of grace and charity which is poured forth in their hearts by the Holy Spirit and inheres in them; or even that the grace by which we are justified is only the favour of God: let him be anathema."
      <br><br>
      Justification, for Trent, is both forensic <em>and</em> transformative. The sinner is not merely declared righteous on the basis of an external righteousness imputed; the sinner is <em>actually made</em> righteous by an infusion of grace and the supernatural virtues of faith, hope, and charity. Inherent righteousness (<em>iustitia inhaerens</em>) is real righteousness, not a legal fiction.
      <br><br>
      Initial justification is by grace through faith — Catholics agree with this. The disagreement is with "faith alone." Trent insists that initial justification disposes the soul for growth in grace, and this growth involves the cooperation of the will. Faith, on its own, without hope and charity, is "dead faith" — explicitly invoked from James 2:17, 26. True saving faith is "faith formed by charity" (<em>fides caritate formata</em>).
      <br><br>
      Crucially, Trent does not affirm strict <em>condign</em> merit — that human works on their own can earn salvation. Chapter XVI specifies that all merit is itself a gift of grace: "Christ Jesus continually infuses His virtue into the said justified — as the head into the members, and the vine into the branches — and this virtue always precedes and accompanies and follows their good works, which without it could not in any way be pleasing and meritorious before God." So the Catholic position is: grace alone, working through faith and love, producing meritorious cooperation — but the merits themselves are the gifts of grace.
      <br><br>
      The Catechism of the Catholic Church §§1987–2029 gives the modern systematic exposition. The Joint Declaration on the Doctrine of Justification (1999) found substantial — but not total — consensus with Lutherans on the basic truth of justification while preserving distinct emphases.
      <br><br>
      Catholic theology stresses James 2:24: "You see that a person is justified by works and not by faith alone" — taken as a definitive scriptural rejection of <em>sola fide</em>.`,
        verses: ['Jas 2:14–26', 'Rom 2:6–13', 'Matt 25:31–46', '1 Cor 13:2', 'Gal 5:6', 'Phil 2:12–13', 'Heb 5:9', '1 Cor 9:24–27'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'nuanced',
        position: `Orthodoxy resists the entire Western framework of justification — viewing both the Catholic Tridentine position and the Protestant Reformation as wrestling with a fundamentally juridical, legal, and forensic conception of salvation that the Greek Fathers did not share.
      <br><br>
      The Orthodox controlling category is <em>theosis</em> — deification, participation in the divine nature. Athanasius's classic formulation in <em>On the Incarnation</em> §54 (c. 318 AD): "He, indeed, assumed humanity that we might become God." Salvation is not primarily about debt-payment or forensic acquittal; it is about ontological transformation — the divine taking up of human nature in Christ so that humans may participate in the uncreated divine energies.
      <br><br>
      Gregory Palamas's <em>Triads</em> (14th century) developed the essence/energies distinction that grounds Orthodox soteriology: God's essence is utterly transcendent and incommunicable, but God's energies (divine operations, divine grace, divine glory, divine light) are truly communicated to creatures. We become "partakers of the divine nature" (2 Peter 1:4) through participation in the energies, not by sharing the divine essence.
      <br><br>
      Orthodox theologians have therefore been sharply critical of both Catholic and Protestant accounts. John Meyendorff's <em>Byzantine Theology</em> (1974) argues that the Western legal framework — guilt, satisfaction, imputation, debt — imports Roman jurisprudence into theology in ways the Greek Fathers would not have recognised. Christos Yannaras's <em>The Freedom of Morality</em> (1971/1984) makes the same case from an existentialist angle.
      <br><br>
      Vladimir Lossky, in <em>The Mystical Theology of the Eastern Church</em> (1944), writes: "The doctrine of merits, of the satisfaction offered to God's justice... and of the imputation of the merits of Christ — all this metaphysical jurisprudence has no place in the Orthodox understanding of redemption."
      <br><br>
      The Confession of Dositheus (1672), Decree XIII, gives the Orthodox confessional response to Calvinism: "We believe a man to be not simply justified through faith alone, but through faith which works through love, that is to say, through faith and works." Decree XIV affirms synergism: grace and free will cooperate in salvation. But the framework is not Trent's; it is the Greek patristic framework of theosis.
      <br><br>
      Orthodox spirituality is therefore deeply ascetical, sacramental, and liturgical. Fasting, prayer, the Jesus Prayer, the sacraments, the disciplines of the spiritual life are not optional add-ons after justification — they are the very process of salvation, the lifelong cooperation of human freedom with divine grace in the journey of deification.
      <br><br>
      The Orthodox would say to both Trent and Wittenberg: you are asking the wrong question.`,
        verses: ['2 Pet 1:4', 'John 17:21–23', 'John 14:23', '1 Cor 6:17', '2 Cor 3:18', 'Phil 3:8–14', 'Rom 8:17', 'Heb 12:14'],
      },
      {
        name: 'Lutheran',
        stance: 'affirm',
        position: `Justification by faith alone is, for Lutherans, "the article by which the Church stands or falls" (<em>articulus stantis et cadentis ecclesiae</em>) — the very heart of the Christian faith. Luther's Preface to the Epistle to the Romans (1522) gives the experiential expression: "Faith is a living, daring confidence in God's grace, so sure and certain that the believer would stake his life on it a thousand times."
      <br><br>
      The Augsburg Confession (1530), Article IV ("Of Justification"): "Men cannot be justified before God by their own strength, merits, or works, but are freely justified for Christ's sake, through faith, when they believe that they are received into favour, and that their sins are forgiven for Christ's sake, who, by His death, has made satisfaction for our sins. This faith God imputes for righteousness in His sight (Romans 3 and 4)."
      <br><br>
      The Apology of the Augsburg Confession (1531), Article IV, written by Philip Melanchthon, gives the most extensive Reformation-era systematic defence — quoting Romans extensively, parsing the Greek verbs, and arguing exegetically against the Catholic position.
      <br><br>
      The Formula of Concord (1577), Solid Declaration III ("Of the Righteousness of Faith Before God"), specifies the doctrine. Justification is forensic — God declares the sinner righteous "<em>pro foro Dei</em>" (in the divine court). The righteousness of Christ (his active obedience to the law and his passive obedience in suffering) is imputed to the believer through faith. The believer remains <em>simul iustus et peccator</em> — at once righteous (by imputation) and sinful (in himself). Sanctification follows from justification but does not constitute it.
      <br><br>
      Luther's exegetical case rests above all on the Pauline letters. Romans 3:21–28: "the righteousness of God is manifested apart from the law... by faith in Jesus Christ for all who believe... they are justified by his grace as a gift, through the redemption that is in Christ Jesus... For we hold that one is justified by faith apart from works of the law." Romans 4:3–8 (citing Genesis 15:6: "Abraham believed God, and it was counted to him as righteousness"). Galatians 2:16: "we know that a person is not justified by works of the law but through faith in Jesus Christ." Ephesians 2:8–9: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast."
      <br><br>
      Luther dealt with the James 2 problem in two ways: (1) initially by suggesting James was canonically marginal ("an epistle of straw" in his 1522 Preface); (2) more substantively in mature Lutheran theology by distinguishing what James means by "faith" (a dead intellectual assent) from what Paul means (the living trust that grasps Christ). True faith, for Luther, is necessarily fruitful in good works; "faith alone" justifies, but the faith that justifies is never alone.
      <br><br>
      The Joint Declaration on the Doctrine of Justification (LWF and Vatican, October 31, 1999, signed in Augsburg) was a watershed: Lutherans and Catholics declared that "by grace alone, in faith in Christ's saving work and not because of any merit on our part, we are accepted by God and receive the Holy Spirit." The remaining differences were declared to be non-church-dividing. The 16th-century condemnations no longer apply to the agreed statement.`,
        verses: ['Rom 3:21–28', 'Rom 4:3–8', 'Rom 5:1', 'Gal 2:16', 'Gal 3:11', 'Eph 2:8–10', 'Phil 3:9', 'Titus 3:5–7'],
      },
      {
        name: 'Reformed / Presbyterian',
        stance: 'affirm',
        position: `The Reformed tradition affirms justification by faith alone with rigorous confessional precision. The Westminster Confession of Faith (1646), Chapter XI ("Of Justification"), gives the definitive statement:
      <br><br>
      "Those whom God effectually calls, he also freely justifies; not by infusing righteousness into them, but by pardoning their sins, and by accounting and accepting their persons as righteous; not for any thing wrought in them, or done by them, but for Christ's sake alone; not by imputing faith itself, the act of believing, or any other evangelical obedience to them, as their righteousness; but by imputing the obedience and satisfaction of Christ unto them, they receiving and resting on him and his righteousness by faith; which faith they have not of themselves, it is the gift of God."
      <br><br>
      Several Reformed distinctives appear here. <em>First</em>, justification is forensic, not transformative — by "pardoning" and "accounting," not by "infusing righteousness."
      <br><br>
      <em>Second</em>, the Reformed doctrine of <strong>double imputation</strong>: not only the imputation of Christ's <em>passive</em> obedience (his suffering for sins) but also of his <em>active</em> obedience (his perfect keeping of the moral law throughout his life). The believer's sins are imputed to Christ; Christ's perfect righteousness — including his lifelong sinless obedience — is imputed to the believer. This is more than Lutheran imputation, which historically has emphasised the passive obedience.
      <br><br>
      <em>Third</em>, faith itself is the gift of God — not the human contribution that triggers grace, but itself a fruit of regenerating grace.
      <br><br>
      The Heidelberg Catechism (1563), Q. 60, gives the popular Reformed exposition: "How are you righteous before God? Only by true faith in Jesus Christ: so that, although my conscience accuse me that I have grievously sinned against all the commandments of God, and kept none of them, and am still inclined to all evil; yet God, without any merit of mine, of mere grace, grants and imputes to me the perfect satisfaction, righteousness, and holiness of Christ; as if I had never committed nor had any sin, and had myself accomplished all the obedience which Christ has fulfilled for me; if only I accept such benefit with a believing heart."
      <br><br>
      The Belgic Confession (1561), Article XXIII, and the Canons of Dort (1619) likewise affirm forensic justification.
      <br><br>
      The systematic Reformed treatments — Calvin's <em>Institutes</em> Book III, Chapters 11–18; John Owen's <em>The Doctrine of Justification by Faith</em> (1677); Francis Turretin's <em>Institutes of Elenctic Theology</em>, Topic XVI — give the elaborate exegetical and dogmatic defence.
      <br><br>
      Recent Reformed theology has been roiled by the so-called "New Perspective on Paul" (E.P. Sanders, James Dunn, N.T. Wright) and by the "Federal Vision" controversy within the PCA. Both have raised questions about whether classical Reformed forensic justification adequately renders Paul. The mainstream Reformed response (e.g., John Piper's <em>The Future of Justification</em>, 2007; D.A. Carson and Peter O'Brien's <em>Justification and Variegated Nomism</em>, 2001) has been to defend the Reformation reading vigorously.`,
        verses: ['Rom 3:21–28', 'Rom 4:1–8', 'Rom 5:18–19', 'Rom 8:33–34', 'Gal 2:16', '2 Cor 5:21', 'Phil 3:9', 'Eph 2:8–10'],
      },
      {
        name: 'Anglican / Episcopal',
        stance: 'affirm',
        position: `The Thirty-Nine Articles (1571), Article XI ("Of the Justification of Man"), is concise and Pauline: "We are accounted righteous before God, only for the merit of our Lord and Saviour Jesus Christ by Faith, and not for our own works or deservings. Wherefore, that we are justified by Faith only is a most wholesome Doctrine, and very full of comfort, as more largely is expressed in the Homily of Justification."
      <br><br>
      The Homily of Justification, by Thomas Cranmer (Archbishop of Canterbury, martyred 1556), is one of the foundational Anglican texts. Cranmer's exegesis is closer to Calvin than to Luther in its forensic precision, drawing heavily on Romans and Galatians. Like the Reformed tradition, Cranmer emphasised that the faith which justifies is the gift of God.
      <br><br>
      Richard Hooker's <em>A Learned Discourse of Justification, Works, and How the Foundation of Faith Is Overthrown</em> (1586) is the Anglican locus classicus. Hooker articulated a distinctively Anglican reading that affirmed Reformation justification while making space for charitable judgement of the Catholic position. Hooker famously argued that the doctrinal errors of Rome on justification do not necessarily exclude individual Catholics from salvation, since many Catholics in practice trust in Christ even when their formal doctrine seems to direct them to trust in works.
      <br><br>
      The Anglican spectrum on justification is wide. <strong>Evangelical Anglicans</strong> (J.C. Ryle, John Stott, Alister McGrath, J.I. Packer) hold a fully Reformed/Lutheran doctrine of forensic justification by faith alone. <strong>Anglo-Catholics</strong> (Pusey, John Henry Newman before Rome, Charles Gore) have moved closer to Catholic positions on transformative justification, sometimes incorporating the language of imputed and imparted righteousness as complementary rather than alternative.
      <br><br>
      The Anglican-Roman Catholic International Commission's <em>Salvation and the Church</em> (1987) found convergence between Anglican and Catholic positions on justification — though the document was not universally accepted by Anglicans. The Joint Declaration on the Doctrine of Justification (1999), originally a Lutheran-Catholic agreement, was later affirmed by the World Methodist Council (2006), the World Communion of Reformed Churches (2017), and the Anglican Consultative Council (2016) — a remarkable ecumenical achievement, though one that papers over real differences in detail.`,
        verses: ['Rom 3:21–28', 'Rom 5:1', 'Gal 2:16', 'Eph 2:8–10', 'Phil 3:9', 'Titus 3:5–7', '2 Cor 5:21', 'Jas 2:14–26'],
      },
      {
        name: 'Methodist / Wesleyan',
        stance: 'nuanced',
        position: `Methodism affirms justification by grace through faith — but combines this with a doctrine of sanctification and Christian perfection that produces a recognisably distinct soteriology from both Lutheran/Reformed forensicism and Catholic infusionism.
      <br><br>
      John Wesley's Standard Sermons (1746–60) define the framework. Justification (Sermon 5, "Justification by Faith") is pardon — the forgiveness of past sins, on the basis of Christ's atonement, received through faith. Wesley follows Cranmer and the Reformers on this: justification is by faith alone, and it is forensic.
      <br><br>
      But Wesley distinguishes justification sharply from sanctification (Sermon 19, "The Great Privilege of those that are Born of God"). Sanctification is the actual transformation of the believer's nature, the renewal of the image of God. It begins at the new birth (which Wesley distinguished from justification, though they typically occur together) and proceeds throughout the Christian life.
      <br><br>
      The distinctive Wesleyan doctrine is <strong>entire sanctification</strong> or <strong>Christian perfection</strong> — a second work of grace, subsequent to conversion, in which the heart is wholly cleansed from inbred sin and filled with perfect love for God and neighbour (Wesley's <em>A Plain Account of Christian Perfection</em>, 1766). Drawing on 1 John 4:18 ("perfect love casts out fear") and Matthew 22:37–40, Wesley taught that this perfection is achievable in this life — not perfection in knowledge or freedom from mistakes, but perfection in love and intention.
      <br><br>
      Wesley's sermon "The Scripture Way of Salvation" (1765) gives the integrated picture: salvation begins with prevenient grace (universal grace that restores some ability to respond), continues through conviction and conversion (justification and new birth), grows in sanctification, may reach entire sanctification, and is consummated in glorification.
      <br><br>
      Crucially, Wesley taught that justification is conditional on continuing faith. Salvation can be genuinely lost through unbelief or wilful sin (this is the Arminian/Wesleyan position against Calvinist eternal security). Wesley's sermon "A Call to Backsliders" (1778) calls those who have fallen from grace to return.
      <br><br>
      Assurance of salvation is, for Wesley, a normal Christian privilege — but it is experiential and provisional, not grounded in an unconditional decree. The "witness of the Spirit" (Romans 8:16) bears testimony with our spirit that we are children of God.
      <br><br>
      The United Methodist Confession of Faith and the Wesleyan Articles of Religion both reflect this nuanced position. Methodist soteriology is more focused on the lived Christian life than either Lutheran-Reformed forensic justification or Catholic sacramental infusion — though it draws on elements of each.`,
        verses: ['Rom 5:1', 'Eph 2:8–10', '1 John 4:18', 'Matt 22:37–40', 'Heb 12:14', 'Phil 3:12–14', 'Rom 8:16', 'Gal 5:6'],
      },
      {
        name: 'Baptist / Evangelical',
        stance: 'affirm',
        position: `Baptists and the broader evangelical movement hold to justification by faith alone in continuity with the Reformation. The Second London Baptist Confession (1689), Chapter XI ("Of Justification"), follows the Westminster Confession nearly word-for-word, affirming forensic justification, double imputation, and faith as the gift of God.
      <br><br>
      The Baptist Faith & Message (2000), Article IV.B ("Justification"), gives the modern statement: "Justification is God's gracious and full acquittal upon principles of His righteousness of all sinners who repent and believe in Christ. Justification brings the believer unto a relationship of peace and favour with God."
      <br><br>
      A distinctive Baptist (and especially Southern Baptist) emphasis is on <strong>eternal security</strong> — the doctrine that once a person is genuinely converted and justified, they cannot finally fall away. "Once saved, always saved." The proof-texts are John 10:28–29 ("I give them eternal life, and they will never perish, and no one will snatch them out of my hand"), Romans 8:38–39 (nothing can separate from the love of God in Christ Jesus), Philippians 1:6 ("he who began a good work in you will complete it"), and 1 John 5:13 (assurance of eternal life given to believers).
      <br><br>
      This eternal security doctrine, sometimes called "perseverance of the saints" (though distinct from the Reformed doctrine of perseverance, which entails perseverance in holiness, not merely security), is one of the major dividing lines between Baptist and Wesleyan-Arminian soteriology.
      <br><br>
      The wider evangelical movement, including Pentecostals, non-denominationals, and most independent Bible churches, generally affirms justification by faith alone in something like the Reformation sense. The Lausanne Covenant (1974), §4, and the Gospel Coalition's Confessional Statement (2007) make forensic imputation and penal substitution explicit. The Manhattan Declaration (2009) — signed by Catholics, Orthodox, and evangelicals — could not include a shared statement on justification, indicating that the Reformation divide on this question, while diminished, has not disappeared.
      <br><br>
      The "Lordship salvation" debate within evangelicalism (John MacArthur vs. Zane Hodges in the 1980s) divides evangelicals on whether the faith that justifies must include submission to Christ as Lord, or whether justification can be received by intellectual assent alone. The mainstream evangelical position has sided with MacArthur: true saving faith involves trusting Christ as Saviour <em>and</em> submitting to him as Lord.`,
        verses: ['Rom 3:21–28', 'Eph 2:8–10', 'John 10:28–29', 'Rom 8:38–39', 'Phil 1:6', '1 John 5:13', 'Gal 2:16', 'Titus 3:5–7'],
      },
    ],
    keyVerses: ['Rom 3:21–28', 'Rom 4:1–8', 'Rom 5:1', 'Rom 8:30–34', 'Gal 2:16', 'Gal 3:6–14', 'Eph 2:8–10', 'Phil 3:9', '2 Cor 5:21', 'Titus 3:5–7', 'Jas 2:14–26', '1 John 5:13', '2 Pet 1:4', 'John 10:28–29'],
    historicalNote: 'The Joint Declaration on the Doctrine of Justification (October 31, 1999, signed in Augsburg) by the Lutheran World Federation and the Roman Catholic Church — subsequently endorsed by the World Methodist Council (2006), the Anglican Consultative Council (2016), and the World Communion of Reformed Churches (2017) — declared that the 16th-century condemnations no longer apply to the agreed statement. This is the single most significant ecumenical achievement since the Reformation. Substantial differences on the role of works and merit in final justification remain, but the doctrine of justification is no longer formally church-dividing between these communions.',
    relatedTopics: ['predestination', 'atonement', 'real-presence'],
  },

  {
    id: 'predestination',
    name: 'Predestination, Election & Free Will',
    icon: '🔮',
    controversy: 93,
    category: 'Salvation',
    desc: 'Does God unconditionally elect individuals to salvation before creation, without regard to foreseen faith or merit? Is reprobation also decreed? Can the elect fall finally from grace? And what remains of free will after the Fall in Adam?',
    definition: `<p><strong>Predestination</strong> is the doctrine that God, from before the foundation of the world, has determined who will be saved. The debate is fierce because every position raises difficult problems: about divine sovereignty, human freedom, divine justice, the universality of the gospel offer, and the security of the believer.</p>
      <p>The two main classical positions are:</p>
      <p><strong>Calvinism / Reformed</strong> teaches <em>unconditional election</em>: God elects specific individuals to salvation from eternity, not because of any foreseen faith or merit in them, but solely on the basis of his sovereign good pleasure. The doctrine is often summarised as TULIP — <strong>T</strong>otal depravity, <strong>U</strong>nconditional election, <strong>L</strong>imited atonement (Christ died specifically for the elect), <strong>I</strong>rresistible grace, <strong>P</strong>erseverance of the saints. Some Reformed theologians teach <em>double predestination</em>: God actively decrees both election to salvation and reprobation to damnation.</p>
      <p><strong>Arminianism</strong> teaches <em>conditional election</em>: God elects those whom he foreknows will believe. Grace is universally offered and resistible. The believer can fall finally from grace. Free will, restored by prevenient grace, plays a genuine role.</p>
      <p>Catholics, Eastern Orthodox, and Lutherans hold intermediate positions of varying kinds. Open theism (a minority modern evangelical view) denies that God exhaustively knows the future at all.</p>`,
    subtopics: [
      { id: 'p-election', label: 'Unconditional or conditional?' },
      { id: 'p-double', label: 'Double predestination?' },
      { id: 'p-perseverance', label: 'Perseverance of the saints?' },
      { id: 'p-freewill', label: 'Free will after the Fall?' },
    ],
    denominations: [
      {
        name: 'Reformed / Presbyterian',
        stance: 'affirm',
        position: `The Reformed tradition holds the most systematic and uncompromising doctrine of predestination in Christianity. The Westminster Confession of Faith (1646), Chapter III ("Of God's Eternal Decree"), is the definitive statement.
      <br><br>
      §3: "By the decree of God, for the manifestation of His glory, some men and angels are predestinated unto everlasting life; and others foreordained to everlasting death." This is <strong>double predestination</strong>: God's decree includes both election to salvation and reprobation to damnation.
      <br><br>
      §5: "Those of mankind that are predestinated unto life, God, before the foundation of the world was laid, according to His eternal and immutable purpose, and the secret counsel and good pleasure of His will, hath chosen, in Christ, unto everlasting glory, out of His mere free grace and love, without any foresight of faith, or good works, or perseverance in either of them, or any other thing in the creature, as conditions, or causes moving Him thereunto; and all to the praise of His glorious grace."
      <br><br>
      §7 addresses reprobation: "The rest of mankind God was pleased, according to the unsearchable counsel of His own will, whereby He extendeth or withholdeth mercy, as He pleaseth, for the glory of His sovereign power over His creatures, to pass by; and to ordain them to dishonour and wrath for their sin, to the praise of His glorious justice." Note the careful asymmetry: God positively decrees election; he "passes by" the reprobate and ordains them to wrath <em>for their sin</em>. The decree of reprobation includes the sin as its just cause, even though the decree itself precedes the sin in the order of decrees.
      <br><br>
      The Canons of Dort (1619), produced by the international Synod of Dordrecht against the Arminian Remonstrants, give the popular acronym TULIP:
      <br><br>
      <strong>T — Total depravity</strong> (more precisely, total inability): every faculty of fallen humanity is corrupted by sin; the unregenerate cannot of themselves believe, choose God, or do any spiritual good (Romans 8:7–8; 1 Corinthians 2:14).
      <br><br>
      <strong>U — Unconditional election</strong>: God's choice of those to be saved is grounded solely in his sovereign good pleasure, not in any foreseen faith or merit.
      <br><br>
      <strong>L — Limited (definite, particular) atonement</strong>: Christ's death effectively secured the salvation of the elect, not merely making salvation possible for all. Christ died <em>specifically</em> for those given to him by the Father (John 6:37–40; 10:11, 14–15; 17:9). The atonement is sufficient for all but efficient only for the elect.
      <br><br>
      <strong>I — Irresistible (effectual) grace</strong>: when God elects a person to salvation, the Holy Spirit so works on the heart that the person infallibly comes to faith — not by violence to the will, but by transforming the will to embrace Christ willingly (Ephesians 2:1–5; John 6:44).
      <br><br>
      <strong>P — Perseverance of the saints</strong>: all the truly elect persevere in faith to the end and are infallibly saved (John 10:28–29; Romans 8:30; Philippians 1:6).
      <br><br>
      Calvin's <em>Institutes</em> (1559), Book III, Chapters 21–24 ("On Eternal Election, by which God has Predestinated Some to Salvation, Others to Destruction"), is the locus classicus. Calvin treats predestination as a comfort: those who tremble at their own weakness rest in the certainty of God's eternal choice. The "horrible decree" (Calvin's own phrase for reprobation, <em>decretum horribile</em>, in <em>Institutes</em> III.23.7) is acknowledged frankly but submitted to as God's just judgement.
      <br><br>
      Internal Reformed debate distinguishes <em>supralapsarianism</em> (Beza, William Perkins: in the logical order of God's decrees, the decree of election precedes the decree to permit the Fall) from <em>infralapsarianism</em> (the Dort majority: the decree of election follows the decree to permit the Fall, in the logical order). Both are within Reformed orthodoxy.
      <br><br>
      The scriptural foundation is extensive. Ephesians 1:4–5 ("he chose us in him before the foundation of the world... having predestined us for adoption to himself as sons through Jesus Christ, according to the purpose of his will"). Romans 8:28–30 (the golden chain: foreknew, predestined, called, justified, glorified). Romans 9:11–23 (the explicit case of Jacob and Esau, "though they were not yet born and had done nothing either good or bad"). John 6:37–44, 65. Acts 13:48 ("as many as were appointed to eternal life believed"). 2 Thessalonians 2:13.`,
        verses: ['Eph 1:4–5', 'Eph 1:11', 'Rom 8:28–30', 'Rom 9:11–23', 'John 6:37–44', 'John 10:28–29', 'Acts 13:48', '2 Thess 2:13', 'John 15:16'],
      },
      {
        name: 'Lutheran',
        stance: 'nuanced',
        position: `Lutheran theology affirms unconditional election to salvation but explicitly rejects double predestination. Reprobation is the consequence of human sin and unbelief, not the result of a positive divine decree to damnation.
      <br><br>
      The Formula of Concord (1577), Solid Declaration XI ("Of God's Eternal Foreknowledge and Election"), is the careful Lutheran statement. It affirms that God's election to salvation is gracious, unconditional, and certain. But it distinguishes God's foreknowledge (which extends to all things, including the lost) from God's election (which extends only to those who will be saved). The damned are damned because of their own sin and unbelief; they are not predestined to damnation by any positive divine decree.
      <br><br>
      The Formula warns specifically against speculating about hidden divine decrees: "We should not investigate the secret counsel of God to ascertain whether we are elect, but should learn about our election from the revealed Word of God." Election is to be sought in the means of grace — Word and Sacrament — not in metaphysical inference.
      <br><br>
      This is sometimes called <strong>single predestination</strong>: God positively elects the saved; he does not positively reprobate the lost. The asymmetry is intentional and crucial.
      <br><br>
      Lutheranism therefore holds in tension two truths that, on the Reformed view, must be resolved one way or the other: (1) universal grace — Christ died for all (1 Timothy 2:4; 2 Peter 3:9), and the gospel and sacraments truly offer salvation to all who hear them; and (2) particular election — only the elect actually believe and are saved.
      <br><br>
      How can both be true? Lutheranism's response is to refuse to resolve the tension philosophically. The Reformed solution (limited atonement: Christ died only for the elect) conflicts with the universal scope of the gospel offer. The Arminian solution (conditional election: God elects based on foreseen faith) makes salvation depend ultimately on human decision. Lutheranism rejects both moves and holds the tension confessionally.
      <br><br>
      Luther's own pre-confessional position, as expressed in <em>The Bondage of the Will</em> (1525), against Erasmus's <em>Diatribe on Free Will</em>, was much closer to fully Calvinist double predestination. Luther speaks frankly of God's hidden will (<em>Deus absconditus</em>) and acknowledges the agonising mystery of why some are saved and others lost. But mature confessional Lutheranism softened this asymmetry while preserving Luther's central insistence on sovereign grace.
      <br><br>
      The Lutheran Church—Missouri Synod, Wisconsin Evangelical Lutheran Synod, and other confessional Lutheran bodies maintain this position firmly. The ELCA and other mainline Lutheran bodies have generally retained the confessional statement while exhibiting greater diversity in actual teaching.`,
        verses: ['Eph 1:4–5', 'John 6:44', '1 Tim 2:4', '2 Pet 3:9', 'Rom 9:18', 'Matt 23:37', 'John 3:16', '1 Tim 4:10'],
      },
      {
        name: 'Roman Catholic',
        stance: 'nuanced',
        position: `Catholic theology affirms divine predestination of the elect but rejects both unconditional reprobation and the certainty of personal election in this life. The Council of Trent (Session VI, 1547) was carefully crafted to exclude both Pelagianism (the heresy that humans can save themselves) and what Trent regarded as Protestant predestinarian excess.
      <br><br>
      Canon 15 anathematises anyone who says "a man, born again and justified, is bound by faith to believe that he is assuredly in the number of the predestined" — that is, anyone who claims infallible certainty of personal election. Canon 17 anathematises the claim "that the grace of justification is only attained by those who are predestined to life, but that all the others who are called are called indeed but do not receive grace" — that is, anyone who says grace is given only to the elect.
      <br><br>
      The Catechism of the Catholic Church §§600, 1037, 2012 give the modern systematic statement. God predestines no one to hell; "no one is predestined to go to hell; for this, a willful turning away from God (a mortal sin) is necessary, and persistence in it until the end" (CCC §1037). God knows from eternity who will be saved, but his foreknowledge does not cause damnation.
      <br><br>
      The internal Catholic debate on the mechanism of predestination has been fierce. The two main positions are:
      <br><br>
      <strong>Thomism / Bañezianism</strong> (Dominican school, following Aquinas and Domingo Báñez): God's grace is intrinsically efficacious. When God decrees that a person will believe, his grace infallibly produces faith through divine "physical premotion" of the will. The will is moved freely, but it is moved infallibly by God. This preserves divine sovereignty but raises the question of how this differs from Calvinism.
      <br><br>
      <strong>Molinism</strong> (Jesuit school, founded by Luis de Molina's <em>Concordia</em>, 1588): God has "middle knowledge" (<em>scientia media</em>) — knowledge not only of all actual things and all possible things, but of what every free creature <em>would</em> freely do in any possible circumstance. God then chooses to actualise that combination of circumstances in which the elect freely choose to believe. This preserves libertarian human freedom while maintaining divine sovereignty over salvation history.
      <br><br>
      The <em>Congregatio de Auxiliis</em> debates (1597–1607) between Dominicans and Jesuits before the Holy Office failed to produce a definitive papal resolution. Both positions remain permissible within Catholic orthodoxy. The 20th century has seen significant Molinist revival in figures such as Alfred Freddoso and Thomas Flint.
      <br><br>
      Augustine's later anti-Pelagian writings (<em>On the Predestination of the Saints</em>, c. 429 AD) had moved in a strongly predestinarian direction. The Catholic tradition has retained Augustine's insistence on the priority of grace while resisting his most stark predestinarian formulations.`,
        verses: ['Eph 1:4–5', 'Rom 8:28–30', '1 Tim 2:4', '2 Pet 3:9', 'John 6:44', 'Matt 22:14', 'Phil 2:12–13', 'Acts 13:48'],
      },
      {
        name: 'Methodist / Arminian',
        stance: 'deny',
        position: `Arminianism is named for Jacob Arminius (1560–1609), a Dutch Reformed theologian whose <em>Declaration of Sentiments</em> (1608) and posthumous <em>Remonstrance</em> (1610, drafted by his followers) directly challenged the Calvinism of his day. The Synod of Dort (1618–19) condemned Arminianism and produced the Canons of Dort in response.
      <br><br>
      The five points of the Remonstrance — to which TULIP was the Calvinist counter-response — are:
      <br><br>
      <strong>(1) Conditional election:</strong> God elects to salvation those whom he foreknows will believe. Election is not based on God's sovereign decree alone but on God's foreknowledge of human faith. Romans 8:29 — "those whom he foreknew he also predestined" — is read foreknowledge as preceding predestination.
      <br><br>
      <strong>(2) Unlimited (universal) atonement:</strong> Christ died for all people, not just the elect (1 Timothy 2:6: "who gave himself as a ransom for all"; 2 Peter 3:9: "not wishing that any should perish"; 1 John 2:2: "He is the propitiation for our sins, and not for ours only but also for the sins of the whole world"). The atonement is universally sufficient and universally offered; it becomes effective only for those who believe.
      <br><br>
      <strong>(3) Total depravity</strong> — agreed with Calvinists. Without grace, fallen humans cannot of themselves seek God.
      <br><br>
      <strong>(4) Prevenient (resistible) grace:</strong> God's grace, which precedes and enables conversion, is universally given to all who hear the gospel. This "prevenient grace" restores enough freedom to the fallen will that humans can either receive or reject Christ. Grace can be resisted (Acts 7:51: "you always resist the Holy Spirit"). Salvation requires human cooperation with grace — though the grace itself is God's gift.
      <br><br>
      <strong>(5) Conditional perseverance:</strong> Believers can fall from grace through deliberate, persistent unbelief or sin. The "perseverance of the saints" is conditional on continuing faith (Hebrews 3:12–14; 6:4–6; 10:26–31; 2 Peter 2:20–22).
      <br><br>
      John Wesley made Arminianism the doctrinal foundation of Methodism. His sermon "Free Grace" (1739) is a passionate attack on Calvinist predestination as making God "worse than the devil" by ordaining people to damnation. Wesley's <em>Predestination Calmly Considered</em> (1752) is the systematic treatment.
      <br><br>
      John Fletcher's <em>Checks to Antinomianism</em> (1771–75) — five volumes against Calvinist objections — is the classic Wesleyan-Arminian systematic defence. Richard Watson's <em>Theological Institutes</em> (1823) and William Burt Pope's <em>Compendium of Christian Theology</em> (1875) gave Methodism its mature systematic theology.
      <br><br>
      The United Methodist Confession of Faith and the Articles of Religion (1784) both reflect Arminian distinctives. Among modern Methodist theologians, Thomas Oden, William Abraham, and Randy Maddox have given Wesleyan-Arminian theology fresh expression.`,
        verses: ['1 Tim 2:4', '2 Pet 3:9', '1 John 2:2', 'John 3:16', 'Matt 23:37', 'Acts 7:51', 'Heb 6:4–6', '2 Pet 2:20–22'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'deny',
        position: `Orthodox theology rejects both Calvinist predestination and Arminian conditional election — viewing both as products of the Western Augustinian framework that the Greek Fathers did not share. The Orthodox doctrine is <strong>synergism</strong>: salvation is the cooperation (<em>synergeia</em>) of divine grace and human free will, with the will preserving real but graced freedom even after the Fall.
      <br><br>
      The Synod of Jerusalem (1672), Decree III, gives the explicit Orthodox confessional statement: "We believe the most good God to have from eternity predestined unto glory those whom He hath chosen, and to have consigned unto condemnation those whom He hath rejected; but not so that He would justify the one and consign and condemn the other without cause. For that were contrary to the nature of God, who is the common Father of all, and no respecter of persons... but in as much as He knew the one would make a right use of their free-will, and the other a wrong, He predestined the one or condemned the other."
      <br><br>
      The Orthodox view of the Fall differs from the Western Augustinian framework. John Romanides's <em>The Ancestral Sin</em> (1957) argues that the Greek Fathers understood the consequences of Adam's sin as <em>mortality and corruptibility</em> — death and the corruption of human nature — not as <em>inherited guilt</em>. Humans are not born guilty of Adam's sin; they are born into a world fallen under death, and they inherit a corrupted nature inclined toward sin. But the will retains real freedom, though that freedom is weakened.
      <br><br>
      This makes the entire Western predestination problem unnecessary. If humans are not condemned for inherited guilt — if condemnation comes only for personal sin freely committed — then there is no need to explain why God justly damns infants or why some are predestined to damnation. The whole framework dissolves.
      <br><br>
      Synergism is rooted in the Greek patristic tradition. John Chrysostom, Cyril of Alexandria, John of Damascus, Maximus the Confessor — all teach a cooperation between divine grace and human freedom. Grace is primary; it heals and elevates the will. But the healed will then truly cooperates; it is not overridden or coerced.
      <br><br>
      Theosis (deification) is the Orthodox soteriological framework, and it is inherently synergistic: God offers participation in the divine energies, but humans must freely receive and respond. The sacraments, asceticism, prayer, and the spiritual life are the means by which the healed will cooperates with grace.
      <br><br>
      Vladimir Lossky (<em>The Mystical Theology of the Eastern Church</em>, 1944) and Georges Florovsky have given the major 20th-century Orthodox systematic defences. Kallistos Ware (<em>The Orthodox Way</em>, 1979) gives the accessible exposition.`,
        verses: ['John 1:12–13', 'Matt 23:37', 'Acts 7:51', '1 Tim 2:4', 'Phil 2:12–13', '2 Pet 1:10', 'Rev 3:20', '1 Cor 3:9'],
      },
      {
        name: 'Open Theist',
        stance: 'deny',
        position: `Open theism is a minority modern evangelical position that has provoked intense controversy. It denies that God has exhaustive definite foreknowledge of all future free choices — not because God is limited in his nature, but because the future is genuinely open and unsettled with respect to free creaturely actions, and therefore there are no facts about future free choices for omniscience to know.
      <br><br>
      The argument: God knows everything that exists. The past exists (as having happened) and the present exists. The future, with respect to free choices not yet made, does not exist as a determinate set of facts. God therefore does not know the future in the sense of having exhaustive certain foreknowledge of free human decisions; he knows the future as a tree of possibilities and probabilities, with definite knowledge of his own future actions and of necessary outcomes.
      <br><br>
      This is not ignorance — God knows everything that can be known. It is a voluntary self-limitation consistent with the divine decision to create genuinely free creatures.
      <br><br>
      The major works: Clark Pinnock, Richard Rice, John Sanders, Gregory Boyd, and David Basinger, <em>The Openness of God</em> (1994). Gregory Boyd, <em>God of the Possible</em> (2000). John Sanders, <em>The God Who Risks</em> (1998). Greg Boyd's <em>Satan and the Problem of Evil</em> (2001).
      <br><br>
      The biblical case rests heavily on passages where God seems to change his mind, regret a course of action, or be surprised by human responses: God's "repenting" that he made Saul king (1 Samuel 15:11, 35); God's regret over making humanity before the flood (Genesis 6:6); God's "if" statements ("If only they would change..." — frequent in Jeremiah); the call to intercessory prayer that can change God's intentions (Exodus 32:14: "And the Lord relented from the disaster that he had spoken of bringing on his people").
      <br><br>
      The theological appeal: open theism preserves genuine free will, provides a coherent account of intercessory prayer, helps with the problem of evil (God did not specifically ordain each individual evil), and matches the dynamic, relational portrayal of God in Scripture.
      <br><br>
      The controversies have been severe. The Evangelical Theological Society debated whether Pinnock and Sanders could retain ETS membership (they were narrowly retained in 2003 and 2004 votes, though Sanders later resigned from his Huntington University post under pressure). The Southern Baptist Convention has formally rejected open theism. Most Reformed bodies regard it as a serious heresy approaching denial of divine omniscience.
      <br><br>
      Critics argue: (1) open theism cannot explain biblical prophecy, which requires definite foreknowledge; (2) it diminishes divine providence and undermines the certainty of salvation; (3) it conflicts with passages like Isaiah 46:9–10 ("I am God, and there is no other; I am God, and there is none like me, declaring the end from the beginning and from ancient times things not yet done"); (4) it owes more to modern philosophical commitments to libertarian freedom than to biblical exegesis.`,
        verses: ['Gen 6:6', '1 Sam 15:11', 'Jer 18:7–10', 'Ezek 33:11', 'Jonah 3:10', 'Matt 23:37', '2 Pet 3:9', 'Isa 46:9–10'],
      },
    ],
    keyVerses: ['Eph 1:4–5', 'Eph 1:11', 'Rom 8:28–30', 'Rom 9:11–23', 'John 6:37–44', 'John 6:65', 'John 10:28–29', 'John 15:16', 'Acts 13:48', '2 Thess 2:13', '1 Tim 2:4', '2 Pet 3:9', '1 John 2:2', 'Matt 23:37', 'Acts 7:51', 'Heb 6:4–6'],
    historicalNote: 'Augustine\'s anti-Pelagian writings (c. 412–430 AD) — especially against Pelagius and his disciple Julian of Eclanum — established the Western parameters of the predestination debate. The Synod of Orange (529 AD) condemned semi-Pelagianism but did not endorse full double predestination. The Synod of Dort (November 13, 1618 – May 9, 1619), an international Calvinist council with delegates from England, Scotland, the Palatinate, Hessen, Bremen, Switzerland, Geneva, and Nassau, produced the Canons of Dort against the Remonstrants. Arminius himself died on October 19, 1609 — nine years before Dort\'s verdict. His followers, led by Simon Episcopius and Johannes Uytenbogaert, were expelled from the Dutch Reformed Church and formed the Remonstrant Brotherhood, which exists to this day as a small liberal Dutch church.',
    relatedTopics: ['salvation-works', 'atonement', 'sola-scriptura'],
  },


  {
    id: 'atonement',
    name: 'Theories of the Atonement',
    icon: '🩸',
    controversy: 83,
    category: 'Salvation',
    desc: 'How does Christ\'s death save? Penal substitution, Anselmian satisfaction, Christus Victor, the moral exemplar, governmental theory, or participatory union — what transpired at Calvary, and for whom was it effective?',
    definition: `<p>The doctrine of the <strong>atonement</strong> asks: <em>how</em> does Christ's death on the cross actually save sinners? All Christians agree it does save; they disagree on the mechanism. Six main theories have been proposed:</p>
      <p><strong>(1) Christus Victor</strong> (early Church, Orthodox, recent Anabaptist): Christ's death and resurrection defeat the powers of sin, death, and the devil, liberating humanity from bondage.</p>
      <p><strong>(2) Satisfaction theory</strong> (Anselm, Roman Catholic): Sin offends God's infinite honour and creates a debt only the God-Man can pay; Christ's death satisfies the debt.</p>
      <p><strong>(3) Penal substitution</strong> (Reformation, especially Reformed and evangelical): Christ bore the divine wrath, the legal penalty owed for human sin, in the place of the elect.</p>
      <p><strong>(4) Moral exemplar / influence theory</strong> (Abelard, theological liberalism): Christ's death demonstrates God's love so powerfully that it transforms us by moving us to love in return.</p>
      <p><strong>(5) Governmental theory</strong> (Grotius, Methodist/Arminian tradition): Christ's death demonstrates the seriousness of sin and upholds the moral government of the universe, making forgiveness compatible with justice.</p>
      <p><strong>(6) Recapitulation</strong> (Irenaeus, Orthodox): Christ retraces Adam's path correctly, undoing humanity's fall by living the obedience Adam refused.</p>
      <p>Most traditions hold combinations of these theories; the question is which is primary or essential.</p>`,
    subtopics: [
      { id: 'at-psub', label: 'Penal substitution' },
      { id: 'at-scope', label: 'Definite or universal atonement?' },
      { id: 'at-victor', label: 'Christus Victor' },
      { id: 'at-moral', label: 'Moral exemplar / governmental' },
    ],
    denominations: [
      {
        name: 'Reformed / Presbyterian',
        stance: 'affirm',
        position: `Penal substitutionary atonement (PSA) is the defining soteriological category of the Reformed tradition. The Westminster Confession (1646), Chapter VIII §5, gives the foundational statement: "The Lord Jesus, by his perfect obedience and sacrifice of himself, which he, through the eternal Spirit, once offered up unto God, hath fully satisfied the justice of his Father; and purchased not only reconciliation, but an everlasting inheritance in the kingdom of heaven, for all those whom the Father hath given unto him." The key terms are <em>satisfaction of justice</em>, <em>purchased reconciliation</em>, and the particularity of "for all those whom the Father hath given unto him."
      <br><br>
      The Canons of Dort (1619), Second Head of Doctrine, Article 8, defines <strong>limited (definite, particular) atonement</strong>: "It was the will of God that Christ by the blood of the cross... should effectually redeem out of every people, tribe, nation, and language, all those, and those only, who were from eternity chosen to salvation and given to him by the Father." The atonement is universally <em>sufficient</em> (the value of Christ's sacrifice is infinite) but particularly <em>efficient</em> (it actually saves only the elect).
      <br><br>
      John Owen's <em>The Death of Death in the Death of Christ</em> (1648) is the definitive defence of particular atonement. Owen's famous argument: Christ either died for (a) all the sins of all people, (b) all the sins of some people, or (c) some sins of all people. If (a), why are some lost (since their sins have been paid for)? If (c), no one is saved (since some sins remain unpaid). Only (b) — Christ died for all the sins of some people, the elect — makes coherent sense of substitutionary atonement.
      <br><br>
      Francis Turretin's <em>Institutes of Elenctic Theology</em>, Topic XIV, gives the most thorough scholastic Reformed treatment. Charles Hodge's <em>Systematic Theology</em> (1872) and Louis Berkhof's <em>Systematic Theology</em> (1939) gave the doctrine its standard 19th–20th century expression.
      <br><br>
      The scriptural foundation: Isaiah 53:4–6, 10–12 (the Suffering Servant who bears the iniquity of "us all"); 2 Corinthians 5:21 ("For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God"); Galatians 3:13 ("Christ redeemed us from the curse of the law by becoming a curse for us"); 1 Peter 2:24 ("He himself bore our sins in his body on the tree"); Romans 3:25 (Christ as <em>hilastērion</em> — propitiation, the means of turning aside divine wrath); Romans 5:9 ("we have now been justified by his blood, much more shall we be saved by him from the wrath of God").
      <br><br>
      Particular atonement is grounded in John 6:37–40 (Christ loses none whom the Father has given him), John 10:14–15, 26–29 (Christ lays down his life for the sheep, who hear his voice; those who are not his sheep do not believe), John 17:9 (Christ's high-priestly prayer is "not for the world" but "for those you have given me"), and Ephesians 5:25–27 (Christ "loved the church and gave himself up for her").`,
        verses: ['Isa 53:4–6', '2 Cor 5:21', 'Gal 3:13', '1 Pet 2:24', 'Rom 3:24–26', 'Rom 5:9', 'John 10:14–15', 'John 17:9', 'Eph 5:25–27', 'Heb 9:28'],
      },
      {
        name: 'Lutheran',
        stance: 'affirm',
        position: `Lutheran theology affirms penal substitutionary atonement alongside a robust Christus Victor motif — what Gustaf Aulén in <em>Christus Victor</em> (1931) called the "classic" patristic theme that he argued had been recovered by Luther but obscured by later Lutheran orthodoxy.
      <br><br>
      The Augsburg Confession (1530), Article III ("Of the Son of God"): Christ "truly suffered, was crucified, died, and was buried, that he might reconcile the Father unto us, and be a sacrifice, not only for original guilt, but also for all actual sins of men." The Formula of Concord (1577), Solid Declaration III, affirms PSA: Christ "took upon himself the wrath of God which we had deserved through our sins, and through his obedience, suffering, and death has paid for them and reconciled us with God." Luther's <em>Galatians Lectures</em> (1535) on Galatians 3:13 contain perhaps the most vivid PSA in all Christian literature: Christ became "the greatest thief, the greatest murderer, the greatest adulterer" by bearing all the world's sins in himself.
      <br><br>
      At the same time, Luther's theology is suffused with Christus Victor imagery. Christ as the <em>cosmic warrior</em> defeating sin, death, and the devil; Christ's "happy exchange" (<em>fröhlicher Wechsel</em>) of his righteousness for our sin; Christ harrowing hell and triumphing over the principalities and powers (Colossians 2:15). The Easter Vigil hymn <em>Exsultet</em> and Luther's own Easter hymn "Christ lag in Todesbanden" (1524) celebrate Christ as victor.
      <br><br>
      Gustaf Aulén's argument: Anselm's satisfaction theory and the later Reformed PSA, while affirming real truths, are "objective" Latin theories that came to dominate the Western tradition and crowd out the more dynamic patristic and Lutheran emphasis on Christ's <em>victory</em> over the demonic powers that hold humanity captive. Aulén argued Luther had recovered the patristic emphasis but it had been lost again by Lutheran scholastic orthodoxy. The book has been controversial but enormously influential.
      <br><br>
      Lutheranism affirms <strong>universal atonement</strong>: Christ died for all (1 Timothy 2:6; 1 John 2:2; John 3:16) — not only for the elect. This holds the universal scope of the gospel offer together with the particularity of election. The tension between universal atonement and particular election is held without synthetic resolution (the Lutheran refusal to systematise either toward Calvinism or toward Arminianism).
      <br><br>
      Major Lutheran treatments: Werner Elert's <em>The Structure of Lutheranism</em> (1962); Robert Jenson's two-volume <em>Systematic Theology</em> (1997–99); Oswald Bayer's <em>Martin Luther's Theology</em> (2003/2008).`,
        verses: ['Isa 53:4–6', '2 Cor 5:21', 'Gal 3:13', 'Col 2:15', 'John 3:16', '1 Tim 2:6', '1 John 2:2', 'Heb 2:14–15', 'Rom 5:8–10'],
      },
      {
        name: 'Roman Catholic',
        stance: 'nuanced',
        position: `Catholic theology has multiple atonement models in play, with no single one defined as exclusively binding. The dominant pre-Reformation model was Anselm's <em>satisfaction theory</em>, developed in his <em>Cur Deus Homo</em> ("Why God Became Man," 1098).
      <br><br>
      Anselm's argument: human sin against God's infinite majesty creates an infinite debt that no mere creature can satisfy. Only one who is both God (and so able to render infinite satisfaction) and human (and so a member of the species that owes the debt) can pay. Christ, the God-Man, dying voluntarily on our behalf, satisfies the divine honour. Salvation is therefore neither a payment to the devil (an earlier patristic motif Anselm explicitly rejected) nor mere example — it is the actual satisfaction of debts owed to divine justice.
      <br><br>
      Thomas Aquinas refined and developed Anselm in the <em>Summa Theologiae</em> III, Q. 46–49. Aquinas distinguished various aspects of Christ's saving work — sacrifice, satisfaction, redemption, merit, efficient causality — integrating them into a comprehensive account.
      <br><br>
      Trent did not define a specific atonement theory but presupposed satisfaction. The Catechism of the Catholic Church §§601–618 gives a synthetic statement that incorporates satisfaction, sacrifice, merit, solidarity, and the universal scope of the atonement.
      <br><br>
      Catholic teaching affirms <strong>universal atonement</strong>: Christ died for all (CCC §605). The will of God is the salvation of all (1 Timothy 2:4). The atonement is universally available; it becomes effective for each person through faith, the sacraments, and continuing cooperation with grace.
      <br><br>
      Modern Catholic theology has supplemented these classical models. <strong>René Girard's mimetic theory</strong> (<em>Violence and the Sacred</em>, 1972; <em>The Scapegoat</em>, 1982; <em>I See Satan Fall Like Lightning</em>, 1999) reads the atonement as the unmasking and overturning of the scapegoat mechanism that organises all human society. Christ as innocent victim exposes the violence of human community and breaks its sacred power. Girard's reading has been hugely influential in Catholic theology, though it stops short of replacing satisfaction.
      <br><br>
      <strong>Hans Urs von Balthasar's</strong> meditation on Holy Saturday in <em>Mysterium Paschale</em> (1969) develops Christ's descent into hell as the centre of atonement — Christ enters the deepest abandonment of the godforsaken, breaking death from within.
      <br><br>
      The Catholic synthesis: atonement is sacrifice, satisfaction, merit, victory over sin and death, revelation of love, and the foundation of the sacramental life of the Church. The various "theories" name different aspects of one inexhaustible reality.`,
        verses: ['Isa 53:4–6', 'John 1:29', 'Rom 5:8–11', '2 Cor 5:14–21', '1 Tim 2:6', '1 John 2:2', 'Heb 9:11–14', 'Heb 10:5–10', '1 Pet 2:24'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'nuanced',
        position: `Orthodoxy resists the Anselmian satisfaction framework and the later Reformed penal substitution as Latin distortions of the patristic vision. The Eastern controlling motifs are <strong>Christus Victor</strong> and <strong>recapitulation</strong> — Christ's defeat of death and the powers, and his retracing of Adam's fallen path correctly.
      <br><br>
      The classic patristic statement is <strong>Athanasius's <em>On the Incarnation</em></strong> (c. 318 AD). Athanasius's diagnosis: humanity is dying — the consequence of the Fall is not primarily guilt but <em>corruption and death</em>. Humanity, made in the image of God, was sliding into non-being through corruption. The solution required two things: (1) the cancellation of death and corruption; and (2) the restoration of the image of God in humanity. Both required God himself to take on humanity. Christ assumed full human nature so that <em>by union with the divine, human nature is healed and made incorruptible</em>. §54: "He was made man that we might be made God."
      <br><br>
      <strong>Irenaeus's recapitulation</strong> (<em>Against Heresies</em> Books III and V, c. 180 AD): Christ retraces Adam's path step by step, reversing each disobedience with corresponding obedience. Where Adam disobeyed at a tree, Christ obeyed on a tree; where Adam's disobedience came through a virgin (Eve), Christ came through a virgin (Mary); where Adam plunged the race into death, Christ raised it to life. Christ recapitulates and corrects.
      <br><br>
      <strong>Gregory of Nazianzus</strong> formulated the principle: "What was not assumed was not healed" (<em>Epistle 101</em>, against Apollinaris). Christ assumed full human nature — body, mind, will, soul — precisely so that all of human nature could be healed.
      <br><br>
      The cross, for Orthodoxy, is not God paying himself a debt, nor God's wrath being satisfied by the innocent Son. The cross is God himself, in the person of the Son, entering fully into the human condition unto death — death being the ultimate consequence of fallenness — and from within, by his divine power, defeating death. The empty tomb, not the cross alone, is the locus of salvation.
      <br><br>
      The Paschal hymns of Orthodox worship celebrate this victory: "Christ is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life."
      <br><br>
      The Western juridical framework — God's wrath, divine satisfaction, transferred guilt, imputed righteousness — is regarded as importing Roman legal categories into theology. Vladimir Lossky's <em>The Mystical Theology of the Eastern Church</em> (1944) and John Meyendorff's <em>Byzantine Theology</em> (1974) make this argument at length. Alexander Schmemann's <em>For the Life of the World</em> (1963) presents the positive Orthodox vision: the cross and resurrection are the cosmic and eucharistic centre of God's reconciliation of all things.
      <br><br>
      Orthodox theology does not deny that Christ's death involved sacrifice or that Scripture uses sacrificial and forensic language. But these are placed within the larger Christus Victor / recapitulation / theosis framework — not made the architectonic principle of soteriology.`,
        verses: ['Heb 2:14–15', 'Col 2:15', '1 Cor 15:55–57', 'John 12:31–32', 'Eph 4:8–10', '1 Pet 3:18–19', 'Rom 6:9', '2 Tim 1:10', 'Phil 2:5–11'],
      },
      {
        name: 'Methodist / Arminian',
        stance: 'nuanced',
        position: `Wesley held penal substitution in qualified form. His Sermon 20 ("The Lord Our Righteousness," 1765) affirms that Christ bore "the punishment due to our sins" and that his righteousness is imputed to believers. Wesley emphatically affirmed the substitutionary character of the cross and the imputation of Christ's righteousness — placing him closer to the Reformers than later Methodist theologians have often acknowledged.
      <br><br>
      But the developed Methodist tradition has frequently preferred the <strong>governmental theory</strong> of atonement, associated with the Dutch Reformed jurist <strong>Hugo Grotius</strong> (1583–1645) — though Grotius himself developed it as a defence of penal substitution against the Socinians.
      <br><br>
      Grotius's <em>Defensio fidei Catholicae de satisfactione Christi</em> (1617) frames the atonement in terms of God as moral governor of the universe. Sin is a violation of God's moral law; God's wisdom requires that the moral order be maintained; but God, as ruler with discretion over the law's enforcement, may set aside strict retributive justice and accept a substitute punishment that maintains the moral order without requiring the precise penalty owed by each sinner. Christ's death is sufficient to "manifest God's hatred of sin" and to make forgiveness compatible with the seriousness of the moral law.
      <br><br>
      The American Methodist theologian <strong>John Miley</strong> developed the governmental theory systematically in <em>The Atonement in Christ</em> (1879) and his <em>Systematic Theology</em> (1894). Miley argued PSA was inconsistent with universal atonement: if Christ literally bore the actual penalty of each elect person's sins, then the elect cannot be punished for their sins (otherwise God would be punishing the same sins twice) — but if Christ died for all, and the wicked still suffer in hell, then the strict substitutionary logic fails. The governmental theory solves this by making the atonement an exemplary public demonstration that maintains moral order without precisely transferring each individual's penalty to Christ.
      <br><br>
      <strong>Universal atonement</strong> is non-negotiable for Wesleyan-Arminian theology. 1 Timothy 2:6 ("who gave himself as a ransom <em>for all</em>"); 2 Peter 3:9 (not wishing that <em>any</em> should perish); 1 John 2:2 (Christ is propitiation "not for ours only but for the sins of the whole world") are read in their universal sense. The Calvinist limitation of the atonement to the elect is, on Arminian grounds, contrary to the plain sense of Scripture and to the universal offer of the gospel.
      <br><br>
      Modern Wesleyan theology (Thomas Oden's three-volume <em>Systematic Theology</em>; H. Ray Dunning's <em>Grace, Faith, and Holiness</em>; J. Kenneth Grider's <em>A Wesleyan-Holiness Theology</em>) has variously combined penal substitution, governmental theory, Christus Victor, and exemplarist elements in different proportions, but uniformly insists on universal atonement.`,
        verses: ['1 Tim 2:6', '2 Pet 3:9', '1 John 2:2', 'John 3:16', 'John 1:29', 'Heb 2:9', 'Titus 2:11', 'Isa 53:6', 'Rom 5:18'],
      },
      {
        name: 'Anabaptist / Mennonite',
        stance: 'nuanced',
        position: `The historic Anabaptist position on atonement has been quietly orthodox — affirming substitutionary, sacrificial, and Christus Victor dimensions in various combinations. The Schleitheim Confession (1527) and Dordrecht Confession (1632) speak of Christ's death as sacrifice and reconciliation without elaborate atonement theory.
      <br><br>
      But contemporary Anabaptist theology has produced some of the most pointed critiques of penal substitution in modern Christian thought. <strong>J. Denny Weaver's <em>The Nonviolent Atonement</em></strong> (2001, 2nd ed. 2011) is the major statement. Weaver, a Mennonite theologian, argues that penal substitution embeds divine violence at the very heart of Christian salvation — God the Father must violently punish, and the violence is satisfied only by killing the Son. This, Weaver argues, contradicts the nonviolence of Jesus that the Anabaptist tradition has always centred.
      <br><br>
      Weaver proposes "<strong>Narrative Christus Victor</strong>" as the Anabaptist alternative. The cross is the confrontation between God's nonviolent reign — embodied in Jesus's life and teaching — and the violent powers of empire, religion, and death. Jesus does not avoid the violence; he absorbs it, exposes it, and breaks its power through resurrection. The cross is the ultimate act of nonviolent resistance, vindicated by resurrection.
      <br><br>
      In Narrative Christus Victor, the Father does not require the Son's death; the Father raises the Son who is killed by the powers. The death is the result of human and demonic violence, not divine demand. Salvation is participation in the nonviolent reign of God that Jesus inaugurated.
      <br><br>
      Other Anabaptist theologians have made similar arguments. <strong>Mark Heim's <em>Saved from Sacrifice</em></strong> (2006) develops Girardian insights into a non-violent atonement. <strong>Mark Baker and Joel Green's <em>Recovering the Scandal of the Cross</em></strong> (2000, 2nd ed. 2011) critiques penal substitution from a broader evangelical-Anabaptist perspective.
      <br><br>
      The historic Mennonite tradition's commitment to nonviolence, refusal to participate in war, and rejection of capital punishment shapes its soteriology in ways that other Protestant traditions do not. If killing is fundamentally incompatible with following Jesus, can it be the very mechanism of salvation?
      <br><br>
      Critics (including some Mennonites) argue Weaver's account: (1) downplays the New Testament's substitutionary and sacrificial language; (2) reads Anselm and the Reformers too narrowly; (3) confuses retributive justice with revenge; and (4) ultimately needs more from the cross than mere exemplary witness can supply.`,
        verses: ['John 12:31–33', 'Col 2:14–15', '1 Pet 2:21–24', 'Heb 12:1–3', 'Matt 26:52', 'Luke 23:34', 'Phil 2:5–11', 'Rev 5:6'],
      },
      {
        name: 'Evangelical (broad)',
        stance: 'affirm',
        position: `Penal substitution has been the defining soteriological commitment of the broader evangelical movement — perhaps more so than of any specific historic confessional tradition. The Lausanne Covenant (1974), §3 ("The Uniqueness and Universality of Christ"), and §5 of the Cape Town Commitment (2011) both presuppose penal substitution. The Gospel Coalition's Confessional Statement (2007) makes it explicit and confessionally binding for member churches.
      <br><br>
      Major modern defences: <strong>Leon Morris's <em>The Apostolic Preaching of the Cross</em></strong> (1955) and <em>The Atonement</em> (1983) — establishing the lexicographical case for "propitiation" (<em>hilastērion</em>) as turning aside divine wrath, against C.H. Dodd's "expiation" reading. <strong>John Stott's <em>The Cross of Christ</em></strong> (1986) — the modern evangelical classic, balancing penal substitution with other biblical motifs while making PSA central. <strong>D.A. Carson's many writings.</strong> <strong>J.I. Packer's "What Did the Cross Achieve? The Logic of Penal Substitution"</strong> (Tyndale Lecture, 1973) — a defining 20th-century evangelical statement.
      <br><br>
      The defining controversy of recent evangelicalism on this question was <strong>Steve Chalke</strong>'s description of penal substitution as "cosmic child abuse" in <em>The Lost Message of Jesus</em> (2003): "The fact is that the cross isn't a form of cosmic child abuse — a vengeful Father, punishing his Son for an offence he has not even committed... [as PSA] makes a mockery of Jesus' own teaching to love your enemies and to refuse to repay evil with evil." The reaction in UK evangelicalism was fierce. The Evangelical Alliance commissioned a debate; the response volume <strong>Jeffery, Ovey, and Sach's <em>Pierced for Our Transgressions: Rediscovering the Glory of Penal Substitution</em></strong> (2007) gave a sustained 380-page defence.
      <br><br>
      The exegetical case rests above all on Isaiah 53 (the Suffering Servant who bears the iniquity of "us all"), Romans 3:25–26 (Christ as propitiation, "to show God's righteousness, because in his divine forbearance he had passed over former sins"), 2 Corinthians 5:21 (Christ "made to be sin"), Galatians 3:13 (Christ becoming a curse), 1 Peter 2:24 (bearing our sins), and Hebrews 9–10 (the sacrificial-substitutionary frame). The argument: these are not selective texts but the central New Testament way of speaking about how the cross saves.
      <br><br>
      Universal versus definite atonement remains the major internal evangelical division. Reformed evangelicals (John Piper, R.C. Sproul, John MacArthur in his Calvinist mode) hold definite atonement. Arminian evangelicals (the Wesleyan Methodist tradition; many Pentecostals; many Baptists) hold universal atonement. The Gospel Coalition itself includes both, agreeing on PSA while leaving the scope question to the conscience of each congregation.`,
        verses: ['Isa 53:4–6', '2 Cor 5:21', 'Gal 3:13', 'Rom 3:24–26', '1 Pet 2:24', 'Rom 5:8–9', 'Heb 9:28', 'John 1:29', 'Mark 10:45', '1 John 4:10'],
      },
    ],
    keyVerses: ['Isa 53:4–12', '2 Cor 5:21', 'Gal 3:13', '1 Pet 2:24', 'Rom 3:24–26', 'Rom 5:8–10', 'Mark 10:45', 'John 1:29', '1 John 2:2', '1 John 4:10', 'Heb 2:14–15', 'Heb 9:11–14', 'Heb 9:28', 'Col 2:14–15', '1 Tim 2:6', 'Eph 1:7'],
    historicalNote: 'Anselm of Canterbury\'s Cur Deus Homo (1098) was the first systematic atonement theology in Western Christianity. Peter Abelard\'s near-contemporary moral exemplar theory (c. 1120, in his Commentary on Romans) was opposed by Bernard of Clairvaux and condemned at the Council of Sens (1140). The Reformation sharpened Anselmian satisfaction into the more juridical penal substitutionary atonement. Gustaf Aulén\'s Christus Victor (1931) attempted to rehabilitate the patristic emphasis on Christ\'s victory over the powers. Steve Chalke\'s 2003 description of PSA as "cosmic child abuse" and Jeffery, Ovey, and Sach\'s 2007 response represent the sharpest recent confrontation in evangelical circles. J. Denny Weaver\'s Nonviolent Atonement (2001) has provoked the most sustained Anabaptist alternative.',
    relatedTopics: ['salvation-works', 'predestination', 'hell'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  HOLY SPIRIT                                              ║
  // ╚══════════════════════════════════════════════════════════╝

  {
    id: 'tongues',
    name: 'Spiritual Gifts: Cessationism vs. Continuationism',
    icon: '🔥',
    controversy: 79,
    category: 'Holy Spirit',
    desc: 'Have the miraculous charismata — speaking in tongues, prophecy, words of knowledge, miraculous healing — ceased with the close of the apostolic age and the completion of the canon, or does the Spirit continue to distribute them according to His sovereign will today?',
    definition: `<p>The <strong>cessationism vs. continuationism</strong> debate asks whether the miraculous "sign gifts" of the New Testament — speaking in tongues, prophecy, miraculous healing, words of knowledge, casting out demons in dramatic public displays — have ceased to function in the Church since the close of the apostolic age and the completion of the New Testament canon, or whether they continue today as normal expressions of the Holy Spirit's work in the gathered Christian community.</p>
      <p><strong>Cessationism</strong>, historically dominant in Reformed Protestantism, holds that these gifts served a specific function: to authenticate the apostles and their message, to establish the foundation of the Church (Ephesians 2:20), and to provide the divine validation for the writing of the New Testament. Once the foundation was laid and the canon closed, the gifts ceased; what continues are the "ordinary" works of the Spirit — illuminating Scripture, regenerating believers, sanctifying the Church.</p>
      <p><strong>Continuationism</strong> — held by Pentecostals, charismatics, the Catholic Charismatic Renewal, and many evangelicals — holds that the New Testament gives no warrant for declaring these gifts ceased, that the Spirit continues to distribute them as he wills, and that contemporary reports of miraculous gifts in the global Church should be taken seriously.</p>
      <p>Classical Pentecostalism adds the further distinctive doctrine of <strong>"initial evidence"</strong>: speaking in tongues is the necessary first sign of the post-conversion experience called the "baptism in the Holy Spirit."</p>`,
    subtopics: [
      { id: 'tg-tongues', label: 'Are tongues for today?' },
      { id: 'tg-prophecy', label: 'Modern prophecy?' },
      { id: 'tg-healing', label: 'Miraculous healing ministry?' },
      { id: 'tg-evidence', label: 'Tongues as initial evidence?' },
    ],
    denominations: [
      {
        name: 'Cessationist (Reformed)',
        stance: 'deny',
        position: `The classical Reformed case for cessationism was most fully developed by <strong>Benjamin Breckinridge Warfield</strong> in <em>Counterfeit Miracles</em> (1918). Warfield's argument: the miraculous gifts of the New Testament were specifically "the authentication of the Apostles as messengers of God" (p. 6). They were given to attest the foundational apostolic ministry and the inspired writings of the New Testament. Once the foundation was laid and the canon completed, the gifts ceased their function and ceased their occurrence.
      <br><br>
      Warfield surveyed claims of miraculous gifts throughout post-apostolic Church history — the patristic miracles, the medieval saints, the Roman Catholic claims of contemporary miracles, the early Pentecostal movement — and argued that each could be explained as either (1) fraud, (2) misperception, (3) genuine but extraordinary providence (not the supernatural <em>charismata</em> of 1 Corinthians 12), or (4) demonic counterfeits.
      <br><br>
      The exegetical case rests on several pillars:
      <br><br>
      <strong>(1) Apostolic foundation:</strong> Ephesians 2:20 says the Church is "built on the foundation of the apostles and prophets, Christ Jesus himself being the cornerstone." A foundation is laid once and not laid again. The "apostles and prophets" — those with foundational revelatory ministries — completed their work in the first century. The Church now builds on the foundation; it does not relay it.
      <br><br>
      <strong>(2) Signs of an apostle:</strong> 2 Corinthians 12:12 — "The signs of a true apostle were performed among you with utmost patience, with signs and wonders and mighty works." This implies that miraculous signs were specifically apostolic credentials. Hebrews 2:3–4 confirms: the message of salvation "was declared at first by the Lord, and it was attested to us by those who heard, while God also bore witness by signs and wonders and various miracles and by gifts of the Holy Spirit distributed according to his will." The miraculous attestation belongs to the apostolic generation.
      <br><br>
      <strong>(3) 1 Corinthians 13:8–10:</strong> "Love never ends. As for prophecies, they will pass away; as for tongues, they will cease; as for knowledge, it will pass away. For we know in part and we prophesy in part, but when the perfect comes, the partial will pass away." Cessationists historically read "the perfect" (<em>to teleion</em>) as the completion of the canon, after which the partial revelatory gifts cease. (Continuationists read "the perfect" as the eschaton — the return of Christ and the perfection of knowledge in glory.)
      <br><br>
      <strong>(4) Historical witness:</strong> Cessationists argue that the miraculous gifts noticeably wane in the post-apostolic period and effectively disappear in the orthodox Church for most of history, with their resurgence in the modern Pentecostal movement being suspicious.
      <br><br>
      Major modern cessationist works: <strong>Richard Gaffin's <em>Perspectives on Pentecost</em></strong> (1979) gives the Reformed scholarly defence. <strong>Thomas Edgar's <em>Satisfied by the Promise of the Spirit</em></strong> (1996). <strong>John MacArthur's <em>Charismatic Chaos</em></strong> (1992) and <strong><em>Strange Fire</em></strong> (2013, accompanying the 2013 Strange Fire conference) gave the hard cessationist case in a popular form. MacArthur's central charge: contemporary charismatic phenomena are at best psychological self-deception and at worst demonic counterfeits.
      <br><br>
      The Westminster Confession (1646), Chapter I §1, gives confessional support: God "those former ways of his revealing his will unto his people being now ceased."`,
        verses: ['Eph 2:20', '2 Cor 12:12', 'Heb 2:3–4', '1 Cor 13:8–10', 'Acts 1:21–22', 'Acts 8:18', 'Gal 1:8–9', 'Jude 3'],
      },
      {
        name: 'Pentecostal (Classical)',
        stance: 'affirm',
        position: `Classical Pentecostalism, born in the <strong>Azusa Street Revival</strong> in Los Angeles (1906) under the African American pastor William J. Seymour, teaches that the Holy Spirit continues to distribute all New Testament <em>charismata</em> and that speaking in tongues is the <strong>initial physical evidence</strong> of the post-conversion experience called the "baptism in the Holy Spirit."
      <br><br>
      The Assemblies of God Statement of Fundamental Truths (1916), §7 ("The Baptism in the Holy Ghost"): "All believers are entitled to and should ardently expect and earnestly seek the promise of the Father, the baptism in the Holy Ghost and fire, according to the command of our Lord Jesus Christ. This was the normal experience of all in the early Christian Church. With it comes the enduement of power for life and service, the bestowment of the gifts and their uses in the work of the ministry."
      <br><br>
      §8 ("The Initial Physical Evidence of the Baptism in the Holy Ghost"): "The baptism of believers in the Holy Ghost is witnessed by the initial physical sign of speaking with other tongues as the Spirit of God gives them utterance. The speaking in tongues in this instance is the same in essence as the gift of tongues (1 Corinthians 12:4–10, 28), but is different in purpose and use."
      <br><br>
      This distinction is crucial. <strong>Initial evidence tongues</strong> (the once-for-all sign of being baptised in the Spirit) is different from the <strong>gift of tongues</strong> in 1 Corinthians 12 (an ongoing congregational gift that not every Spirit-filled believer possesses). All believers should be baptised in the Spirit; the initial sign is tongues; but not all who have been baptised in the Spirit will then go on to exercise the ongoing gift of tongues for public ministry.
      <br><br>
      The exegetical case for initial evidence rests on the pattern of Acts: Acts 2 (Pentecost — tongues), Acts 8 (Samaritan converts received the Spirit visibly — many Pentecostals infer tongues even though the text doesn't specify), Acts 10 (Cornelius — tongues), Acts 19 (Ephesian disciples — tongues and prophecy). Where the reception of the Spirit is described, tongues consistently appear as the marker.
      <br><br>
      Classical Pentecostalism also affirms the full range of New Testament gifts — prophecy, healing, words of knowledge, words of wisdom, discernment of spirits, faith, miracles, interpretation of tongues (1 Corinthians 12:7–11). Healing services, prophetic utterances in the congregation, and exorcisms are normal Pentecostal worship practices.
      <br><br>
      The Pentecostal movement has grown to over 600 million adherents globally and is the fastest-growing branch of Christianity. Major denominations: the Assemblies of God (over 70 million globally), the Church of God in Christ, the International Pentecostal Holiness Church, the Foursquare Church, and many independent Pentecostal bodies.
      <br><br>
      Major Pentecostal theologians: <strong>Gordon Fee</strong>'s <em>God's Empowering Presence</em> (1994) — the major scholarly Pentecostal pneumatology, drawing on his Pauline scholarship. <strong>Frank Macchia</strong>'s <em>Baptized in the Spirit</em> (2006). <strong>Wolfgang Vondey</strong>'s <em>Pentecostal Theology</em> (2017).`,
        verses: ['Acts 2:1–4', 'Acts 2:38–39', 'Acts 8:14–17', 'Acts 10:44–46', 'Acts 19:1–7', '1 Cor 12:4–11', '1 Cor 14:1–5', 'Joel 2:28–29', 'Mark 16:17', 'John 14:12'],
      },
      {
        name: 'Charismatic (Catholic / Anglican)',
        stance: 'affirm',
        position: `The Catholic Charismatic Renewal began on the campus of Duquesne University (Pittsburgh) in February 1967, when a group of Catholic students at a weekend retreat experienced what they understood as baptism in the Holy Spirit. The movement spread rapidly through Catholic universities, religious orders, and parishes.
      <br><br>
      The International Catholic Charismatic Renewal Services (ICCRS) operates with Vatican recognition. In 2019, Pope Francis reorganised the structure, creating <em>CHARIS</em> (the Catholic Charismatic Renewal International Service) as a single global service body. Pope Francis has spoken warmly of the movement, calling it "a current of grace, the renewal of the Spirit in the Church, for the Church."
      <br><br>
      Catholic theology of the gifts: the CDF document <em>Iuvenescit Ecclesia</em> ("The Church Rejuvenates," 2016) integrates charismatic phenomena within the Church's sacramental structure. Citing Vatican II's <em>Lumen Gentium</em> §12: "It is not only through the sacraments and Church ministries that the Holy Spirit makes holy the People of God and leads them and enriches them with His virtues. Allotting His gifts 'to everyone according as he will' (1 Cor 12:11), He distributes special graces among the faithful of every rank... Such gifts of grace, whether they are of special brilliance or are also more simple and widely distributed, are to be received with thanksgiving and consolation."
      <br><br>
      Crucially, Catholic charismatic theology distinguishes itself from Pentecostalism on the "initial evidence" doctrine. Catholic charismatics affirm baptism in the Spirit as a renewal of the graces received in sacramental baptism, but do not require tongues as the necessary sign. Tongues is one gift among many; some receive it, others do not.
      <br><br>
      <strong>Anglican charismatic renewal</strong> began in the late 1960s and early 1970s. Major centres: Holy Trinity Brompton (HTB) in London, which has produced the Alpha course; the SOMA (Sharing of Ministries Abroad) movement; the New Wine network; Soul Survivor. Influential figures: Michael Harper (1931–2010), Colin Urquhart, Sandy Millar, Nicky Gumbel, and David Watson (1933–84).
      <br><br>
      <strong>Lutheran and Reformed charismatic renewal</strong> exists in smaller scope, including the Reformed Renewal Society and various Lutheran charismatic fellowships.
      <br><br>
      Theologically, the charismatic movement (broadly understood) holds: (1) all NT gifts are available to believers today; (2) the gifts are distributed as the Spirit wills, not according to denominational boundaries; (3) the gifts edify the body when exercised in love and order (1 Corinthians 14); (4) genuine charismata coexist with the sacramental, confessional, and historic life of the Church. The charismatic affirms continuity with the parent tradition while adding the dimension of the gifts.`,
        verses: ['1 Cor 12:4–11', '1 Cor 14:1–25', 'Acts 2:17–21', 'Eph 4:11–13', 'Rom 12:6–8', '1 Pet 4:10–11', 'Acts 19:6', 'Mark 16:17–18'],
      },
      {
        name: 'Third Wave / Open but Cautious',
        stance: 'nuanced',
        position: `The "Third Wave" of the Spirit (the term coined by <strong>C. Peter Wagner</strong> in 1983) refers to evangelicals who affirm the continuation of all spiritual gifts without adopting the classical Pentecostal initial-evidence doctrine. The First Wave was Pentecostalism; the Second was the Charismatic Renewal in the historic churches; the Third was the awakening within mainstream evangelicalism to the gifts of the Spirit, especially through <strong>John Wimber</strong> (1934–97) and the <strong>Vineyard movement</strong>.
      <br><br>
      Wimber's <em>Power Evangelism</em> (1986) and <em>Power Healing</em> (1987) argued that gospel proclamation should be accompanied by demonstrations of the Spirit's power — healings, words of knowledge, deliverance — as in the New Testament. Wimber's "signs and wonders" ministry profoundly influenced evangelicals at Fuller Theological Seminary and beyond. The Vineyard movement now has over 2,400 churches globally.
      <br><br>
      The intellectually rigorous Reformed-continuationist position has been developed by <strong>Wayne Grudem</strong> in <em>The Gift of Prophecy in the New Testament and Today</em> (1988, rev. 2000). Grudem argues that New Testament congregational prophecy — distinct from the infallible apostolic and Old Testament prophetic ministry — was a fallible Spirit-given utterance that needed weighing and discernment (1 Corinthians 14:29: "Let two or three prophets speak, and let the others weigh what is said"). This fallible congregational gift continues; it does not threaten Scripture's authority because it operates at a lower epistemological level.
      <br><br>
      <strong>D.A. Carson's <em>Showing the Spirit</em></strong> (1987) — a careful exposition of 1 Corinthians 12–14 — argues that the texts give no warrant for cessationism and that the gifts continue, though they must be carefully tested and ordered (1 Thessalonians 5:19–22).
      <br><br>
      <strong>Sam Storms's <em>The Beginner's Guide to Spiritual Gifts</em></strong> (2002, rev. 2013), <strong><em>Convergence</em></strong> (2005), and <strong><em>Practicing the Power</em></strong> (2017) give the mature pastoral exposition of "open but cautious" continuationism. Storms came from a Reformed cessationist background and moved to continuationism through extended biblical study.
      <br><br>
      Other significant figures: <strong>John Piper</strong> (Reformed Baptist, openly continuationist on prophecy and tongues since his early ministry); <strong>Tim Keller</strong> (Reformed Presbyterian, sympathetic to continuationism); <strong>Mark Driscoll</strong> (controversial but openly continuationist); <strong>Matt Chandler</strong>, <strong>Francis Chan</strong>, and the Acts 29 network of churches.
      <br><br>
      The position holds: (1) the New Testament nowhere teaches cessation; (2) the burden of proof is on those who would declare an explicit New Testament gift to have ceased; (3) modern continuationists do not need to affirm Pentecostal initial-evidence or every claim of contemporary supernatural ministry; but (4) Christians should remain hungry for the Spirit's gifts and ready to recognise them when they appear, tested by Scripture and ordered by love and the apostle's pastoral instructions.`,
        verses: ['1 Cor 12:4–11', '1 Cor 14:1', '1 Cor 14:29', '1 Thess 5:19–21', 'Acts 2:38–39', 'Acts 19:1–7', 'Eph 4:11–13', 'Mark 16:17–18'],
      },
      {
        name: 'Baptist (SBC)',
        stance: 'deny',
        position: `Southern Baptist and broader Baptist evangelical theology has been historically cessationist, though not formally confessionalised. The Baptist Faith & Message (2000) does not address the cessationism/continuationism question directly — but the practical and pastoral default in most SBC and conservative Baptist churches has been cessationist.
      <br><br>
      The SBC's International Mission Board (IMB) had a formal policy from 1992 to 2015 prohibiting tongues-speaking in missionary candidates: "The candidate has not had the experience of speaking in tongues; or has not had this experience in a public worship service." This policy was reversed in 2015 by trustee vote, partly because it was excluding genuine missionary candidates and partly because the dividing line between charismatics and non-charismatics in global evangelicalism had become increasingly blurred.
      <br><br>
      <strong>John MacArthur's Strange Fire conference</strong> (October 16–18, 2013, at Grace Community Church) and the accompanying book represent the most prominent recent expression of hard cessationism within broader evangelicalism. MacArthur argues that the entire charismatic movement is a "great deception" that has "attributed to the Holy Spirit words and works that did not come from him." MacArthur's specific charge: charismatic doctrines of continuing revelation undermine the sufficiency of Scripture; charismatic claims of healing fail to deliver actual healing; charismatic experience leads people away from the gospel of justification by faith.
      <br><br>
      The Strange Fire response from continuationists was substantial: <strong>Michael Brown's <em>Authentic Fire</em></strong> (2014); <strong>Sam Storms</strong> and <strong>Wayne Grudem</strong>'s articulate published replies; <strong>R.T. Kendall</strong>'s defence; and informal responses across evangelical blogs and platforms.
      <br><br>
      <strong>Tom Ascol and the Founders Ministry</strong> represent Reformed Baptist cessationism in a more pastorally moderate register than MacArthur's.
      <br><br>
      But Southern Baptist life has not been uniformly cessationist. The "Conservative Resurgence" within the SBC (1979–2000) drew heavily on Reformed theology, including cessationist-leaning Reformed theology. But the SBC has always included a significant minority of charismatic-leaning members, and pastors such as <strong>Dwight McKissic</strong> have publicly identified as continuationist.
      <br><br>
      The "New Apostolic Reformation" (NAR) controversy — associated with <strong>C. Peter Wagner</strong>, <strong>Mike Bickle</strong> (International House of Prayer), <strong>Bill Johnson</strong> (Bethel Church, Redding California), and others — has generated significant Southern Baptist concern. NAR teaches that contemporary "apostles" and "prophets" with authority equivalent to or exceeding biblical apostles are restoring the Church for the end times. Even continuationists like Wayne Grudem and Sam Storms have sharply distinguished their position from NAR claims.`,
        verses: ['Eph 2:20', '2 Cor 12:12', 'Heb 2:3–4', '1 Cor 13:8–10', 'Jude 3', 'Rev 22:18–19', '1 Thess 5:21', '2 Tim 3:16–17'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'nuanced',
        position: `Orthodoxy does not hold cessationism in principle — the Holy Spirit is continuously and abundantly active in the Church's sacramental, liturgical, ascetic, and saintly life. Throughout Orthodox history, the lives of the saints, the miracles of the Mother of God, the prayers of the elders, the wonderworking icons, and the mystical theology of the hesychast tradition all attest to the ongoing presence and power of the Spirit.
      <br><br>
      But Orthodoxy is deeply suspicious of independent charismatic phenomena outside the sacramental and episcopal structure of the Church. <em>Diakrisis</em> — the discernment of spirits — is one of the most important spiritual gifts. Genuine charismata, in Orthodox teaching, are recognised by their conformity to the apostolic faith, by their fruits of holiness in the recipient, by the discernment of the Church (especially spiritual fathers), and by their integration with the sacramental life.
      <br><br>
      The Orthodox tradition has its own forms of recognised charismatic ministry. The <em>startsy</em> (spiritual elders) — figures like Seraphim of Sarov (1759–1833), the Optina Elders, Paisios of Mount Athos (1924–94), and many others — exercise gifts of prophecy, discernment, healing, and supernatural insight. The <em>yurodivy</em> (Holy Fools) of Russian tradition embody a charismatic prophetic witness in extreme ascetic form.
      <br><br>
      But Orthodoxy looks with deep suspicion at the modern Pentecostal-charismatic phenomenon when it appears outside the canonical structures of the Church — viewing it as theologically untested, prone to spiritual delusion (<em>prelest</em>), individualistic in a way alien to ecclesial Christianity, and lacking the deep ascetical and sacramental preparation that the Fathers required for handling spiritual gifts safely.
      <br><br>
      The Orthodox spiritual tradition (the <em>Philokalia</em>, the writings of Symeon the New Theologian in the 10th–11th centuries, the hesychast theology of Gregory Palamas in the 14th century) places enormous emphasis on the experience of God's presence and the action of the Holy Spirit in the heart — but always within rigorous ascetical discipline, sacramental life, and submission to spiritual fathers.
      <br><br>
      The result: Orthodox theology is fully open to the Spirit's miraculous work but extraordinarily cautious about claims of charismatic experience disconnected from the sacramental and ascetical life of the Church.`,
        verses: ['John 14:26', 'John 16:13', 'Acts 2:17–21', '1 Cor 12:4–11', '1 Thess 5:19–21', '1 John 4:1–3', 'Matt 7:15–20', '1 Cor 14:33'],
      },
    ],
    keyVerses: ['1 Cor 12–14', 'Acts 2:1–4', 'Acts 2:17–21', 'Acts 8:14–17', 'Acts 10:44–46', 'Acts 19:1–7', 'Joel 2:28–29', '1 Cor 13:8–13', 'Eph 2:20', 'Eph 4:11–13', '2 Cor 12:12', 'Heb 2:3–4', 'Mark 16:17–18', '1 Thess 5:19–21', '1 John 4:1–3'],
    historicalNote: 'The Azusa Street Revival (Los Angeles, April 1906) under William Joseph Seymour — a Black holiness preacher from the American South — launched classical Pentecostalism. Within a decade, the movement had spread globally. Today Pentecostal/Charismatic Christianity numbers over 600 million adherents — about a quarter of all Christians worldwide — and is the fastest-growing form of Christianity globally, especially in Africa, Latin America, and Asia. The Catholic Charismatic Renewal began at Duquesne University in February 1967. The Third Wave / Vineyard movement began with John Wimber\'s ministry in the early 1980s. John MacArthur\'s Strange Fire conference (2013) and the responses to it represent the sharpest recent academic expression of the cessationism/continuationism debate.',
    relatedTopics: ['sola-scriptura', 'spirit-baptism', 'apostolic-succession'],
  },

  {
    id: 'spirit-baptism',
    name: 'Baptism in the Holy Spirit',
    icon: '⚡',
    controversy: 71,
    category: 'Holy Spirit',
    desc: 'Is baptism in the Holy Spirit identical with conversion / water baptism / Christian initiation, or is it a distinct subsequent experience for empowered Christian service? Must it be evidenced by speaking in tongues?',
    definition: `<p>The doctrine of <strong>Baptism in the Holy Spirit</strong> (sometimes called "Spirit baptism," "the baptism with the Spirit," or "the second blessing") concerns the Spirit's work in distinguishing or empowering the believer beyond initial regeneration. The question has divided Christians into roughly three positions:</p>
      <p><strong>(1) The "one experience" view</strong> (Catholic, Orthodox, Reformed, most Baptist evangelical): Spirit baptism occurs at conversion / initial Christian life / water baptism — it is the Spirit's regenerating and indwelling work, not a separate later experience. 1 Corinthians 12:13 ("by one Spirit we were all baptised into one body") is read as referring to the universal experience of all believers at the moment they become Christians.</p>
      <p><strong>(2) The "Wesleyan / Holiness second blessing" view</strong>: Spirit baptism is a distinct post-conversion experience of sanctifying empowerment, sometimes identified with entire sanctification — a "second work of grace" that purifies the believer's heart and equips for holy living. This was the dominant pre-Pentecostal Holiness teaching from John Wesley through Phoebe Palmer.</p>
      <p><strong>(3) The "classical Pentecostal" view</strong>: Spirit baptism is a distinct post-conversion experience of empowerment for ministry (not sanctification), normatively evidenced by speaking in tongues. This was the position formalised at the Azusa Street Revival (1906) and the founding documents of the Assemblies of God.</p>`,
    subtopics: [
      { id: 'sb-timing', label: 'Conversion or subsequent?' },
      { id: 'sb-evidence', label: 'Tongues as initial evidence?' },
      { id: 'sb-purpose', label: 'Sanctification or empowerment?' },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'nuanced',
        position: `Catholic theology has historically taught that the Holy Spirit is given fully in baptism and confirmation. The Catechism of the Catholic Church §§1262–74 discusses baptism as the Spirit's regenerating and indwelling work. Confirmation completes baptismal grace and strengthens the Spirit's presence (CCC §§1285–1321). There is no separate later "baptism in the Spirit" required for the fullness of Christian life — all that is needed is given in the sacraments of initiation.
      <br><br>
      However, the Catholic Charismatic Renewal (from 1967) has developed a theology of "Baptism in the Spirit" or "release of the Spirit" that fits within the sacramental framework. The Spirit is given fully in baptism and confirmation, but the actualisation, awareness, and expression of the Spirit's presence can be renewed through a powerful experience often associated with the laying on of hands and prayer for the gifts.
      <br><br>
      <strong>The Malines documents</strong> (1974), produced by the early Catholic Charismatic Renewal under Cardinal Suenens of Belgium, articulated this theology: "Baptism in the Spirit" is not a new sacrament or a sacrament outside the seven, but a renewal and actualisation of baptismal grace. Vatican II's <em>Lumen Gentium</em> §12 provides the theological foundation for the charismatic experience within the Catholic framework.
      <br><br>
      The CDF document <em>Iuvenescit Ecclesia</em> (2016) gives the most recent magisterial statement integrating charismatic and hierarchical gifts in the Church's life.`,
        verses: ['1 Cor 12:13', 'Titus 3:5–6', 'Acts 8:14–17', 'Acts 19:1–7', '2 Cor 1:21–22', 'Eph 1:13–14', 'Acts 2:38–39'],
      },
      {
        name: 'Reformed / Presbyterian',
        stance: 'deny',
        position: `The Reformed tradition holds that Spirit baptism is the Spirit's regenerating and uniting work given to every believer at conversion — it is identical with what makes a person a Christian at all. There is no separate subsequent experience of "Spirit baptism" distinct from conversion. To suggest otherwise would create two classes of Christians: ordinary believers and Spirit-baptised believers — a distinction Paul explicitly denies in 1 Corinthians 12:13.
      <br><br>
      The decisive text is <strong>1 Corinthians 12:13</strong>: "For in one Spirit we were all baptised into one body — Jews or Greeks, slaves or free — and all were made to drink of one Spirit." Paul's "we were all baptised" includes <em>every</em> Corinthian believer, including those whose maturity Paul has been correcting. There are no Christians who have not been baptised in the Spirit.
      <br><br>
      The Westminster Confession (1646), Chapter XII–XIII, treats adoption and sanctification as following directly from effectual calling and regeneration. The Holy Spirit's indwelling is part of conversion, not a separate later experience.
      <br><br>
      <strong>John Stott's <em>Baptism and Fullness</em></strong> (1964, 2nd ed. 1975) is the classic Reformed-evangelical statement. Stott argues meticulously from Acts and the epistles that baptism in the Spirit refers to initial Christian experience and that what subsequent generations have called "second blessing" or "Spirit baptism" experiences are better understood as fillings (Acts 4:8; 4:31; 9:17; 13:9; Ephesians 5:18) — repeated experiences of being filled with the Spirit who already indwells.
      <br><br>
      The distinction between "Spirit baptism" (one-time, at conversion, given to all) and "Spirit filling" (repeated, throughout the Christian life) is crucial to the Reformed-evangelical reading. Pentecost (Acts 2) was the foundational outpouring of the Spirit on the Church; subsequent reception experiences in Acts 8 (Samaria), Acts 10 (Cornelius), and Acts 19 (Ephesus) are anomalous transition events as the gospel crossed cultural boundaries — not the normative pattern for individual believers thereafter.
      <br><br>
      Reformed theology does insist on continued cultivation of the Spirit's presence through prayer, the means of grace, mortification of sin, and the disciplines of the Christian life. But this is sanctification, not a separate baptism in the Spirit subsequent to conversion.`,
        verses: ['1 Cor 12:13', 'Eph 1:13–14', 'Rom 8:9', 'Titus 3:5–6', 'John 3:5', 'Acts 2:38–39', '1 Cor 6:11', 'Gal 3:2–3'],
      },
      {
        name: 'Lutheran',
        stance: 'deny',
        position: `Lutheran theology, like Reformed, locates the Spirit's gift in the sacrament of baptism. There is no separate "Spirit baptism" distinct from baptism in water. The Spirit is given through the means of grace — Word and Sacrament — and the Christian life is the ongoing return to and cultivation of one's baptism.
      <br><br>
      Luther's Small Catechism on baptism: baptism "works forgiveness of sins, delivers from death and the devil, and grants eternal salvation to all who believe this, as the words and promises of God declare." This includes the gift of the Spirit (Titus 3:5–6; Acts 2:38).
      <br><br>
      Lutheran theology takes seriously the language of Romans 8:9: "Anyone who does not have the Spirit of Christ does not belong to him." There is no Christian without the Spirit. The post-conversion fullness sought by Holiness and Pentecostal movements is real — Christians can grow in awareness and surrender to the Spirit's already-given presence — but this is not a separate "Spirit baptism" event distinct from baptism.
      <br><br>
      Lutheran charismatics (a real but small minority) generally use language similar to Catholic charismatics: a "release" or "renewal" of baptismal grace rather than a new sacrament or initiation.`,
        verses: ['Rom 8:9', 'Rom 8:14–16', '1 Cor 12:13', 'Titus 3:5–6', 'Acts 2:38–39', 'Eph 1:13–14', 'John 3:5', 'Gal 4:6'],
      },
      {
        name: 'Methodist / Wesleyan',
        stance: 'nuanced',
        position: `John Wesley taught a doctrine of <strong>entire sanctification</strong> — a second work of grace subsequent to conversion in which the heart is wholly cleansed from inbred sin and filled with perfect love (1 John 4:18). Wesley did not consistently identify this with "baptism in the Spirit" — his preferred terminology was "entire sanctification" or "Christian perfection" — but the structural framework of a distinct post-conversion experience of grace is the Wesleyan inheritance to the Holiness movement and (through it) to Pentecostalism.
      <br><br>
      Wesley's <em>A Plain Account of Christian Perfection</em> (1766) gives the systematic treatment. Justification (initial salvation) is by grace through faith in Christ's atoning death; entire sanctification is a second crisis of faith in which the believer is brought into the experience of perfect love.
      <br><br>
      <strong>Phoebe Palmer</strong> (1807–74), the American Methodist who shaped the 19th-century Holiness movement, developed the "altar theology": placing oneself on the altar of consecration, the seeker may receive entire sanctification by faith. Palmer's <em>The Way of Holiness</em> (1843) became the manual of the Holiness movement.
      <br><br>
      The Wesleyan-Holiness tradition (Church of the Nazarene, Free Methodist Church, Wesleyan Church, Salvation Army) continues to teach entire sanctification as a distinct subsequent experience. The Nazarene Articles of Faith, Article X: "We believe that entire sanctification is that act of God, subsequent to regeneration, by which believers are made free from original sin... and brought into a state of entire devotement to God, and the holy obedience of love made perfect."
      <br><br>
      But the Wesleyan-Holiness tradition has generally <em>not</em> identified entire sanctification with baptism in the Spirit, and has <em>not</em> required tongues as initial evidence. This distinguishes Wesleyan-Holiness from Pentecostalism — even though Pentecostalism grew out of the Holiness movement.
      <br><br>
      The transition from Holiness to Pentecostalism (in the early 20th century, especially through Charles Parham and William Seymour) involved the addition of the initial-evidence-of-tongues doctrine to the Holiness framework. Many of the original Pentecostals had been Holiness Methodists or Holiness Wesleyans.`,
        verses: ['1 John 4:18', 'Matt 5:48', 'Rom 6:6', 'Heb 10:14', 'Eph 5:18', '1 Thess 5:23', '2 Cor 7:1', 'Ezek 36:25–27'],
      },
      {
        name: 'Pentecostal (Classical)',
        stance: 'affirm',
        position: `The defining doctrine of classical Pentecostalism is that <strong>baptism in the Holy Spirit</strong> is a definite experience subsequent to conversion / salvation, available to all believers, normatively evidenced by speaking in tongues, and for the purpose of empowerment for witness and ministry.
      <br><br>
      The Assemblies of God Statement of Fundamental Truths (1916), §7: "All believers are entitled to and should ardently expect and earnestly seek the promise of the Father, the baptism in the Holy Ghost and fire, according to the command of our Lord Jesus Christ. This was the normal experience of all in the early Christian Church. With it comes the enduement of power for life and service, the bestowment of the gifts and their uses in the work of the ministry. This experience is distinct from and subsequent to the experience of the new birth."
      <br><br>
      §8: "The baptism of believers in the Holy Ghost is witnessed by the initial physical sign of speaking with other tongues as the Spirit of God gives them utterance."
      <br><br>
      The exegetical case rests on the pattern of Acts. <strong>(1) The 120 disciples at Pentecost (Acts 2):</strong> already believers in Jesus, they received the Spirit and spoke in tongues. <strong>(2) The Samaritan believers (Acts 8:14–17):</strong> had received the Word, believed, and been baptised in water — yet had not yet received the Spirit; Peter and John laid hands on them and "they received the Holy Spirit." <strong>(3) Saul/Paul (Acts 9:17):</strong> Ananias laid hands on him "that you may regain your sight and be filled with the Holy Spirit." <strong>(4) Cornelius and his household (Acts 10:44–46):</strong> received the Spirit and spoke in tongues, even before water baptism. <strong>(5) The Ephesian disciples (Acts 19:1–7):</strong> had received John's baptism but not heard of the Holy Spirit; Paul laid hands on them and "the Holy Spirit came on them, and they began speaking in tongues and prophesying."
      <br><br>
      The Pentecostal reading: in each of these cases, the reception of the Spirit is either subsequent to or distinct from conversion / water baptism, and is consistently accompanied by tongues (explicitly in three cases; implied in the other two).
      <br><br>
      Theological purpose: Spirit baptism is for empowerment for witness, not for sanctification. Acts 1:8 — "you will receive power when the Holy Spirit has come upon you, and you will be my witnesses." The believer who has been baptised in the Spirit is equipped for effective ministry, for the gifts of the Spirit (1 Corinthians 12), and for the supernatural attestation of the gospel.
      <br><br>
      The distinction between Spirit baptism and sanctification distinguishes classical Pentecostalism from its Wesleyan-Holiness parent. Pentecostalism does not say Spirit baptism perfects the believer in holiness; it equips for service. Holiness continues to be cultivated through ordinary Christian discipline.
      <br><br>
      The Assemblies of God, Church of God in Christ, International Pentecostal Holiness Church, Foursquare Church, and most classical Pentecostal denominations affirm initial-evidence tongues. The Church of God (Cleveland, Tennessee) historically also affirmed it but has slightly softened the language in recent decades.`,
        verses: ['Acts 1:4–5', 'Acts 1:8', 'Acts 2:1–4', 'Acts 2:38–39', 'Acts 8:14–17', 'Acts 9:17', 'Acts 10:44–46', 'Acts 19:1–7', 'Luke 24:49', 'Joel 2:28–29'],
      },
      {
        name: 'Charismatic / Third Wave',
        stance: 'nuanced',
        position: `The charismatic movement (in Catholic, Anglican, Lutheran, Reformed, and Baptist forms) and the Third Wave (Vineyard, Calvary Chapel offshoots, much of contemporary evangelicalism) generally affirm a definite experience of empowerment for ministry — sometimes called "baptism in the Spirit," "release of the Spirit," "being filled with the Spirit," or simply "encounter with the Spirit" — without requiring tongues as the necessary initial evidence.
      <br><br>
      The charismatic adaptation: yes, there are post-conversion experiences of Spirit empowerment that the New Testament describes and that contemporary believers may seek. Yes, these may include tongues. But no, tongues is not the necessary marker — the Spirit "apportions to each one individually as he wills" (1 Corinthians 12:11), and not all receive all gifts.
      <br><br>
      <strong>John Wimber and the Vineyard movement</strong> spoke of "power encounters" and "doing the stuff" (Wimber's phrase for ministering in the gifts), without requiring an initial-evidence experience. The Vineyard model: pray for the Spirit's empowerment, receive whatever the Spirit gives, expect the gifts (including but not limited to tongues) to develop over time.
      <br><br>
      <strong>The Toronto Blessing</strong> (1994–) at Toronto Airport Vineyard (later Catch the Fire) introduced phenomena including "holy laughter," falling under the Spirit, and unusual physical manifestations — controversial among charismatics themselves. The phenomena were not consistently tied to tongues.
      <br><br>
      <strong>Wayne Grudem</strong>, the major Reformed continuationist theologian, has explicitly argued that the classical Pentecostal initial-evidence doctrine is not exegetically required. Grudem's view: the New Testament treats Spirit baptism as identical with conversion (1 Corinthians 12:13), but ongoing fillings (Ephesians 5:18) and the development of gifts (including tongues, prophecy, healing) are normal Christian experience.
      <br><br>
      The result: charismatics generally agree with Pentecostals on the practical reality of supernatural ministry while disagreeing with the doctrinal framework of initial evidence and a distinct ordo salutis stage of Spirit baptism.`,
        verses: ['1 Cor 12:7–11', '1 Cor 12:13', 'Eph 5:18', 'Acts 4:8', 'Acts 4:31', 'Acts 13:52', '1 Cor 14:5', 'Luke 11:13'],
      },
    ],
    keyVerses: ['Acts 1:4–5', 'Acts 1:8', 'Acts 2:1–4', 'Acts 2:38–39', 'Acts 8:14–17', 'Acts 10:44–46', 'Acts 19:1–7', '1 Cor 12:13', 'Eph 5:18', 'Titus 3:5–6', 'Rom 8:9', '1 John 4:18', 'Luke 11:13', 'Joel 2:28–29'],
    historicalNote: 'The doctrine of Spirit baptism as a distinct experience subsequent to conversion was systematised by John Wesley (entire sanctification) in the 18th century, popularised by Phoebe Palmer in the 19th-century Holiness movement, and decisively reshaped by Charles Parham (Topeka, 1901) and William Seymour (Azusa Street, 1906) into the classical Pentecostal doctrine that initial-evidence tongues accompanies the post-conversion baptism in the Spirit. The Catholic Charismatic Renewal (1967) adapted this within the sacramental framework. The contemporary "Third Wave" (Wimber/Vineyard, 1980s) generally affirms the experiential reality without requiring initial-evidence tongues. The exegesis of Acts is the perennial battleground.',
    relatedTopics: ['tongues', 'baptism', 'salvation-works'],
  },

  {
    id: 'filioque',
    name: 'The Filioque Controversy',
    icon: '☁️',
    controversy: 68,
    category: 'Holy Spirit',
    desc: 'Does the Holy Spirit proceed from the Father alone (as the original Nicene-Constantinopolitan Creed of 381 AD states), or from the Father and the Son (Filioque — as the Western Church unilaterally added to the Creed)?',
    definition: `<p>The <strong>Filioque</strong> (Latin: "and the Son") refers to the Western Church's addition of two words to the Nicene-Constantinopolitan Creed. The original Greek text (Council of Constantinople, 381 AD) confesses the Holy Spirit as the one "who proceeds from the Father" (<em>τὸ ἐκ τοῦ Πατρὸς ἐκπορευόμενον</em>). The Western Latin Church, beginning in Spain in the 6th century and eventually adopted by Rome around 1014, modified this to "who proceeds from the Father <em>and from the Son</em>" (<em>qui ex Patre Filioque procedit</em>).</p>
      <p>The Eastern Orthodox have rejected this addition on two grounds: <strong>(1) Theologically</strong>, it compromises the "monarchy of the Father" — the patristic conviction that the Father alone is the single source within the Holy Trinity. To make the Son also a source compromises the Father's unique role and risks introducing two principles within the Godhead. <strong>(2) Ecclesiologically</strong>, the addition was made unilaterally by the Western Church without an ecumenical council. The Creed of 381 AD was the work of an ecumenical council and cannot be modified by a regional synod or Pope, regardless of theological merit.</p>
      <p>The Filioque was a major cause of the Great Schism between Rome and Constantinople in 1054 — alongside disputes over papal primacy, unleavened bread in the Eucharist, and clerical celibacy. It remains today one of the central unresolved issues in Catholic-Orthodox dialogue.</p>`,
    subtopics: [
      { id: 'fi-theology', label: 'The theological question' },
      { id: 'fi-insertion', label: 'Legitimacy of the addition' },
      { id: 'fi-ecumenism', label: 'Ecumenical significance' },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'affirm',
        position: `The Latin Church has confessed the Filioque since at least the Third Council of Toledo (589 AD), where the Visigothic king Reccared, abjuring Arianism for Catholic Christianity, included it in his profession of faith. The Filioque was already present in the so-called "Athanasian Creed" (<em>Quicumque Vult</em>, probably 5th-century Gaul) which states: "The Holy Ghost is of the Father and of the Son: neither made, nor created, nor begotten, but proceeding."
      <br><br>
      Charlemagne's court theologians vigorously defended and propagated the Filioque, and Charlemagne pressed Rome to add it. Pope Leo III, while affirming the doctrine, refused to alter the Creed (illustrating the matter with two silver shields displaying the Greek and Latin texts of the Creed without the Filioque, around 810 AD). Rome eventually adopted the Filioque around 1014 under Pope Benedict VIII at the coronation of Emperor Henry II.
      <br><br>
      The Council of Florence (Bull <em>Laetentur Caeli</em>, July 6, 1439) — the last serious attempt at East-West union before modern dialogue — defined the Filioque dogmatically: "The Holy Spirit is eternally from the Father and the Son, and has his essence and his subsistent being from the Father together with the Son, and proceeds from both eternally as from one principle and a single spiration."
      <br><br>
      The Catechism of the Catholic Church §246: "The Latin tradition of the Creed confesses that the Spirit proceeds from the Father and the Son (<em>filioque</em>). The Council of Florence in 1438 explains: 'The Holy Spirit is eternally from Father and Son; He has his nature and subsistence at once (<em>simul</em>) from the Father and the Son. He proceeds eternally from both as from one principle and through one spiration.'"
      <br><br>
      The CDF document <strong>"The Father as the Source of the Whole Trinity"</strong> (Clarifications on the Filioque, 1995) offered convergent language with the East. The document emphasised: (1) the Father is the unique source of the entire Trinity; (2) the Spirit proceeds from the Father "through" the Son in the Greek tradition (Cyril of Alexandria, John of Damascus); (3) the Latin <em>procedere</em> is broader than the Greek <em>ekporeuesthai</em> — the Latin term covers both the eternal procession and the temporal mission of the Spirit. This careful philological work created space for genuine convergence without abandoning the Filioque.
      <br><br>
      The scriptural and theological case: the New Testament repeatedly describes the Spirit as "of the Son" or "of Christ" — Romans 8:9 ("the Spirit of Christ"), Galatians 4:6 (God "sent the Spirit of his Son into our hearts"), Philippians 1:19 ("the Spirit of Jesus Christ"). John 16:7 says the Son will send the Spirit to the Church. John 20:22 — the risen Christ breathes on the disciples saying "receive the Holy Spirit."
      <br><br>
      The Latin argument: these texts show the Spirit's intimate relation to the Son in the economy of salvation; the economic Trinity reveals the immanent Trinity (Karl Rahner's "Rahner's Rule"). What is true of the missions is true of the processions. Therefore the Spirit must eternally proceed from the Son as well as from the Father, even if the Father remains the primary source.
      <br><br>
      Major Catholic theologians of the Filioque: Augustine (<em>De Trinitate</em>, especially Books V–VII, c. 400–419 AD) is the foundational Western source. Anselm's <em>De processione Spiritus Sancti</em> (1102). Thomas Aquinas's <em>Summa Theologiae</em> I, Q. 36. Hans Urs von Balthasar's trinitarian theology.`,
        verses: ['John 14:26', 'John 15:26', 'John 16:7', 'John 20:22', 'Rom 8:9', 'Gal 4:6', 'Phil 1:19', 'Acts 16:7'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'deny',
        position: `The Filioque is the primary theological cause of the Great Schism between Rome and Constantinople, and it remains the central unresolved doctrinal issue in Catholic-Orthodox dialogue. The Orthodox position has both theological and ecclesiological dimensions.
      <br><br>
      <strong>Theologically</strong>, the Orthodox argue that the Filioque compromises the <em>monarchy of the Father</em> — the patristic conviction that the Father is the unique source (<em>arche</em>, <em>aitia</em>) within the Holy Trinity. In the patristic tradition, the Father generates the Son and breathes forth the Spirit; these are the two eternal acts that distinguish the three Persons. The Father alone is the source; the Son and Spirit are eternally from the Father. To make the Son also a source of the Spirit is to introduce two principles within the Godhead, which threatens the unity of the divine essence.
      <br><br>
      Crucially, the Greek verb in the Creed — <em>ekporeuesthai</em> (ἐκπορεύεσθαι) — has a technical theological meaning in patristic usage: <em>to come forth as from the original source</em>. The Latin <em>procedere</em> has a broader meaning that can cover both "to come forth from the source" and "to be sent" or "to flow through." The Greeks accept that the Spirit "comes through the Son" (<em>dia tou Hyiou</em>) in the economy of salvation, but reject that the Spirit "comes forth from the Son as from a principle" in the immanent Trinity.
      <br><br>
      <strong>Patriarch Photius the Great's <em>Mystagogy of the Holy Spirit</em></strong> (867 AD) is the first systematic Eastern refutation of the Filioque. Photius marshalled the patristic witness, the conciliar tradition, and the philological precision of <em>ekporeuesthai</em> against the Latin position. The Photian Schism (863–67) was the first major rupture over the Filioque.
      <br><br>
      <strong>Gregory Palamas</strong> (14th century) developed the Orthodox response within his essence/energies framework. The Spirit's eternal procession from the Father alone establishes the immanent Trinity; the Spirit's temporal sending "through the Son" (which Palamas affirmed) belongs to the divine energies / economy.
      <br><br>
      <strong>Vladimir Lossky</strong>'s <em>The Mystical Theology of the Eastern Church</em> (1944) is the foundational 20th-century Orthodox statement. Lossky argued that the Filioque inevitably leads to a depersonalised view of the Spirit, subordinates the Spirit to the Son in Western theology, and grounds the distortions of Latin theology — from papal authority (which assumes that the Spirit can be controlled and channelled through the Petrine office) to scholastic juridicalism (which substitutes legal logic for the mystical knowledge of God).
      <br><br>
      <strong>Ecclesiologically</strong>, the Orthodox emphasise that the Creed of 381 AD was the work of an Ecumenical Council. It was meant to settle, in conciliar fashion, the trinitarian and pneumatological questions of the day. To modify the Creed requires another Ecumenical Council. The Frankish churches' insertion of the Filioque, even with the eventual concurrence of Rome, was made by a regional synod and unilateral papal decision — not by ecumenical conciliar process. Even if the theology were correct (which Orthodox deny), the procedure was illegitimate.
      <br><br>
      The 1054 mutual anathemas were lifted by Paul VI and Patriarch Athenagoras I on December 7, 1965 — but this was a "lifting of memories" of mutual offence, not a resolution of the underlying theological dispute. The North American Orthodox-Catholic Consultation produced "The Filioque: A Church-Dividing Issue?" (2003), an Agreed Statement that mapped the convergences and remaining differences. The official theological dialogue continues.`,
        verses: ['John 15:26', 'John 14:26', 'John 14:16', 'John 16:13–15', '1 Cor 2:10–12', 'John 7:39', 'Acts 2:33'],
      },
      {
        name: 'Anglican / Episcopal',
        stance: 'nuanced',
        position: `Anglican theology has historically affirmed the Filioque liturgically (the Nicene Creed in the Book of Common Prayer includes it) but has shown increasing scholarly and ecumenical hesitation in modern times.
      <br><br>
      The Lambeth Conference 1978, Resolution 35, recommended that "the Filioque clause be omitted from the version of the Nicene Creed used liturgically in Anglican churches." This recommendation followed the Faith and Order Commission of the World Council of Churches' study and reflected Anglican-Orthodox dialogue. The 1988 Lambeth Conference reaffirmed the recommendation.
      <br><br>
      The Episcopal Church (USA)'s General Convention in 1994 accepted the Lambeth recommendation in principle, with a view to eventually removing the Filioque from American liturgical use. However, the implementation has been slow; most Episcopal congregations continue to use the Filioque-containing Creed in worship.
      <br><br>
      The Church of England's General Synod has periodically discussed but not yet acted to remove the Filioque from English liturgy. Most Anglican churches worldwide continue to use the Filioque.
      <br><br>
      The Anglican theological argument has multiple strands. <strong>(1)</strong> The Filioque has been part of the Western Christian tradition for over a millennium and was received in good faith by the Western Church; it should not be lightly discarded. <strong>(2)</strong> The ecclesiological argument — that the Creed should not have been modified by a regional synod — has force; modern Anglicans are increasingly sympathetic to the Orthodox conciliar argument. <strong>(3)</strong> The theological argument for the Filioque has merit but has often been overstated in Western theology; the Greek tradition's "through the Son" formulation can be received as substantially equivalent.
      <br><br>
      The Anglican-Orthodox Joint Theological Doctrinal Discussions have produced major statements on this issue — most recently <em>The Church of the Triune God</em> (Cyprus Statement, 2006), which mapped substantial agreement on trinitarian theology while leaving the Filioque question open.`,
        verses: ['John 15:26', 'John 14:26', 'John 16:7', 'John 16:13–15', 'Rom 8:9', 'Gal 4:6'],
      },
      {
        name: 'Lutheran',
        stance: 'affirm',
        position: `Lutheran theology affirms the Filioque without significant controversy. The Augsburg Confession (1530), Article I ("Of God"), affirms the Nicene Creed with the Filioque as a settled element of orthodox Trinitarianism: "Our Churches, with common consent, do teach that the decree of the Council of Nicaea concerning the Unity of the Divine Essence and concerning the Three Persons, is true and to be believed without any doubting."
      <br><br>
      The Formula of Concord (1577), Epitome, opens by affirming all three Ecumenical Creeds (Apostles', Nicene, Athanasian) — the Nicene with the Filioque included. Lutheran trinitarian theology has been thoroughly Augustinian and Western in its development, with no significant internal questioning of the Filioque.
      <br><br>
      Luther's own trinitarian theology was developed within Western Augustinian categories. Major Lutheran systematic treatments — Johann Gerhard's <em>Loci Theologici</em> (1610–22), the Lutheran orthodox dogmaticians of the 17th century, modern figures like Werner Elert and Robert Jenson — all affirm the Filioque.
      <br><br>
      However, contemporary Lutheran-Orthodox dialogue has produced more nuanced reflection. Some Lutheran theologians acknowledge: (1) the Filioque was inserted unilaterally without an ecumenical council; (2) the Greek "through the Son" formulation may be substantially equivalent and ecumenically preferable; (3) Lutherans, having no doctrinal investment in papal authority, can be more flexible on whether the Filioque should be retained in the Creed than Catholics can.
      <br><br>
      The Joint Statement of the Lutheran-Orthodox Joint Commission has discussed the Filioque without producing a definitive resolution. The practical Lutheran position: affirm the theological content of the Filioque while remaining open to ecumenical reflection on the ecclesiological question of how it was inserted.`,
        verses: ['John 14:26', 'John 15:26', 'John 16:7', 'Rom 8:9', 'Gal 4:6', 'John 20:22'],
      },
      {
        name: 'Reformed / Presbyterian',
        stance: 'affirm',
        position: `The Reformed tradition affirms the Filioque, following the Western Augustinian theological inheritance. Calvin's <em>Institutes</em> (1559), Book I, Chapter 13, develops a fully Western trinitarian theology with the Filioque presupposed. Calvin treats the Filioque controversy briefly, noting the Greek objections but affirming the Latin tradition.
      <br><br>
      The Westminster Confession (1646), Chapter II §3: "In the unity of the Godhead there be three persons, of one substance, power, and eternity: God the Father, God the Son, and God the Holy Ghost. The Father is of none, neither begotten nor proceeding; the Son is eternally begotten of the Father; the Holy Ghost eternally proceeding from the Father and the Son."
      <br><br>
      The Westminster Larger Catechism, Q. 9–11, develops this in catechetical form. The Reformed scholastic tradition (Francis Turretin, Herman Witsius, the Synopsis Purioris Theologiae) all affirm the Filioque.
      <br><br>
      The Reformed argument: the Western theological tradition, going back to Augustine and developed through Aquinas, has internal coherence and biblical support. The Spirit is described in the New Testament as "the Spirit of the Son" (Galatians 4:6) and "the Spirit of Christ" (Romans 8:9). The economic missions of the Son and Spirit are inseparable; the Son sends the Spirit (John 15:26; 16:7). What is true of the missions is true of the eternal processions.
      <br><br>
      Some recent Reformed theology has been more sympathetic to Orthodox concerns. <strong>Bruce McCormack</strong> at Princeton, <strong>Philip Cary</strong>, <strong>Khaled Anatolios</strong>, and the broader engagement of Reformed theology with patristic studies has produced more historically nuanced assessments. But the Reformed mainstream remains firmly in the Western Filioque tradition.
      <br><br>
      Reformed theology, having no investment in defending unilateral papal modifications of conciliar texts, can theoretically be more open than Catholics to revisiting the ecclesiological argument about how the Filioque was inserted. In practice, however, the Reformed churches have not seriously considered modifying the Creed.`,
        verses: ['John 14:26', 'John 15:26', 'John 16:7', 'Rom 8:9', 'Gal 4:6', '1 Cor 2:10–12', 'Acts 2:33'],
      },
      {
        name: 'Old Catholic',
        stance: 'deny',
        position: `Old Catholic Churches — those who rejected Vatican I's definition of papal infallibility in 1870 and formed an independent communion — have generally moved toward the Orthodox position on the Filioque, removing it from the Creed in their liturgy.
      <br><br>
      The Bonn Conferences of 1874 and 1875, organised by Old Catholic theologian Ignaz von Döllinger, brought together Old Catholic, Anglican, and Orthodox theologians to discuss reunion. The Filioque was a major topic. Döllinger and his Old Catholic colleagues acknowledged the patristic and conciliar weight of the Orthodox argument.
      <br><br>
      The Old Catholic-Orthodox Joint Theological Commission produced <strong>The Agreed Statement on the Filioque</strong> (1979), which recommended that both communions affirm the procession of the Holy Spirit from the Father alone, in accordance with the original Constantinopolitan Creed of 381 AD. The Old Catholic Churches subsequently removed the Filioque from their liturgical recitation of the Creed.
      <br><br>
      Old Catholic ecclesiology, rooted in patristic conciliarism and the undivided Church of the first millennium, holds that the Filioque was illegitimately inserted by Western regional councils and unilateral papal decision, without an Ecumenical Council. Even setting aside the theological question, the procedural objection is decisive.
      <br><br>
      The Bonn Agreement (1931) established full communion between the Old Catholic Churches and the Anglican Communion. The Old Catholic position on the Filioque has influenced Anglican theological reflection (contributing to the 1978 Lambeth recommendation).
      <br><br>
      The major Old Catholic theologians on this question: Ignaz von Döllinger (1799–1890), Eduard Herzog (1841–1924), Urs Küry (1901–76), and contemporary theologian Urs von Arx.`,
        verses: ['John 15:26', 'John 14:26', 'John 16:13–15', '1 Cor 2:10–12'],
      },
    ],
    keyVerses: ['John 15:26', 'John 14:26', 'John 16:7–15', 'Rom 8:9', 'Gal 4:6', 'John 20:22', 'Phil 1:19', '1 Pet 1:11'],
    historicalNote: 'The Filioque was inserted into the Creed by Frankish churches around 589 AD (Third Council of Toledo) and spread under Carolingian influence. Pope Leo III refused Charlemagne\'s request to adopt it around 810 AD, displaying two silver shields with the original Greek and Latin texts of the Creed without the Filioque. Rome eventually adopted it under Benedict VIII in 1014. The Photian Schism (863–67) was the first major rupture; the Great Schism of 1054, marked by the mutual excommunications between Cardinal Humbert of Silva Candida (papal legate) and Patriarch Michael Cerularius of Constantinople, centred substantially on this dispute. The Council of Florence (1438–45) attempted reunion but failed lastingly. The mutual anathemas of 1054 were ceremonially lifted on December 7, 1965 by Pope Paul VI and Ecumenical Patriarch Athenagoras I — a gesture of goodwill that did not resolve the underlying theological dispute, which remains the central unresolved doctrinal issue in Catholic-Orthodox dialogue.',
    relatedTopics: ['papacy', 'sola-scriptura', 'tongues'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  LAST THINGS                                              ║
  // ╚══════════════════════════════════════════════════════════╝

  {
    id: 'hell',
    name: 'Hell: Eternal Punishment, Annihilationism & Universalism',
    icon: '🔦',
    controversy: 89,
    category: 'Last Things',
    desc: 'Is hell a place of eternal conscious torment (ECT)? Or do the finally impenitent simply cease to exist — annihilationism / conditional immortality? Or could all rational creatures ultimately be reconciled to God — apokatastasis / universalism? And what is purgatory?',
    definition: `<p>The doctrine of <strong>hell</strong> is the Christian teaching that some humans will be eternally separated from God after death. The three main positions in contemporary debate are:</p>
      <p><strong>(1) Eternal Conscious Torment (ECT)</strong> — the historic majority view, held by Catholics, Orthodox, Lutherans, the Reformed tradition, and most evangelicals: the finally impenitent suffer conscious punishment for ever and ever, never ceasing to exist. The proof-texts: "eternal punishment" (Matthew 25:46), "eternal fire" (Matthew 25:41), "the smoke of their torment goes up forever and ever" (Revelation 14:11).</p>
      <p><strong>(2) Annihilationism / Conditional Immortality</strong> — held by a growing minority of evangelicals (John Stott, Edward Fudge, John Stackhouse): only those granted eternal life by Christ are immortal; the finally impenitent are destroyed in "the second death" (Revelation 20:14) and cease to exist. "Eternal punishment" refers to the irreversible punishment of destruction, not eternal duration of suffering.</p>
      <p><strong>(3) Universalism / Apokatastasis</strong> — historically held by Origen (condemned at Constantinople II, 553 AD), revived in modern theology by Karl Barth (qualified), Robin Parry, David Bentley Hart: all rational creatures, including the unrepentant and even the demons, will ultimately be reconciled to God. Hell, if it exists, is purgative and finite — not eternal.</p>
      <p>The Catholic Church also teaches <strong>purgatory</strong> — a state of purification after death for the elect who die in friendship with God but are not yet perfected. Protestants universally reject purgatory.</p>`,
    subtopics: [
      { id: 'hl-ect', label: 'Eternal conscious torment' },
      { id: 'hl-anni', label: 'Annihilationism' },
      { id: 'hl-univ', label: 'Universalism / apokatastasis' },
      { id: 'hl-purgatory', label: 'Purgatory' },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'affirm',
        position: `The Catholic Church affirms eternal conscious torment as definitive Catholic teaching, along with the doctrine of purgatory for those who die in grace but require purification before the beatific vision.
      <br><br>
      The Fourth Lateran Council (1215) and the Council of Florence (<em>Laetentur Caeli</em>, 1439) define hell as eternal punishment for the damned. The Catechism of the Catholic Church §1035: "The teaching of the Church affirms the existence of hell and its eternity. Immediately after death the souls of those who die in a state of mortal sin descend into hell, where they suffer the punishments of hell, 'eternal fire.' The chief punishment of hell is eternal separation from God, in whom alone man can possess the life and happiness for which he was created and for which he longs."
      <br><br>
      <strong>Purgatory</strong> is defined for those who die in God's friendship but are imperfectly purified. CCC §§1030–1032: "All who die in God's grace and friendship, but still imperfectly purified, are indeed assured of their eternal salvation; but after death they undergo purification, so as to achieve the holiness necessary to enter the joy of heaven." This was defined dogmatically against Protestant denial at the Council of Trent (Session XXV, December 4, 1563): "There is a purgatory, and the souls there detained are helped by the suffrages of the faithful, but principally by the acceptable sacrifice of the altar."
      <br><br>
      The Catholic doctrine of purgatory rests on 2 Maccabees 12:42–46 (prayer for the dead), 1 Corinthians 3:13–15 (the day will disclose each one's work; "if anyone's work is burned up, he will suffer loss, though he himself will be saved, but only as through fire"), Matthew 12:32 (sin against the Spirit "will not be forgiven, either in this age or in the age to come" — implying that some sins may be forgiven in the age to come), and the patristic and conciliar tradition of prayer for the dead.
      <br><br>
      <strong>Hans Urs von Balthasar's <em>Dare We Hope "That All Men Be Saved"?</em></strong> (1986) argued that Catholics may "hope" — not "assert" — that all may be saved. Balthasar drew on the Holy Saturday liturgy and on Adrienne von Speyr's mystical theology. The book was sharply criticised by some Catholic theologians (notably Avery Dulles and Ralph Martin) for moving too close to universalism. Balthasar himself insisted that he was articulating <em>hope</em>, not certainty, and that the Catechism's clear teaching on the reality of hell must be maintained.
      <br><br>
      Catholic theology distinguishes between the <em>poena damni</em> (the pain of loss — eternal separation from God, the deprivation of the beatific vision) and the <em>poena sensus</em> (the pain of sense — the actual sensible punishments described in Scripture). Some modern Catholic theology has emphasised the pain of loss as the essential punishment, downplaying lurid medieval imagery of physical torment.`,
        verses: ['Matt 25:31–46', 'Matt 13:41–43', 'Mark 9:43–48', 'Luke 16:19–31', 'Rev 14:9–11', 'Rev 20:10–15', 'Rev 21:8', '2 Thess 1:8–9', '2 Macc 12:42–46', '1 Cor 3:13–15'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'affirm',
        position: `Orthodoxy affirms eternal separation from God for the unrepentant. But the Orthodox understanding of hell differs in important respects from the typical Latin / Reformed picture.
      <br><br>
      The dominant Orthodox theological reflection — drawing on Isaac the Syrian (7th century), Maximus the Confessor (580–662), and modern theologians like Vladimir Lossky and Kallistos Ware — describes hell not primarily as a place of physical torment but as the experience of God's love as consuming fire for those who reject it.
      <br><br>
      Isaac the Syrian's vision: "Those who are scourged in hell are scourged by the scourge of love. Nay, what is so bitter and vehement as the torment of love?... The power of love works in two ways: it torments sinners... while at the same time it delights those who have lived in accord with it."
      <br><br>
      The same divine love that is the joy of heaven is the suffering of hell. Heaven is not a different reality from hell; it is the same reality (the eternal presence of God) experienced by transformed and untransformed creatures differently. Those who have been deified, who have become "partakers of the divine nature" (2 Peter 1:4) through the synergy of grace and free will, find God's presence as beatitude. Those who have refused this transformation experience the same divine presence as fire.
      <br><br>
      <strong>Purgatory</strong> in the Catholic sense — a defined place or state with calculated duration of purification — does not exist in Orthodox theology. But prayer for the departed is universal in Orthodox worship: Saturdays of the Departed (special memorial days throughout the church year), Radonitsa (the second week after Pascha), and the daily commemoration of the departed in the Divine Liturgy. Orthodox prayer for the dead implies that the state of departed souls is not entirely fixed at death — there is some kind of ongoing post-mortem development that prayer may affect.
      <br><br>
      <strong>Origen's <em>apokatastasis</em></strong> (universal restoration, in which all rational creatures — including Satan and the demons — would ultimately be reconciled to God) was condemned at the Fifth Ecumenical Council (Constantinople II, 553 AD). This condemnation is binding for Orthodoxy.
      <br><br>
      However, the hope (not the assertion) that all may be saved has had distinguished Orthodox advocates. <strong>Sergei Bulgakov</strong> (1871–1944), the great Russian Orthodox theologian, defended a qualified universalism in his Dogmatic Trilogy and in <em>The Bride of the Lamb</em> (1945). <strong>Metropolitan Kallistos Ware</strong> in <em>The Inner Kingdom</em> (2000), Chapter 12 ("Dare We Hope for the Salvation of All?"), argued for a "reasonable hope" that the eternal love of God may ultimately win over even those who currently refuse it. Ware did not assert universalism but insisted that Orthodox spirituality leaves room for hope.
      <br><br>
      The Orthodox Church has not formally addressed contemporary universalist arguments in the way Catholic and Protestant bodies have. The Orthodox temperament resists systematic resolution of eschatological questions in favour of liturgical participation in the mystery.`,
        verses: ['Matt 25:31–46', 'Mark 9:43–48', 'Rev 20:10–15', '2 Cor 5:10', 'Heb 12:29', 'Mal 3:2', '1 Cor 3:13–15', '1 Tim 4:10'],
      },
      {
        name: 'Lutheran',
        stance: 'affirm',
        position: `Lutheran confessional theology affirms eternal conscious torment without qualification. The Augsburg Confession (1530), Article XVII ("Of Christ's Return to Judgement"): "Christ shall come at the consummation of the world for judgement, and shall raise up all the dead; He shall give unto the godly and elect eternal life and everlasting joys, but ungodly men and the devils shall He condemn unto endless torments. They condemn the Anabaptists, who think that there shall be an end of the punishments of condemned men and devils."
      <br><br>
      Note the explicit confessional rejection of any form of universalism or annihilationism. The Augsburg Confession was here primarily targeting certain radical reformers, but the Lutheran confessional position has remained firmly in the ECT tradition throughout its history.
      <br><br>
      The Formula of Concord (1577), Article XII, addresses various sectarian errors including those of "false-spirited Anabaptists who teach that the souls of the elect immediately depart to heaven, but the souls of the damned immediately to hell" — affirming both the immediate post-mortem fate of the damned and the eternal duration of their punishment.
      <br><br>
      <strong>Purgatory is firmly rejected.</strong> The Apology of the Augsburg Confession (1531), Article XXIV, attacks the Mass for the dead as an unbiblical practice that supports the false doctrine of purgatory. The Smalcald Articles (1537), Part II, Article II ("Of the Mass"), give Luther's polemical critique: "Purgatory, and every solemnity, rite, and commerce connected with it, is to be regarded as nothing but a specter of the devil. For it conflicts with the chief article [of justification by faith alone]."
      <br><br>
      Lutheran theology insists that Christ's atoning death is complete and sufficient: there is no need for any post-mortem purification or punishment of the saved. The believer is immediately and fully justified by faith; nothing remains to be paid or purified. To affirm purgatory is to deny the sufficiency of the cross.
      <br><br>
      For Luther personally, the doctrine of hell was inseparable from the urgency of the gospel proclamation. <em>The law's threat of eternal condemnation</em> drives sinners to the gospel's offer of free justification. To soften the doctrine of hell is to undermine the gospel's urgency.
      <br><br>
      Modern Lutheran theology has occasionally produced more nuanced reflections (Wolfhart Pannenberg's discussion of judgement and reconciliation; the work of various ELCA theologians), but the confessional Lutheran bodies (LCMS, WELS, ELS) maintain the historic position firmly.`,
        verses: ['Matt 25:41', 'Matt 25:46', 'Mark 9:43–48', 'Luke 16:19–31', '2 Thess 1:6–9', 'Rev 14:9–11', 'Rev 20:10', 'Rev 20:14–15', 'Dan 12:2'],
      },
      {
        name: 'Reformed / Presbyterian',
        stance: 'affirm',
        position: `The Reformed tradition has historically been the most rigorous and uncompromising defender of eternal conscious torment in Protestant theology. The Westminster Confession (1646), Chapter XXXIII §2, gives the definitive Reformed statement on the last judgement:
      <br><br>
      "The end of God's appointing this day [the day of judgement] is for the manifestation of the glory of His mercy, in the eternal salvation of the elect; and of His justice, in the damnation of the reprobate, who are wicked and disobedient. For then shall the righteous go into everlasting life, and receive that fullness of joy and refreshing which shall come from the presence of the Lord; but the wicked, who know not God, and obey not the gospel of Jesus Christ, shall be cast into eternal torments, and punished with everlasting destruction from the presence of the Lord, and from the glory of His power."
      <br><br>
      The Westminster Larger Catechism, Question 29 ("What are the punishments of sin in the world to come?"): "The punishments of sin in the world to come are everlasting separation from the comfortable presence of God, and most grievous torments in soul and body, without intermission, in hell-fire forever."
      <br><br>
      The Reformed defence of ECT has been articulated by all the major systematic theologians: Calvin's <em>Institutes</em> (III.25.12), Francis Turretin's <em>Institutes of Elenctic Theology</em> (Topic XX), Jonathan Edwards's many sermons on hell (especially "The Eternity of Hell Torments," 1739, and the notorious "Sinners in the Hands of an Angry God," 1741), Charles Hodge's <em>Systematic Theology</em> (1872), W.G.T. Shedd's <em>The Doctrine of Endless Punishment</em> (1885), and John Gerstner's <em>Repent or Perish</em> (1990).
      <br><br>
      The exegetical case rests on the symmetry of "eternal" (<em>aiōnios</em>) in Matthew 25:46: "And these will go away into eternal punishment, but the righteous into eternal life." The same Greek word describes both destinies; the duration of punishment is the same as the duration of life. Annihilation would mean "eternal life" likewise means "eventual permanent extinction," which is exegetically untenable.
      <br><br>
      Revelation 14:10–11: "He also shall drink the wine of God's wrath... and he will be tormented with fire and sulfur in the presence of the holy angels and in the presence of the Lamb. And the smoke of their torment goes up forever and ever (<em>eis aiōnas aiōnōn</em>), and they have no rest, day or night." Revelation 20:10: "And the devil who had deceived them was thrown into the lake of fire and sulfur where the beast and the false prophet were, and they will be tormented day and night forever and ever."
      <br><br>
      Mark 9:48 (citing Isaiah 66:24): "where their worm does not die and the fire is not quenched" — used by Christ to describe Gehenna.
      <br><br>
      Reformed theology rejects purgatory firmly. Westminster Confession Chapter XXXII §1: "The bodies of men, after death, return to dust, and see corruption; but their souls, which neither die nor sleep, having an immortal subsistence, immediately return to God who gave them: the souls of the righteous, being then made perfect in holiness, are received into the highest heavens... and the souls of the wicked are cast into hell." There is no intermediate state of purification.
      <br><br>
      Contemporary Reformed scholarship maintaining ECT: <strong>Robert Peterson's <em>Hell on Trial</em></strong> (1995); <strong>Christopher Morgan and Robert Peterson's edited volume <em>Hell Under Fire</em></strong> (2004), responding to evangelical annihilationism; <strong>R.C. Sproul's <em>The Holiness of God</em></strong> (1985), Chapter 8.`,
        verses: ['Matt 25:41–46', 'Matt 13:41–43', 'Mark 9:43–48', 'Luke 16:19–31', 'John 5:28–29', '2 Thess 1:6–9', 'Rev 14:9–11', 'Rev 20:10', 'Rev 20:14–15', 'Dan 12:2'],
      },
      {
        name: 'Evangelical Annihilationist',
        stance: 'nuanced',
        position: `Annihilationism (also called <strong>conditional immortality</strong>) is the doctrine that only those granted eternal life by Christ are immortal. The finally impenitent are ultimately destroyed — their existence is ended — in the "second death" (Revelation 20:14). This is not eternal conscious suffering; it is conscious punishment followed by extinction.
      <br><br>
      The view has ancient roots (some early Church fathers like Arnobius held something like it; the Seventh-Day Adventists and Jehovah's Witnesses have held annihilationist views for over a century). But its emergence in mainstream evangelicalism is a recent phenomenon.
      <br><br>
      <strong>John R.W. Stott</strong>'s tentative endorsement in <em>Essentials: A Liberal-Evangelical Dialogue</em> (1988, co-authored with David Edwards) was the watershed event that brought annihilationism into mainstream evangelical discussion. Stott wrote (pp. 314–20): "I do not dogmatise about the position to which I have come. I hold it tentatively. But I do plead for frank dialogue among evangelicals on the basis of Scripture." Stott was one of the most respected evangelical leaders in the world; his tentative annihilationism could not be dismissed as theological liberalism.
      <br><br>
      <strong>Edward Fudge's <em>The Fire That Consumes: A Biblical and Historical Study of the Doctrine of Final Punishment</em></strong> (1982, 2nd ed. 1994, 3rd ed. with completely revised exegesis 2011) is the most thorough exegetical defence of annihilationism. Fudge surveys the biblical language of judgement and argues that the consistent biblical image is one of destruction (Greek <em>apōleia</em>, the consummation of the wicked) rather than eternal preservation in conscious suffering.
      <br><br>
      Other significant evangelical annihilationists: <strong>Clark Pinnock</strong> (especially <em>Four Views on Hell</em>, 1996, edited by William Crockett — Pinnock contributed the annihilationist chapter); <strong>John W. Wenham</strong> (his last book <em>Facing Hell</em>, 1998, gave his quiet lifelong annihilationism a published voice); <strong>Philip Edgcumbe Hughes</strong> (in his commentary on Hebrews and his <em>The True Image</em>); <strong>John Stackhouse</strong>; <strong>Greg Boyd</strong>; <strong>Glenn Peoples</strong>.
      <br><br>
      The collected volume <strong>Christopher Date, Gregory Stump, and Joshua Anderson's <em>Rethinking Hell</em></strong> (2014) is the most recent substantial collection making the case for "evangelical conditionalism" — the preferred term among many of its advocates.
      <br><br>
      The exegetical case has several layers:
      <br><br>
      <strong>(1)</strong> Biblical language consistently uses "destruction" (<em>apōleia</em>), "perish" (<em>apollumi</em>), "consume" (<em>katanaliskō</em>), and similar terms for the fate of the wicked. Matthew 10:28: "Fear him who can destroy (<em>apolesai</em>) both soul and body in hell." Matthew 7:13: the broad way that leads to "destruction" (<em>apōleian</em>). 2 Thessalonians 1:9: "everlasting destruction." 2 Peter 3:7: the wicked are reserved for the "destruction of the ungodly." Hebrews 10:39: those who shrink back are "destroyed."
      <br><br>
      <strong>(2)</strong> Conditional immortality: Romans 6:23 — "the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord." Eternal life is a gift given through Christ; without Christ, only death awaits. 1 Timothy 6:16 — God "alone has immortality." Humans are not naturally immortal; immortality is a divine gift to the redeemed (2 Timothy 1:10 — Christ "abolished death and brought life and immortality to light through the gospel").
      <br><br>
      <strong>(3)</strong> The "fire" imagery in Scripture is consuming fire, not preserving fire. Isaiah 66:24 (cited in Mark 9:48): the wicked are consumed by fire that is not quenched (until its work is done). Malachi 4:1: "the day is coming, burning like an oven, when all the arrogant and all evildoers will be stubble. The day that is coming shall set them ablaze, says the Lord of hosts, so that it will leave them neither root nor branch." This is destruction, not preservation in conscious torment.
      <br><br>
      <strong>(4)</strong> "Eternal punishment" (Matthew 25:46) means the punishment is irrevocable — it is the punishment <em>of the age to come</em> — not necessarily eternal duration of suffering. The punishment of destruction is eternal in its consequences.
      <br><br>
      <strong>(5)</strong> The moral argument: ECT presents God as inflicting infinite suffering on finite creatures for finite sins, which strains the relationship between God's justice and his love. Annihilationism preserves the seriousness of judgement (eternal loss, eternal exclusion from God) without requiring eternal active torment.
      <br><br>
      The position has been growing significantly among younger evangelical scholars and pastors. The major evangelical responses defending ECT (Morgan and Peterson's <em>Hell Under Fire</em>; D.A. Carson's various writings) acknowledge that annihilationism cannot be dismissed without serious exegetical engagement.`,
        verses: ['Matt 10:28', 'Matt 7:13', '2 Thess 1:9', '2 Pet 3:7', 'Heb 10:39', 'Rom 6:23', '1 Tim 6:16', '2 Tim 1:10', 'Mal 4:1–3', 'Rev 20:14', 'John 3:16'],
      },
      {
        name: 'Christian Universalist',
        stance: 'deny',
        position: `Christian universalism (also called <em>apokatastasis</em> — universal restoration) is the doctrine that all rational creatures will ultimately be reconciled to God. Hell, if it exists, is purgative and finite; eventually, every creature including the demons and the most hardened human sinners will be saved.
      <br><br>
      The view has ancient roots. <strong>Origen</strong> (c. 184–253) developed it most fully in <em>On First Principles</em> (c. 220 AD), though some scholars argue Origen taught the possibility rather than the certainty of universal restoration. <strong>Gregory of Nyssa</strong> (c. 335–395), the great Cappadocian father, taught a clear apokatastasis in <em>On the Soul and the Resurrection</em> and <em>The Great Catechism</em> — and Gregory was not condemned. <strong>Isaac the Syrian</strong> (7th century) expressed universalist hopes.
      <br><br>
      Origen's apokatastasis was condemned at the Fifth Ecumenical Council (Constantinople II, 553 AD) — though scholars debate whether the condemnation targeted Origen's broader system (preexistent souls, etc.) or specifically his universalism. Either way, universalism has been officially heretical in Catholic and Orthodox dogma for fifteen centuries.
      <br><br>
      The doctrine has been revived in modern theology. <strong>Karl Barth's <em>Church Dogmatics</em></strong> II/2 (1942) developed a Christological doctrine of election in which Jesus Christ is both the elect human (for all humans) and the reprobate human (suffering damnation for all humans). The logical conclusion seems to be universal salvation — though Barth refused to draw it formally, insisting on the freedom of God and the seriousness of the offer of the gospel.
      <br><br>
      <strong>Thomas Talbott's <em>The Inescapable Love of God</em></strong> (1999) gave a philosophically rigorous evangelical case for universalism. Talbott argues that the traditional doctrine of hell is logically incoherent: an infinitely loving and omnipotent God who eternally damns creatures contradicts both attributes. Either God's love or God's power must be limited, or universalism must be true.
      <br><br>
      <strong>Robin Parry's <em>The Evangelical Universalist</em></strong> (2006, originally published under the pseudonym "Gregory MacDonald" — combining Gregory of Nyssa and George MacDonald) made the evangelical exegetical case. Parry argues that the universalist proof-texts (1 Corinthians 15:22; Romans 5:18; Romans 11:32; 1 Timothy 2:4; 2 Peter 3:9; 1 Timothy 4:10) outweigh and contextualise the hell texts. Parry came out from behind the pseudonym in subsequent editions and has continued to defend the position.
      <br><br>
      <strong>David Bentley Hart's <em>That All Shall Be Saved</em></strong> (2019) is the most aggressive recent universalist statement. Hart — an Eastern Orthodox theologian, translator of the New Testament, prolific essayist — argues that universalism is the only intellectually honest reading of the New Testament and that the traditional doctrine of hell is morally monstrous and philosophically incoherent. Hart's preface declares: "I am convinced that the doctrine of eternal hell is a moral, philosophical, and biblical absurdity, and that it should be denounced as such."
      <br><br>
      <strong>Rob Bell's <em>Love Wins</em></strong> (2011) brought the universalist question into mainstream evangelical conversation in a way no scholarly work had done. Bell is not a systematic universalist, but his book asked the question — "could a loving God send people to eternal hell?" — in a way that millions of evangelicals were forced to wrestle with. The reaction was fierce: John Piper's "Farewell Rob Bell" tweet; Justin Taylor's review at the Gospel Coalition; the church's removal of Bell from major evangelical platforms. The episode marked a watershed in evangelical conversation about hell.
      <br><br>
      The universalist exegetical case rests on several texts:
      <br><br>
      <strong>1 Corinthians 15:22:</strong> "For as in Adam all die, so also in Christ shall all be made alive." The "all" in both clauses must refer to the same scope; if "in Adam all die" means every human dies, then "in Christ all shall be made alive" means every human will be raised to life — and ultimately saved.
      <br><br>
      <strong>Romans 5:18:</strong> "As one trespass led to condemnation for all men, so one act of righteousness leads to justification and life for all men."
      <br><br>
      <strong>Romans 11:32:</strong> "For God has consigned all to disobedience, that he may have mercy on all."
      <br><br>
      <strong>1 Timothy 2:4:</strong> God "desires all people to be saved and to come to the knowledge of the truth."
      <br><br>
      <strong>2 Peter 3:9:</strong> God is "not wishing that any should perish, but that all should reach repentance."
      <br><br>
      <strong>Philippians 2:10–11:</strong> "at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord."
      <br><br>
      <strong>Colossians 1:19–20:</strong> "For in him all the fullness of God was pleased to dwell, and through him to reconcile to himself all things, whether on earth or in heaven, making peace by the blood of his cross."
      <br><br>
      The universalist argument: if these passages are taken at face value, they teach universal salvation. The "hell" passages must be reinterpreted — either as purgative (finite suffering followed by restoration), as referring to this-worldly judgement, or as apocalyptic imagery not meant to be taken literally.
      <br><br>
      Most evangelical and Catholic bodies regard full universalism as incompatible with orthodox Christianity. The ETS debated whether universalists can retain membership. Hart's <em>That All Shall Be Saved</em> generated extensive critical engagement, including Michael McClymond's <em>The Devil's Redemption</em> (2018, two volumes) — the most thorough recent critical treatment.`,
        verses: ['1 Cor 15:22', '1 Cor 15:28', 'Rom 5:18', 'Rom 11:32', '1 Tim 2:4', '1 Tim 4:10', '2 Pet 3:9', 'Phil 2:10–11', 'Col 1:19–20', 'Eph 1:9–10', 'John 12:32', 'Lam 3:31–33', 'Rev 21:4'],
      },
      {
        name: 'Methodist / Wesleyan',
        stance: 'affirm',
        position: `John Wesley's "Of Hell" (Sermon 73, 1782) affirms eternal conscious torment without reservation. Wesley accepted the traditional doctrine and preached it, though his preaching focused far more on grace and holiness than on the threat of hell.
      <br><br>
      Wesley's sermon expounds the traditional view in considerable detail, arguing for both the pain of loss (the wicked are forever excluded from God's presence) and the pain of sense (the soul and body suffer actual torment). Wesley considered annihilationism a serious error, treating the doctrine of eternal punishment as essential to the gospel's urgency.
      <br><br>
      However, the Wesleyan tradition has emphasised certain features that distinguish its eschatology from Calvinist ECT:
      <br><br>
      <strong>(1) Universal atonement:</strong> Christ died for all (1 Timothy 2:6; 1 John 2:2). The atonement is universally available. Those who are finally lost are lost because they have resisted prevenient grace, not because they were predestined to damnation.
      <br><br>
      <strong>(2) Genuine free will:</strong> The Wesleyan emphasis on the freedom of the will (restored by prevenient grace) means that hell is the result of free human choice, not divine decree. This shifts the moral burden: God has done everything possible to save; the lost have chosen damnation.
      <br><br>
      <strong>(3) Pastoral restraint:</strong> Methodist preaching has generally been less graphic and prolonged in its depictions of hell than Calvinist preaching (Edwards, etc.). The Methodist focus has been on the love of God and the call to holiness, with hell as the alternative for those who reject grace, not as the central preoccupation.
      <br><br>
      The United Methodist Confession of Faith and the Wesleyan Articles of Religion affirm final judgement and eternal life — though the documents are less explicit on the details of eternal punishment than Reformed confessions.
      <br><br>
      Modern Wesleyan theology has occasionally produced more nuanced reflections. Thomas Oden's <em>Systematic Theology</em>, Volume 3 (1992), and Jerry Walls's <em>Hell: The Logic of Damnation</em> (1992) defend ECT with philosophical and theological sophistication while acknowledging the strength of universalist and annihilationist objections. Some Wesleyan theologians (notably Randy Maddox in <em>Responsible Grace</em>, 1994) have argued that Wesley's own theology of grace creates pressure toward universalism even though Wesley personally rejected it.
      <br><br>
      The Wesleyan-Holiness tradition's emphasis on heart transformation makes universalism unattractive: if salvation is fundamentally about being made holy (not merely declared righteous), then those who never want holiness cannot be made holy against their will. Hell may be, as C.S. Lewis put it in <em>The Great Divorce</em>, "the gates locked on the inside."`,
        verses: ['Matt 25:31–46', 'Mark 9:43–48', 'Rev 20:10–15', '2 Thess 1:7–9', 'Heb 9:27', 'Rom 2:6–8', '1 Tim 2:4', 'Heb 12:14', '2 Pet 3:9'],
      },
      {
        name: 'Baptist / Evangelical',
        stance: 'affirm',
        position: `The Baptist Faith & Message (2000), Article X ("Last Things"): "God, in His own time and in His own way, will bring the world to its appropriate end. According to His promise, Jesus Christ will return personally and visibly in glory to the earth; the dead will be raised; and Christ will judge all men in righteousness. The unrighteous will be consigned to Hell, the place of everlasting punishment. The righteous in their resurrected and glorified bodies will receive their reward and will dwell forever in Heaven with the Lord."
      <br><br>
      "Everlasting punishment" is the Baptist confessional commitment. The Second London Baptist Confession (1689), Chapter XXXII, gives the older confessional statement: "The wicked, who know not God, and obey not the gospel of Jesus Christ, shall be cast into eternal torments, and punished with everlasting destruction from the presence of the Lord, and from the glory of his power."
      <br><br>
      Broadly, evangelical Protestantism (Baptists, non-denominationals, Pentecostals, most independent Bible churches) holds eternal conscious torment as the standard view, though the rise of evangelical annihilationism (Stott, Fudge, Pinnock, Stackhouse) has created internal evangelical debate.
      <br><br>
      The defining recent evangelical episode was the <strong>Rob Bell controversy</strong> following <em>Love Wins</em> (March 2011). Bell, then a megachurch pastor at Mars Hill Bible Church (Grand Rapids), published a book questioning whether a loving God would consign people to eternal hell. The reaction was immediate and severe: John Piper's "Farewell Rob Bell" tweet (February 27, 2011, before the book was even released); Justin Taylor's pre-publication review at the Gospel Coalition; Kevin DeYoung's critique; and Francis Chan and Preston Sprinkle's response book <em>Erasing Hell</em> (2011). Bell resigned from Mars Hill later in 2011 and largely left mainstream evangelical platforms.
      <br><br>
      The Bell controversy made hell a defining doctrinal boundary for evangelicalism in a way it had not been for decades. The Gospel Coalition, T4G (Together for the Gospel), and similar networks treat the doctrine of eternal punishment as essential to evangelical orthodoxy.
      <br><br>
      But evangelical annihilationism has continued to grow. The Rethinking Hell movement (<em>rethinkinghell.com</em>), founded by Chris Date and others, hosts an annual conference and has published the major essay collection <em>Rethinking Hell</em> (2014). Increasing numbers of younger evangelical pastors and scholars are at least open to annihilationism, even if they do not publicly advocate it.
      <br><br>
      The doctrinal position has become a marker of evangelical identity: ECT is the safe position for evangelical institutional life, annihilationism is increasingly tolerated though sometimes controversial, universalism remains beyond the pale.`,
        verses: ['Matt 25:41–46', 'Mark 9:43–48', '2 Thess 1:6–9', 'Rev 14:9–11', 'Rev 20:10–15', 'Rev 21:8', 'John 3:36', 'Heb 9:27', 'Rom 6:23'],
      },
    ],
    keyVerses: ['Matt 25:31–46', 'Mark 9:43–48', 'Luke 16:19–31', 'John 3:16', 'John 3:36', 'Rom 6:23', '2 Thess 1:6–9', 'Rev 14:9–11', 'Rev 20:10–15', 'Rev 21:8', '1 Cor 15:22–28', 'Rom 5:18', '1 Tim 2:4', '2 Pet 3:9', 'Col 1:19–20', '2 Macc 12:42–46', '1 Cor 3:13–15'],
    historicalNote: 'Origen\'s apokatastasis was condemned at Constantinople II (553 AD), though scholars debate the precise target of the condemnation. F.D. Maurice\'s Theological Essays (1853) — questioning eternal punishment — cost him his King\'s College London professorship in one of the major Victorian theological controversies. C.S. Lewis\'s The Great Divorce (1945) and The Problem of Pain (1940) gave nuanced ECT defences that have shaped much contemporary evangelical thought ("the doors of hell are locked on the inside"). John Stott\'s tentative annihilationism in Essentials (1988) made evangelical annihilationism respectable. Rob Bell\'s Love Wins (2011) generated the largest popular evangelical debate on hell in a generation. David Bentley Hart\'s That All Shall Be Saved (2019) is the most recent sustained scholarly universalist statement, generating significant responses including Michael McClymond\'s two-volume The Devil\'s Redemption (2018).',
    relatedTopics: ['atonement', 'predestination', 'salvation-works'],
  },

];

// ═══════════════════════════════════════════════════════════════
//   STATE & CONSTANTS
// ═══════════════════════════════════════════════════════════════

const CATEGORIES = [...new Set(TOPICS.map(t => t.category))];
const DENOMINATIONS = [
  'Roman Catholic', 'Eastern Orthodox', 'Anglican / Episcopal', 'Lutheran',
  'Presbyterian / Reformed', 'Baptist', 'Methodist / Wesleyan', 'Pentecostal',
  'Charismatic', 'Anabaptist / Mennonite', 'Non-denominational',
  'Exploring / No tradition', 'Other'
];

let supabaseClient = null;
let currentUser = null;
let currentUserProfile = null;
let currentTopic = null;
let currentSubtopic = null;
let allComments = [];
let userVotes = new Set();
let activeCategory = 'All';
let searchQuery = '';

// ═══════════════════════════════════════════════════════════════
//   INIT
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  initSupabase();
  renderCategoryFilters();
  renderTopics();
  setupCharCount();
  setupSearch();
  updateStats();
});

function updateStats() {
  const el = document.getElementById('stat-topics');
  if (el) el.textContent = TOPICS.length;
}

function initSupabase() {
  if (typeof SUPABASE_CONFIGURED === 'undefined' || !SUPABASE_CONFIGURED) {
    const banner = document.getElementById('config-banner');
    if (banner) banner.classList.remove('hidden');
    updateAuthUI();
    return;
  }
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const banner = document.getElementById('config-banner');
    if (banner) banner.classList.add('hidden');
    checkSession();
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      currentUser = session?.user ?? null;
      if (currentUser) loadUserProfile();
      updateAuthUI();
      if (currentTopic) updateCommentFormVisibility();
    });
  } catch (e) {
    console.error('Supabase init failed:', e);
    updateAuthUI();
  }
}

async function checkSession() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  currentUser = session?.user ?? null;
  if (currentUser) await loadUserProfile();
  updateAuthUI();
}

async function loadUserProfile() {
  if (!supabaseClient || !currentUser) return;
  const { data } = await supabaseClient
    .from('profiles').select('*').eq('id', currentUser.id).single();
  currentUserProfile = data;
  updateAuthUI();
}

// ═══════════════════════════════════════════════════════════════
//   AUTH UI
// ═══════════════════════════════════════════════════════════════

function updateAuthUI() {
  const authArea = document.getElementById('header-auth');
  if (!authArea) return;
  if (currentUser && currentUserProfile) {
    const initials = (currentUserProfile.display_name || 'U')
      .split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    authArea.innerHTML = `
      <div class="user-pill">
        <div class="user-avatar">${initials}</div>
        <span>${escHtml(currentUserProfile.display_name)}</span>
        ${currentUserProfile.denomination ? `<span class="comment-denom-tag">${escHtml(currentUserProfile.denomination)}</span>` : ''}
      </div>
      <button class="btn btn-ghost" onclick="handleLogout()">Sign out</button>`;
  } else {
    authArea.innerHTML = `
      <button class="btn btn-ghost" onclick="openModal('login')">Sign in</button>
      <button class="btn btn-primary" onclick="openModal('signup')">Join the Synod</button>`;
  }
  if (currentTopic) updateCommentFormVisibility();
}

function updateCommentFormVisibility() {
  const loggedOut = document.getElementById('logged-out-prompt');
  const loggedIn = document.getElementById('logged-in-form');
  if (!loggedOut || !loggedIn) return;
  const hasDB = supabaseClient && typeof SUPABASE_CONFIGURED !== 'undefined' && SUPABASE_CONFIGURED;
  if (!hasDB) {
    loggedOut.style.display = 'block';
    loggedOut.innerHTML = '⚙️ Comments are currently disabled — Supabase is not yet configured.';
    loggedIn.style.display = 'none';
  } else if (currentUser) {
    loggedOut.style.display = 'none';
    loggedIn.style.display = 'block';
  } else {
    loggedOut.style.display = 'block';
    loggedOut.innerHTML = '<a onclick="openModal(\'login\')">Sign in</a> or <a onclick="openModal(\'signup\')">join the Synod</a> to share your perspective.';
    loggedIn.style.display = 'none';
  }
}

// ═══════════════════════════════════════════════════════════════
//   CATEGORY FILTERS & SEARCH
// ═══════════════════════════════════════════════════════════════

function renderCategoryFilters() {
  const container = document.getElementById('category-filters');
  if (!container) return;
  const cats = ['All', ...CATEGORIES];
  container.innerHTML = cats.map(c =>
    `<button class="cat-pill ${c === activeCategory ? 'active' : ''}" onclick="setCategory('${c.replace(/'/g, "\\'")}')">${c}</button>`
  ).join('');
}

function setCategory(cat) {
  activeCategory = cat;
  renderCategoryFilters();
  renderTopics();
}

function setupSearch() {
  const input = document.getElementById('topic-search');
  if (!input) return;
  input.addEventListener('input', e => {
    searchQuery = e.target.value.toLowerCase();
    renderTopics();
  });
}

// ═══════════════════════════════════════════════════════════════
//   TOPIC GRID
// ═══════════════════════════════════════════════════════════════

function renderTopics() {
  const grid = document.getElementById('topic-grid');
  if (!grid) return;
  let filtered = TOPICS;
  if (activeCategory !== 'All') filtered = filtered.filter(t => t.category === activeCategory);
  if (searchQuery) filtered = filtered.filter(t =>
    t.name.toLowerCase().includes(searchQuery) ||
    t.desc.toLowerCase().includes(searchQuery) ||
    t.category.toLowerCase().includes(searchQuery)
  );
  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--ink-light)">No debates match your search.</div>';
    return;
  }
  grid.innerHTML = filtered.map(t => `
    <div class="topic-card" onclick="showTopic('${t.id}')">
      <div class="topic-card-top">
        <div class="topic-icon">${t.icon}</div>
        <div class="cat-badge">${t.category}</div>
      </div>
      <div class="topic-name">${t.name}</div>
      <div class="topic-desc-preview">${t.desc}</div>
      <div class="topic-card-foot">
        <div class="controversy-bar-mini"><div class="controversy-fill-mini" style="width:${t.controversy}%"></div></div>
        <div class="topic-card-meta">
          <span>${t.controversy}% controversial</span>
          <span>${t.denominations.length} traditions</span>
        </div>
      </div>
    </div>`).join('');
}

function showHome() {
  document.getElementById('home-view').style.display = 'block';
  document.getElementById('detail-view').style.display = 'none';
  currentTopic = null;
  currentSubtopic = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ═══════════════════════════════════════════════════════════════
//   TOPIC DETAIL
// ═══════════════════════════════════════════════════════════════

async function showTopic(id) {
  const topic = TOPICS.find(t => t.id === id);
  if (!topic) return;
  currentTopic = topic;
  currentSubtopic = null;

  document.getElementById('home-view').style.display = 'none';
  document.getElementById('detail-view').style.display = 'block';
  document.getElementById('detail-title').textContent = topic.name;
  document.getElementById('detail-desc').textContent = topic.desc;
  document.getElementById('controversy-fill').style.width = topic.controversy + '%';
  document.getElementById('controversy-text').textContent = topic.controversy + '%';

  const catEl = document.getElementById('detail-category');
  if (catEl) catEl.textContent = topic.category;

  // Definition block
  const defBlock = document.getElementById('definition-block');
  const defBody = document.getElementById('definition-body');
  if (defBlock && defBody) {
    if (topic.definition) {
      defBlock.style.display = 'block';
      defBody.innerHTML = topic.definition;
    } else {
      defBlock.style.display = 'none';
    }
  }

  renderSubtopics(topic);

  // Historical note
  const histEl = document.getElementById('historical-note');
  if (histEl) {
    if (topic.historicalNote) {
      histEl.style.display = 'block';
      histEl.innerHTML = `<span class="hist-label">📜 Historical context</span> ${topic.historicalNote}`;
    } else {
      histEl.style.display = 'none';
    }
  }

  // Key verses
  const versesEl = document.getElementById('key-verses');
  const versesBlock = document.getElementById('key-verses-block');
  if (versesEl && topic.keyVerses && topic.keyVerses.length) {
    versesBlock.style.display = 'block';
    versesEl.innerHTML = topic.keyVerses.map(v => `<span class="verse-pill">${escHtml(v)}</span>`).join('');
  } else if (versesBlock) {
    versesBlock.style.display = 'none';
  }

  renderDenominations(topic);

  // Related
  const relatedEl = document.getElementById('related-topics');
  const relatedSection = document.getElementById('related-section');
  if (relatedEl && topic.relatedTopics && topic.relatedTopics.length) {
    relatedSection.style.display = 'block';
    relatedEl.innerHTML = topic.relatedTopics.map(rid => {
      const rel = TOPICS.find(t => t.id === rid);
      return rel ? `<button class="related-pill" onclick="showTopic('${rid}')">${rel.icon} ${escHtml(rel.name)}</button>` : '';
    }).join('');
  } else if (relatedSection) {
    relatedSection.style.display = 'none';
  }

  updateCommentFormVisibility();
  await loadComments(topic.id);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderSubtopics(topic) {
  const container = document.getElementById('subtopic-tabs');
  if (!container) return;
  if (!topic.subtopics || topic.subtopics.length === 0) {
    container.style.display = 'none';
    return;
  }
  container.style.display = 'flex';
  container.innerHTML = [{ id: null, label: 'Overview' }, ...topic.subtopics].map(s =>
    `<button class="subtopic-tab ${currentSubtopic === s.id ? 'active' : ''}" onclick="setSubtopic('${s.id === null ? 'null' : s.id}')">${escHtml(s.label)}</button>`
  ).join('');
}

function setSubtopic(id) {
  currentSubtopic = id === 'null' ? null : id;
  renderSubtopics(currentTopic);
}

function renderDenominations(topic) {
  const grid = document.getElementById('denom-grid');
  if (!grid) return;
  grid.innerHTML = topic.denominations.map(d => `
    <div class="denom-card stance-${d.stance}">
      <div class="denom-card-top">
        <div class="denom-name">${escHtml(d.name)}</div>
        <div class="stance-badge badge-${d.stance}">${stanceLabel(d.stance)}</div>
      </div>
      <div class="denom-position">${d.position}</div>
      ${d.verses && d.verses.length ? `
        <div class="denom-verses">
          <div class="denom-verses-label">Their proof-texts</div>
          <div>${d.verses.map(v => `<span class="verse-pill">${escHtml(v)}</span>`).join(' ')}</div>
        </div>` : ''}
    </div>`).join('');
}

function stanceLabel(stance) {
  return { affirm: 'Affirms', deny: 'Denies', nuanced: 'Nuanced', varies: 'Varies' }[stance] || stance;
}

// ═══════════════════════════════════════════════════════════════
//   COMMENTS
// ═══════════════════════════════════════════════════════════════

async function loadComments(topicId) {
  const list = document.getElementById('comment-list');
  const countLabel = document.getElementById('comment-count-label');
  if (!list || !countLabel) return;

  if (!supabaseClient || typeof SUPABASE_CONFIGURED === 'undefined' || !SUPABASE_CONFIGURED) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">⚙️</div>Comments require Supabase configuration. The Synod floor will open once the site administrator has set this up.</div>';
    countLabel.textContent = 'Discussion currently unavailable';
    return;
  }

  list.innerHTML = '<div class="loading-spinner">Loading the discussion…</div>';

  try {
    const { data, error } = await supabaseClient
      .from('comments').select('*').eq('topic_id', topicId)
      .order('upvotes', { ascending: false })
      .order('created_at', { ascending: false });
    if (error) throw error;
    allComments = data || [];

    if (currentUser && allComments.length > 0) {
      const ids = allComments.map(c => c.id);
      const { data: votes } = await supabaseClient
        .from('upvotes').select('comment_id').eq('user_id', currentUser.id).in('comment_id', ids);
      userVotes = new Set((votes || []).map(v => v.comment_id));
    } else {
      userVotes = new Set();
    }

    countLabel.textContent = allComments.length === 0
      ? 'No one has spoken on the floor yet — be the first.'
      : `${allComments.length} contribution${allComments.length !== 1 ? 's' : ''} to the discussion`;
    renderComments(allComments);
  } catch (err) {
    console.error(err);
    list.innerHTML = `<div class="error-msg">Failed to load comments: ${escHtml(err.message)}</div>`;
  }
}

function renderComments(comments) {
  const list = document.getElementById('comment-list');
  if (!list) return;
  if (comments.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🕊️</div>No contributions yet on this debate.<br>The floor is open — share your perspective.</div>`;
    return;
  }
  list.innerHTML = comments.map(c => {
    const initials = (c.display_name || 'A').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const voted = userVotes.has(c.id);
    const date = new Date(c.created_at).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
    const isOwn = currentUser && c.user_id === currentUser.id;
    return `
      <div class="comment-item">
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
      topic_id: currentTopic.id,
      user_id: currentUser.id,
      display_name: currentUserProfile.display_name,
      denomination: currentUserProfile.denomination || null,
      body, upvotes: 0,
    });
    if (error) throw error;
    document.getElementById('comment-text').value = '';
    document.getElementById('char-count').textContent = '0 / 600';
    showFormMsg('success', 'Posted!');
    await loadComments(currentTopic.id);
  } catch (err) {
    showFormMsg('error', err.message || 'Failed to post. Try again.');
  } finally {
    btn.disabled = false; btn.textContent = 'Post comment';
  }
}

async function deleteComment(commentId) {
  if (!confirm('Delete this comment?')) return;
  try {
    await supabaseClient.from('comments').delete().eq('id', commentId);
    await loadComments(currentTopic.id);
  } catch (err) { console.error(err); }
}

function showFormMsg(type, text) {
  const el = document.getElementById('form-message');
  if (!el) return;
  el.innerHTML = `<div class="${type}-msg">${escHtml(text)}</div>`;
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
    console.error('Upvote error:', err);
    countEl.textContent = current;
    if (wasVoted) { userVotes.add(commentId); btn.classList.add('voted'); }
    else { userVotes.delete(commentId); btn.classList.remove('voted'); }
  }
}

// ═══════════════════════════════════════════════════════════════
//   AUTH MODAL
// ═══════════════════════════════════════════════════════════════

function openModal(mode) {
  document.getElementById('auth-modal').classList.add('open');
  switchModal(mode);
}

function closeModal() {
  document.getElementById('auth-modal').classList.remove('open');
  clearModalErrors();
}

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

const modalEl = document.getElementById('auth-modal');
if (modalEl) {
  modalEl.addEventListener('click', e => {
    if (e.target === modalEl) closeModal();
  });
}

async function handleLogin() {
  if (!supabaseClient) return;
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const errEl = document.getElementById('modal-error');
  if (!email || !password) { errEl.textContent = 'Please fill in both fields.'; errEl.style.display = 'block'; return; }
  const btn = document.querySelector('#modal-login .btn-primary');
  btn.textContent = 'Signing in…'; btn.disabled = true;
  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
  btn.textContent = 'Sign in'; btn.disabled = false;
  if (error) { errEl.textContent = error.message; errEl.style.display = 'block'; }
  else closeModal();
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
  const btn = document.querySelector('#modal-signup .btn-primary');
  btn.textContent = 'Creating account…'; btn.disabled = true;
  const { error } = await supabaseClient.auth.signUp({
    email, password,
    options: { data: { display_name: name, denomination: denom || null } }
  });
  btn.textContent = 'Create account'; btn.disabled = false;
  if (error) { errEl.textContent = error.message; errEl.style.display = 'block'; }
  else { errEl.style.display = 'none'; successEl.textContent = '✓ Welcome to the Synod! Check your email to confirm, then sign in.'; successEl.style.display = 'block'; }
}

async function handleLogout() {
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
  currentUser = null; currentUserProfile = null; userVotes = new Set();
  updateAuthUI();
}

// ═══════════════════════════════════════════════════════════════
//   HELPERS
// ═══════════════════════════════════════════════════════════════

function escHtml(str) {
  if (str === null || str === undefined) return '';
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
