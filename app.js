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
// ═══════════════════════════════════════════════════════════
// PATCH 4 — 6 NEW TOPICS to be inserted into the TOPICS array
// Append these BEFORE the closing "];" of the TOPICS array
// (i.e. right after the "hell" topic, before "];")
// ═══════════════════════════════════════════════════════════

  // ╔══════════════════════════════════════════════════════════╗
  // ║  MINISTRY & ETHICS                                        ║
  // ╚══════════════════════════════════════════════════════════╝

  {
    id: 'womens-ordination',
    name: 'Women in Ministry & Ordination',
    icon: '⛪',
    controversy: 90,
    category: 'Ministry',
    desc: 'May women be ordained to the pastoral office, teach men in the gathered church, and exercise ruling authority over a congregation? Are 1 Timothy 2:12 and 1 Corinthians 14:34–35 transcultural commands, or culturally-bound first-century corrections?',
    definition: `<p>The question of <strong>women in ministry</strong> turns on whether the New Testament restrictions on women teaching and exercising authority over men in the gathered church are <em>transcultural and permanent</em> (the complementarian position) or <em>culturally-bound first-century corrections</em> that no longer apply when their original context is understood (the egalitarian position).</p>
      <p>The defining biblical texts are 1 Timothy 2:11–14 ("I do not permit a woman to teach or to exercise authority over a man") and 1 Corinthians 14:34–35 ("the women should keep silent in the churches"). Complementarians argue Paul grounds his prohibition in the creation order (1 Tim 2:13: "For Adam was formed first") — making it a permanent ordinance, not a cultural accommodation. Egalitarians argue the texts address specific local problems (uneducated women asking disruptive questions in Ephesus, Corinthian disorder) and that Galatians 3:28 ("there is no male and female, for you are all one in Christ Jesus") establishes the deeper principle.</p>
      <p>The Catholic and Orthodox positions are more comprehensive still: women cannot be ordained <em>to the priesthood at all</em> because the priest acts <em>in persona Christi</em> — in the person of Christ — at the altar, and only a male can sacramentally re-present the male Christ. This is held to be a matter of divine institution that the Church has no authority to alter.</p>`,
    subtopics: [
      { id: 'wo-priesthood', label: 'Ordination to priesthood' },
      { id: 'wo-teaching', label: 'Teaching/preaching to men' },
      { id: 'wo-eldership', label: 'Eldership and authority' },
      { id: 'wo-deacons', label: 'Female deacons' },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'deny',
        position: `The Catholic Church teaches definitively that priestly ordination is reserved to baptised males alone (<em>viri</em>). Pope John Paul II's apostolic letter <strong><em>Ordinatio Sacerdotalis</em></strong> (May 22, 1994) declared: "I declare that the Church has no authority whatsoever to confer priestly ordination on women and that this judgment is to be definitively held by all the Church's faithful." The Congregation for the Doctrine of the Faith, then under Cardinal Joseph Ratzinger, subsequently clarified (October 1995) that this teaching has been "set forth infallibly by the ordinary and universal Magisterium" — placing it beyond legitimate Catholic debate.
      <br><br>
      The theological reasoning rests on three pillars. <strong>(1) Christological:</strong> at the altar, the priest acts <em>in persona Christi capitis</em> — in the person of Christ the Head. The sacramental sign requires a "natural resemblance" between Christ and his minister (CDF, <em>Inter Insigniores</em>, October 15, 1976, §5). Christ is male; the sacramental priesthood must therefore be male. <strong>(2) Apostolic:</strong> Christ chose only men as his Twelve Apostles, even though he could have chosen otherwise — even though his own mother, surpassing all the apostles in grace, was not among the Twelve. The Church understands itself bound by this Dominical choice. <strong>(3) Constant tradition:</strong> No bishop, council, or pope in the two thousand years of Catholic history has purported to ordain a woman to priesthood. This constant practice is itself evidence of the Spirit's guidance of the Church.
      <br><br>
      <em>Inter Insigniores</em> §1 lists the patristic witness: Irenaeus, Tertullian, Hippolytus, Cyprian, Epiphanius, John Chrysostom, Augustine all reject female ordination. The medieval scholastics (Bonaventure, Aquinas, Duns Scotus) treated the matter as settled.
      <br><br>
      The Catechism of the Catholic Church §1577 codifies this: "Only a baptised man (<em>vir</em>) validly receives sacred ordination."
      <br><br>
      <strong>However</strong>, the question of <em>female deacons</em> is open in Catholic theology. The early Church had deaconesses (Romans 16:1–2 — Phoebe is called <em>diakonos</em>; the Council of Chalcedon canon 15, the Apostolic Constitutions). Pope Francis established commissions on the female diaconate in 2016 and 2020. The 2024 Synod on Synodality discussed the question without resolving it. The CDF distinguishes between the sacramental priesthood (closed to women by divine institution) and the diaconal ministry (whose precise sacramental character and historical scope remain under study).
      <br><br>
      Catholic women exercise vast ministry in religious orders, theology, catechesis, parish administration, lay liturgical roles, and as Doctors of the Church — Teresa of Ávila (1970), Catherine of Siena (1970), Thérèse of Lisieux (1997), Hildegard of Bingen (2012) — but the sacramental priesthood remains male.`,
        verses: ['Matt 10:1–4', 'Luke 6:12–16', '1 Tim 3:1–7', '1 Tim 2:11–14', '1 Cor 11:3', '1 Cor 14:34–35', 'Eph 5:22–33'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'deny',
        position: `Orthodoxy uniformly restricts the priesthood (presbyterate and episcopate) to men, on essentially the same theological grounds as Rome: the priest at the altar functions as an icon of Christ, and the iconographic relationship requires the male sex.
      <br><br>
      The Inter-Orthodox Theological Consultation at Rhodes (1988) gave the contemporary pan-Orthodox statement: women cannot be ordained to priesthood because "the order of redemption" preserves the order of creation; because of the unbroken apostolic and patristic tradition; and because the sacramental priesthood is bound to the male Christ in a way Orthodox theology cannot abstract from.
      <br><br>
      Metropolitan Kallistos Ware's <em>Man, Woman, and the Priesthood of Christ</em> (1978, with various subsequent essays) gives the most accessible Orthodox systematic treatment. Ware argues that the question is not about women's spiritual capacity (which Orthodoxy affirms abundantly — the Theotokos is honoured above all the saints; women monastics, mystics, and teachers are central to Orthodox life) but about the iconographic and typological character of liturgical priesthood.
      <br><br>
      <strong>The female diaconate</strong> is a live and contested question in Orthodoxy. The order of <em>deaconess</em> existed in the early Church and into the Byzantine period — Olympias, the friend and patron of John Chrysostom, was ordained deaconess by Patriarch Nectarius (c. 391). The rite of ordination for deaconesses is preserved in Byzantine euchologion. The order fell into disuse by the 11th–12th centuries but was never formally abolished.
      <br><br>
      Several Orthodox churches have moved to restore the order in recent years. The Patriarchate of Alexandria revived the deaconess order in 2016. The Russian Orthodox Church Outside Russia has discussed the question. The 1988 Rhodes consultation called for "renewal" of the diaconate in forms appropriate to contemporary Orthodox life.
      <br><br>
      Orthodox women teach theology (Elisabeth Behr-Sigel, Frederica Mathewes-Green, Eva Catafygiotu Topping), serve as abbesses with substantial spiritual authority over both women and men, and lead in nearly every dimension of church life except the eucharistic priesthood and episcopate.`,
        verses: ['Matt 10:1–4', 'Luke 1:46–55', 'Rom 16:1–2', '1 Tim 3:11', '1 Tim 2:11–14', '1 Cor 11:3–16', 'Gal 3:28'],
      },
      {
        name: 'Anglican / Episcopal',
        stance: 'varies',
        position: `Anglicanism is genuinely divided on this question across provinces and within them. The Anglican Communion has no central authority to settle it; each province decides.
      <br><br>
      <strong>Provinces ordaining women to all three orders</strong> (bishop, priest, deacon): the Episcopal Church (USA — first woman priest 1976, first woman bishop Barbara Harris 1989, first woman Presiding Bishop Katharine Jefferts Schori 2006); the Anglican Church of Canada (1976); the Church of England (priests 1994, bishops 2014, with the consecration of Libby Lane); the Anglican Church of Australia (priests 1992, bishops 2008); the Scottish Episcopal Church; the Anglican Church of New Zealand; and most Western provinces.
      <br><br>
      <strong>Provinces that ordain women as deacons and priests but not bishops</strong>: a small and shrinking number.
      <br><br>
      <strong>Provinces that do not ordain women at all</strong>: most provinces in Africa (especially the more conservative Anglican Realignment provinces — Nigeria, Uganda, Kenya, Rwanda), some Asian provinces, the breakaway Anglican Church in North America (ACNA, though some ACNA dioceses ordain women to the diaconate or priesthood; the question of female bishops is closed).
      <br><br>
      The theological argument within Anglicanism follows the broader Protestant divide. <strong>The Lambeth Conference 1968</strong> declared that "the theological arguments as at present presented for and against the ordination of women to the priesthood are inconclusive." The 1978 Lambeth Conference asked provinces to "respect the autonomy of each Church in this matter."
      <br><br>
      The Anglican-Roman Catholic ARCIC dialogue has been strained by women's ordination: Rome regards Anglican female priests as invalid (and now treats their consecrations as adding nothing to the question of Anglican orders, which Rome had already declared "null and void" in <em>Apostolicae Curae</em> 1896).
      <br><br>
      Within provinces that ordain women, theological space is generally preserved for traditionalists. The Church of England's "Five Guiding Principles" (2014) recognise that those who cannot in conscience accept women's ordination remain "loyal Anglicans," with provision for them to receive episcopal ministry from male bishops. The Society of St Wilfrid and St Hilda and the Society of the Holy Cross serve traditionalist clergy.`,
        verses: ['Gal 3:28', 'Acts 2:17–18', 'Rom 16:1–7', 'Matt 10:1–4', '1 Tim 2:11–14', '1 Tim 3:1–7', 'Phil 4:2–3'],
      },
      {
        name: 'Lutheran',
        stance: 'varies',
        position: `Lutheranism is split. Among the major Lutheran bodies:
      <br><br>
      <strong>Ordain women</strong>: the Evangelical Lutheran Church in America (ELCA, women pastors from 1970, women bishops from 1992); most Scandinavian Lutheran state churches (Sweden 1958, Norway 1961, Denmark 1948, Finland 1988); many German EKD churches; most Lutheran World Federation members.
      <br><br>
      <strong>Do not ordain women</strong>: the Lutheran Church—Missouri Synod (LCMS), the Wisconsin Evangelical Lutheran Synod (WELS), the Evangelical Lutheran Synod, and most confessional Lutheran bodies worldwide.
      <br><br>
      The LCMS position is articulated in <em>The Service of Women in Congregational and Synodical Offices</em> (CTCR, 1985, revised 1994) and subsequent documents. The LCMS argues from 1 Corinthians 14:34–37 (which it reads as Paul appealing to the Lord's command, not to local custom) and 1 Timothy 2:11–14 (which grounds the prohibition in creation order, not in cultural circumstance). The pastoral office is the office of "the public ministry of the Word and sacraments" — what Augsburg Confession Article V establishes as Christ's institution. Only men may hold this office.
      <br><br>
      The LCMS permits women to serve in many capacities — teaching, church administration, missions, deaconess service (restored in the LCMS in 1979), parochial leadership — but not in the pastoral office and not in publicly preaching from the pulpit in the gathered worship.
      <br><br>
      The ELCA position rests on a different exegesis: the Pauline restrictions address specific Greco-Roman cultural situations (uneducated wives interrupting worship; the prominence of false women teachers in Ephesus). Galatians 3:28 establishes the deeper Pauline principle. The ELCA also reads Romans 16:1–16 as showing Paul commending female co-workers in apostolic ministry — Phoebe the deacon, Junia among the apostles (Romans 16:7 — the manuscript tradition strongly favours "Junia" as a woman's name), Prisca alongside Aquila.
      <br><br>
      The LCMS-ELCA divide is one of the largest unresolved questions in American Lutheran ecumenism.`,
        verses: ['1 Tim 2:11–14', '1 Cor 14:33–37', 'Gal 3:28', 'Rom 16:1–7', 'Acts 2:17–18', 'Acts 18:24–26', '1 Cor 11:5'],
      },
      {
        name: 'Reformed / Presbyterian',
        stance: 'varies',
        position: `The Reformed world is divided along the same complementarian / egalitarian lines as the broader Protestant world, generally tracking the conservative / progressive divide of each particular denomination.
      <br><br>
      <strong>Ordain women</strong>: the Presbyterian Church (USA) — women elders 1930, women deacons 1922, women ministers 1956; the Christian Reformed Church (CRC, women elders and ministers 1995, though with ongoing tension); the Reformed Church in America (RCA, 1979); the United Church of Christ; many continental European Reformed bodies.
      <br><br>
      <strong>Do not ordain women</strong>: the Presbyterian Church in America (PCA, the largest conservative American Presbyterian body); the Orthodox Presbyterian Church (OPC); the United Reformed Churches in North America (URCNA); most Reformed Baptist bodies; many international Reformed churches.
      <br><br>
      The PCA position is articulated in the PCA Book of Church Order and in numerous study committee reports. The PCA permits women to teach in many contexts (children's ministry, women's ministry, mixed-audience teaching outside the gathered worship) but reserves the offices of teaching elder, ruling elder, and deacon (in most PCA presbyteries) to qualified men. The PCA reads 1 Timothy 3:1–7 ("the husband of one wife") and 1 Timothy 2:11–14 as restricting the offices of authority and public teaching in the gathered church to men.
      <br><br>
      <strong>Wayne Grudem</strong> (Reformed Baptist) and <strong>John Piper</strong> founded the Council on Biblical Manhood and Womanhood (CBMW, 1987) and authored the Danvers Statement (1987). Their book <em>Recovering Biblical Manhood and Womanhood</em> (1991, with multiple contributors) gave systematic complementarianism its scholarly defence. The book argues that male-female differentiation is a creation good, grounded in Genesis 1–2, and that the New Testament restrictions on women in church office reflect this creation order rather than a transient cultural concession.
      <br><br>
      Egalitarian Reformed scholarship (Phyllis Trible, Aída Besançon Spencer, Linda Belleville, Cynthia Long Westfall) reads the same texts as culturally-conditioned applications of the deeper Galatians 3:28 principle. The egalitarian organisation Christians for Biblical Equality (CBE) was founded in 1988 in response to CBMW.
      <br><br>
      The Reformed debate is among the most exegetically rigorous, with both sides producing extensive commentary on the disputed Greek vocabulary — especially <em>authentein</em> (1 Tim 2:12, "to exercise authority"), which the egalitarians often translate "to domineer" or "to usurp authority," giving the verse a narrower meaning.`,
        verses: ['1 Tim 2:11–14', '1 Tim 3:1–7', 'Titus 1:5–9', '1 Cor 14:33–37', '1 Cor 11:3', 'Gen 1:27', 'Gen 2:18–24', 'Gal 3:28'],
      },
      {
        name: 'Baptist',
        stance: 'varies',
        position: `Baptist practice ranges from absolute complementarianism (Southern Baptist Convention, most Independent Baptist bodies) to full egalitarianism (American Baptist Churches USA, Cooperative Baptist Fellowship, Alliance of Baptists).
      <br><br>
      The <strong>Southern Baptist Convention</strong> formally restricted the pastoral office to men in the 2000 revision of the Baptist Faith & Message, Article VI: "While both men and women are gifted for service in the church, the office of pastor is limited to men as qualified by Scripture." This was a significant change from earlier BF&M versions which left the question open.
      <br><br>
      The 2023 SBC annual meeting voted to disfellowship Saddleback Church (founded by Rick Warren) and several other prominent congregations for having women on their pastoral staff with the title "pastor." The "Law Amendment" of 2024 — attempting to embed the male-only pastor requirement in the SBC constitution — failed to gain a two-thirds majority in the 2024 vote, exposing significant internal SBC division. The question remains live.
      <br><br>
      The SBC's complementarian position is articulated by figures such as <strong>Albert Mohler</strong> (president of Southern Seminary), <strong>Wayne Grudem</strong>, <strong>John Piper</strong>, and the broader CBMW network. The argument follows the Reformed complementarian case: 1 Timothy 2:11–14 grounds the restriction in creation order; 1 Timothy 3:1–7 specifies the qualifications "the husband of one wife"; the cumulative pattern of male leadership through Scripture is intentional, not incidental.
      <br><br>
      The <strong>American Baptist Churches USA</strong> has ordained women since the late 19th century — Helen Barrett Montgomery served as the first female president of the American Baptist Convention (1921). The Cooperative Baptist Fellowship (formed 1991 as a moderate alternative to the SBC) practises full egalitarianism. The Alliance of Baptists (1987) likewise.
      <br><br>
      <strong>Free Will Baptist, Primitive Baptist, and most Independent Baptist bodies</strong> are uniformly complementarian.
      <br><br>
      The Black Baptist tradition has been complicated. The National Baptist Convention USA, National Baptist Convention of America, and Progressive National Baptist Convention have historically been male-pastor-dominant but have moved increasingly toward ordaining women in recent decades. Many large historic Black Baptist churches now have women in significant pastoral or co-pastoral roles.`,
        verses: ['1 Tim 2:11–14', '1 Tim 3:1–7', 'Titus 1:5–9', '1 Cor 14:33–37', 'Gal 3:28', 'Acts 2:17–18', 'Rom 16:1–7', 'Acts 18:24–26'],
      },
      {
        name: 'Methodist / Wesleyan',
        stance: 'affirm',
        position: `Methodism has been historically among the most open Protestant traditions to women in ministry, though the position took centuries to settle.
      <br><br>
      <strong>John Wesley himself</strong> authorised women to preach and exhort in extraordinary cases. His Methodist movement included prominent female preachers: Mary Bosanquet Fletcher (1739–1815), Sarah Crosby (1729–1804), Hannah Ball (1733–92). Wesley's 1771 letter to Mary Bosanquet conceded that she had "an extraordinary call" to preach.
      <br><br>
      The 19th-century Holiness movement, growing out of Methodism, produced women preachers in unprecedented numbers. <strong>Phoebe Palmer</strong> (1807–74) was one of the most influential American religious figures of her century; her <em>Promise of the Father</em> (1859) was a sustained biblical defence of women's preaching. <strong>Catherine Booth</strong>, co-founder of the Salvation Army with her husband William, made female ministry constitutive of the Salvation Army from its founding (1865).
      <br><br>
      The <strong>Methodist Episcopal Church</strong> first granted women local preacher's licences in 1869, ordained women as deacons in 1924, and granted full clergy rights to women in 1956. The United Methodist Church (formed 1968) has ordained women throughout its existence.
      <br><br>
      The <strong>Wesleyan Church</strong> (formed by the abolitionist anti-slavery Methodists) has ordained women since its inception in 1843 — making it one of the earliest American denominations to do so on principled theological grounds.
      <br><br>
      The <strong>African Methodist Episcopal Church</strong> (AME) ordained Jarena Lee as a preacher in 1819, though full ordination came later. The AME elected its first female bishop, Vashti McKenzie, in 2000.
      <br><br>
      The <strong>Free Methodist Church</strong>, <strong>Church of the Nazarene</strong>, and other Holiness denominations all ordain women.
      <br><br>
      The Wesleyan theological case rests on: Joel 2:28–29 / Acts 2:17–18 (the outpouring of the Spirit on sons <em>and daughters</em>); Galatians 3:28; the prominence of women in the gospels and Acts; the gift-based ecclesiology of Wesleyan-Holiness theology (the Spirit gifts whom he wills, not according to sex); and the apostolic precedent in Romans 16 (Phoebe, Junia, Prisca, the unnamed female co-workers in Philippians 4:2–3).`,
        verses: ['Joel 2:28–29', 'Acts 2:17–18', 'Gal 3:28', 'Rom 16:1–16', 'Acts 18:24–26', 'Phil 4:2–3', 'Luke 8:1–3', 'John 20:11–18'],
      },
      {
        name: 'Pentecostal',
        stance: 'varies',
        position: `Pentecostalism has been complicated on this question. The early Pentecostal movement was strikingly open to women in ministry — at Azusa Street (1906) women preached, prophesied, and led; Aimee Semple McPherson founded the Foursquare Church in 1923 and became one of the most famous preachers of her era. The Assemblies of God ordained women from its founding in 1914.
      <br><br>
      But the institutional Pentecostal denominations gradually moved toward more complementarian practice as they assimilated to American evangelicalism. By the mid-20th century, women in Pentecostal pulpits had become much rarer than in the early decades.
      <br><br>
      <strong>The Assemblies of God</strong> formally permits women in all levels of ministry, including ordination as ministers and election as district superintendents. The 2010 AG position paper "The Role of Women in Ministry" gives the systematic defence: Joel 2 / Acts 2 promises the outpouring of the Spirit on daughters as well as sons; the New Testament shows women in significant ministry roles; the restrictive passages address specific local issues. In practice, however, only a small percentage of AG senior pastors are women, and the AG has fewer female bishops/district superintendents than its theology would permit.
      <br><br>
      <strong>The Church of God in Christ</strong> (COGIC, the largest Black Pentecostal denomination, founded 1907) has historically ordained women as evangelists and missionaries but reserved the offices of pastor and bishop to men. This remains contested within COGIC.
      <br><br>
      <strong>The International Pentecostal Holiness Church</strong> ordains women.
      <br><br>
      <strong>The United Pentecostal Church International</strong> (Oneness Pentecostal) restricts pastoral office to men.
      <br><br>
      The <strong>Foursquare Church</strong> remains shaped by its female founder; women hold every level of office.
      <br><br>
      Globally, Pentecostalism's role for women varies enormously. In Latin America, Africa, and parts of Asia, Pentecostal women have been pioneers of evangelism, church planting, and pastoral ministry — often in contexts where mainline Protestant and Catholic women were excluded from such roles.`,
        verses: ['Joel 2:28–29', 'Acts 2:17–18', 'Acts 21:9', '1 Cor 11:5', 'Gal 3:28', 'Acts 18:24–26', '1 Tim 2:11–14', 'Rom 16:1–7'],
      },
    ],
    keyVerses: ['1 Tim 2:11–14', '1 Tim 3:1–7', 'Titus 1:5–9', '1 Cor 14:33–37', '1 Cor 11:3–16', 'Gal 3:28', 'Acts 2:17–18', 'Joel 2:28–29', 'Rom 16:1–16', 'Acts 18:24–26', 'Phil 4:2–3', 'Gen 1:27', 'Gen 2:18–24', 'Eph 5:22–33', 'Luke 8:1–3'],
    historicalNote: 'Pope John Paul II\'s Ordinatio Sacerdotalis (May 22, 1994) closed the question for Catholicism. The Church of England consecrated its first female priest in March 1994 (a watershed moment for global Anglicanism) and its first female bishop, Libby Lane, in January 2015. The Southern Baptist Convention added "the office of pastor is limited to men" to the Baptist Faith & Message in 2000. The Council on Biblical Manhood and Womanhood (1987) and Christians for Biblical Equality (1988) institutionalised the evangelical complementarian and egalitarian positions respectively. The 2023–24 SBC controversy over Saddleback Church and the "Law Amendment" exposed continuing fault lines within American complementarianism itself.',
    relatedTopics: ['homosexuality', 'papacy', 'sola-scriptura'],
  },

  {
    id: 'homosexuality',
    name: 'Homosexuality & Same-Sex Marriage',
    icon: '🌈',
    controversy: 98,
    category: 'Ministry',
    desc: 'Are same-sex sexual relationships and marriages compatible with Christian discipleship? Do the biblical prohibitions (Leviticus 18:22, Romans 1:26–27, 1 Corinthians 6:9, 1 Timothy 1:10) apply to today\'s consensual, monogamous same-sex unions, or only to exploitative ancient practices?',
    definition: `<p>The question of <strong>homosexuality and same-sex marriage</strong> is the most painful and divisive issue in contemporary Christianity. It splits every major Protestant denomination, divides the Anglican Communion, generates schism after schism, and remains the defining flashpoint of 21st-century Christian debate.</p>
      <p>The biblical texts most often cited are Genesis 19 (Sodom and Gomorrah), Leviticus 18:22 and 20:13 (the Levitical prohibitions), Romans 1:26–27 (Paul's most extended treatment), 1 Corinthians 6:9 (with the disputed Greek terms <em>malakoi</em> and <em>arsenokoitai</em>), and 1 Timothy 1:10 (<em>arsenokoitai</em> again). The traditional reading takes these texts as straightforward prohibitions of same-sex sexual activity. The revisionist reading argues that the texts address specific ancient practices — temple prostitution, pederasty, exploitative master-slave relationships — and not the modern category of consensual same-sex partnership between adults of equal status.</p>
      <p>Catholics, Orthodox, evangelical Protestants, and most global Christianity (especially in Africa, Asia, and Latin America) maintain the traditional position: same-sex sexual activity is sin; same-sex marriage is impossible in principle, not merely forbidden in practice. Liberal mainline Protestants, the Episcopal Church, the ELCA, the PCUSA, the United Methodist Church (after its 2024 General Conference removed restrictions), the United Church of Christ, and the Anglican Church of Canada have moved to varying degrees of affirmation — performing same-sex marriages, ordaining sexually-active LGBTQ+ clergy, blessing same-sex unions.</p>`,
    subtopics: [
      { id: 'hs-bible', label: 'Biblical interpretation' },
      { id: 'hs-marriage', label: 'Same-sex marriage' },
      { id: 'hs-ordination', label: 'LGBTQ+ clergy' },
      { id: 'hs-pastoral', label: 'Pastoral approach' },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'deny',
        position: `Catholic teaching is firm and unchanged: same-sex sexual acts are intrinsically disordered (<em>intrinsece disordinati</em>) and cannot under any circumstances be approved. Same-sex marriage is impossible in principle — marriage by its nature is the union of one man and one woman, ordered toward the procreation and education of children.
      <br><br>
      The Catechism of the Catholic Church §§2357–2359 gives the systematic statement: "Basing itself on Sacred Scripture, which presents homosexual acts as acts of grave depravity, tradition has always declared that 'homosexual acts are intrinsically disordered.' They are contrary to the natural law. They close the sexual act to the gift of life. They do not proceed from a genuine affective and sexual complementarity. Under no circumstances can they be approved."
      <br><br>
      But §2358 distinguishes the orientation from the acts: "The number of men and women who have deep-seated homosexual tendencies is not negligible. This inclination, which is objectively disordered, constitutes for most of them a trial. They must be accepted with respect, compassion, and sensitivity. Every sign of unjust discrimination in their regard should be avoided. These persons are called to fulfill God's will in their lives and, if they are Christians, to unite to the sacrifice of the Lord's Cross the difficulties they may encounter from their condition."
      <br><br>
      The Congregation for the Doctrine of the Faith's <em>Persona Humana</em> (1975), <em>Letter on the Pastoral Care of Homosexual Persons</em> (1986, signed by Cardinal Ratzinger), <em>Considerations Regarding Proposals to Give Legal Recognition to Unions Between Homosexual Persons</em> (2003), and <em>Responsum ad Dubium</em> (March 15, 2021, denying the possibility of blessing same-sex unions) reinforce and clarify the teaching.
      <br><br>
      The Vatican's <strong><em>Fiducia Supplicans</em></strong> (Declaration on the Pastoral Meaning of Blessings, December 18, 2023, under Pope Francis and Cardinal Víctor Manuel Fernández) generated enormous controversy by permitting "non-liturgical blessings" of "couples in irregular situations," including same-sex couples. The declaration was careful to specify that this is not a sacramental blessing, not a blessing of the union as such, and not a recognition of same-sex marriage — but a pastoral blessing of the individuals. Many bishops conferences in Africa, Eastern Europe, and elsewhere have rejected the declaration's application in their territories.
      <br><br>
      Pope Francis's pastoral tone has shifted significantly from Pope Benedict XVI's — "Who am I to judge?" (July 2013); the welcoming language of <em>Amoris Laetitia</em> (2016); the appointment of openly affirming bishops; the elevation of theologians such as Cardinal Robert McElroy who have urged greater pastoral openness. But the doctrine remains unchanged. Catholic same-sex couples cannot marry sacramentally, cannot receive eucharistic communion if living in a sexually active union, and cannot be ordained.`,
        verses: ['Gen 1:27–28', 'Gen 2:24', 'Lev 18:22', 'Lev 20:13', 'Rom 1:26–27', '1 Cor 6:9–11', '1 Tim 1:10', 'Matt 19:4–6'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'deny',
        position: `Orthodoxy uniformly teaches that homosexual sexual activity is sin and that marriage is the union of a man and a woman ordered to procreation and the icon of Christ and the Church. There is no significant Orthodox movement toward affirmation of same-sex unions in any of the autocephalous churches.
      <br><br>
      The Basis of the Social Concept of the Russian Orthodox Church (2000), §XII, addresses the question directly: "Homosexual desires, just as other passions which torture fallen man, are healed by the sacraments, prayer, fasting, repentance, reading of Holy Scriptures and patristic works, and Christian fellowship. Considering homosexual aspirations sinful, the Church however does not reject those who have them, but call them to fellowship with itself in the spiritual victory over the malady for the sake of their salvation."
      <br><br>
      The Holy and Great Council of Crete (2016), the most significant pan-Orthodox conciliar gathering in centuries, addressed marriage in its document "The Sacrament of Marriage and Its Impediments": marriage is between man and woman, instituted by God in creation, blessed by Christ at Cana, and constitutive of the family as the "domestic church."
      <br><br>
      The Greek Orthodox Archdiocese of America's position paper "Homosexuality" (2003, revised 2015) gives the systematic Orthodox-American statement. The Orthodox Church in America (OCA), the Antiochian Orthodox Christian Archdiocese, the Serbian Orthodox Church in America, and the Romanian Orthodox Episcopate all hold the traditional position.
      <br><br>
      A distinctive feature of Orthodox pastoral approach is the emphasis on the universal call to chastity. Marriage and monasticism are the two blessed states; all single Christians (including those experiencing same-sex attraction) are called to chastity. Sexual chastity outside marriage is not a special burden for the same-sex-attracted — it is the universal vocation of every unmarried Christian.
      <br><br>
      Orthodoxy also strongly distinguishes between (1) sinful acts (which are repentable and forgivable) and (2) the conscientious adoption of a sinful identity (which raises pastoral questions about whether genuine repentance is occurring). The Orthodox tradition cares deeply about <em>metanoia</em> (repentance, conversion of heart) and is suspicious of any framing that makes ongoing unrepented sin compatible with full Christian discipleship.
      <br><br>
      Russian Orthodox Patriarch Kirill's outspoken rejection of LGBTQ+ rights and his framing of the war in Ukraine partly in terms of resistance to "Western liberal" sexual ideologies has become geopolitically controversial. Within Orthodox theology, however, his fundamental position on same-sex sexuality is not in doubt — all Orthodox bishops agree on the substance even when they disagree about pastoral application or political rhetoric.`,
        verses: ['Gen 1:27–28', 'Gen 2:24', 'Lev 18:22', 'Lev 20:13', 'Rom 1:18–27', '1 Cor 6:9–11', '1 Tim 1:10', 'Eph 5:31–32'],
      },
      {
        name: 'Anglican / Episcopal',
        stance: 'varies',
        position: `Anglicanism is split as no other communion is. The Anglican Communion's crisis on this issue may be the largest single ecclesial fracture of the 21st century.
      <br><br>
      <strong>Affirming provinces</strong>: the Episcopal Church (USA, performing same-sex marriages since 2015), the Anglican Church of Canada (2019), the Scottish Episcopal Church (2017), the Church in Wales (blessings 2021), the Anglican Church of Australia in some dioceses, and the Church of England (which authorised blessings — but not marriages — for same-sex couples in February 2023 under the "Prayers of Love and Faith").
      <br><br>
      <strong>Traditionalist provinces</strong>: most of the Global South, including Nigeria, Uganda, Kenya, Rwanda, Tanzania, South Sudan, Sudan, Egypt, Chile, Bolivia, Bangladesh, Indonesia, Myanmar, Pakistan, and the Anglican Church in North America (ACNA). The Global Anglican Future Conference (GAFCON), founded in 2008, has organised the traditionalist response.
      <br><br>
      <strong>The Lambeth Conference 1998</strong>, Resolution 1.10, declared homosexual practice "incompatible with Scripture" — by a margin of 526 to 70. This resolution remains the formal teaching of the Anglican Communion at the conciliar level. But subsequent provincial actions have repeatedly contradicted it.
      <br><br>
      The watershed event was the consecration of <strong>Gene Robinson</strong>, an openly partnered gay man, as Bishop of New Hampshire in November 2003. The reaction in the global Anglican Communion was severe. The Windsor Report (2004) called for a moratorium on further consecrations, blessings, and lawsuits. The moratorium was repeatedly broken on both sides.
      <br><br>
      The result has been a fragmented Communion. GAFCON provinces have declared themselves in "impaired communion" with the Episcopal Church. The Global South Fellowship of Anglican Churches (GSFA) operates parallel structures. ACNA was formed in 2009 by Anglicans leaving the Episcopal Church and Canadian Church specifically over this issue, and was recognised by GAFCON though not (officially) by Canterbury.
      <br><br>
      The Lambeth Conference 2022 conducted under Archbishop Justin Welby attempted unity through "good disagreement" — explicitly retaining Lambeth 1998 1.10 as the Communion's teaching while permitting provinces to take different pastoral approaches. The compromise satisfied few.
      <br><br>
      In the Church of England's General Synod, the February 2023 vote authorising "Prayers of Love and Faith" — non-liturgical, non-sacramental blessings — passed narrowly. The Bishop of Oxford has called for full marriage equality; the Bishops of Birkenhead, Maidstone, and several others have publicly opposed any change. The Living in Love and Faith process continues.`,
        verses: ['Gen 1:27–28', 'Gen 2:24', 'Lev 18:22', 'Rom 1:24–27', '1 Cor 6:9–11', '1 Tim 1:10', 'Matt 19:4–6', 'Gal 3:28', 'Acts 10:34–35'],
      },
      {
        name: 'Lutheran (mainline)',
        stance: 'affirm',
        position: `The mainline Lutheran position has shifted dramatically over the past two decades.
      <br><br>
      The <strong>Evangelical Lutheran Church in America</strong> (ELCA) voted in August 2009 to permit the ordination of openly partnered LGBTQ+ pastors. The 2009 vote was the result of two decades of internal study and debate. It triggered the largest schism in modern American Lutheranism: the North American Lutheran Church (NALC) and Lutheran Congregations in Mission for Christ (LCMC) were formed by departing conservative congregations. Several hundred ELCA congregations left.
      <br><br>
      The ELCA now blesses same-sex marriages, ordains LGBTQ+ clergy in same-sex relationships, and elects LGBTQ+ bishops. Bishop R. Guy Erwin (Southwest California Synod, 2013) was the first openly gay partnered ELCA bishop. The ELCA's social statement <em>Human Sexuality: Gift and Trust</em> (2009) provides the theological framework, articulating four broad approaches that ELCA members may take and committing the denomination to "bound conscience" — protecting traditionalist pastors from being forced to officiate same-sex marriages.
      <br><br>
      The <strong>Church of Sweden</strong> performs same-sex marriages (2009). The <strong>Evangelical Lutheran Church in Denmark</strong> blesses same-sex unions. Most Scandinavian Lutheran state churches have moved similarly. The German EKD churches vary by region.
      <br><br>
      The theological argument: the biblical texts addressing same-sex behaviour are addressing specific ancient practices (cult prostitution, pederasty, exploitative slave-master sex) that are not analogous to modern consensual covenanted same-sex partnerships; Galatians 3:28 establishes a principle of equality that extends to sexual minorities; the church's pastoral experience of LGBTQ+ Christians in long-term faithful relationships testifies to the work of grace; the larger biblical trajectory moves toward inclusion (Acts 10–15 — the inclusion of Gentiles is presented as a Spirit-led expansion of categories that the original texts of the law would not have permitted).
      <br><br>
      The argument has been articulated theologically by <strong>James K. Brownson</strong> in <em>Bible, Gender, Sexuality</em> (2013); by <strong>Karen Keen</strong>'s <em>Scripture, Ethics, and the Possibility of Same-Sex Relationships</em> (2018); and by various ELCA scholars including <strong>Mark Allan Powell</strong> and <strong>Diane Jacobson</strong>.`,
        verses: ['Gen 1:27', 'Acts 10:34–35', 'Acts 15:6–11', 'Gal 3:28', 'Matt 19:11–12', 'Rom 1:26–27', '1 Cor 6:9–11', 'Lev 18:22'],
      },
      {
        name: 'Lutheran (confessional)',
        stance: 'deny',
        position: `Confessional Lutheran bodies maintain the historic Christian position without ambiguity. The Lutheran Church—Missouri Synod, Wisconsin Evangelical Lutheran Synod, North American Lutheran Church, Lutheran Congregations in Mission for Christ, Evangelical Lutheran Synod, and most international confessional Lutheran bodies all teach that same-sex sexual activity is sin and that marriage is between man and woman alone.
      <br><br>
      The LCMS document <em>Together with All Creatures: Caring for God's Living Earth</em> (2010) and the more direct statements in the CTCR's <em>Christian Sexual Ethics</em> (1999, updated subsequently) articulate the position. Marriage is a creation ordinance established by God in Genesis 1–2; ratified by Christ in Matthew 19:4–6; understood by Paul as an icon of Christ and the Church in Ephesians 5:21–33.
      <br><br>
      The exegetical case follows traditional lines: Romans 1:24–27 explicitly addresses same-sex behaviour as <em>para physin</em> ("against nature"), grounding the prohibition in the creation order — not in temple prostitution (which the text does not mention) or pederasty (the women in Romans 1:26 cannot fit this framing). 1 Corinthians 6:9–11 lists <em>malakoi</em> (likely "the soft / passive partners") and <em>arsenokoitai</em> (a Pauline neologism evidently coined from Leviticus 18:22 LXX, <em>meta arsenos koitēn</em>) as among those excluded from the kingdom — but immediately adds "and such were some of you. But you were washed, you were sanctified, you were justified" (1 Cor 6:11), making clear that the gospel offers genuine transformation, not affirmation of unrepented sin.
      <br><br>
      The pastoral approach is the universal call to repentance and the universal offer of grace. Same-sex attraction itself is not chosen and not a particular sin; same-sex sexual acts are sin requiring repentance like any other sin. The LCMS specifically rejects "conversion therapy" approaches that promise change of orientation as a precondition of discipleship; chastity, not orientation change, is the call.
      <br><br>
      The NALC (North American Lutheran Church), formed in 2010 in the wake of the ELCA's 2009 decision, was constituted explicitly around the historic confession on marriage and sexuality. The LCMC similarly. These bodies represent a significant ongoing conservative Lutheran presence in North America.`,
        verses: ['Gen 1:27–28', 'Gen 2:24', 'Lev 18:22', 'Lev 20:13', 'Matt 19:4–6', 'Rom 1:18–32', '1 Cor 6:9–11', '1 Tim 1:9–11', 'Eph 5:31–32'],
      },
      {
        name: 'Reformed (confessional)',
        stance: 'deny',
        position: `The confessional Reformed and Presbyterian bodies — the PCA, OPC, URCNA, RPCNA, ARP, and most international Reformed churches — uniformly teach that same-sex sexual activity is sin and that marriage is exclusively the union of one man and one woman.
      <br><br>
      The PCA's 2020 study committee report <em>On Human Sexuality</em> gives the systematic Reformed statement. The PCA affirms the historic confessional position, exegetes the relevant biblical texts in detail, and provides pastoral guidance for ministering to those experiencing same-sex attraction.
      <br><br>
      The PCA has been internally divided over the "Revoice" controversy — the Revoice Conference (2018, hosted at a PCA congregation in St. Louis) brought together same-sex-attracted but celibate Christians, primarily from Side B perspectives (affirming traditional sexual ethics but maintaining LGBTQ+ identity language). The conference drew sharp criticism from PCA traditionalists who objected to the use of LGBTQ+ identity categories. The PCA's 2019 General Assembly study committee and 2020 report attempted to navigate the question, generally affirming the call to chastity while raising concerns about identity language. The "Nashville Statement" (2017), drafted by the Council on Biblical Manhood and Womanhood and signed by many PCA leaders, gave a sharper line.
      <br><br>
      The <strong>PCUSA</strong> (Presbyterian Church USA), distinct from the PCA, moved to ordination of partnered LGBTQ+ clergy in 2011 (Amendment 10-A) and to same-sex marriage in 2014–15. This precipitated the formation of ECO (the Evangelical Covenant Order of Presbyterians, 2012) as a more theologically conservative Presbyterian alternative.
      <br><br>
      Major Reformed treatments: <strong>Robert Gagnon's <em>The Bible and Homosexual Practice</em></strong> (2001) — the definitive evangelical Reformed exegetical defence of the traditional position. <strong>Kevin DeYoung's <em>What Does the Bible Really Teach About Homosexuality?</em></strong> (2015). <strong>Sam Allberry's <em>Is God Anti-Gay?</em></strong> (2013) — an Anglican but widely-read evangelical pastoral defence from a same-sex-attracted celibate perspective.
      <br><br>
      The Heidelberg Catechism Q. 108–109 (on the Seventh Commandment) is regularly invoked: the commandment against adultery requires that "we live decent and chaste lives, within or outside of holy marriage." All sexual activity outside man-woman marriage falls under this prohibition.`,
        verses: ['Gen 1:27–28', 'Gen 2:24', 'Lev 18:22', 'Lev 20:13', 'Rom 1:18–32', '1 Cor 6:9–11', '1 Tim 1:9–11', 'Heb 13:4', 'Matt 19:4–6', 'Eph 5:31–32'],
      },
      {
        name: 'Methodist',
        stance: 'varies',
        position: `The United Methodist Church (UMC) underwent one of the most dramatic denominational realignments in modern Protestant history over this issue.
      <br><br>
      From 1972, the UMC Book of Discipline contained the language: "The United Methodist Church does not condone the practice of homosexuality and considers this practice incompatible with Christian teaching." Through 2019, repeated General Conference debates were unsuccessful in changing this language; in fact, the 2019 special General Conference (the "Traditional Plan" GC) tightened enforcement provisions against pastors performing same-sex marriages.
      <br><br>
      The resulting tension was untenable. The <strong>Global Methodist Church</strong> (GMC) was launched on May 1, 2022, as a theologically conservative Methodist alternative. Several thousand UMC congregations have disaffiliated to join the GMC or to become independent. The disaffiliation process was facilitated by a special "Paragraph 2553" provision (2019) allowing congregations to leave with their property under specific conditions.
      <br><br>
      Then at the <strong>2024 UMC General Conference</strong> (Charlotte, North Carolina, April 23 – May 3), the UMC removed all prohibitive language regarding homosexuality from the Book of Discipline by overwhelming majorities. The "incompatible with Christian teaching" clause was deleted. The ban on ordaining "self-avowed practicing homosexuals" was removed. Pastors were authorised to perform same-sex marriages. Bishops could no longer be sanctioned for being in same-sex marriages.
      <br><br>
      The result: by mid-2024, the UMC and the GMC stand as theologically distinct denominations. The UMC is now an affirming denomination; the GMC is a traditional one. Each has its own seminaries, polity, mission boards, and identity.
      <br><br>
      The <strong>African Methodist Episcopal Church</strong>, the <strong>African Methodist Episcopal Zion Church</strong>, and the <strong>Christian Methodist Episcopal Church</strong> (the three historic Black Methodist denominations) have generally maintained more traditional positions on sexuality, though with significant internal diversity.
      <br><br>
      The <strong>Wesleyan Church</strong>, <strong>Free Methodist Church</strong>, <strong>Church of the Nazarene</strong>, and the <strong>Salvation Army</strong> — the Wesleyan-Holiness denominations — uniformly maintain the traditional position. These bodies are essentially aligned with global evangelicalism on this issue.
      <br><br>
      Globally, the United Methodist Church's African and Filipino conferences had been the bulwark of the traditional position before the 2024 vote. The geographic reorganisation following 2024 may produce an autonomous African Methodist Church or significant African disaffiliation.`,
        verses: ['Gen 1:27–28', 'Matt 19:4–6', 'Lev 18:22', 'Rom 1:26–27', '1 Cor 6:9–11', 'Acts 10:34–35', 'Gal 3:28', '1 John 4:7–8'],
      },
      {
        name: 'Evangelical / Baptist',
        stance: 'deny',
        position: `Broad evangelicalism — Southern Baptist, non-denominational, Pentecostal, Charismatic, conservative Baptist of all stripes, and most independent and Bible-church congregations — maintains the historic Christian position uniformly.
      <br><br>
      The <strong>Baptist Faith & Message (2000)</strong>, Article XVIII ("The Family"): "Marriage is the uniting of one man and one woman in covenant commitment for a lifetime." The Southern Baptist Convention has repeatedly affirmed this position by overwhelming majorities — Resolutions in 1976, 1980, 1985, 1988, 1993, 1996, 2003, 2014, 2015, and others.
      <br><br>
      The <strong>Nashville Statement</strong> (August 25, 2017), drafted under the auspices of the Council on Biblical Manhood and Womanhood and signed by leading evangelicals (including Albert Mohler, John Piper, James Dobson, R.C. Sproul before his death, John MacArthur, Sam Allberry, and many others), gives the most comprehensive recent evangelical statement. Its 14 articles affirm: biological sex as God's design; marriage as one-man-one-woman; sexual immorality including homosexual conduct as sin; and "the approval of homosexual immorality" as a "departure from Christian faithfulness and witness."
      <br><br>
      The <strong>Gospel Coalition's Foundation Documents</strong>, the <strong>Lausanne Covenant</strong>, the <strong>Cape Town Commitment</strong> (2010), and most evangelical confessional documents include statements affirming traditional sexual ethics.
      <br><br>
      Major evangelical exegetical treatments: <strong>Robert Gagnon's <em>The Bible and Homosexual Practice</em></strong> (2001) — over 500 pages of detailed exegesis, regarded as the definitive scholarly treatment. <strong>Don Carson</strong>'s contributions across multiple writings. <strong>Andreas Köstenberger and David Jones's <em>God, Marriage, and Family</em></strong>. <strong>Rosaria Butterfield</strong>, a former lesbian English professor who converted, has written widely-read first-person evangelical accounts (<em>The Secret Thoughts of an Unlikely Convert</em>, 2012).
      <br><br>
      The "Side B" movement within evangelicalism — affirming traditional sexual ethics while acknowledging same-sex attraction as an ongoing reality — has been articulated by writers including <strong>Wesley Hill</strong> (<em>Washed and Waiting</em>, 2010), <strong>Sam Allberry</strong>, and <strong>Greg Coles</strong>. Side B writers have been controversial within evangelicalism: some traditionalists view them as compromising; some affirming Christians view them as cooperating with their own oppression. The movement nonetheless represents a serious evangelical attempt to take both biblical authority and contemporary LGBTQ+ experience seriously.
      <br><br>
      Internationally, the African Bible Commentary (2006) and global evangelical statements have been even more uniformly traditional than American evangelical positions. The global South evangelical church is overwhelmingly traditional on sexuality and has resisted Western liberal pressure with increasing confidence.`,
        verses: ['Gen 1:27–28', 'Gen 2:24', 'Lev 18:22', 'Lev 20:13', 'Matt 19:4–6', 'Rom 1:18–32', '1 Cor 6:9–11', '1 Tim 1:9–11', 'Heb 13:4', 'Jude 7'],
      },
    ],
    keyVerses: ['Gen 1:27–28', 'Gen 2:24', 'Gen 19:1–11', 'Lev 18:22', 'Lev 20:13', 'Matt 19:4–6', 'Rom 1:18–32', '1 Cor 6:9–11', '1 Tim 1:9–11', 'Heb 13:4', 'Eph 5:31–32', 'Gal 3:28', 'Acts 10:34–35', 'Acts 15:6–11', '1 John 4:7–8', 'Jude 7'],
    historicalNote: 'The trajectory of mainline Protestant change: the UCC ordained the first openly gay minister (William Johnson) in 1972. The Episcopal Church consecrated Gene Robinson as Bishop of New Hampshire on November 2, 2003 — the pivotal global Anglican rupture. The ELCA permitted partnered LGBTQ+ ordinations in 2009. The PCUSA permitted them in 2011 and approved same-sex marriage in 2014–15. The US Supreme Court legalised same-sex civil marriage nationally in Obergefell v. Hodges (June 26, 2015). The UMC removed all prohibitions on homosexuality at General Conference 2024 (May 1–3, Charlotte, NC). The Vatican\'s Fiducia Supplicans (December 18, 2023) permitted non-liturgical blessings of same-sex couples, drawing fierce rejection from African bishops conferences and continued traditionalist Catholic objection. The Global Anglican Future Conference (GAFCON) and the Anglican Church in North America (ACNA, 2009) represent the global traditionalist response. The Global Methodist Church (GMC, 2022) and the North American Lutheran Church (NALC, 2010) are the major denominational realignments.',
    relatedTopics: ['womens-ordination', 'abortion', 'sola-scriptura'],
  },

  {
    id: 'israel-church',
    name: 'Israel and the Church',
    icon: '✡️',
    controversy: 82,
    category: 'Last Things',
    desc: 'Is the Church the "new Israel" — having replaced (or fulfilled, or expanded) ethnic Israel as God\'s covenant people? Or does Israel retain a distinct future role in God\'s redemptive plan, with the modern State of Israel a sign of prophecy being fulfilled?',
    definition: `<p>The question of <strong>Israel and the Church</strong> is one of the deepest fault lines in Christian eschatology and hermeneutics. It asks: what is the relationship between Israel and the Church in God's plan of redemption?</p>
      <p><strong>Replacement theology</strong> (called "supersessionism" by its critics, "covenant theology" or "fulfilment theology" by its adherents) holds that the Church has succeeded Israel as God's covenant people. The promises made to ethnic Israel in the Old Testament are now fulfilled in the New Israel — the Church, made up of Jew and Gentile in Christ (Galatians 3:28–29; Galatians 6:16). Ethnic Israel as such has no continuing distinct role. This was the dominant view from the early Church Fathers through the Reformation and remains the position of most Catholic, Orthodox, Lutheran, Reformed, and Anglican theology.</p>
      <p><strong>Dispensationalism</strong> (originating with John Nelson Darby in the 1830s and popularised by the Scofield Reference Bible, 1909) holds that Israel and the Church are two distinct peoples with two distinct programs in God's redemptive plan. The Church is the heavenly people of Christ; ethnic Israel remains the earthly people of God. God's promises to Israel are unconditional and territorial; they will be fulfilled literally in a future millennial reign of Christ from Jerusalem. The Church is a "parenthesis" or "mystery" not foreseen in the Old Testament prophets, who spoke of Israel's future restoration.</p>
      <p>Modern Christian Zionism, especially American evangelical support for the State of Israel, is largely dispensational in theological origin — though many non-dispensational Christians also support Israel for theological and historical reasons.</p>`,
    subtopics: [
      { id: 'ic-supersession', label: 'Has the Church replaced Israel?' },
      { id: 'ic-dispensational', label: 'Dispensational theology' },
      { id: 'ic-romans11', label: 'Romans 9–11' },
      { id: 'ic-state', label: 'The modern State of Israel' },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'nuanced',
        position: `Catholic teaching has evolved significantly. The pre-Vatican II Latin tradition included strong supersessionist elements; Vatican II decisively repudiated them and opened a new chapter in Catholic-Jewish relations.
      <br><br>
      The Second Vatican Council's declaration <strong><em>Nostra Aetate</em></strong> (October 28, 1965), §4, gave the foundational modern Catholic statement on the relationship to Judaism: "As Holy Scripture testifies, Jerusalem did not recognize the time of her visitation, nor did the Jews in large number, accept the Gospel; indeed not a few opposed its spreading. Nevertheless, God holds the Jews most dear for the sake of their Fathers; He does not repent of the gifts He makes or of the calls He issues [Romans 11:28–29]." The decree explicitly rejected the historic charge of deicide (the accusation that the Jewish people collectively bore responsibility for Christ's death).
      <br><br>
      <em>Nostra Aetate</em> §4 also affirmed: "The Church... cannot forget that she received the revelation of the Old Testament through the people with whom God in His inexpressible mercy concluded the Ancient Covenant. Nor can she forget that she draws sustenance from the root of that well-cultivated olive tree onto which have been grafted the wild shoots, the Gentiles."
      <br><br>
      The Pontifical Biblical Commission's <strong><em>The Jewish People and Their Sacred Scriptures in the Christian Bible</em></strong> (2001), under Cardinal Ratzinger as Prefect of the CDF, gave a more developed account. The document carefully avoids strict supersessionism while affirming that Jesus is the Messiah for all peoples, including Jews. It calls Christian-Jewish relations a continuing dialogue rather than a closed question.
      <br><br>
      The Vatican Commission for Religious Relations with the Jews issued <strong><em>The Gifts and the Calling of God Are Irrevocable</em></strong> (December 10, 2015) marking the 50th anniversary of <em>Nostra Aetate</em>. The document states explicitly: "The Catholic Church neither conducts nor supports any specific institutional mission work directed towards Jews." This was a startling and controversial development — interpreted by some Jewish observers as the Church renouncing all attempts to convert Jews to Christianity, and by some Catholic observers as a problematic limitation on Christ's universal call.
      <br><br>
      Pope John Paul II's visit to the Roman synagogue (April 13, 1986) — addressing Jews as "our elder brothers" — and his Holy Land pilgrimage (March 2000) including prayer at the Western Wall, and Pope Francis's similar gestures, exemplify the new posture.
      <br><br>
      Catholic theology of the State of Israel is distinct from theology of the people of Israel. The Vatican formally recognised the State of Israel on December 30, 1993 (Fundamental Agreement between the Holy See and the State of Israel), establishing diplomatic relations. But the Vatican has been consistent in supporting a two-state solution, in expressing concern for Palestinian Christians, and in distinguishing political support for Israel from theological affirmation of the modern state as the fulfilment of biblical prophecy. The Catholic position is not Christian Zionism.`,
        verses: ['Rom 9:1–5', 'Rom 11:1–2', 'Rom 11:25–29', 'Eph 2:11–16', 'Eph 3:6', 'Gal 3:28–29', 'John 4:22'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'nuanced',
        position: `Orthodox theology has not produced a single systematic statement on Israel and the Church comparable to Vatican II's <em>Nostra Aetate</em>. The patristic and Byzantine tradition contains both strongly supersessionist voices (John Chrysostom's <em>Eight Homilies Against the Jews</em>, c. 386 AD — among the harshest anti-Jewish texts in patristic literature) and more nuanced voices.
      <br><br>
      The general Orthodox position is supersessionist in a non-displacement sense: the Church is the fulfilment and continuation of Israel; the New Covenant continues and expands the Old, not by replacing the Jewish people but by extending the covenant to all nations. The Orthodox Church understands itself as in deep continuity with the Israel of God — the icons, the liturgy, the typological reading of the Old Testament, the patristic exegesis all assume the Church as the eschatological people of God in whom the promises to Israel are realised.
      <br><br>
      But Orthodox theology does not endorse modern Christian Zionism. The Russian Orthodox Church, the Patriarchate of Constantinople, the Greek Orthodox Patriarchate of Jerusalem (which has a deep pastoral concern for Arab Orthodox Christians in Israel-Palestine), and the other autocephalous churches generally do not treat the modern State of Israel as a fulfilment of biblical prophecy.
      <br><br>
      The Greek Orthodox Patriarchate of Jerusalem, established in the 4th century, predates the modern State of Israel by 1,600 years and ministers to Arab Christian populations across Israel, the West Bank, and Jordan. Its concerns are pastoral and indigenous: the survival of the ancient Christian communities in the Holy Land. The Patriarchate has at times protested Israeli land confiscations affecting Church properties.
      <br><br>
      The Orthodox Church's relationship to Judaism has been improving in recent decades through formal dialogues — the International Jewish Committee for Interreligious Consultations (IJCIC) has engaged the Ecumenical Patriarchate, the Russian Orthodox Church, and other Orthodox bodies. The Patriarch Bartholomew has spoken warmly of the Jewish people and visited the Israeli Holocaust memorial Yad Vashem.
      <br><br>
      The patristic anti-Jewish texts (Chrysostom, Cyril of Alexandria, parts of the Byzantine hymnography) remain a difficult inheritance that contemporary Orthodox theologians are increasingly willing to acknowledge and contextualise without simply expunging.`,
        verses: ['John 4:22', 'Rom 11:25–29', 'Eph 2:11–22', 'Heb 8:6–13', 'Heb 9:11–15', 'Rev 7:4–8', '1 Pet 2:9–10'],
      },
      {
        name: 'Reformed / Presbyterian (covenant theology)',
        stance: 'affirm',
        position: `Reformed covenant theology holds that the Church is the continuation, fulfilment, and full flowering of the covenant community whose Old Testament expression was Israel. There is one people of God across both Testaments, with the same covenant of grace administered in different historical dispensations. The Church does not replace Israel so much as expand it — the wild olive branches (Gentiles) being grafted into the cultivated olive tree (the covenant people, Romans 11:17–24).
      <br><br>
      The Westminster Confession (1646), Chapter VII §§5–6, articulates this: "This covenant was differently administered in the time of the law, and in the time of the gospel: under the law, it was administered by promises, prophecies, sacrifices, circumcision, the paschal lamb, and other types and ordinances delivered to the people of the Jews, all foresignifying Christ to come; which were, for that time, sufficient and efficacious, through the operation of the Spirit, to instruct and build up the elect in faith in the promised Messiah, by whom they had full remission of sins, and eternal salvation; and is called the Old Testament. Under the gospel, when Christ, the substance, was exhibited, the ordinances in which this covenant is dispensed are the preaching of the Word, and the administration of the sacraments of Baptism and the Lord's Supper... There are not therefore two covenants of grace, differing in substance, but one and the same, under various dispensations."
      <br><br>
      The Reformed position therefore reads "Israel" in the Pauline letters as primarily (in many cases) the new covenant people — the Church — even when ethnic Israel is also in view. Galatians 6:16 ("the Israel of God") is read as the Church. Ephesians 2:11–22 describes the dissolution of the dividing wall and the constitution of one new humanity from Jew and Gentile. The "true Israel" is the believing remnant within ethnic Israel, joined to believing Gentiles, in Christ.
      <br><br>
      <strong>Romans 9–11</strong> is the great Reformed crux. The traditional Reformed reading: Paul affirms that not all ethnic Israel is true Israel (Rom 9:6); a remnant is being saved in his own day; God's promises have not failed; and a future ingathering of ethnic Jews into the Church is anticipated (Romans 11:25–26: "all Israel will be saved"). What this future "all Israel" means is contested — most Reformed exegetes read it as either the full elect remnant of Jews across history, or a future large-scale conversion of ethnic Jews to Christ, but in either case the salvation of Jews comes through faith in Christ, not through a separate covenant.
      <br><br>
      <strong>The modern State of Israel</strong> has no special theological status in Reformed covenant theology. The state is a political reality; it is not the prophesied fulfilment of the restoration promises (which Reformed theology generally reads as fulfilled in Christ and in the Church). Many Reformed theologians have been critical of Christian Zionism as theologically confused and politically problematic.
      <br><br>
      Major Reformed treatments: <strong>O. Palmer Robertson's <em>The Israel of God</em></strong> (2000); <strong>Hans LaRondelle's <em>The Israel of God in Prophecy</em></strong> (1983); much of <strong>Anthony Hoekema's <em>The Bible and the Future</em></strong> (1979).`,
        verses: ['Rom 2:28–29', 'Rom 9:6–8', 'Rom 11:11–24', 'Rom 11:25–29', 'Gal 3:6–9', 'Gal 3:28–29', 'Gal 6:16', 'Eph 2:11–22', 'Phil 3:3'],
      },
      {
        name: 'Dispensational',
        stance: 'deny',
        position: `Dispensationalism, originating with the Irish-British Brethren teacher <strong>John Nelson Darby</strong> (1800–82) and reaching its widest reach through the Scofield Reference Bible (1909, ed. C.I. Scofield), holds that Israel and the Church are two distinct peoples with two distinct programs in God's plan. The promises to ethnic Israel in the Old Testament are unconditional, territorial, and literal — and will be fulfilled in a future millennial kingdom ruled by Christ from Jerusalem.
      <br><br>
      The foundational distinction: God has dealt with humanity through a series of "dispensations" (Innocence, Conscience, Government, Promise, Law, Grace, Kingdom — though the precise number varies among dispensationalists). Each dispensation tests humanity under different terms; each ends in human failure and divine judgement; each is succeeded by a new dispensation. The Church Age (the dispensation of Grace) is distinct from both the prior age of Law (Israel under the Mosaic covenant) and the coming Millennial Kingdom (Israel restored).
      <br><br>
      The Church is a "mystery" not foretold in the Old Testament (Ephesians 3:1–6 read literally) — a people called out from both Jews and Gentiles, with a heavenly destiny, between the rejection of Christ by ethnic Israel and the future restoration of ethnic Israel in the millennial kingdom. Romans 11:25 — "a partial hardening has come upon Israel <em>until the fullness of the Gentiles has come in</em>" — is read as describing the present age, with Israel's hardening to be lifted at the rapture / second coming.
      <br><br>
      The territorial promises to Abraham (Genesis 12:1–3; 13:14–17; 15:18–21; 17:7–8) are unconditional and eternal. The boundaries promised — from the river of Egypt to the great river Euphrates — have never been fully possessed by Israel and must therefore be fulfilled literally in the future millennial kingdom.
      <br><br>
      The rebirth of the State of Israel (May 14, 1948) and the Six-Day War (June 5–10, 1967, when Israel captured the Old City of Jerusalem) are seen by many dispensationalists as fulfilment of prophecy — preparing the way for the millennial kingdom. The rebuilt Temple, the unconverted Israel of the present, and the events of Revelation 4–22 are read as future history involving the literal nation of Israel.
      <br><br>
      <strong>Classical dispensationalism</strong>: Darby, Scofield, Lewis Sperry Chafer (Dallas Seminary's first president), Charles Ryrie (<em>Dispensationalism Today</em>, 1965), J. Dwight Pentecost (<em>Things to Come</em>, 1958), John Walvoord. The classical view sharply separates the program for Israel from the program for the Church.
      <br><br>
      <strong>Progressive dispensationalism</strong>: Craig Blaising and Darrell Bock (<em>Progressive Dispensationalism</em>, 1993), Robert Saucy. Progressive dispensationalism softens the Israel/Church distinction, sees Christ's kingdom as already inaugurated in the present age (an "already / not yet" eschatology), and acknowledges that the Church is not entirely a parenthesis. But it retains a distinct future role for ethnic Israel.
      <br><br>
      Dispensationalism has been culturally enormous in American evangelicalism. The Scofield Reference Bible, the Dallas Theological Seminary, the Left Behind novels (Tim LaHaye and Jerry B. Jenkins, 1995–2007, 65+ million copies), and most independent Bible churches have been dispensational. Christian Zionism's enormous American political influence is in significant part the political expression of dispensational theology.`,
        verses: ['Gen 12:1–3', 'Gen 13:14–17', 'Gen 15:18–21', 'Gen 17:7–8', 'Deut 30:1–10', 'Jer 31:31–37', 'Ezek 36:24–28', 'Ezek 37:1–14', 'Rom 11:25–29', 'Rev 7:4–8', 'Rev 20:1–6', 'Matt 24:15–31'],
      },
      {
        name: 'Lutheran',
        stance: 'nuanced',
        position: `Confessional Lutheran theology generally holds a covenantal / supersessionist position similar to the Reformed: the Church is the continuation and fulfilment of Israel; the promises to Israel are fulfilled in Christ and his people.
      <br><br>
      But Lutheranism has had to wrestle with a particularly painful history. Martin Luther's late writings — especially <strong><em>On the Jews and Their Lies</em></strong> (1543) — contained extreme anti-Jewish polemic. Luther, frustrated by the failure of his earlier hopes that Jewish people would convert to Christ on hearing the gospel preached freely (his earlier <em>That Jesus Christ Was Born a Jew</em>, 1523, had been much more open), turned to advocating severe persecution: burning synagogues, destroying Jewish books, forbidding Jewish worship and travel. This material was used by the National Socialists as Christian justification for their anti-Semitism.
      <br><br>
      After the Holocaust, Lutheran bodies have engaged in significant self-examination. The Lutheran World Federation declaration <em>The Church and the Jewish People</em> (1990) and the LWF's <em>Statement on the Jewish People and the Land of Israel</em> repeatedly condemn supersessionism in its hardest displacement form, repudiate Luther's anti-Jewish writings, and commit to the dignity of Jewish-Christian relations.
      <br><br>
      The Evangelical Lutheran Church in America's <em>Declaration of the ELCA to the Jewish Community</em> (1994) specifically: "In the spirit of truth-telling, we who bear his name and heritage must with pain acknowledge also Luther's anti-Judaic diatribes and the violent recommendations of his later writings against the Jews. As did many of Luther's own companions in the sixteenth century, we reject this violent invective, and yet more do we express our deep and abiding sorrow over its tragic effects on subsequent generations."
      <br><br>
      The Lutheran-Jewish dialogues since 1990 have produced substantial theological agreement that the Jewish people remain in the covenant; that Christian mission to Jews must be distinguished from coercive proselytism; that the Holocaust requires permanent theological response.
      <br><br>
      The Lutheran World Federation's position on the modern State of Israel is sympathetic but not Christian Zionist — supporting Israel's security and right to exist while also supporting Palestinian self-determination and protesting specific Israeli policies (settlement expansion, treatment of Palestinian Christians).
      <br><br>
      The LCMS and confessional Lutheran bodies generally maintain a similar covenantal theology while exercising more caution about Lutheran political positions.`,
        verses: ['Rom 9:1–5', 'Rom 11:1–2', 'Rom 11:11–32', 'Eph 2:11–22', 'Eph 3:1–11', 'Heb 8:6–13', 'Gal 6:16'],
      },
      {
        name: 'Anglican',
        stance: 'varies',
        position: `Anglican theology spans from supersessionist Reformed-leaning positions to progressive dispensational sympathy. The Thirty-Nine Articles do not specifically address the Israel-Church question.
      <br><br>
      The Lambeth Conferences have engaged Jewish-Christian relations carefully. Lambeth 1988, Resolution 21, called for "a sincere and continued dialogue" between Christians and Jews and rejected anti-Semitism. Lambeth 1998 affirmed the State of Israel's right to exist alongside a Palestinian state. The Anglican Consultative Council and various provincial bodies have produced material on Christian-Jewish relations.
      <br><br>
      The <strong>Church of England's <em>Sharing One Hope?</em></strong> (2001) and similar documents articulate a nuanced position: the Church is the people of God in Christ; the Jewish people retain a special relationship to God; the question of whether Christians should engage in mission to Jews is internally contested.
      <br><br>
      <strong>Christian Zionist Anglicans</strong> — historically including figures like Lord Shaftesbury (1801–85, who actively promoted Jewish return to Palestine) and contemporary figures like the late John Stott (more measured) and the broader evangelical Anglican networks — have been a significant though minority voice.
      <br><br>
      <strong>Palestinian Christian Anglicans</strong> — represented by Naim Ateek and the Sabeel Ecumenical Liberation Theology Center (Jerusalem) — have developed Palestinian liberation theology, sharply critical of Christian Zionism and of Israeli policies. Ateek's <em>Justice and Only Justice</em> (1989) and <em>A Palestinian Christian Cry for Reconciliation</em> (2008) give the major Palestinian Anglican voice. The Anglican Bishop in Jerusalem oversees Anglican congregations in Israel, Palestine, Jordan, Lebanon, and Syria.
      <br><br>
      The Episcopal Church (USA) has been involved in debates about its investments in companies operating in Israeli settlements, and the broader question of how to relate to Israel-Palestine politically. The Anglican Church of Canada has likewise.`,
        verses: ['Rom 11:25–29', 'John 4:22', 'Eph 2:11–22', 'Gal 3:28–29', 'Matt 21:33–46', 'Rom 9:1–5', 'Acts 15:13–18'],
      },
      {
        name: 'Evangelical / Baptist',
        stance: 'varies',
        position: `American evangelicalism is sharply divided on this question — perhaps more divided than any other doctrinal issue. The divide largely tracks dispensational versus non-dispensational (covenant or progressive) theology.
      <br><br>
      <strong>Dispensational evangelicals</strong> — historically the largest segment, encompassing most Baptist Bible Fellowship congregations, many Southern Baptists, most independent Bible churches, the Plymouth Brethren, Calvary Chapel, Chuck Smith's influence, Tim LaHaye's enormous influence through Left Behind, the John Hagee / Christians United for Israel network, Greg Laurie, much of the Word of Faith movement — strongly support Christian Zionism. The State of Israel is viewed as the fulfilment of biblical prophecy; American support for Israel is seen as both biblically obligatory (Genesis 12:3: "I will bless those who bless you, and him who dishonours you I will curse") and politically right.
      <br><br>
      Christians United for Israel (CUFI), founded by Pastor John Hagee in 2006, is the largest Christian Zionist organisation in the US with claimed membership over 11 million. The International Christian Embassy Jerusalem (ICEJ, founded 1980) operates internationally.
      <br><br>
      <strong>Non-dispensational evangelicals</strong> — including most Reformed evangelicals, the Gospel Coalition broadly, many Southern Baptists, Anglican evangelicals, and an increasing portion of younger evangelicals — hold various non-dispensational positions and are typically more critical of Christian Zionism. They support Israel's right to exist and to security but reject the theological claim that the modern state's actions are prophecy fulfilment.
      <br><br>
      <strong>The Southern Baptist Convention</strong> has officially supported Israel through various resolutions (1989, 1995, 2002) but the SBC has both dispensational and covenant theology among its leaders.
      <br><br>
      The 2017 controversy over President Trump's recognition of Jerusalem as Israel's capital exposed the evangelical Christian Zionist alignment with US foreign policy. The October 7, 2023 Hamas attack on Israel and the subsequent Gaza war have sharpened evangelical debate about how to relate to Israel-Palestine ethically and theologically.
      <br><br>
      Important non-dispensational evangelical critiques: <strong>Gary Burge's <em>Jesus and the Land</em></strong> (2010) and <em>Whose Land? Whose Promise?</em> (2003); <strong>Stephen Sizer's <em>Christian Zionism</em></strong> (2004); <strong>Colin Chapman's <em>Whose Promised Land?</em></strong> (1983, multiple revisions). These authors argue that Christian Zionism misreads the New Testament's fulfilment of land promises in Christ and misuses Old Testament prophecy.`,
        verses: ['Gen 12:1–3', 'Rom 11:25–29', 'Gal 3:28–29', 'Gal 6:16', 'Eph 2:11–22', 'Rev 7:4–8', 'Matt 24:15–31', 'Luke 21:24'],
      },
    ],
    keyVerses: ['Gen 12:1–3', 'Gen 17:7–8', 'Jer 31:31–37', 'Ezek 36:24–28', 'Matt 21:33–46', 'Matt 24:15–31', 'Luke 21:24', 'John 4:22', 'Rom 2:28–29', 'Rom 9:1–8', 'Rom 11:1–2', 'Rom 11:11–32', 'Gal 3:28–29', 'Gal 6:16', 'Eph 2:11–22', 'Eph 3:1–11', 'Heb 8:6–13', 'Rev 7:4–8'],
    historicalNote: 'John Nelson Darby developed dispensationalism in the 1830s, breaking with the Plymouth Brethren. The Scofield Reference Bible (1909) gave it enormous American reach. Vatican II\'s Nostra Aetate (October 28, 1965) decisively repudiated Catholic anti-Judaism. The State of Israel was reconstituted on May 14, 1948 — read by dispensationalists as prophetic fulfilment, by covenant theologians as a political event without specific eschatological significance. The Six-Day War (1967), Israel\'s capture of the Old City of Jerusalem, and the rebuilding of the Old Testament-pattern political nation deepened Christian Zionist conviction. Tim LaHaye and Jerry Jenkins\'s Left Behind novels (1995–2007) sold 65+ million copies, popularising dispensational eschatology to a mass evangelical audience. Christians United for Israel (CUFI, 2006) institutionalised American evangelical Zionism politically. The October 7, 2023 Hamas attack and the subsequent Gaza war have generated new debate within American evangelicalism about the theological and ethical status of Christian Zionism.',
    relatedTopics: ['eschatology', 'sola-scriptura', 'hell'],
  },

  {
    id: 'creation',
    name: 'Creation, Age of the Earth & Evolution',
    icon: '🌍',
    controversy: 81,
    category: 'Creation',
    desc: 'Did God create the universe in six 24-hour days roughly 6,000 years ago (Young Earth Creationism), over vast geological ages (Old Earth Creationism), or through guided evolutionary processes over billions of years (Theistic Evolution / Evolutionary Creationism)? Are the Genesis days literal, allegorical, framework, or analogical?',
    definition: `<p>The question of <strong>creation</strong> asks how Christians should read Genesis 1–3 in light of modern scientific understanding of the age of the universe (~13.8 billion years), the age of the earth (~4.5 billion years), and the evolutionary development of life (~3.8 billion years of biological history, with humans appearing ~300,000 years ago).</p>
      <p>The four main Christian positions are:</p>
      <p><strong>Young Earth Creationism (YEC)</strong>: God created the universe and all life in six literal 24-hour days approximately 6,000 to 10,000 years ago. The flood of Noah was a global, catastrophic event that accounts for most of the geological column and the fossil record. Evolution did not occur. Major institutional voices: Answers in Genesis (Ken Ham), Institute for Creation Research (ICR), Creation Research Society.</p>
      <p><strong>Old Earth Creationism (OEC)</strong> / <strong>Progressive Creationism</strong>: God created the universe billions of years ago in stages, with the Genesis "days" representing long ages or epochs (the day-age view) or successive divine creative acts over geological time (progressive creationism). Microevolution within "kinds" occurred; macroevolution between major taxonomic groups did not. Adam and Eve are historical individuals specially created. Major voices: Reasons to Believe (Hugh Ross), Hugh Ross.</p>
      <p><strong>Theistic Evolution / Evolutionary Creationism</strong>: God created through evolutionary processes; the universe and life developed over billions of years according to natural laws that God ordained and sustains. Genesis 1–2 teaches theological truth about who created and why, not scientific information about how. Adam and Eve may be historical, representative, or literary figures. Major voices: BioLogos Foundation (founded by Francis Collins), N.T. Wright, John Lennox (with qualifications).</p>
      <p><strong>Intelligent Design (ID)</strong>: a more philosophical position (sometimes overlapping with YEC or OEC) arguing that natural processes alone cannot account for the complexity of life — design is empirically detectable in nature. Major voices: Discovery Institute, William Dembski, Michael Behe, Stephen Meyer.</p>`,
    subtopics: [
      { id: 'cr-days', label: 'The Genesis days' },
      { id: 'cr-age', label: 'Age of the earth' },
      { id: 'cr-evolution', label: 'Evolution and theistic evolution' },
      { id: 'cr-adam', label: 'Historical Adam and Eve' },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'nuanced',
        position: `The Catholic Church accepts the scientific consensus on the age of the universe and the broad fact of biological evolution while maintaining specific theological commitments about the special creation of the human soul and the historical reality of original sin.
      <br><br>
      Pope Pius XII's encyclical <strong><em>Humani Generis</em></strong> (August 12, 1950) gave the foundational modern Catholic statement. The encyclical permitted "research and discussions" on evolution insofar as it deals with the human body "since the human body takes its origin from pre-existent and living matter." But it required Catholics to hold that "souls are immediately created by God" and that Adam was a real historical individual who committed an original sin transmitted to all humanity (§§36–37).
      <br><br>
      Pope John Paul II's <em>Message to the Pontifical Academy of Sciences</em> (October 22, 1996) went further: "New knowledge has led to the recognition of more than one hypothesis in the theory of evolution. It is indeed remarkable that this theory has been progressively accepted by researchers, following a series of discoveries in various fields of knowledge. The convergence, neither sought nor fabricated, of the results of work that was conducted independently is in itself a significant argument in favor of this theory."
      <br><br>
      The Catechism of the Catholic Church §§282–301 treats creation theologically without specifying a particular scientific account. CCC §283: "The question about the origins of the world and of man has been the object of many scientific studies which have splendidly enriched our knowledge of the age and dimensions of the cosmos, the development of life-forms and the appearance of man. These discoveries invite us to even greater admiration for the greatness of the Creator."
      <br><br>
      CCC §390 affirms the doctrine of original sin while distinguishing it from a particular reading of the Genesis narrative: "The account of the fall in Genesis 3 uses figurative language, but affirms a primeval event, a deed that took place at the beginning of the history of man."
      <br><br>
      The 2004 International Theological Commission document <em>Communion and Stewardship: Human Persons Created in the Image of God</em> gave the most developed Catholic engagement with evolutionary theory. It affirms that "current scientific debate about the mechanisms at work in evolution requires philosophical attention that goes beyond the limits of the scientific debate itself" — encouraging Catholics to engage evolutionary biology seriously while maintaining the Catholic doctrine of the special divine endowment of humanity with the rational soul.
      <br><br>
      Most Catholic theologians, scientists (including the Vatican Observatory astronomers), and biblical scholars accept the standard scientific consensus on the age of the universe and biological evolution. Young Earth Creationism is essentially absent from mainstream Catholic theology, although some traditionalist Catholic publications give it limited expression.`,
        verses: ['Gen 1:1–31', 'Gen 2:4–25', 'Ps 19:1–6', 'Ps 104', 'John 1:1–3', 'Col 1:15–17', 'Heb 11:3', 'Rom 5:12–21'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'nuanced',
        position: `Orthodox theology has not produced a formal magisterial statement on the age of the earth or evolution analogous to Catholic encyclicals. The Orthodox approach is generally less anxious about the literal reading of Genesis than American evangelical traditions but more cautious about accepting evolutionary biology than mainline Western traditions.
      <br><br>
      Orthodox theology emphasises that Genesis 1–3 must be read patristically — through the eyes of the Church Fathers — not through either modern fundamentalist literalism or modern critical biblical scholarship. The Fathers themselves varied enormously in their reading of Genesis. <strong>Origen</strong> (<em>De Principiis</em> IV.3, c. 220 AD) explicitly rejected a strictly literal reading: "What man of sense will agree with the statement that the first, second and third days, in which the evening is named and the morning, were without sun, and moon, and stars; and that the first day was, as it were, also without a sky?" <strong>Augustine</strong> in <em>De Genesi ad Litteram</em> (5.23, c. 415 AD) argued that the "days" were not 24-hour days but a single instantaneous creative act that the human mind requires sequential narration to grasp. <strong>Basil the Great</strong>, <strong>Gregory of Nyssa</strong>, and <strong>Maximus the Confessor</strong> all engaged Genesis with sophisticated theological readings that did not depend on a young-earth chronology.
      <br><br>
      The Orthodox theology of creation is centred on <em>logos</em>-theology (Christ as the Word through whom all things were made), on the cosmic scope of redemption (Romans 8:18–25, the whole creation groaning), and on the sacramental significance of matter. The world is a theophany — a showing-forth of God's glory — that exists for liturgical participation in the divine life.
      <br><br>
      Most contemporary Orthodox theologians and scientists accept the scientific consensus on the age of the universe and the broad fact of evolution. <strong>Christopher Knight</strong> (<em>The God of Nature</em>, 2007) and <strong>Alexei Nesteruk</strong> (<em>Light from the East</em>, 2003) have developed Orthodox theology of science. The Russian Orthodox Church has been somewhat more publicly cautious about evolution; the Greek Orthodox, OCA, and Antiochian American Orthodox have generally been more open.
      <br><br>
      Young Earth Creationism in its American evangelical form has had little uptake in Orthodox theology, though some Russian Orthodox traditionalists and certain converts from American fundamentalist backgrounds have brought it into Orthodox parish life informally.
      <br><br>
      The historical Adam and original sin are theologically essential for Orthodoxy — but the Orthodox understanding of original sin (inherited mortality and corruption, not inherited guilt) makes the question of Adam's biological vs. theological reality slightly different from the Latin tradition.`,
        verses: ['Gen 1:1–2:3', 'Ps 33:6–9', 'Ps 104:5–9', 'Prov 8:22–31', 'John 1:1–3', 'Col 1:15–17', 'Rom 8:18–25', 'Heb 11:3'],
      },
      {
        name: 'Young Earth Creationist',
        stance: 'affirm',
        position: `Young Earth Creationism holds that the universe and life were created by God in six 24-hour days approximately 6,000 to 10,000 years ago, that Adam and Eve were the first humans specially created from the dust of the earth, that there was no death of any kind before the Fall, and that the global flood of Noah accounts for most of the geological record and fossil sequence.
      <br><br>
      The position rests on the literal reading of Genesis 1: "And there was evening, and there was morning — the first day" (Genesis 1:5). The Hebrew <em>yom</em> with a number ("first day," "second day") is taken to refer unambiguously to a 24-hour day. The genealogies of Genesis 5 and Genesis 11 are read as continuous father-son lists; their lifespans add up to approximately 6,000 years from Adam to the present, consistent with the calculations of Archbishop James Ussher (1581–1656), whose <em>Annals of the World</em> (1650) placed creation at 4004 BC.
      <br><br>
      Exodus 20:11 is a key supporting text: "For in six days the Lord made the heavens and the earth, the sea, and all that is in them, but he rested on the seventh day." The Sabbath commandment grounds itself in the literal six-day creation pattern; if the creation days were long ages, the Sabbath analogy becomes incoherent.
      <br><br>
      Theological arguments: (1) Death is "the wages of sin" (Romans 6:23), introduced by Adam's fall (Romans 5:12). Therefore there can have been no animal death before Adam's sin. But the standard scientific account requires billions of years of animal death before any humans existed — contradicting the doctrine of the Fall. (2) Christ refers to Adam and Eve as historical: Matthew 19:4–5; Mark 10:6 ("from the beginning of creation, God made them male and female"). Christ's "from the beginning of creation" implies a young earth — humans were present from the start, not 13.8 billion years later.
      <br><br>
      Geological arguments: the flood of Noah was global (Genesis 7:19: "All the high mountains under the entire heavens were covered") and catastrophic. The vast sedimentary layers, fossil graveyards, and many geological features are products of the flood, not slow accumulation over millions of years. Major theorists: <strong>Henry Morris and John Whitcomb's <em>The Genesis Flood</em></strong> (1961), the founding text of modern creationism. <strong>Andrew Snelling's <em>Earth's Catastrophic Past</em></strong> (2009).
      <br><br>
      Major institutional voices: <strong>Answers in Genesis</strong> (Ken Ham, with the Creation Museum in Kentucky 2007 and the Ark Encounter in 2016). <strong>Institute for Creation Research</strong> (founded by Henry Morris in 1970). <strong>Creation Ministries International</strong>. <strong>Creation Research Society</strong> (1963).
      <br><br>
      Adoption: very high in independent Baptist, Pentecostal, and non-denominational evangelical circles; moderate-to-high in Southern Baptist; very low in mainline Protestant; absent in Catholic and Orthodox; significant in Seventh-day Adventism (which had a major historical role in forming modern creationism through Ellen White's influence on early YEC theorists).`,
        verses: ['Gen 1:1–2:3', 'Gen 1:5', 'Gen 5:1–32', 'Gen 7:19', 'Gen 11:10–32', 'Exod 20:11', 'Exod 31:17', 'Matt 19:4–5', 'Mark 10:6', 'Rom 5:12–14', '2 Pet 3:3–6'],
      },
      {
        name: 'Old Earth Creationist',
        stance: 'nuanced',
        position: `Old Earth Creationism accepts the standard scientific consensus on the age of the universe (13.8 billion years) and the age of the earth (4.5 billion years), while maintaining special divine creative acts — particularly for the origin of life and the special creation of humans. Adam and Eve are historical individuals.
      <br><br>
      The most influential contemporary OEC organisation is <strong>Reasons to Believe</strong> (RTB), founded by astronomer <strong>Hugh Ross</strong> in 1986. Ross's <em>The Fingerprint of God</em> (1989), <em>A Matter of Days</em> (2004), and <em>More Than a Theory</em> (2009) give the systematic position.
      <br><br>
      Several specific readings of Genesis 1 support old-earth chronology while preserving the historicity of the creation account:
      <br><br>
      <strong>(1) Day-Age view</strong>: the Hebrew <em>yom</em> can mean "day" (24 hours), "daylight period," "indefinite time period," or "epoch" (e.g. "the day of the Lord"). The Genesis days are long geological ages. The sequence of creation broadly corresponds to the scientific sequence (formless and dark earth → atmosphere → ocean and land → vegetation → sun, moon, stars become visible → marine and aerial life → land animals and humans).
      <br><br>
      <strong>(2) Gap theory</strong>: the older and now less common reading inserts a long gap between Genesis 1:1 ("In the beginning God created the heavens and the earth") and Genesis 1:2 ("Now the earth was formless and void"). The gap accommodates geological ages, Lucifer's fall, and a pre-Adamic catastrophe. Reach the present through this gap. The original 1909 Scofield Reference Bible promoted the gap theory.
      <br><br>
      <strong>(3) Framework hypothesis</strong>: Genesis 1 is structured as a literary framework (days 1–3 form domains; days 4–6 fill those domains) and is not intended as a chronological account. The "days" are organisational categories, not literal time units. Proponents: Henri Blocher (<em>In the Beginning</em>, 1984), Meredith Kline.
      <br><br>
      <strong>(4) Analogical days view</strong>: the days are real divine working periods analogous to human days but not identical in duration. Proponent: C. John Collins (<em>Genesis 1–4: A Linguistic, Literary, and Theological Commentary</em>, 2006).
      <br><br>
      <strong>(5) Cosmic temple inauguration view</strong>: John Walton's <em>The Lost World of Genesis One</em> (2009) argues that Genesis 1 is not about material origins at all but about the functional ordering of the cosmos as God's temple, completed in seven liturgical days. The age and material origins of the universe are not in view; theological inauguration is.
      <br><br>
      OEC generally rejects macroevolution between major taxonomic groups. God created different "kinds" through successive direct creative acts over geological time. Some microevolution within kinds is accepted. Adam and Eve are historical, specially created humans.
      <br><br>
      OEC has been adopted by significant evangelical figures: William Lane Craig (with a developmental view), Hugh Ross, Norman Geisler, J.P. Moreland, Walter Kaiser. It is the dominant position at many evangelical seminaries (Dallas, Talbot, Trinity, Denver) that reject both YEC literalism and theistic evolution.`,
        verses: ['Gen 1:1', 'Gen 1:2–31', 'Ps 90:4', '2 Pet 3:8', 'Ps 104:5–9', 'Job 38:4–11', 'Heb 11:3', 'Rom 1:20', 'Col 1:15–17'],
      },
      {
        name: 'Theistic Evolution / Evolutionary Creationism',
        stance: 'affirm',
        position: `Evolutionary Creationism (the term preferred by most contemporary advocates over "theistic evolution," which they regard as misleading) holds that God created through the evolutionary processes that science describes — that the universe is 13.8 billion years old, the earth 4.5 billion years old, life developed through 3.8 billion years of biological evolution, and humans share common ancestry with other primates and indeed all living organisms — but that God is the ultimate Creator who set this whole process in motion, sustains it in being, and providentially superintends it toward his purposes.
      <br><br>
      The position is grounded in the conviction that the natural world reveals God's creative wisdom (Romans 1:20; Psalm 19:1) and that since natural science investigates the natural world, scientific findings rightly understood will not contradict biblical truth rightly understood. When apparent conflicts arise, either the science is wrong, or the biblical interpretation is wrong, or both — but truth cannot contradict truth.
      <br><br>
      The major contemporary institutional voice is <strong>BioLogos</strong>, founded in 2007 by <strong>Francis Collins</strong> (the geneticist who led the Human Genome Project, served as Director of the National Institutes of Health 2009–2021, and was the namesake of the President's Council of Advisors on Science). Collins's <em>The Language of God</em> (2006) is the most widely-read evangelical defence of evolutionary creationism.
      <br><br>
      Other major evolutionary creationist voices: <strong>Denis Alexander</strong> (Cambridge, <em>Creation or Evolution: Do We Have to Choose?</em> 2008); <strong>N.T. Wright</strong> (Anglican biblical scholar, generally sympathetic); <strong>John Polkinghorne</strong> (Anglican physicist-theologian, deceased 2021); <strong>Alister McGrath</strong> (Oxford, multiple works); <strong>Deborah Haarsma</strong> (current President of BioLogos); <strong>Karl Giberson</strong>; <strong>John Walton</strong> (his "cosmic temple" view is compatible with both old-earth creationism and evolutionary creationism); <strong>Tim Keller</strong> (with public sympathies, though carefully avoiding doctrinal certainty); <strong>C.S. Lewis</strong> (in earlier generation, generally sympathetic).
      <br><br>
      The position on Adam and Eve is contested even among evolutionary creationists. Options include: (1) Adam and Eve as a real historical couple chosen by God from among the earliest humans (specially endowed with the imago Dei); (2) Adam and Eve as representatives of an early human population; (3) Adam and Eve as literary figures conveying theological truth without strict historical reference; (4) Adam and Eve as a real historical couple but understood within a population (population genetics suggests humans descend from a population of at least several thousand, not a single original pair — making strict monogenesis problematic).
      <br><br>
      Major evangelical theological treatments engaging Adam and the historical question: <strong>Denis Alexander's <em>Creation or Evolution</em></strong>. <strong>Peter Enns's <em>The Evolution of Adam</em></strong> (2012) — controversial, departs from traditional evangelical position. <strong>Joshua Swamidass's <em>The Genealogical Adam and Eve</em></strong> (2019) — a more recent attempt to reconcile a historical Adam and Eve with mainstream evolutionary biology and population genetics.
      <br><br>
      Acceptance: high among Anglican biblical scholars and theologians, mainline Protestant scholars generally, Catholic scientists and theologians, many evangelical biologists; lower among evangelical pastors and laypeople; very low in fundamentalist Baptist and independent church circles.`,
        verses: ['Gen 1:1–31', 'Gen 2:7', 'Ps 19:1–6', 'Ps 104', 'Prov 8:22–31', 'John 1:1–3', 'Col 1:15–17', 'Rom 1:20', 'Heb 11:3'],
      },
      {
        name: 'Intelligent Design (ID)',
        stance: 'nuanced',
        position: `Intelligent Design is not strictly a theological position but a philosophical and scientific argument that some features of the natural world are best explained by an intelligent cause rather than by unguided natural processes. ID claims to be empirically detectable without making theological claims about who the designer is.
      <br><br>
      The movement is centred at the <strong>Discovery Institute</strong> in Seattle (founded 1990; the Center for Science and Culture launched 1996). Major figures and works:
      <br><br>
      <strong>Phillip Johnson's <em>Darwin on Trial</em></strong> (1991) — a Berkeley law professor's critique of evolutionary biology as bad science, often credited as launching the ID movement.
      <br><br>
      <strong>Michael Behe's <em>Darwin's Black Box</em></strong> (1996) — a Lehigh University biochemist's argument that certain cellular systems exhibit "irreducible complexity" that cannot evolve gradually. Behe's later <em>The Edge of Evolution</em> (2007) and <em>Darwin Devolves</em> (2019).
      <br><br>
      <strong>William Dembski's <em>The Design Inference</em></strong> (1998) — a mathematician's attempt to formalise the detection of design through statistical inference based on specified complexity.
      <br><br>
      <strong>Stephen Meyer's <em>Signature in the Cell</em></strong> (2009) — argues that the information content in DNA is best explained by intelligent design rather than chemical evolution. <em>Darwin's Doubt</em> (2013) extends the argument to the Cambrian explosion.
      <br><br>
      ID is in significant tension with mainstream science. The 2005 <strong>Kitzmiller v. Dover Area School District</strong> ruling held that ID is not science but a form of religion that cannot be taught in US public school science classes. The mainstream scientific community (the American Association for the Advancement of Science, the National Academy of Sciences) has uniformly rejected ID as failing standard scientific methodology.
      <br><br>
      Theologically, ID is compatible with multiple Christian positions on origins. Some ID proponents are Young Earth Creationists; some are Old Earth Creationists; some are even theistic evolutionists who think ID's case for design within evolutionary processes is sound. ID is therefore not a fourth fully separate position but a methodological commitment that can be attached to other origins frameworks.
      <br><br>
      Critics from evangelical evolutionary creationism (Francis Collins, BioLogos generally) argue that ID conflates the question of <em>whether</em> God designed creation (which all Christians affirm) with the question of <em>how</em> God designed (which they argue is properly a scientific question). They concern that ID concedes scientific ground unnecessarily and may damage Christian credibility when its specific claims are scientifically disconfirmed.
      <br><br>
      ID has been most influential among evangelical philosophers and apologists, less so among evangelical biologists. It has had some influence in Catholic, Orthodox, and Jewish circles as a non-denominational design argument.`,
        verses: ['Ps 19:1–6', 'Ps 139:13–14', 'Rom 1:20', 'Job 38:4–11', 'Prov 8:22–31', 'Heb 11:3', 'John 1:1–3', 'Acts 17:24–28'],
      },
    ],
    keyVerses: ['Gen 1:1', 'Gen 1:1–31', 'Gen 1:5', 'Gen 1:26–28', 'Gen 2:4–25', 'Gen 5:1–32', 'Gen 7:19–24', 'Exod 20:11', 'Exod 31:17', 'Ps 19:1–6', 'Ps 90:4', 'Ps 104:5–9', 'Ps 139:13–14', 'Prov 8:22–31', 'Job 38:4–11', 'John 1:1–3', 'Acts 17:24–28', 'Rom 1:20', 'Rom 5:12–21', 'Col 1:15–17', 'Heb 11:3', '2 Pet 3:8', 'Matt 19:4–5', 'Mark 10:6'],
    historicalNote: 'Archbishop James Ussher\'s Annals of the World (1650) gave Western Christianity the famous 4004 BC creation date that the Authorised Version Bibles eventually printed as a marginal note. Darwin\'s On the Origin of Species (1859) and The Descent of Man (1871) precipitated the modern crisis. The 1925 Scopes "Monkey Trial" in Dayton, Tennessee, brought the question to American public consciousness. Henry Morris and John Whitcomb\'s The Genesis Flood (1961) launched modern Young Earth Creationism. Pope Pius XII\'s Humani Generis (1950) opened space for Catholic engagement with evolution. Pope John Paul II\'s 1996 statement to the Pontifical Academy of Sciences described evolution as "more than a hypothesis." The BioLogos Foundation was launched by Francis Collins in 2007. The 2005 Kitzmiller v. Dover ruling barred ID from US public school science classrooms. The Ark Encounter in Williamstown, Kentucky (Ken Ham\'s Answers in Genesis) opened in 2016 as the largest Young Earth Creationist installation in the world. Recent decades have seen evangelicalism becoming more openly diverse on this question, with major figures (Tim Keller, John Lennox, William Lane Craig) publicly endorsing positions other than YEC.',
    relatedTopics: ['hell', 'salvation-works', 'sola-scriptura'],
  },

  {
    id: 'eschatology',
    name: 'The Millennium & End Times',
    icon: '🌅',
    controversy: 78,
    category: 'Last Things',
    desc: 'Is Christ\'s thousand-year reign of Revelation 20 a literal future kingdom on earth (premillennialism), a present spiritual reign of Christ from heaven (amillennialism), or the present age of gospel triumph leading to Christ\'s return (postmillennialism)? Will the Church be raptured before the great tribulation, after it, or not at all in that specific sense?',
    definition: `<p><strong>Eschatology</strong> (from Greek <em>eschatos</em>, "last") is the doctrine of the last things — the second coming of Christ, the millennium, the resurrection, the final judgement, heaven and hell, the new creation. The Christian traditions agree on the broad framework (Christ will return, judge, raise the dead, establish his eternal kingdom) but disagree sharply on the timing and nature of the millennium and the events surrounding the parousia.</p>
      <p>The three main millennial positions:</p>
      <p><strong>Premillennialism</strong>: Christ returns <em>before</em> a literal thousand-year kingdom on earth. After his return, Satan is bound, the dead in Christ are raised, and Christ reigns from Jerusalem. After the millennium, Satan is released for a final rebellion, then final judgement and new creation.</p>
      <p><strong>Amillennialism</strong>: The "thousand years" is symbolic — it refers to the present church age, in which Christ reigns spiritually from heaven through his Word and Spirit. Satan is bound in a sense that limits his power. There is no future earthly millennium distinct from the present age; Christ's return inaugurates the eternal state directly.</p>
      <p><strong>Postmillennialism</strong>: Christ returns <em>after</em> a long age of gospel triumph in which the world is increasingly Christianised. The "millennium" is a golden age of Christian civilization before the parousia. After this age, Christ returns to consummate his kingdom.</p>
      <p>Within premillennialism, the further question of the <strong>rapture</strong> divides dispensationalists (pretribulational rapture — Christ secretly raptures the Church before a seven-year tribulation; then returns in glory at the end of the tribulation) from historic premillennialists (posttribulational rapture — Christ returns once, after the tribulation; the Church is gathered to him at that single coming).</p>`,
    subtopics: [
      { id: 'es-millennium', label: 'The thousand years (Rev 20)' },
      { id: 'es-rapture', label: 'The rapture' },
      { id: 'es-tribulation', label: 'The great tribulation' },
      { id: 'es-preterist', label: 'Preterism (already-fulfilled)' },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'affirm',
        position: `Catholic eschatology is amillennial in its essential structure. The Catechism of the Catholic Church §§668–682 and §§1020–1060 outline the Catholic vision: Christ presently reigns from heaven (CCC §668, citing Ephesians 1:20–22); the Church lives now in the "messianic kingdom" that has been "given over" but is not yet consummated (CCC §671); the millennium of Revelation 20 is not a future earthly thousand years but the present age of the Church.
      <br><br>
      CCC §676 explicitly addresses chiliasm (the literal millennial reading): "The Church has rejected even modified forms of this falsification of the kingdom to come under the name of millenarianism, especially the 'intrinsically perverse' political form of a secular messianism."
      <br><br>
      The Catholic eschatological structure: (1) at death, individual judgement; (2) the present age of the Church under the reign of the ascended Christ; (3) the second coming of Christ (the parousia); (4) the general resurrection; (5) the final judgement; (6) the new heavens and new earth (Revelation 21–22). There is no distinct "millennial kingdom" between the present age and the eternal state.
      <br><br>
      The historical Catholic position rejected millennialism as early as the 4th century. The Council of Ephesus (431 AD) condemned the millenarianism of <strong>Apollinaris</strong>. Augustine's <em>City of God</em> Book XX (c. 425 AD) gave the classical Catholic reading: the thousand years of Revelation 20 is the present age of the Church between Christ's first coming and his second; Satan is "bound" in the sense that he can no longer prevent the gospel from spreading to the nations.
      <br><br>
      The rapture (pretribulational or otherwise) is absent from Catholic theology. The Catholic understanding of 1 Thessalonians 4:16–17 ("the dead in Christ will rise first; then we who are alive... will be caught up together with them in the clouds to meet the Lord in the air") is that this describes the single second coming of Christ, at which all the dead in Christ are raised and all living believers are gathered. It is not a separate, prior, secret event.
      <br><br>
      The Catholic understanding of the antichrist and tribulation is more spiritualised and historical than dispensational. Various tribulations have come upon the Church through history; the final antichrist (1 John 2:18; 2 Thessalonians 2:3–10) will be the consummation of evil before Christ's return, but the focus is on the final judgement rather than on a literal seven-year period preceded by a rapture.
      <br><br>
      The 1992 Catechism does not endorse a particular detailed eschatological scenario but affirms the essential Catholic structure: Christ will return in glory to judge the living and the dead; the dead will be raised; the kingdom will be consummated; God will be all in all (CCC §§1038–1060).`,
        verses: ['Matt 24:30–31', 'Matt 25:31–46', '1 Thess 4:13–18', '2 Thess 2:1–12', 'Rev 20:1–6', 'Rev 21:1–8', '1 Cor 15:20–28', 'Acts 1:11'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'affirm',
        position: `Orthodox eschatology is also essentially amillennial in structure, though Orthodox theology is generally more cautious about systematic eschatological speculation than Western theology. The Orthodox liturgical life is profoundly eschatological — every Divine Liturgy is the foretaste of the eschatological banquet, the eighth day, the kingdom that is and is to come — but Orthodox theology resists detailed prophetic charts and timeline calculations.
      <br><br>
      The Orthodox understanding: Christ presently reigns from heaven; the Church is the kingdom in its inaugural form, growing toward its consummation; the parousia (second coming) will inaugurate the general resurrection, the final judgement, and the new creation.
      <br><br>
      Orthodox theology generally rejects:
      <br><br>
      <strong>(1)</strong> A literal millennial kingdom distinct from the present church age (which is the chiliasm rejected by the early Church).
      <br><br>
      <strong>(2)</strong> A pretribulational rapture (which is regarded as a Protestant innovation foreign to patristic eschatology).
      <br><br>
      <strong>(3)</strong> Detailed identifications of the antichrist with specific contemporary political figures or institutions.
      <br><br>
      <strong>(4)</strong> Postmillennial gradualism that expects a golden age of Christian civilisation before Christ returns.
      <br><br>
      The Orthodox tradition includes a strong sense of <em>kairos</em> — the present moment as eschatologically charged — alongside the conviction that the timing of the parousia is in God's hand and not subject to human calculation. "But concerning that day or that hour, no one knows" (Mark 13:32).
      <br><br>
      The patristic tradition includes some millennial-leaning voices (Justin Martyr, Irenaeus, Tertullian — all of whom held some form of premillennialism in the second and early third centuries) and the more strongly amillennial voices that prevailed after the 4th century (Augustine in the West, the Cappadocians and Chrysostom in the East).
      <br><br>
      The Russian Orthodox apocalyptic tradition has been particularly rich — the Old Believer schism after Patriarch Nikon's reforms (1652–66) was partly eschatologically motivated; various Russian Orthodox writers (Vladimir Soloviev's <em>A Brief Tale of the Antichrist</em>, 1899/1900) have produced apocalyptic literature. But these have been individual writings rather than dogmatic teaching.
      <br><br>
      The Orthodox tradition's emphasis on the present-eschatological character of the Eucharist — "Thy kingdom come" is fulfilled now in liturgical participation — provides a distinctively realised eschatology that contrasts with both dispensationalist futurism and the more this-worldly postmillennialism.`,
        verses: ['Matt 24:30–31', 'Matt 25:31–46', 'Mark 13:32', '1 Thess 4:13–18', '1 Cor 15:20–28', 'Rev 20:1–6', 'Rev 21:1–8', 'Acts 1:11'],
      },
      {
        name: 'Reformed (Amillennial)',
        stance: 'affirm',
        position: `Amillennialism has been the dominant position in confessional Reformed theology since the Reformation. The Westminster Confession (1646), Chapter XXXIII, sketches an essentially amillennial eschatology without using the term: Christ has appointed a day to judge the world; the wicked will go into everlasting torment, the righteous into everlasting life; no specific millennial kingdom is envisioned between the present age and the final judgement.
      <br><br>
      Major Reformed amillennial treatments: <strong>Geerhardus Vos's <em>The Pauline Eschatology</em></strong> (1930) — the foundational modern Reformed work on biblical eschatology. <strong>Anthony Hoekema's <em>The Bible and the Future</em></strong> (1979) — the most influential 20th-century Reformed amillennial systematic treatment. <strong>Cornelis Venema's <em>The Promise of the Future</em></strong> (2000). <strong>Kim Riddlebarger's <em>A Case for Amillennialism</em></strong> (2003, rev. 2013).
      <br><br>
      The amillennial reading of Revelation 20: Revelation is a symbolic vision, not a chronological account. The "thousand years" represents the long present age of the gospel, between Christ's first coming and his return. Satan was "bound" at the cross (Matthew 12:29; Colossians 2:14–15) in the sense that he can no longer prevent the gospel from going to the nations (Revelation 20:3 specifies the binding's purpose: "so that he should deceive the nations no longer"). The "first resurrection" (Revelation 20:4–6) is the spiritual resurrection of believers in regeneration (or, on some accounts, the entry into heaven of departed saints between death and the final resurrection); the "second resurrection" is the bodily resurrection of all the dead at Christ's return.
      <br><br>
      Crucial exegetical commitments: (1) Revelation employs apocalyptic symbolism not literalist chronology; the recapitulating structure of the seven major sections of Revelation (rather than a single chronological sequence) governs how chapter 20 relates to chapters 19 and 21. (2) The New Testament repeatedly speaks of a single second coming, a single general resurrection, a single final judgement — not two phases separated by a thousand years (John 5:28–29; Acts 24:15; 2 Peter 3:10; 1 Corinthians 15:22–24). (3) Christ's kingdom has already been inaugurated; he reigns now from the right hand of the Father (Acts 2:32–36; Hebrews 1:3, 13; Ephesians 1:20–22). There is no need for a separate future millennial kingdom.
      <br><br>
      The "two-age" structure of New Testament eschatology (this age and the age to come — Matthew 12:32; Luke 18:30; 20:34–35; Ephesians 1:21; Hebrews 6:5) leaves no room for a third intermediate age (a millennial kingdom). The age to come is the eternal state; the present age is the church age; there is no separate millennium.
      <br><br>
      Amillennialism is dominant in: the Reformed denominations broadly (PCA, OPC, URCNA, CRC, RCA, PCUSA); Lutheran theology generally; mainline Anglican theology; classical Reformed Baptist theology; most Roman Catholic and Orthodox theology.`,
        verses: ['Matt 12:28–29', 'Matt 12:32', 'Acts 2:32–36', 'Acts 24:15', '1 Cor 15:22–28', 'Eph 1:20–22', 'Col 2:14–15', '2 Pet 3:10', 'John 5:28–29', 'Rev 20:1–6'],
      },
      {
        name: 'Reformed (Postmillennial)',
        stance: 'affirm',
        position: `Postmillennialism — the view that Christ returns <em>after</em> a long age of gospel triumph in which the world is gradually Christianised — was a major Reformed position in earlier centuries and has experienced revival in recent decades.
      <br><br>
      The historic Reformed postmillennial tradition includes <strong>Jonathan Edwards</strong>, <strong>Iain Murray</strong> (modern), <strong>B.B. Warfield</strong>, <strong>Charles Hodge</strong>, <strong>A.A. Hodge</strong>, <strong>Loraine Boettner</strong> (<em>The Millennium</em>, 1957), and large segments of Reformed Christianity from the 17th century into the early 20th century.
      <br><br>
      The contemporary revival of Reformed postmillennialism has been driven by <strong>Christian Reconstructionism</strong> — the movement founded by <strong>Rousas John Rushdoony</strong> (1916–2001) and developed by <strong>Greg Bahnsen</strong>, <strong>Gary North</strong>, <strong>Kenneth Gentry</strong>, and others. Christian Reconstructionism combines postmillennialism with theonomy (the view that Old Testament civil law remains binding in its general equity for nations today) and a commitment to building Christian civilization through gospel transformation of every sphere — family, church, state, business, education.
      <br><br>
      <strong>Kenneth Gentry's <em>He Shall Have Dominion</em></strong> (1992, rev. 2010) is the major modern Reformed postmillennial treatment. <strong>Keith Mathison's <em>Postmillennialism: An Eschatology of Hope</em></strong> (1999) gives the more moderate Reformed postmillennial position without the theonomic commitments.
      <br><br>
      Postmillennial exegesis emphasises: (1) the Great Commission (Matthew 28:18–20) — Christ has been given <em>all</em> authority in heaven and on earth; the Church's mission is to disciple <em>nations</em>, not just individuals. The mission will succeed. (2) Old Testament prophecies of a transformed world (Isaiah 2:2–4; 11:9 — "the earth will be full of the knowledge of the Lord as the waters cover the sea"; Habakkuk 2:14; Daniel 2:35, 44 — the kingdom of God grows from a small stone into a great mountain that fills the whole earth). (3) Romans 11:25–32 — the eventual ingathering of "all Israel" and "all the Gentiles" implies a future age of gospel success. (4) 1 Corinthians 15:24–25 — Christ reigns "until he has put all his enemies under his feet" — implies progressive subjugation through history, not a sudden eschatological reversal.
      <br><br>
      Postmillennialists are typically optimistic about the long-term future of the gospel mission; they reject the dispensational and amillennial pessimism that expects the world to grow worse until Christ returns. The kingdom of God advances; the gospel triumphs; the nations are gradually discipled; a long golden age of Christian civilization precedes the parousia.
      <br><br>
      Postmillennialism declined sharply in the early 20th century — World War I, the rise of theological liberalism, the collapse of cultural Christianity in the West, and the rise of dispensationalism all undermined postmillennial optimism. Its current revival in some Reformed circles is tied to renewed cultural confidence and the conviction that biblical eschatology requires more than pessimistic withdrawal.`,
        verses: ['Matt 28:18–20', 'Matt 13:31–33', 'Isa 2:2–4', 'Isa 11:9', 'Hab 2:14', 'Dan 2:35,44', 'Rom 11:25–32', '1 Cor 15:24–25', 'Ps 2:7–9', 'Ps 110:1–2'],
      },
      {
        name: 'Historic Premillennial',
        stance: 'nuanced',
        position: `Historic premillennialism — sometimes called "classic" or "covenantal" premillennialism, in contrast to dispensational premillennialism — holds that Christ returns once, after the great tribulation, before a literal earthly thousand-year reign. It rejects the dispensational distinction between Israel and the Church, the pretribulational rapture, and the rigid Israel/Church program of dispensationalism.
      <br><br>
      The position has ancient credentials. Justin Martyr (<em>Dialogue with Trypho</em> 80, c. 155 AD): "I and others, who are right-minded Christians on all points, are assured that there will be a resurrection of the dead, and a thousand years in Jerusalem, which will then be built, adorned, and enlarged." Irenaeus (<em>Against Heresies</em> V.32–35, c. 180 AD) gave the major patristic systematic premillennialism — Christ would return; the dead in Christ would be raised; the saints would reign with him on earth for a thousand years before the final judgement. Tertullian (<em>Against Marcion</em> III.24) likewise.
      <br><br>
      After Augustine's amillennial reading prevailed in the 4th-5th centuries, premillennialism became marginal in Western theology until the 17th century. It revived among Puritan post-Reformation theologians and among Protestants generally in the 19th and 20th centuries.
      <br><br>
      Major modern historic premillennial voices: <strong>George Eldon Ladd</strong> at Fuller Theological Seminary (1911–82) — his <em>The Blessed Hope</em> (1956) and <em>The Presence of the Future</em> (1974) are the foundational modern works. <strong>Don Carson</strong>, generally sympathetic. <strong>Wayne Grudem</strong> (his <em>Systematic Theology</em>, 1994, articulates historic premillennialism). <strong>John Piper</strong>, sympathetic. <strong>Craig Blomberg</strong>. <strong>Robert Mounce</strong>'s commentary on Revelation.
      <br><br>
      Key differences from dispensational premillennialism:
      <br><br>
      <strong>(1)</strong> Single second coming. Christ returns once, after the tribulation. There is no separate pretribulational rapture. 1 Thessalonians 4:13–17 describes Christ's single return; "we who are alive will be caught up" is part of this single event, not a prior secret event.
      <br><br>
      <strong>(2)</strong> Israel and the Church. Historic premillennialism reads "Israel" in Romans 9–11 and elsewhere as referring to ethnic Israel (not just the Church), but does not maintain a sharp Israel/Church distinction. The Church is the people of God in Christ; ethnic Israel will be brought into the Church through future conversion (Romans 11:25–32). One people of God ultimately, with ethnic Israel having a special place in the divine plan.
      <br><br>
      <strong>(3)</strong> The millennium. After Christ's return and the resurrection of the just, Christ reigns from earth (perhaps from Jerusalem, though this is not always emphasised) for a literal thousand years. The wicked dead remain in the grave; the saints reign with Christ; Satan is bound. At the end of the millennium, Satan is released for a final rebellion; then the final judgement; then the new creation.
      <br><br>
      Adoption: significant among evangelical biblical scholars (especially New Testament specialists); moderately influential at Fuller, Trinity, Gordon-Conwell, and similar evangelical seminaries; less common in popular evangelicalism (where dispensational premillennialism dominates).`,
        verses: ['1 Thess 4:13–17', 'Matt 24:21–31', 'Rev 19:11–21', 'Rev 20:1–10', 'Rev 20:11–15', 'Rom 11:25–32', '1 Cor 15:22–28', '2 Pet 3:10–13'],
      },
      {
        name: 'Dispensational Premillennial',
        stance: 'affirm',
        position: `Dispensational premillennialism, originating with John Nelson Darby in the 1830s and reaching its mature form through C.I. Scofield (1909), Lewis Sperry Chafer at Dallas Theological Seminary, John Walvoord, Charles Ryrie, J. Dwight Pentecost, Tim LaHaye, and Hal Lindsey, has been the dominant eschatology of American evangelicalism for over a century.
      <br><br>
      The full dispensational system:
      <br><br>
      <strong>(1) Pretribulational rapture.</strong> Before the seven-year tribulation, Christ comes secretly for his Church. The dead in Christ are raised; living believers are translated; both are taken to be with Christ (1 Thessalonians 4:13–17 — read as a separate event from the public second coming). The rapture is imminent — it could happen at any moment.
      <br><br>
      <strong>(2) The seven-year tribulation.</strong> After the rapture, a seven-year period of unprecedented divine judgement on the earth begins. The antichrist arises (Daniel 9:27 read as a future seven-year covenant; 2 Thessalonians 2:3–10; Revelation 13). The temple in Jerusalem is rebuilt; sacrifices are reinstituted; the antichrist desecrates the temple at the midpoint of the seven years (Matthew 24:15; Daniel 9:27). The second half is the "great tribulation" — three and a half years of catastrophic judgement (Revelation 6–18). During this period, 144,000 sealed Jewish witnesses (Revelation 7) and "the great multitude" of tribulation saints (Revelation 7:9–17) are saved.
      <br><br>
      <strong>(3) The second coming (Revelation 19).</strong> At the end of the tribulation, Christ returns publicly and visibly with his saints (those raptured earlier) and the angels. He destroys the antichrist and his armies at Armageddon. The Old Testament saints and the tribulation martyrs are raised.
      <br><br>
      <strong>(4) The millennial kingdom (Revelation 20:1–6).</strong> Christ binds Satan and reigns from Jerusalem for a literal thousand years. The Old Testament prophetic promises to Israel are fulfilled literally — the Temple is rebuilt (Ezekiel 40–48), sacrifices may be reinstituted as memorial, the boundaries of the land of Israel reach from the Nile to the Euphrates, Christ reigns from David's throne in Jerusalem. The nations come to Jerusalem to worship; peace is established; the curse is lifted in part.
      <br><br>
      <strong>(5) The final rebellion (Revelation 20:7–10).</strong> Satan is released; a final rebellion is gathered; Satan and his followers are destroyed; the wicked dead are raised for the great white throne judgement.
      <br><br>
      <strong>(6) The new heavens and new earth (Revelation 21–22).</strong> The eternal state begins.
      <br><br>
      Key texts and arguments: <strong>1 Thessalonians 4:13–17</strong> as a separate rapture event distinct from the second coming. <strong>2 Thessalonians 2:7–8</strong> — "the restrainer" being taken out of the way before the lawless one is revealed (often read as the Spirit-indwelt Church being raptured before the antichrist arises). <strong>Revelation 3:10</strong> — Christ's promise to the Philadelphian church to "keep you from the hour of trial" (read as the Church being kept out of the tribulation entirely, not just preserved through it). <strong>Daniel 9:24–27</strong> — the seventieth week of Daniel (the seven-year tribulation) is yet future; the Church Age is a "parenthesis" between the 69th and 70th weeks.
      <br><br>
      <strong>Cultural influence:</strong> the Scofield Reference Bible (1909, multiple revisions), Hal Lindsey's <em>The Late Great Planet Earth</em> (1970, the bestselling non-fiction book of the 1970s), Tim LaHaye and Jerry Jenkins's Left Behind series (1995–2007, 65+ million copies), Dallas Theological Seminary, the Bible Institute Movement, the Bible Believer's Bible Commentary, the Word of Faith and Pentecostal movements broadly, and most independent Baptist Bible churches.
      <br><br>
      Adoption: dominant in independent Baptist and Bible church movements; very high in Southern Baptist circles (though declining among younger SBC scholars); high in Pentecostal and Charismatic movements; high in Calvary Chapel; lower in Reformed Baptist circles; minimal in mainline Protestant, Catholic, and Orthodox theology.`,
        verses: ['Dan 9:24–27', 'Matt 24:15–31', '1 Thess 4:13–18', '2 Thess 2:1–12', 'Rev 3:10', 'Rev 4–18', 'Rev 19:11–21', 'Rev 20:1–10', 'Ezek 40–48', 'Rom 11:25–29', 'Zech 12–14'],
      },
      {
        name: 'Preterist',
        stance: 'nuanced',
        position: `Preterism (from Latin <em>praeter</em>, "past") holds that most or all of New Testament prophecy was fulfilled in the first century, particularly in the events surrounding the Roman destruction of Jerusalem and the Temple in 70 AD. The "great tribulation," the "coming of the Son of Man" in Matthew 24, and large portions of Revelation describe past events, not future ones.
      <br><br>
      <strong>Partial preterism</strong> (the more widely-held form) sees most of the Olivet Discourse (Matthew 24, Mark 13, Luke 21) and much of Revelation as fulfilled in 70 AD, while maintaining that Christ's future bodily second coming, the general resurrection, and the final judgement remain future. Partial preterism is compatible with amillennialism, postmillennialism, or even some forms of premillennialism.
      <br><br>
      Major partial preterist voices: <strong>R.C. Sproul</strong> (<em>The Last Days According to Jesus</em>, 1998) — the most influential popular-level statement. <strong>Kenneth Gentry</strong> (his postmillennialism is paired with partial preterism). <strong>Gary DeMar</strong>. <strong>James B. Jordan</strong>. <strong>N.T. Wright</strong> in some respects (his reading of the Olivet Discourse in <em>Jesus and the Victory of God</em>, 1996).
      <br><br>
      <strong>Full preterism</strong> (also called "hyper-preterism" or "consistent preterism" by its advocates) holds that <em>all</em> New Testament prophecy was fulfilled in 70 AD, including the second coming, the resurrection, and the final judgement. There is no future bodily second coming; we are now in the eternal kingdom. Full preterism is regarded as heretical by virtually all mainstream Christian traditions because it denies the future bodily return of Christ (Acts 1:11; 1 Corinthians 15) and the future bodily resurrection. Its main contemporary voice is Don Preston.
      <br><br>
      Key preterist exegesis: <strong>Matthew 24:34</strong> — "Truly I tell you, this generation will not pass away until all these things have taken place." Jesus is speaking to his disciples in c. 30 AD; "this generation" is their own generation; the things Jesus predicted (the destruction of Jerusalem, the Temple, the dispersion of the Jews) all happened by 70 AD — within their own generation. <strong>Matthew 16:28</strong> — "Truly I tell you, there are some standing here who will not taste death until they see the Son of Man coming in his kingdom." This was fulfilled in the events of 70 AD, when the Son of Man came in judgement against Jerusalem. <strong>Revelation 1:1; 22:6, 7, 10, 12, 20</strong> — repeated emphasis that the events of Revelation "must soon take place." This was true if the events were 70 AD-related; it's been 2,000 years and counting if the events are future.
      <br><br>
      The strength of partial preterism is its historical specificity — the events of 66–70 AD (the Jewish-Roman War, the destruction of the Temple, the dispersion of the Jewish people) really did happen within Jesus's predicted generation, and they really did transform the religious world of the first century. The weakness of full preterism is that it denies what most Christians regard as the core eschatological hope — the future bodily return of Christ.`,
        verses: ['Matt 24:34', 'Matt 16:28', 'Matt 24:1–28', 'Mark 13:1–30', 'Luke 21:5–24', 'Rev 1:1', 'Rev 22:6,7,10,12,20', 'Acts 1:11'],
      },
    ],
    keyVerses: ['Matt 24:1–51', 'Matt 25:31–46', 'Mark 13:1–37', 'Luke 21:5–28', 'John 5:28–29', 'Acts 1:11', 'Acts 24:15', '1 Cor 15:20–28', '1 Cor 15:50–58', '1 Thess 4:13–18', '2 Thess 2:1–12', '2 Pet 3:3–13', 'Rev 19:11–21', 'Rev 20:1–15', 'Rev 21:1–22:21', 'Dan 9:24–27', 'Dan 12:1–13', 'Zech 12–14', 'Rom 11:25–32', 'Matt 28:18–20'],
    historicalNote: 'Justin Martyr, Irenaeus, and Tertullian held premillennial positions in the 2nd-3rd centuries. Augustine\'s amillennial reading (City of God Book XX, c. 425 AD) prevailed in the West. Joachim of Fiore (1135–1202) reintroduced apocalyptic speculation. The Reformation continued the amillennial tradition. John Nelson Darby developed dispensationalism in the 1830s. The Scofield Reference Bible (1909) and Dallas Theological Seminary (1924) institutionalised it. Hal Lindsey\'s The Late Great Planet Earth (1970) sold 35+ million copies. Tim LaHaye and Jerry Jenkins\'s Left Behind series (1995–2007) sold 65+ million copies. R.C. Sproul\'s The Last Days According to Jesus (1998) reintroduced partial preterism to American evangelicalism. The October 7, 2023 Hamas attack and the Gaza war have intensified eschatological speculation in American evangelical circles.',
    relatedTopics: ['israel-church', 'hell', 'creation'],
  },

  {
    id: 'abortion',
    name: 'Abortion & the Status of the Unborn',
    icon: '🤰',
    controversy: 95,
    category: 'Ethics',
    desc: 'When does human life begin — at conception, at implantation, at viability, at birth? What moral status does the unborn have, and what are the legitimate Christian responses when its life conflicts with the life or wellbeing of the mother?',
    definition: `<p>The question of <strong>abortion</strong> sits at the intersection of biology, philosophy, theology, and law. All Christian traditions affirm the sanctity of human life made in the image of God (Genesis 1:27). They disagree on three related questions: (1) <em>When does a human person, as the bearer of full moral status, begin to exist?</em> (2) <em>Under what circumstances, if any, is the deliberate termination of pregnancy morally permissible?</em> (3) <em>What ought the law to be?</em></p>
      <p>The historic Christian position, with virtually unbroken witness from the first-century <em>Didache</em> ("Do not murder a child by abortion") through the entire patristic, medieval, and Reformation traditions, has condemned abortion as a grave sin. This historic consensus held essentially intact across Catholic, Orthodox, and Protestant Christianity until the second half of the 20th century, when mainline Protestant denominations and some Catholic theological voices began to develop more permissive positions.</p>
      <p>The contemporary divide:</p>
      <p><strong>Catholic, Orthodox, evangelical, and most global Christianity</strong>: the unborn child has full human moral status from conception (or at least from implantation); deliberate abortion is gravely wrong; exceptions are very narrow (typically only where indirect, where the principle of double effect applies — e.g., in treating ectopic pregnancy).</p>
      <p><strong>Mainline Protestant traditions (PCUSA, ELCA, UMC pre-disaffiliations, Episcopal Church, UCC, Disciples of Christ)</strong>: vary, with many supporting abortion access while acknowledging moral complexity and grief; the unborn has real but possibly developing moral status.</p>`,
    subtopics: [
      { id: 'ab-personhood', label: 'When does personhood begin?' },
      { id: 'ab-exceptions', label: 'Exceptions: rape, life of mother, fetal anomaly' },
      { id: 'ab-law', label: 'Law and policy' },
      { id: 'ab-pastoral', label: 'Pastoral response' },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'deny',
        position: `Catholic teaching is unequivocal: direct abortion is "intrinsically evil" — never morally permissible regardless of intention, circumstance, or consequence. The Catechism of the Catholic Church §§2270–2275 gives the systematic statement.
      <br><br>
      CCC §2270: "Human life must be respected and protected absolutely from the moment of conception. From the first moment of his existence, a human being must be recognized as having the rights of a person — among which is the inviolable right of every innocent being to life."
      <br><br>
      CCC §2271: "Since the first century the Church has affirmed the moral evil of every procured abortion. This teaching has not changed and remains unchangeable. Direct abortion, that is to say, abortion willed either as an end or as a means, is gravely contrary to the moral law." The Catechism cites the <em>Didache</em> 2.2 (c. 90 AD): "You shall not kill the embryo by abortion and shall not cause the newborn to perish."
      <br><br>
      <strong>Excommunication</strong>: CCC §2272 — "Formal cooperation in an abortion constitutes a grave offense. The Church attaches the canonical penalty of excommunication to this crime against human life. 'A person who procures a successful abortion incurs excommunication <em>latae sententiae</em>' [automatic excommunication], 'by the very commission of the offense.'" Canon 1398 of the 1983 Code of Canon Law.
      <br><br>
      Pope John Paul II's encyclical <strong><em>Evangelium Vitae</em></strong> ("The Gospel of Life," March 25, 1995) gave the most extensive papal statement: "I declare that direct abortion, that is, abortion willed as an end or as a means, always constitutes a grave moral disorder, since it is the deliberate killing of an innocent human being. This doctrine is based upon the natural law and upon the written Word of God, is transmitted by the Church's Tradition and taught by the ordinary and universal Magisterium" (§62). This declaration is widely understood as having been made <em>ex cathedra</em> — though not in the strictest technical sense, the teaching is regarded as infallibly proposed by the ordinary universal magisterium.
      <br><br>
      <strong>Double effect</strong>: Catholic moral theology permits medical interventions whose <em>primary</em> intended effect saves the mother's life, even if the <em>foreseen but unintended</em> secondary effect is the death of the unborn child. The classic case is the surgical removal of a fallopian tube containing an ectopic pregnancy — the surgery's intent is to remove diseased tissue threatening the mother's life; the death of the embryo is a foreseen but not intended consequence. This is morally distinct from direct abortion (intentional killing of the unborn child as the means or end). Similarly, the treatment of a cancerous uterus during pregnancy that may result in fetal death is permitted under double effect principles.
      <br><br>
      The Catholic Church's historic teaching has not always specified the precise moment when human personhood begins. Augustine, Aquinas, and many medieval theologians distinguished between the "unformed" and "formed" embryo, holding that ensoulment occurred at quickening (when fetal movement begins). This delayed-ensoulment view, however, did not justify abortion in those earlier centuries — abortion at any stage was condemned. The modern Catholic position simplifies the issue: from conception forward, the embryo has the full status of a human person, with full moral rights.
      <br><br>
      The political theology of abortion in the United States has made the Catholic Church one of the leading institutional voices in the pro-life movement. The US Conference of Catholic Bishops has consistently advocated against abortion access. Catholic Charities, Catholic hospitals, the March for Life, the Knights of Columbus, and many lay organisations have institutionalised the Catholic pro-life witness.`,
        verses: ['Exod 21:22–25', 'Ps 139:13–16', 'Ps 51:5', 'Jer 1:5', 'Luke 1:39–45', 'Gen 1:27', 'Gen 9:5–6', 'Job 31:15'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'deny',
        position: `Orthodox teaching is uniformly and strongly against abortion. The Orthodox Church has held the same position as the Catholic Church on this question through the entire history of the undivided Church — abortion is forbidden as the killing of a human being.
      <br><br>
      The <em>Didache</em> 2.2 (c. 90 AD), preserved in the Orthodox tradition along with the Catholic, gave the foundational early Christian command: "You shall not kill the embryo by abortion and shall not cause the newborn to perish." Subsequent patristic witnesses are unanimous: Athenagoras (<em>Plea for the Christians</em> 35), Tertullian (<em>Apology</em> 9), Hippolytus (<em>Refutation of All Heresies</em> 9.7), Basil the Great (Letter 188, Canon 2), John Chrysostom (<em>Homilies on Romans</em> 24).
      <br><br>
      Basil the Great's <em>First Canonical Letter</em> (Letter 188, c. 374 AD), Canon 2: "The woman who purposely destroys her unborn child is guilty of murder. With us there is no nice enquiry as to its being formed or unformed." This is the canonical Orthodox position.
      <br><br>
      The Holy and Great Council of Crete (June 2016), in the document "The Mission of the Orthodox Church in Today's World," addressed abortion explicitly: "The Church always teaches that human life begins from conception. Therefore, abortion, that is, the deliberate killing of the unborn child, is a sin."
      <br><br>
      The Basis of the Social Concept of the Russian Orthodox Church (2000), Section XII.2: "The Orthodox Church in no case can approve of abortion. Without rejecting women who have had an abortion, the Church does not give blessing to it... The wide spread and justification of abortion in modern society are seen by the Church as a threat to the future of mankind and a clear sign of moral degradation."
      <br><br>
      <strong>Exceptions and pastoral approach</strong>: Orthodox theology, like Catholic, recognises the principle of double effect for medical interventions whose primary intent is to save the mother's life. The deliberate, direct termination of pregnancy is forbidden; medical treatments that may indirectly result in fetal death (where the death is foreseen but not intended) are permitted.
      <br><br>
      In cases of rape, the unborn child has the same moral status as any other unborn child — but the pastoral response involves caring deeply for the trauma of the mother and providing whatever support is possible.
      <br><br>
      Orthodox jurisdictions have varied somewhat in their canonical disciplinary response. Basil's canon prescribed 10 years' excommunication from communion for a woman who procured an abortion, though Basil himself noted that this was severe and could be modified by pastoral discretion. Contemporary Orthodox practice varies — some jurisdictions follow strict canonical penalties, others apply pastoral economy.
      <br><br>
      The major Orthodox pro-life voices: Stanley Harakas, John Breck (<em>The Sacred Gift of Life</em>, 1998), Christopher Knight, the Orthodox Christians for Life organisation.`,
        verses: ['Exod 21:22–25', 'Ps 139:13–16', 'Jer 1:5', 'Luke 1:39–45', 'Gen 1:27', 'Wisdom 12:5', 'Deut 30:19', 'Prov 6:16–17'],
      },
      {
        name: 'Evangelical / Baptist',
        stance: 'deny',
        position: `American evangelicalism became the most politically organised pro-life movement in the world from the late 1970s onward. The Baptist Faith & Message (2000), Article XV ("The Christian and the Social Order"): "We should speak on behalf of the unborn and contend for the sanctity of all human life from conception to natural death."
      <br><br>
      The transformation of evangelicalism on abortion is itself a significant historical phenomenon. In the early 1970s, the Southern Baptist Convention had passed resolutions (1971, 1974, 1976) that permitted abortion in cases of rape, incest, fetal deformity, and danger to the mother's emotional and physical health. <em>Christianity Today</em> in 1971 endorsed legalised abortion in limited cases. The 1973 <em>Roe v. Wade</em> decision was met with relatively muted evangelical reaction.
      <br><br>
      The shift began in the late 1970s, driven by <strong>Francis Schaeffer</strong> and <strong>C. Everett Koop</strong>'s <em>Whatever Happened to the Human Race?</em> (1979, book and five-part film). Schaeffer argued that abortion was inseparable from a broader cultural rejection of the imago Dei and the sanctity of human life; that evangelicals could not in good conscience remain neutral. The 1980s saw the formation of the Moral Majority (Jerry Falwell, 1979), Concerned Women for America (Beverly LaHaye, 1979), and Focus on the Family's political wing, all making opposition to abortion central to the new "Religious Right" coalition.
      <br><br>
      The SBC's 1980 resolution reversed earlier positions and called for a constitutional amendment prohibiting abortion. The 1984 SBC resolution further hardened the position. By 2003 the SBC Resolution called for protection of human life from "the moment of fertilization."
      <br><br>
      Major evangelical pro-life institutions: <strong>Focus on the Family</strong> (James Dobson), <strong>Family Research Council</strong>, <strong>National Right to Life Committee</strong>, <strong>Americans United for Life</strong> (with significant evangelical input), <strong>Susan B. Anthony List</strong>, <strong>Live Action</strong> (Lila Rose), <strong>Care Net</strong> and <strong>Heartbeat International</strong> (the two largest pregnancy resource center networks, providing free pregnancy testing, counselling, and material support to women considering abortion).
      <br><br>
      Major evangelical theological treatments: <strong>Scott Klusendorf's <em>The Case for Life</em></strong> (2009, rev. 2022); <strong>Francis Beckwith's <em>Defending Life</em></strong> (2007); <strong>Randy Alcorn's <em>ProLife Answers to ProChoice Arguments</em></strong> (1992, multiple revisions); <strong>R.C. Sproul's <em>Abortion: A Rational Look at an Emotional Issue</em></strong> (1990).
      <br><br>
      The <strong>Dobbs v. Jackson Women's Health Organization</strong> decision (June 24, 2022) overturned Roe v. Wade, returning abortion policy to the states. The evangelical pro-life movement reached its central political goal after nearly fifty years of organising. The post-Dobbs era has surfaced internal evangelical debate about the path forward — whether to pursue federal abortion bans, state-by-state efforts, or stronger maternal support policies.
      <br><br>
      Within evangelicalism, exceptions for the life of the mother are nearly universally permitted (and typically understood under double-effect principles); exceptions for rape and incest are debated (the SBC's official position does not permit them; many evangelical leaders disagree); exceptions for fatal fetal anomalies are debated (most pro-life positions hold that the unborn child's right to life is not contingent on prognosis).`,
        verses: ['Ps 139:13–16', 'Jer 1:5', 'Luke 1:39–45', 'Ps 51:5', 'Exod 21:22–25', 'Gen 1:27', 'Job 31:15', 'Isa 49:1', 'Gen 25:22–23'],
      },
      {
        name: 'Reformed / Presbyterian (conservative)',
        stance: 'deny',
        position: `The conservative Reformed and Presbyterian bodies — the PCA, OPC, URCNA, RPCNA, RCUS, and most international Reformed churches — uniformly oppose abortion as the unjustified taking of human life made in God's image.
      <br><br>
      The PCA Position Paper on Abortion (1978, reaffirmed) declares: "We hold that the Bible teaches that all human life is sacred from the moment of conception to the moment of natural death." The PCA Book of Church Order does not include abortion in its lists of disciplinable offences (church discipline is not the primary tool), but the PCA understanding is that direct procured abortion is morally indistinguishable from murder.
      <br><br>
      The Reformed exegetical case follows traditional pro-life arguments: <strong>Psalm 139:13–16</strong> — "you knit me together in my mother's womb"; the personal pronouns and conscious activity attributed to the unborn child indicate full personhood. <strong>Jeremiah 1:5</strong> — God's calling of Jeremiah "before I formed you in the womb." <strong>Luke 1:39–45</strong> — John the Baptist leaping in Elizabeth's womb at six months gestation, attributed personhood and Spirit-filled activity. <strong>Exodus 21:22–25</strong> — the lex talionis applies in cases of injury to a pregnant woman that causes premature birth or fetal death, suggesting that the unborn child's death is treated as analogous to the death of any other human being.
      <br><br>
      The Reformed natural-law argument: human nature is determined by the Creator's design; God designs the unborn child as a member of the human species from conception; the unborn child therefore has full human dignity by virtue of being human, not by virtue of any acquired capacity that may or may not be present at various developmental stages.
      <br><br>
      <strong>Civil law and theonomy</strong>: some Reformed positions (especially those influenced by Christian Reconstructionism) argue that civil law should prohibit abortion as murder, following the general equity of the Mosaic law. Most Reformed positions are less explicitly theonomic but support pro-life civil law on natural-law and creational grounds.
      <br><br>
      Major Reformed and broadly Reformed treatments: <strong>John Frame</strong> (<em>The Doctrine of the Christian Life</em>, 2008, Chapter 26); <strong>Tim Keller</strong> (sympathetic, with characteristic pastoral nuance); <strong>R.C. Sproul</strong> (<em>Abortion: A Rational Look</em>, 1990); <strong>D.A. Carson</strong>; <strong>John Piper</strong> (frequent sermons and writings); <strong>Wayne Grudem</strong> (<em>Politics — According to the Bible</em>, 2010, Chapter 6).
      <br><br>
      The PCUSA, by contrast, has a quite different position (see below).
      <br><br>
      The <strong>Westminster Confession (1646), Chapter XXIII</strong> ("Of the Civil Magistrate"), historically obligated the magistrate to suppress blasphemy and to promote the true religion. Modern Reformed Christians vary on the implications of this for abortion law, with most supporting a civil prohibition while recognising the distinction between sin and crime in the natural-law tradition.`,
        verses: ['Ps 139:13–16', 'Jer 1:5', 'Luke 1:39–45', 'Exod 21:22–25', 'Ps 51:5', 'Gen 1:26–27', 'Gen 9:5–6', 'Prov 6:16–17', 'Isa 49:1'],
      },
      {
        name: 'Mainline Protestant',
        stance: 'varies',
        position: `Mainline Protestant denominations have generally moved away from absolute prohibitions on abortion since the 1960s, while remaining theologically diverse and continuing to acknowledge the moral significance of the unborn life.
      <br><br>
      <strong>The Presbyterian Church (USA)</strong>: PCUSA General Assembly statements (1970, 1972, 1992, 2006, 2010, 2018) have consistently supported "the right of women to make moral choices, including abortion, in the freedom of Christian conscience." The 2006 General Assembly statement: "The PCUSA reaffirms that abortion is a matter of conscience and a moral choice... while recognising the gravity of such decisions and the spiritual support required."
      <br><br>
      <strong>The Episcopal Church</strong>: General Convention resolutions (1967, 1976, 1988, 1994, 2018, 2022) have affirmed "the wellbeing and dignity of the woman and the wellbeing of the unborn child" while declining to declare abortion intrinsically wrong. The 2018 resolution explicitly opposed legislation restricting abortion access.
      <br><br>
      <strong>The Evangelical Lutheran Church in America</strong>: the 1991 social statement "Abortion" articulates a nuanced position recognising the value of unborn life while supporting access to abortion in cases where the woman's wellbeing is significantly at stake. The ELCA opposes abortion as a method of birth control and as gender selection.
      <br><br>
      <strong>The United Church of Christ</strong>: has the most clearly pro-choice institutional position among mainline Protestants. The UCC General Synod has supported abortion rights since 1971.
      <br><br>
      <strong>The Disciples of Christ</strong>: similar to UCC.
      <br><br>
      <strong>The United Methodist Church</strong>: had a more complex position. The 1972 Social Principles permitted abortion in cases of "tragic conflicts of life with life," carefully qualifying. Through 2024, the UMC Social Principles included nuanced language acknowledging the moral significance of the unborn while permitting abortion in defined circumstances. The 2024 General Conference adopted revised Social Principles. The Global Methodist Church (departed UMC since 2022) takes a strongly pro-life position.
      <br><br>
      The mainline Protestant theological case for permissive positions has several strands. <strong>(1)</strong> The biblical texts (Exodus 21:22–25; Psalm 139; Jeremiah 1:5; Luke 1:39–45) are read as expressing love for the unborn without specifying personhood beginning at conception or condemning all abortions absolutely. <strong>(2)</strong> The tradition's distinction between "formed" and "unformed" embryo (Augustine, Aquinas) shows that the church has not always treated all stages of pregnancy as equivalent. <strong>(3)</strong> The complex realities of pregnancy (rape, incest, severe fetal abnormalities, danger to the mother's life and health) require moral discernment, not absolute prohibition. <strong>(4)</strong> The well-being of women — including their ability to make conscientious decisions about their own bodies and futures — is a serious theological consideration.
      <br><br>
      Within mainline Protestantism there are conservative dissenters. The Presbyterian Lay Committee, the Anglican Communion's traditionalist wing, the Confessing Movement within the UMC (before its disaffiliations), and various Lutheran movements within the ELCA have maintained traditional pro-life positions while remaining in mainline denominations.`,
        verses: ['Exod 21:22–25', 'Ps 139:13–16', 'Gen 1:26–27', 'Luke 1:39–45', 'Matt 25:31–46', 'Jas 1:27', 'Mic 6:8'],
      },
      {
        name: 'Anglican / Episcopal',
        stance: 'varies',
        position: `Anglican positions on abortion vary by province and within provinces. The Lambeth Conference has not produced a binding pan-Anglican statement.
      <br><br>
      The Lambeth Conference 1958, Resolution 115: "The conference believes that the sanctity of human life requires that the deliberate termination of pregnancy is justified only by the most serious medical or moral considerations." This relatively moderate position has been the closest thing to a pan-Anglican statement.
      <br><br>
      The Lambeth Conference 1968, Resolution 22 ("Responsible Parenthood"): "The Conference reaffirms its statement at Lambeth 1958 on family planning, contraception, sterilization, and abortion."
      <br><br>
      The Lambeth Conference 1988, Resolution 26: "This Conference reaffirms its strong opposition to abortion as a means of birth control, family planning, sex selection or any reason of mere convenience."
      <br><br>
      <strong>The Episcopal Church (USA)</strong>: has moved to a strongly pro-choice institutional position. General Convention resolutions (1967, 1976, 1988, 1994, 2018, 2022) have supported abortion rights while acknowledging moral complexity. The 2022 General Convention reaffirmed support for "the dignity of every human being and the right of every individual to make decisions regarding their own bodies."
      <br><br>
      <strong>The Anglican Church of Canada</strong>: has been similarly pro-choice in its institutional positions.
      <br><br>
      <strong>The Church of England</strong>: has been more moderate. The House of Bishops has consistently expressed concern about high abortion rates while accepting the legal availability of abortion under the Abortion Act 1967. Major Church of England theologians (John Stott, Rowan Williams in particular contexts, current bishops varying widely) have produced significant pro-life statements while acknowledging the complexities of pastoral care.
      <br><br>
      <strong>The Anglican Church in North America (ACNA)</strong>, the Global South provinces, the Anglican Realignment provinces (Nigeria, Uganda, Kenya, Rwanda): uniformly pro-life on a Catholic/evangelical model.
      <br><br>
      Major Anglican voices: <strong>John Stott</strong> (consistently pro-life across his long career), <strong>John Macquarrie</strong> (more permissive), <strong>Oliver O'Donovan</strong> (<em>Begotten or Made?</em>, 1984, gives a sophisticated Anglican theological treatment of reproductive technologies and abortion), <strong>N.T. Wright</strong> (sympathetic to pro-life concerns).`,
        verses: ['Exod 21:22–25', 'Ps 139:13–16', 'Jer 1:5', 'Luke 1:39–45', 'Gen 1:26–27', 'Matt 25:31–46', 'Mic 6:8'],
      },
    ],
    keyVerses: ['Gen 1:26–27', 'Gen 9:5–6', 'Gen 25:22–23', 'Exod 20:13', 'Exod 21:22–25', 'Lev 24:17', 'Job 10:8–12', 'Job 31:15', 'Ps 22:9–10', 'Ps 51:5', 'Ps 139:13–16', 'Prov 6:16–17', 'Prov 24:11–12', 'Isa 49:1', 'Jer 1:5', 'Matt 25:31–46', 'Luke 1:13–17', 'Luke 1:39–45', 'Mic 6:8'],
    historicalNote: 'The Didache (c. 90 AD) gave the earliest extant Christian condemnation of abortion: "You shall not kill the embryo by abortion." This position was unanimous across patristic, medieval, and Reformation theology. The transformation in mainline Protestant attitudes came rapidly between 1965 and 1975. Roe v. Wade (January 22, 1973) constitutionalised abortion access in the United States. Pope John Paul II\'s Evangelium Vitae (March 25, 1995) gave the most authoritative modern Catholic statement. The "rise of the Religious Right" in evangelical America (1979–80) was substantially driven by Francis Schaeffer\'s "Whatever Happened to the Human Race?" (1979). Dobbs v. Jackson Women\'s Health Organization (June 24, 2022) overturned Roe and returned abortion policy to the states — fulfilling a near-50-year pro-life movement objective and inaugurating a new phase of American abortion politics.',
    relatedTopics: ['homosexuality', 'womens-ordination', 'creation'],
  },

  {
    id: 'sabbath',
    name: 'The Sabbath: Saturday or Sunday?',
    icon: '📅',
    category: 'Worship & Sacraments',
    controversyLevel: 7,
    desc: 'Which day is the Christian Sabbath — the seventh-day Saturday of the Hebrew Scriptures, or the first-day Sunday of the New Testament? And what kind of observance does the Lord\'s Day require?',
    historicalNote: 'The earliest Christian sources (Didache 14, Justin Martyr c. 155, Pliny the Younger c. 112) describe Christians gathering on "the Lord\'s Day" (Sunday, the day of resurrection) rather than the Jewish Sabbath. The Council of Laodicea (c. 364) explicitly required Christians to rest on Sunday rather than Saturday. The Saturday-Sabbath position re-emerged most strongly through the Seventh-day Adventists in the 19th century (Ellen G. White, 1827–1915). The Sunday observance question — strict Sabbatarianism vs. flexible Lord\'s Day vs. no required observance — separately divided Reformed (Puritan strict Sabbath) from Lutheran (more flexible) from continental Reformed practice.',
    keyVerses: ['Gen 2:2-3', 'Exod 20:8-11', 'Deut 5:12-15', 'Mark 2:27-28', 'Matt 12:1-12', 'Acts 20:7', '1 Cor 16:2', 'Col 2:16-17', 'Rev 1:10', 'Heb 4:9-11'],
    definition: '<p>The Sabbath debate has two distinct questions that are often run together. First: which day? The Hebrew Scriptures command the seventh day (Saturday) as the day of rest in the fourth commandment. The New Testament shows Christians from the earliest period gathering on the first day (Sunday) for worship, breaking of bread, and offering — the day of the resurrection.</p><p>Second: what kind of observance? Strict Sabbatarians (especially in the Puritan tradition) hold that the fourth commandment\'s requirement of rest applies in full to the Christian Lord\'s Day — no work, no commerce, no recreation, the entire day set aside for worship and rest. More flexible positions hold that the Sabbath principle of rest and worship is observed in Christian practice without the detailed Mosaic restrictions. A third position (held by some Lutherans, by most modern evangelicals, and by Catholics in their characteristic way) holds that the ceremonial-Sabbath law is fulfilled in Christ and what remains is the church\'s discipline of regular corporate worship.</p>',
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'nuanced',
        position: 'The Catechism teaches that Sunday — the Lord\'s Day — has replaced the Jewish Sabbath for Christians, fulfilling its meaning in the light of the resurrection (CCC 2174–2188). Sunday is a day of obligation: Catholics are bound to attend Mass and to abstain from work or activities that hinder worship and rest. The change of day from Saturday to Sunday is held to be by apostolic tradition. The Catechism cites the witness of the early Fathers — Ignatius, Justin Martyr — to show that Sunday observance is from the beginning of the Christian movement.',
        verses: ['Acts 20:7', '1 Cor 16:2', 'Rev 1:10'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'nuanced',
        position: 'The Orthodox Church observes Sunday as the Lord\'s Day — the day of the resurrection, the "eighth day" that is also the first day of the new creation. Sunday is the primary day of Eucharistic worship, with the Divine Liturgy being the central act of Orthodox life. Saturday retains a particular significance in Orthodox practice — commemorations of the departed, Saturday liturgies, the Saturday-Sunday Vespers cycle — but it is not the Sabbath in the sense of the day of rest replacing Sunday.',
        verses: ['Rev 1:10', 'Acts 20:7'],
      },
      {
        name: 'Anglican / Episcopal',
        stance: 'nuanced',
        position: 'Anglican tradition observes Sunday as the Lord\'s Day. Article VII of the Thirty-Nine Articles addresses the relationship of Old Testament law to Christian practice. Different Anglican traditions have practiced different degrees of Sunday observance: the English Sabbatarian tradition (heavily influenced by Puritanism) maintained strict Sunday rest into the 20th century; broader and high-church Anglicans have practiced more flexible observance centered on Sunday worship.',
        verses: ['Acts 20:7', 'Col 2:16-17'],
      },
      {
        name: 'Lutheran',
        stance: 'nuanced',
        position: 'Luther distinguished sharply between the ceremonial Sabbath of the Old Testament (fulfilled in Christ, no longer binding) and the moral principle of regular worship and rest (which Christian liberty has chosen to observe on Sunday). The Augsburg Confession (Article XXVIII) explicitly addresses the Sabbath: human ordinances about days are not binding on conscience, but Christians keep Sunday by Christian liberty for the sake of good order. The Lutheran tradition has generally been less strict about Sunday observance than the Reformed.',
        verses: ['Col 2:16-17', 'Rom 14:5-6'],
      },
      {
        name: 'Presbyterian / Reformed',
        stance: 'affirm',
        position: 'The Westminster Confession (XXI.7-8) gives the strictest Reformed position: the Sabbath commandment is moral, binding on all people in all ages; the day was changed from the seventh day (Saturday) to the first day (Sunday, "the Christian Sabbath") at the resurrection of Christ. The whole day is to be a "holy rest" — from worldly employments and recreations, given to public and private worship, works of necessity and mercy excepted. The Puritan Sabbatarian tradition, expressed in figures like Nicholas Bownd (1595) and the Westminster divines, has shaped Scottish, Dutch, and American Reformed practice profoundly.',
        verses: ['Exod 20:8-11', 'Isa 58:13-14', 'Acts 20:7'],
      },
      {
        name: 'Baptist',
        stance: 'nuanced',
        position: 'The Baptist tradition has been divided. The Second London Baptist Confession (1689) followed Westminster in affirming the Christian Sabbath as the first day with full Sabbath obligation. American Baptists, particularly Southern Baptists, have generally observed Sunday but with significantly less strict observance than Reformed Sabbatarians. The Seventh-Day Baptists (since the 17th century) — a small but historically significant Baptist group — observe the Saturday Sabbath. Their existence anticipated and influenced the later Adventist Saturday-Sabbath movement.',
        verses: ['Acts 20:7', 'Col 2:16-17'],
      },
      {
        name: 'Methodist / Wesleyan',
        stance: 'nuanced',
        position: 'John Wesley taught the perpetual obligation of the Sabbath, observed on Sunday by Christian practice. The early Methodist movement was strongly Sabbatarian — Sunday rest, attendance at multiple services, no commerce or recreation. Modern Methodism has moderated this significantly. The Lord\'s Day is observed as the central day of worship, but strict Sabbath observance has largely yielded to a less rigorous pattern in most Methodist communities.',
        verses: ['Acts 20:7', 'Heb 10:25'],
      },
      {
        name: 'Pentecostal',
        stance: 'nuanced',
        position: 'Pentecostal traditions universally observe Sunday as the Lord\'s Day but generally do not maintain strict Sabbatarian discipline. The emphasis is on the day of corporate worship — typically multiple Sunday services with significant time given to praise, preaching, and prayer ministry — rather than on the cessation of work in the Reformed Sabbath sense. Wednesday services and other midweek gatherings are common; the Pentecostal week is less Sunday-centred and more multi-day-centred than the traditional Reformed pattern.',
        verses: ['Acts 2:1', 'Heb 10:25'],
      },
      {
        name: 'Anabaptist / Mennonite',
        stance: 'nuanced',
        position: 'The Anabaptist tradition observes Sunday as the Lord\'s Day in keeping with the broader Christian practice but has tended to focus less on Sabbatarian discipline and more on the gathered worship of the congregation. The Schleitheim Confession (1527) does not address Sabbath observance specifically; subsequent Anabaptist tradition has typically followed the broader Protestant practice of Sunday worship with less developed Sabbath theology than the Reformed tradition.',
        verses: ['Acts 20:7', 'Heb 10:25'],
      },
      {
        name: 'Seventh-day Adventist',
        stance: 'deny',
        position: 'The SDA position is the most distinctive: the fourth commandment requires observance of the seventh day (Saturday) as the Sabbath; the change to Sunday observance was an unauthorized post-apostolic development; Saturday Sabbath observance is binding on all Christians as part of the unchanging moral law. SDA Sabbath observance runs from sunset Friday to sunset Saturday and involves abstention from secular work, attendance at worship, fellowship, and rest. Ellen G. White\'s writings ground this in both scriptural argument (the fourth commandment as part of the eternal moral law) and prophetic identification (the Sabbath as the "seal of God" of Revelation 7 and the Sunday as the "mark of the beast" of Revelation 13–14).',
        verses: ['Exod 20:8-11', 'Isa 66:23', 'Rev 14:6-12'],
      },
      {
        name: 'Seventh-Day Baptist',
        stance: 'deny',
        position: 'The Seventh-Day Baptist position predates Adventism by two centuries. SDBs observe the seventh-day Sabbath on biblical grounds (the fourth commandment as moral law; the example of Christ and the apostles) without the Adventist apocalyptic framework. The Seventh-Day Baptist tradition argues that the change from Saturday to Sunday lacks biblical warrant — no New Testament text changes the day; the early church\'s gradual shift was extra-scriptural and not normative.',
        verses: ['Exod 20:8-11', 'Mark 2:27-28', 'Acts 13:42-44'],
      },
      {
        name: 'Non-denominational',
        stance: 'varies',
        position: 'Non-denominational churches universally observe Sunday as the day of corporate worship but practice typically follows the broader evangelical pattern of less-strict Sabbatarianism. Sunday is the day to attend church; the rest of the day may include family time, rest, recreation, or even work depending on personal conviction and circumstance. The Sabbath as a strict day-of-rest discipline is rarely emphasized in non-denominational teaching.',
        verses: ['Acts 20:7', 'Col 2:16-17'],
      },
    ],
    related: ['baptism', 'eucharist', 'church-authority'],
  },

 {
    id: 'mary',
    name: 'Mary, Mother of Our Lord',
    icon: '🌹',
    category: 'Person of Christ',
    controversyLevel: 9,
    desc: 'No figure has divided Catholic and Protestant Christianity more sharply than the mother of Jesus. From Theotokos at Ephesus (431) to the Immaculate Conception (1854) and the Assumption (1950), Catholic and Orthodox Christians have honoured Mary with progressively higher titles; most Protestants have progressively reduced her role.',
    historicalNote: 'The Council of Ephesus (431) affirmed Mary as Theotokos ("God-bearer") against Nestorius. The title was first a Christological claim (Christ is one person, not two) but it elevated Mary by implication. The doctrine of Mary as Aeiparthenos ("Ever-Virgin") was reinforced at the Second Council of Constantinople (553). Pius IX defined the Immaculate Conception in <em>Ineffabilis Deus</em> (December 8, 1854); Pius XII defined the bodily Assumption in <em>Munificentissimus Deus</em> (November 1, 1950) — the last ex cathedra papal definition to date. Luther maintained substantial Marian piety personally throughout his life; Calvin accepted perpetual virginity (commentary on Matthew 1:25). The strong Protestant minimisation of Mary is largely a post-Reformation development that accelerated in the 19th and 20th centuries as Catholic Marian doctrine grew more elaborate.',
    keyVerses: ['Luke 1:26–38', 'Luke 1:39–56', 'Luke 2:34–35', 'John 2:1–11', 'John 19:25–27', 'Acts 1:14', 'Rev 12:1–6', 'Gen 3:15', 'Isa 7:14', 'Matt 13:55–56'],
    definition: '<p>The Marian debate has several distinct layers that are often run together. The earliest — affirmed by virtually all historic Christianity — is that Mary is the mother of Jesus Christ, who is both God and man; therefore Mary is the Mother of God (<em>Theotokos</em>). The Council of Ephesus (431) made this binding on all Christians, and Protestant confessions typically affirm it.</p><p>The second layer is Mary\'s <em>perpetual virginity</em> — that she had no other children after Jesus. This was held by virtually all major Reformers (Luther, Calvin, Zwingli) and was the dominant Protestant view into the 18th century. Most modern Protestants reject it, citing the Gospel references to Jesus\' "brothers" (Matt 13:55; Mark 6:3), which Catholics and Orthodox interpret as cousins or as Joseph\'s children from a prior marriage.</p><p>The third layer — held by Catholics, not by Orthodox — is the <em>Immaculate Conception</em>: Mary was conceived without original sin. Distinctively Catholic, defined 1854.</p><p>The fourth is the <em>Assumption</em> (Catholic, 1950) / <em>Dormition</em> (Orthodox tradition): she did not see corruption; her body was taken up to heavenly glory.</p><p>The fifth is <em>Marian intercession and devotion</em> — the rosary, the Hail Mary, asking Mary to pray for us. Catholic and Orthodox practice; Protestant rejection.</p>',
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'affirm',
        position: 'The Catholic Church confesses the full range of Marian doctrines: Theotokos (Council of Ephesus, 431), perpetual virginity (Lateran Council, 649), the Immaculate Conception (Pius IX, <em>Ineffabilis Deus</em>, 1854) — Mary was preserved from original sin from the moment of her conception by a special grace from God — and the bodily Assumption (Pius XII, <em>Munificentissimus Deus</em>, 1950). The Catechism (CCC 484–511, 963–975) sets out the full Marian theology: Mother of God, Mother of the Church, Mediatrix of all graces (a title under continued theological development), and the New Eve. Marian devotion — the Rosary, the Litany of Loreto, Marian feast days, pilgrimages to Lourdes, Fátima, and Guadalupe — is encouraged. Veneration of Mary (hyperdulia, the highest level of veneration short of latria, the worship reserved to God alone) is distinguished sharply from worship.',
        verses: ['Luke 1:28', 'Luke 1:42', 'Luke 1:48', 'Gen 3:15', 'Rev 12:1'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'affirm',
        position: 'The Orthodox Church honours Mary as Theotokos, Aeiparthenos (Ever-Virgin), Panagia (All-Holy), and Mother of God — "more honourable than the Cherubim, and beyond compare more glorious than the Seraphim," in the prayer of St Romanos. Orthodox doctrine differs from Catholic on two points: (1) the Immaculate Conception is <em>not</em> affirmed — Orthodox theology holds a different account of original sin (ancestral consequence rather than inherited guilt) that makes the Catholic dogma both unnecessary and problematic; (2) the <em>Dormition</em> ("falling asleep") rather than the bodily Assumption — Orthodox tradition holds that Mary died, and three days later her body was taken up, but the mechanism is not dogmatically defined. Marian veneration in Orthodox liturgy is constant; icons of the Theotokos are central to Orthodox piety.',
        verses: ['Luke 1:28', 'Luke 1:48'],
      },
      {
        name: 'Anglican / Episcopal',
        stance: 'nuanced',
        position: 'Anglican Marian theology spans a wide spectrum. Article XV of the Thirty-Nine Articles affirms that Christ alone was without sin, which is generally read as excluding the Immaculate Conception. The Anglo-Catholic tradition (since the Oxford Movement of the 1830s) restored substantial Marian devotion — the Rosary, Marian feast days, the title Theotokos. Low-church and evangelical Anglicans minimise Marian doctrine, honouring her as the mother of Jesus but rejecting Marian devotion. Perpetual virginity is affirmed in some Anglican traditions (Cranmer, the Caroline divines) and rejected in others. The Anglican-Roman Catholic International Commission\'s <em>Mary: Grace and Hope in Christ</em> (2005) is the most sustained recent ecumenical Anglican-Catholic engagement on Mary.',
        verses: ['Luke 1:28', 'Heb 4:15'],
      },
      {
        name: 'Lutheran',
        stance: 'nuanced',
        position: 'Luther himself maintained significant Marian piety throughout his life — preaching on Mary, accepting perpetual virginity, retaining several Marian feast days in the Lutheran calendar. The Lutheran Confessions (Smalcald Articles, Formula of Concord) explicitly affirm Mary as Theotokos and Ever-Virgin. However, the Reformation principle of Christ alone as mediator (1 Tim 2:5) led Lutherans to reject Marian intercession and devotion as compromising the unique mediation of Christ. Modern Lutheran practice varies: confessional Lutherans (LCMS, WELS) retain the historical Lutheran position on Theotokos and perpetual virginity while rejecting Catholic Marian dogmas; ELCA Lutheran practice has minimal Marian content. The Immaculate Conception and Assumption are universally rejected as without biblical warrant.',
        verses: ['Luke 1:28', '1 Tim 2:5'],
      },
      {
        name: 'Presbyterian / Reformed',
        stance: 'deny',
        position: 'The Reformed tradition affirms Mary as the mother of our Lord but rejects the developed Marian doctrines of Catholicism. Calvin himself accepted perpetual virginity (<em>Harmony of the Gospels</em>, on Matthew 1:25) and called Mary "the holy Virgin." The Westminster Confession (1647), however, gives Mary minimal mention — she is the human mother of the divine Christ, no more. The Immaculate Conception and Assumption are rejected as without biblical warrant and as compromising the unique sinlessness of Christ. Marian intercession and devotion are rejected as idolatrous, violating the sole mediation of Christ (1 Tim 2:5) and the regulative principle of worship.',
        verses: ['1 Tim 2:5', 'Luke 11:27–28'],
      },
      {
        name: 'Baptist',
        stance: 'deny',
        position: 'Baptist Marian theology is minimal. Mary is honoured as the faithful mother of our Lord and as a model of obedience to God\'s call. The Catholic Marian dogmas — Immaculate Conception, Assumption, Mediatrix — are rejected as Roman corruption without biblical foundation. Perpetual virginity is generally rejected on the basis of the Gospel references to Jesus\' "brothers and sisters" (Matt 13:55–56; Mark 6:3). Marian intercession is rejected as compromising the unique mediation of Christ. Baptist worship gives Mary no special place beyond the historical narrative of the Incarnation.',
        verses: ['Matt 13:55–56', '1 Tim 2:5'],
      },
      {
        name: 'Methodist / Wesleyan',
        stance: 'nuanced',
        position: 'John Wesley affirmed Mary as "the blessed virgin" and accepted perpetual virginity. Modern Methodist theology gives Mary an honoured but limited place — the faithful mother of Jesus, a model of discipleship — without the developed Marian devotion of Catholicism. The Catholic dogmas of Immaculate Conception and Assumption are rejected. Methodist worship may include occasional Marian content (especially in liturgical Methodist traditions) but does not feature Mary as a central object of devotion.',
        verses: ['Luke 1:38', 'Luke 1:48'],
      },
      {
        name: 'Pentecostal',
        stance: 'deny',
        position: 'Pentecostal Marian theology is minimal. Mary is honoured as the mother of Jesus and as a recipient of the Spirit\'s power at the Annunciation (Luke 1:35) and at Pentecost (Acts 1:14), but Marian devotion is rejected as Catholic accretion. The Pentecostal emphasis on direct relationship with Christ and the Spirit excludes intermediary Marian roles. Catholic Marian dogmas are rejected.',
        verses: ['Luke 1:35', 'Acts 1:14'],
      },
      {
        name: 'Anabaptist / Mennonite',
        stance: 'deny',
        position: 'Anabaptist Marian theology is minimal. Mary is honoured as the mother of Jesus. A distinctive — and ultimately rejected — early Anabaptist position was that of Menno Simons (1496–1561), who held that Christ\'s flesh was not derived from Mary but was a "heavenly flesh" that passed through her. This Christology (closely tied to Melchior Hoffmann) was rejected by most other Anabaptist traditions and is no longer held by mainstream Mennonites. Modern Mennonite Marian theology is broadly Protestant.',
        verses: ['Luke 1:35'],
      },
      {
        name: 'Non-denominational',
        stance: 'deny',
        position: 'Non-denominational evangelical churches give Mary minimal theological attention. She is honoured as the mother of Jesus and as an exemplar of faith. Catholic Marian doctrines are universally rejected. Marian devotion is generally absent from non-denominational worship.',
        verses: ['Luke 1:38'],
      },
    ],
    relatedTopics: ['papacy', 'real-presence', 'sola-scriptura'],
  },

  {
    id: 'god-the-mother',
    name: 'God the Mother?',
    icon: '🌿',
    category: 'Doctrine of God',
    controversyLevel: 9,
    desc: 'Is the God of the Bible properly addressed only as Father, or does God also have a Mother aspect — or even, as the World Mission Society Church of God teaches, a separate divine Mother person? The Bible uses maternal imagery for God in striking places; feminist theology has pressed the question for half a century; and one Korean new religious movement has built its identity on the answer.',
    historicalNote: 'Maternal imagery for God appears throughout Scripture (Isaiah 49:15; Isaiah 66:13; Hosea 11:3–4; Deuteronomy 32:18; Matthew 23:37; Luke 13:34). The medieval mystic Julian of Norwich (c. 1342–after 1416) wrote extensively of "Christ our Mother" in her <em>Revelations of Divine Love</em>, without ever proposing a separate Mother God. The modern theological debate emerged in two distinct streams: (1) feminist theology (Mary Daly, <em>Beyond God the Father</em>, 1973; Rosemary Radford Ruether, <em>Sexism and God-Talk</em>, 1983; Sallie McFague, <em>Models of God</em>, 1987; Phyllis Trible, <em>God and the Rhetoric of Sexuality</em>, 1978) within mainline Protestant academic theology, arguing for revised God-language; (2) the World Mission Society Church of God (WMSCOG), founded in South Korea by Ahn Sahng-hong (1918–1985), which from the 1980s onward has identified Zahng Gil-jah (b. 1943) as the literal Mother God. The two streams are entirely independent.',
    keyVerses: ['Isa 49:15', 'Isa 66:13', 'Hos 11:3–4', 'Deut 32:18', 'Matt 23:37', 'Luke 13:34', 'Gen 1:26–27', 'Gen 3:20', 'Gal 4:26', 'Rev 22:17'],
    definition: '<p>The question has several distinct forms that should not be confused. First: <em>does the Bible use maternal imagery for God?</em> Yes — explicitly and repeatedly. Isaiah 49:15 ("Can a mother forget the baby at her breast?... Though she may forget, I will not forget you!"), Isaiah 66:13 ("As a mother comforts her child, so will I comfort you"), Hosea 11:3–4, Matthew 23:37 ("how often I have longed to gather your children together, as a hen gathers her chicks under her wings"). On this, all major Christian traditions agree.</p><p>Second: <em>does this mean God is properly named Mother as well as Father?</em> Mainstream Christianity says no — God transcends gender, and the maternal imagery is poetic/metaphorical, but the personal name by which God has revealed himself is Father (as Jesus addresses him throughout the Gospels and teaches us to do in the Lord\'s Prayer).</p><p>Third: <em>does the Bible teach a distinct Mother God person?</em> Mainstream Christianity says emphatically no. The World Mission Society Church of God (WMSCOG) and a few related Korean movements say yes — identifying Zahng Gil-jah as the divine Mother foretold in Scripture and arriving in the last days. They cite Galatians 4:26 ("Jerusalem above is free, and she is our mother"), Genesis 1:26 ("Let us make man in our image" — plural), and Revelation 22:17 ("The Spirit and the bride say, ‘Come!\'"). All major Christian bodies reject this reading as eisegesis and heresy.</p>',
    denominations: [
      {
        name: 'Roman Catholic',
        stance: 'nuanced',
        position: 'The Catechism teaches that "God transcends the human distinction between the sexes. He is neither man nor woman: he is God. He also transcends human fatherhood and motherhood, although he is their origin and standard" (CCC 239). Scripture\'s maternal imagery for God is honoured and incorporated into Catholic spirituality, but the canonical name revealed by Christ is Father. "Mother God" as a proper title or alternative person of the Godhead is rejected. The Catholic veneration of Mary as Mother of God refers exclusively to her role as bearer of Christ, not to any divine Mother person. Catholic feminist theologians (Elizabeth Johnson, <em>She Who Is</em>, 1992) have argued for richer use of maternal imagery within the Catholic tradition; the magisterium has engaged this carefully without changing the canonical address.',
        verses: ['Isa 66:13', 'Matt 6:9'],
      },
      {
        name: 'Eastern Orthodox',
        stance: 'nuanced',
        position: 'The Orthodox tradition affirms that God transcends gender; maternal imagery for God appears in the Fathers (especially in discussions of divine compassion) and in the liturgical tradition. The Holy Spirit is grammatically feminine in Hebrew (<em>Ruach</em>) and neuter in Greek (<em>Pneuma</em>); some Orthodox theologians (notably Sergei Bulgakov) developed sophisticated theologies of divine "Sophia" with feminine resonance, though Bulgakov\'s sophiology was controversial within Orthodoxy. The canonical address remains Father. Orthodox theology rejects "Mother God" as a proper alternative title and rejects any notion of a separate divine Mother person. The Theotokos — Mary, Mother of God — is honoured as the highest of creatures, but is not God.',
        verses: ['Isa 66:13', 'John 17:1'],
      },
      {
        name: 'Anglican / Episcopal',
        stance: 'varies',
        position: 'Anglican practice spans the full spectrum. The Episcopal Church (USA) and the Anglican Church of Canada have authorised liturgies using inclusive God-language ("God our Father and Mother," "the One who creates, redeems, and sustains"), though traditional Father language remains in the Book of Common Prayer. The conservative Anglican provinces (GAFCON, ACNA, Sydney) reject inclusive God-language and maintain exclusively traditional address. The Church of England has authorised optional inclusive prayers for some contexts. The Anglican Communion has not formally adjudicated the question; practice depends on province and parish.',
        verses: ['Isa 49:15', 'Matt 6:9'],
      },
      {
        name: 'Lutheran',
        stance: 'nuanced',
        position: 'God is revealed as Father in Christ; maternal imagery in Scripture is honoured as biblical but is not understood as a basis for an alternative canonical address. The Lutheran Confessions use exclusively traditional God-language. The ELCA has experimented with inclusive language in worship (the <em>Evangelical Lutheran Worship</em> hymnal includes some inclusive options); the LCMS, WELS, and confessional Lutheran bodies reject inclusive God-language. "Mother God" as an alternative person is rejected.',
        verses: ['Isa 66:13', 'Gal 4:6'],
      },
      {
        name: 'Presbyterian / Reformed',
        stance: 'deny',
        position: 'The Reformed tradition holds that God has revealed himself as Father, Son, and Holy Spirit; this is the canonical name and address. Maternal imagery in Scripture is metaphorical (anthropomorphic, like other emotive descriptions of God) and does not constitute an alternative title. The PCUSA has authorised inclusive language in some contexts, generating significant controversy; the PCA, OPC, and other confessional Reformed bodies reject inclusive God-language as a departure from the canonical address Christ taught his disciples. "Mother God" as a separate divine person is rejected as heresy.',
        verses: ['Matt 6:9', 'Eph 4:6'],
      },
      {
        name: 'Baptist',
        stance: 'deny',
        position: 'Baptist theology holds that God has revealed himself as Father — the name Jesus taught his disciples in the Lord\'s Prayer. Scripture\'s maternal similes are metaphorical and do not warrant a Mother God address. The Southern Baptist Convention and the broader Baptist tradition reject inclusive God-language and any notion of a Mother God person. The WMSCOG position is regarded as heretical.',
        verses: ['Matt 6:9', '1 Cor 8:6'],
      },
      {
        name: 'Methodist / Wesleyan',
        stance: 'varies',
        position: 'The United Methodist Church has authorised inclusive God-language in some hymnody and prayer; the traditional Father address remains dominant. Conservative Methodist bodies (Wesleyan, Free Methodist, Global Methodist) reject inclusive God-language and maintain exclusively Father address. "Mother God" as a person is rejected across the Wesleyan tradition.',
        verses: ['Matt 6:9', 'Heb 12:9'],
      },
      {
        name: 'Pentecostal',
        stance: 'deny',
        position: 'Pentecostal theology maintains the traditional Father address of God. The Spirit (occasionally feminine in some patristic and Syriac traditions) is the third Person of the Trinity, not a Mother. Inclusive God-language and any Mother God theology is rejected as departure from the apostolic gospel.',
        verses: ['Matt 6:9', 'Gal 4:6'],
      },
      {
        name: 'Non-denominational',
        stance: 'deny',
        position: 'Non-denominational evangelical churches universally maintain the traditional Father address of God. Inclusive God-language is generally rejected. "Mother God" theology — whether in feminist-theological or WMSCOG form — is rejected as outside biblical Christianity.',
        verses: ['Matt 6:9'],
      },
      {
        name: 'World Mission Society Church of God (WMSCOG)',
        stance: 'affirm',
        position: 'The WMSCOG, founded by Ahn Sahng-hong (1918–1985) in South Korea, teaches that there is both a Father God and a Mother God, who together are the "Elohim" of Genesis 1:26 ("Let us make man in our image" — held to be a plural that includes both Father and Mother). Father God appeared as Ahn Sahng-hong (regarded as the Second Coming of Christ); Mother God is identified as Zahng Gil-jah (b. 1943), called "Heavenly Mother" or "New Jerusalem Mother." Key proof-texts include Galatians 4:26 ("Jerusalem above is free, and she is our mother"); Revelation 22:17 ("The Spirit and the bride say, ‘Come!\'"); Revelation 21:9–10 (the New Jerusalem descending as a bride). WMSCOG holds that salvation in the last days requires receiving both Father God and Mother God. The movement claims ~3 million members in 175 countries (outside estimates substantially lower). All major Christian bodies — Catholic, Orthodox, Protestant, and Korean mainstream Christianity — reject the WMSCOG teaching as heretical: a misreading of Galatians 4:26 (which identifies "Jerusalem above" with the heavenly assembly of believers, not a divine Mother person); a misreading of Genesis 1:26 (the plural is variously understood as Trinitarian, royal, or a plural of deliberation, never as Father-Mother); and the deification of two specific 20th-century human persons.',
        verses: ['Gal 4:26', 'Gen 1:26', 'Rev 22:17', 'Rev 21:9–10'],
      },
    ],
    relatedTopics: ['filioque', 'atonement', 'canon'],
  },

];
// ═══════════════════════════════════════════════════════════
// PATCH 5 — MOVEMENTS array (Outside the Creeds)
// ═══════════════════════════════════════════════════════════

const MOVEMENTS = [

  // ╔══════════════════════════════════════════════════════════╗
  {
    id: 'mov-lds',
    name: 'Mormonism (Latter-day Saints)',
    icon: '📜',
    founded: '1830, by Joseph Smith Jr. (1805–1844)',
    adherents: '~17.2 million worldwide (LDS Church, 2023 figures)',
    headquarters: 'Salt Lake City, Utah',
    category: 'Restorationist',
    summary: `The Church of Jesus Christ of Latter-day Saints, founded in upstate New York in 1830 by Joseph Smith, teaches that historic Christianity fell into a Great Apostasy after the death of the apostles, and that Smith was called by God to restore the true Church. The LDS Church accepts the Bible "as far as it is translated correctly" alongside three uniquely Mormon scriptures: the Book of Mormon (1830), the Doctrine and Covenants, and the Pearl of Great Price. The Church is led by a prophet (currently Russell M. Nelson, sustained 2018) who is held to receive ongoing divine revelation, supported by the Quorum of the Twelve Apostles. Mormonism's distinctive theology — a corporeal, formerly-human God; the eternal pre-existence of human spirits; the possibility of exaltation to divine status; baptism for the dead; eternal temple marriage — places it in significant tension with the historic creeds while preserving a deep devotion to Jesus Christ as Savior.`,
    selfDescription: `<p>The LDS Church describes itself as "the restored Church of Jesus Christ," not a Protestant denomination, not a sect, but the same Church Christ established in the first century, restored through Joseph Smith after a long apostasy. The thirteen Articles of Faith (1842), composed by Smith, summarize official belief: faith in "God, the Eternal Father, and in His Son, Jesus Christ, and in the Holy Ghost" (Article 1); the Bible as the word of God "as far as it is translated correctly" together with the Book of Mormon (Article 8); belief in "the same organization that existed in the Primitive Church, namely, apostles, prophets, pastors, teachers, evangelists, and so forth" (Article 6); and the literal gathering of Israel and the building of Zion on the American continent (Article 10).</p>
    <p>Mormons consider themselves Christians and protest exclusion from that name. The official Church name was emphasized in 2018 when President Nelson urged that "Mormon" and "LDS" should be replaced with "The Church of Jesus Christ of Latter-day Saints" or "the restored Church of Jesus Christ." Worship centers on Christ; the sacrament (eucharist) is celebrated weekly; temple ordinances (endowment, sealing) are understood as participation in Christ's saving work for the living and the dead.</p>`,
    distinctives: [
      {
        title: 'The Restoration through Joseph Smith',
        body: `In 1820, the fourteen-year-old Joseph Smith reported a vision in a grove near Palmyra, New York, in which God the Father and Jesus Christ appeared to him in distinct bodily forms and told him that no existing church was Christ's true church. Subsequent visitations by the angel Moroni (beginning 1823) led Smith to golden plates buried near his home, which he translated from "Reformed Egyptian" through divine instruments (the Urim and Thummim, also called "seer stones"). The result was the Book of Mormon (1830), which Smith presented as a record of ancient Hebrew migrations to the Americas (the Nephites and Lamanites), Christ's post-resurrection ministry to them, and the eventual destruction of the Nephites c. 421 AD.`,
      },
      {
        title: 'An embodied, progressing God',
        body: `LDS theology teaches that God the Father has a physical body of flesh and bones "as tangible as man's" (Doctrine and Covenants 130:22), that he was once a human being who progressed to godhood, and that exalted humans may eventually become gods themselves. The principle is summarized in the famous couplet attributed to Lorenzo Snow, fifth President of the Church: "As man now is, God once was: as God now is, man may be." This doctrine of eternal progression frames the Father, the Son, and the Holy Ghost as three distinct beings — "one in purpose" but not one in substance, in explicit contrast with the Nicene homoousios.`,
      },
      {
        title: 'Pre-existence and eternal families',
        body: `All human beings are held to have existed as spirit children of Heavenly Father (and a Heavenly Mother) before mortal birth. Earthly life is a probation in which spirit children take on bodies and learn through experience. Through temple ordinances — particularly sealing in eternal marriage — families can remain united after death. The promise of being "sealed together for time and all eternity" is central to LDS spirituality and motivates the Church's emphasis on family life, genealogy, and temple work.`,
      },
      {
        title: 'Three degrees of glory and exaltation',
        body: `Mormonism rejects the binary heaven-or-hell model. Doctrine and Covenants 76 (a vision received by Joseph Smith and Sidney Rigdon, 1832) describes three degrees of post-mortal glory: the celestial kingdom (where God dwells, achievable through faith in Christ, ordinances, and temple covenants), the terrestrial kingdom (for honorable people who did not accept the gospel fully), and the telestial kingdom (for the wicked who eventually accept Christ after suffering). A small group ("sons of perdition") are consigned to outer darkness. Only celestial-kingdom inhabitants achieve "exaltation" — full deification.`,
      },
      {
        title: 'Continuing revelation and a living prophet',
        body: `Article 9 of Faith: "We believe all that God has revealed, all that He does now reveal, and we believe that He will yet reveal many great and important things pertaining to the Kingdom of God." The current Church President is understood to be a literal prophet, seer, and revelator. Recent revelations have included the 1978 lifting of the priesthood ban on Black men of African descent (Official Declaration 2), which had been in place since the early Brigham Young era. The principle of continuing revelation is core to the LDS self-understanding as distinct from Protestantism's sola scriptura.`,
      },
    ],
    departures: `<p>Mainstream Christianity — Catholic, Orthodox, Anglican, Lutheran, Reformed, Methodist, Baptist, Pentecostal — has historically held that the LDS Church departs from Nicene Christianity on points that the creeds defined as essential. Specifically:</p>
    <p><strong>(1) The nature of God.</strong> The First Council of Nicaea (325 AD) defined the Son as <em>homoousios</em> — of the same substance as the Father. The Athanasian Creed elaborates: "the Father is eternal, the Son eternal, and the Holy Spirit eternal... and yet there are not three eternals but one eternal." LDS theology of three separate divine beings progressing through experience, with the Father having once been human, is incompatible with this conciliar definition of the Trinity.</p>
    <p><strong>(2) The doctrine of <em>creatio ex nihilo</em>.</strong> Historic Christianity confesses that God created the universe from nothing, before which only God existed. LDS theology teaches that matter is eternal and that God organized pre-existing material, including the spirits of human beings. This is a fundamental metaphysical difference about the relationship between God and the created order.</p>
    <p><strong>(3) The closure of the canon.</strong> The historic Christian church — Catholic, Orthodox, and Protestant — recognizes the closure of public revelation with the apostolic era. The acceptance of post-biblical scriptures of equal authority to the Bible is theologically distinctive to Mormonism.</p>
    <p><strong>(4) The doctrine of exaltation.</strong> The Eastern Orthodox doctrine of <em>theosis</em> teaches that the redeemed will become "partakers of the divine nature" (2 Peter 1:4), but emphatically not that humans become gods of their own worlds. The LDS doctrine that exalted humans may become gods, found in some forms of teaching though carefully nuanced by the modern Church, has no parallel in historic Christianity.</p>
    <p>The LDS Church has historically not contested these descriptions; it has rather affirmed that historic Christianity is the version requiring correction, with the Restoration providing the necessary recovery of truths lost in the apostasy.</p>`,
    discussionQuestions: [
      {
        id: 'q1',
        title: 'Was a Restoration necessary?',
        body: `<p>The LDS Church teaches that a Great Apostasy corrupted Christianity after the apostles, requiring a restoration through Joseph Smith. Mainstream Christianity points to an unbroken succession of councils, creeds, and Spirit-led witness from Pentecost forward, and to Christ's promise in Matthew 16:18 that "the gates of hell will not prevail" against his church.</p>
        <p><strong>Did Christianity actually need restoring, or did Christ's promise to his Church preclude the possibility of a complete apostasy?</strong></p>`,
      },
      {
        id: 'q2',
        title: 'A God who was once a man',
        body: `<p>The LDS Church holds that God the Father has a physical body and was once a human being who progressed to godhood. Historic Christianity confesses God as eternal, immaterial, and unchanging — "the high and lofty One who inhabits eternity" (Isaiah 57:15).</p>
        <p><strong>Which view better accounts for the biblical witness, and what difference does it make for prayer, worship, and salvation if God is a perfected being like ourselves rather than the Wholly Other?</strong></p>`,
      },
      {
        id: 'q3',
        title: 'Additional scripture',
        body: `<p>Latter-day Saints accept the Book of Mormon, Doctrine and Covenants, and Pearl of Great Price alongside the Bible. Protestants confess <em>sola scriptura</em>; Catholics and Orthodox accept tradition but draw the canon closed at the apostolic era.</p>
        <p><strong>Can new scripture be given after the apostles? If yes, what could ever rule out further additions? If no, on what basis was the canon closed?</strong></p>`,
      },
      {
        id: 'q4',
        title: 'Theosis and exaltation',
        body: `<p>The LDS doctrine of exaltation teaches that faithful Saints may become gods themselves — "as God now is, man may be." Eastern Orthodoxy teaches <em>theosis</em>, that believers become "partakers of the divine nature" (2 Peter 1:4), participating in God without becoming gods.</p>
        <p><strong>Are these the same hope expressed in different idioms, or fundamentally different claims about what salvation finally is?</strong></p>`,
      },
      {
        id: 'q5',
        title: 'Jesus and Lucifer as spirit brothers',
        body: `<p>LDS theology holds that Jesus and Lucifer were both spirit children of Heavenly Father, with Jesus chosen as Savior and Lucifer rebelling. Historic Christianity holds the Son to be eternally begotten of the Father, of the same divine essence — not a created being of any kind, and not in any sense a brother of Satan.</p>
        <p><strong>Is the LDS framing a clarification of an obscure biblical theme, or a fundamental departure from the New Testament's portrait of Christ as the eternal Word made flesh?</strong></p>`,
      },
    ],
    keyTexts: [
      { title: 'The Book of Mormon', desc: 'Published 1830. Presented as ancient American scripture translated by Joseph Smith from golden plates. Contains the books of Nephi, Mosiah, Alma, Helaman, 3 Nephi (Christ\'s post-resurrection ministry to the Nephites), Moroni, and others.' },
      { title: 'Doctrine and Covenants', desc: 'A collection of modern revelations given through Joseph Smith and subsequent prophets. Contains key doctrinal statements including D&C 76 (three degrees of glory), 130 (God\'s embodied nature), 132 (eternal marriage and plural marriage in the early Church).' },
      { title: 'Pearl of Great Price', desc: 'Contains the Book of Moses, the Book of Abraham (translated by Joseph Smith from Egyptian papyri), Joseph Smith—History (his First Vision account), and the Articles of Faith.' },
      { title: 'The Bible (KJV)', desc: 'Accepted "as far as it is translated correctly." The Joseph Smith Translation (JST) provides revisions Smith made in the 1830s but is not the official LDS Bible.' },
    ],
    historicalResponse: `<p>Mainstream Christian assessment of Mormonism has been remarkably consistent across denominational lines. The major Christian traditions — Catholic, Orthodox, Anglican, Lutheran, Reformed, Methodist, Baptist, Pentecostal — have historically concluded that the LDS Church, despite its devotion to Jesus, does not share the historic Christian faith defined by the ecumenical creeds.</p>
    <p>The <strong>Catholic Church</strong> formally declared in 2001 (Congregation for the Doctrine of the Faith, <em>Responsum ad Propositum Dubium</em>) that LDS baptism is not valid Christian baptism, on the grounds that the LDS understanding of the Trinity differs essentially from the Christian doctrine. The <strong>Eastern Orthodox Church</strong> takes the same view. The <strong>Presbyterian Church (USA)</strong> reached a similar conclusion in 1995, as did the <strong>United Methodist Church</strong> (2000). The <strong>Southern Baptist Convention</strong> has consistently classified the LDS Church as outside historic Christianity.</p>
    <p>Major scholarly engagements: <strong>Walter Martin's <em>The Maze of Mormonism</em></strong> (1962, rev. 1978) and <em>The Kingdom of the Cults</em> (1965, multiple editions); <strong>Jerald and Sandra Tanner's</strong> extensive documentary work through the Utah Lighthouse Ministry (1960s onward); <strong>Richard Mouw</strong> (former president of Fuller Theological Seminary), who has engaged Mormonism with charity and rigor through decades of dialogue with LDS scholars; <strong>Robert Millet and Gerald McDermott</strong>'s <em>Claiming Christ: A Mormon-Evangelical Debate</em> (2007).</p>
    <p>The LDS Church has engaged these critiques in a substantial scholarly literature of its own. The <strong>Foundation for Apologetic Information and Research</strong> (FAIR) and the <strong>Neal A. Maxwell Institute</strong> at Brigham Young University produce substantial scholarship defending and developing LDS positions. Notable LDS scholars: <strong>Hugh Nibley</strong> (1910–2005), <strong>Truman Madsen</strong>, <strong>Robert Millet</strong>, <strong>Terryl Givens</strong>, <strong>Adam Miller</strong>.</p>
    <p>The contemporary relationship between mainstream Christianity and the LDS Church has been increasingly cooperative on social and political questions (religious liberty, family policy, opposition to abortion and same-sex marriage) while remaining theologically distinct.</p>`,
    historicalNote: 'Joseph Smith was murdered by a mob at Carthage Jail, Illinois, on June 27, 1844 — the LDS Church remembers him as a martyr. Brigham Young led the main body of Latter-day Saints from Illinois to the Salt Lake Valley (arrived July 1847), establishing the Utah headquarters that remain to this day. Plural marriage (polygamy), publicly acknowledged 1852, was officially discontinued in 1890 (Wilford Woodruff\'s "Manifesto" / Official Declaration 1) under intense US federal pressure. The priesthood ban on Black men of African descent (in place since the Brigham Young era) was lifted in 1978 (Official Declaration 2). The Church\'s rapid global growth in the 20th century has been driven by an extensive missionary program; over 65,000 missionaries serve at any given time.',
    relatedMovements: ['mov-jw', 'mov-cs'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  {
    id: 'mov-jw',
    name: 'Jehovah\'s Witnesses',
    icon: '🗼',
    founded: '1870s, by Charles Taze Russell (1852–1916); current organisation 1931',
    adherents: '~8.7 million active publishers worldwide (2023)',
    headquarters: 'Warwick, New York (Watch Tower Bible and Tract Society)',
    category: 'Restorationist',
    summary: `Jehovah's Witnesses emerged from the Bible Student movement founded by Charles Taze Russell in the 1870s, formally taking the name "Jehovah's Witnesses" in 1931 under Russell's successor Joseph Franklin Rutherford. They are organized under the Watch Tower Bible and Tract Society, governed by a small Governing Body in Warwick, New York. Jehovah's Witnesses reject the Trinity, the deity of Christ as traditionally understood, the immortality of the soul, the existence of hell as eternal conscious torment, and the celebration of Christmas, Easter, and birthdays. They are best known publicly for their door-to-door evangelism, refusal of blood transfusions, refusal of military service and political participation, and their use of their own translation of the Bible (the New World Translation, 1961). Active publishers must report monthly preaching hours; baptism is by full immersion, generally as an adult, and signifies entry into the worldwide congregation.`,
    selfDescription: `<p>Jehovah's Witnesses describe themselves as "the only true religion on earth," identified as such by their use of the divine name Jehovah (a Latinization of the Hebrew Tetragrammaton YHWH), their exclusive worship of Jehovah as the one true God, their unique organization patterned (they hold) on first-century Christianity, and their preaching work as required by Matthew 24:14. The publication <em>What Does the Bible Really Teach?</em> (2005), the primary introductory text for Bible studies with non-Witnesses, summarizes the core teaching: Jehovah is the Almighty God, the creator of all things; Jesus Christ is his first creation, his only-begotten Son, who came to earth as the perfect man and gave his life as a ransom; the holy spirit is Jehovah's active force, not a person; the Kingdom of God is a real heavenly government, established invisibly in 1914, which will soon destroy the present world system at Armageddon and bring an earthly paradise for the resurrected dead and faithful Witnesses.</p>
    <p>The Witnesses hold that the 144,000 of Revelation are a literal number — anointed Christians who will reign in heaven with Christ. The remainder of faithful Witnesses (the "great crowd," Revelation 7:9) will live forever on a restored, paradise earth. The annual Memorial of Christ's Death (a Passover-timed observance) is the only sacrament-like observance; only the anointed partake of the bread and wine, while the great crowd attends as observers.</p>`,
    distinctives: [
      {
        title: 'Rejection of the Trinity',
        body: `The Watch Tower Society teaches that the Trinity is a pagan doctrine, foreign to the Bible, imported into Christianity through Hellenistic philosophy and formalized at the Council of Nicaea (325 AD) under Emperor Constantine. Jehovah alone is God. Jesus is "a god" (the New World Translation's rendering of John 1:1c — "the Word was a god"), the first and only direct creation of Jehovah, identified with the archangel Michael in his pre-human existence. The holy spirit is not a person but Jehovah's "active force." The brochure <em>Should You Believe in the Trinity?</em> (1989) gives the official Watch Tower critique.`,
      },
      {
        title: 'The New World Translation',
        body: `The Witnesses use their own translation of the Bible, the New World Translation of the Holy Scriptures (NT 1950, OT 1961, revised 2013). Among its distinctive renderings: "Jehovah" (rather than "LORD") throughout the Old Testament; "a god" at John 1:1; "torture stake" rather than "cross" for the Greek <em>stauros</em>; "presence" rather than "coming" for <em>parousia</em>; "exercising faith in" rather than "believing in" at John 3:16 and similar texts. The translators were not publicly identified for decades. Mainstream biblical scholarship has consistently criticized the NWT as theologically driven rather than philologically defensible.`,
      },
      {
        title: '1914 and the invisible presence',
        body: `Watch Tower teaching holds that the "Gentile Times" of Luke 21:24 ended in October 1914, when Christ took up his heavenly throne and began his invisible "presence" (the Witnesses' rendering of <em>parousia</em>). The events of 1914 — the outbreak of World War I, social upheaval, technological catastrophe — are interpreted as the sign of the end times beginning. The generation alive in 1914 was expected to witness the end; the failure of this expectation has been repeatedly reinterpreted (most recently in 1995, redefining "this generation" of Matthew 24:34 to mean a class of people rather than a chronological generation).`,
      },
      {
        title: 'Refusal of blood transfusions',
        body: `Since 1945 the Watch Tower Society has prohibited members from accepting blood transfusions, based on Acts 15:28–29 ("abstain from blood") and Leviticus 17:10–14. Members carry advance medical directives refusing blood. Acceptance of a transfusion is grounds for disfellowshipping (excommunication). The position has caused significant tension with medical authorities and has resulted in court cases, particularly when parents have refused transfusions for children. The Witnesses have developed alternative medical protocols (bloodless surgery, hemodilution, fractioned blood products which have been permitted since 2000).`,
      },
      {
        title: 'Political neutrality and disfellowshipping',
        body: `Witnesses do not vote, salute flags, sing national anthems, celebrate national holidays, serve in the military (refusing even conscientious-objector alternative service in many cases historically), or hold political office. Refusal of the Hitler salute led to the imprisonment of approximately 10,000 Witnesses in Nazi concentration camps; about 1,400 were killed. Disfellowshipping (formal expulsion for serious sin or apostasy) entails complete shunning by family and community members who remain Witnesses — a discipline that the Watch Tower defends as biblical (1 Corinthians 5) and that has been controversial in courts and media.`,
      },
    ],
    departures: `<p>Mainstream Christianity holds that Jehovah's Witnesses depart from Nicene Christianity on each of the defining points of the historic creeds:</p>
    <p><strong>(1) The Trinity.</strong> The Council of Nicaea (325 AD) defined the Son as <em>homoousios</em> with the Father — of the same divine substance. The Council of Constantinople (381 AD) extended this to the Holy Spirit. The Watch Tower Society explicitly rejects the Trinity as unbiblical and pagan.</p>
    <p><strong>(2) The full deity of Christ.</strong> Jehovah's Witnesses teach that Jesus is a created being — the first and highest creation of Jehovah, identified with the archangel Michael in his pre-human existence. Historic Christianity confesses the Son as eternally begotten, not made — Nicaea's defining language.</p>
    <p><strong>(3) The personhood and deity of the Holy Spirit.</strong> The Watch Tower teaches that the holy spirit is Jehovah's active force, not a divine person. The Nicene Creed (in its expanded 381 form) confesses the Holy Spirit as "the Lord, the giver of life... who together with the Father and Son is worshiped and glorified."</p>
    <p><strong>(4) The bodily resurrection.</strong> The Watch Tower teaches that Jesus rose as a spirit creature, not bodily; his physical body was dissolved or removed. Christian orthodoxy confesses the bodily resurrection of Christ as the foundation of Christian hope (1 Corinthians 15).</p>
    <p><strong>(5) The intermediate state of believers.</strong> The Watch Tower teaches that the soul is the body and that the dead are unconscious until the resurrection (soul sleep, an annihilationist anthropology). Historic Christianity has affirmed the conscious existence of the soul after death.</p>
    <p>The Watch Tower Society maintains that these are <em>recoveries</em> of biblical teaching that the apostate Church abandoned after the apostles. Mainstream Christianity holds that these are <em>departures</em> from the apostolic faith preserved in the canonical Scriptures and confessed in the ecumenical creeds.</p>`,
    discussionQuestions: [
      {
        id: 'q1',
        title: 'John 1:1 — "a god" or "God"?',
        body: `<p>The New World Translation renders John 1:1c as "the Word was a god," reflecting the absence of the article before <em>theos</em> in the Greek (<em>theos ēn ho logos</em>). Standard translations render it "the Word was God," reflecting Greek predicate-noun grammar (Colwell's Rule and broader scholarship) and the unanimous consensus of major Greek lexicons. The choice has enormous theological consequences.</p>
        <p><strong>Is the NWT rendering a defensible Greek translation, or a theologically-driven choice that the surrounding context (John 1:3, "all things were made through him"; John 1:14, "the Word became flesh") rules out?</strong></p>`,
      },
      {
        id: 'q2',
        title: 'The Trinity: biblical recovery or post-biblical innovation?',
        body: `<p>Jehovah's Witnesses argue that the Trinity is a fourth-century philosophical construction, foreign to the Hebrew monotheism of the Old Testament and the simple kerygma of the apostles. Trinitarian Christians argue that Nicaea did not invent the doctrine but defined the biblical witness already present in texts like Matthew 28:19, 2 Corinthians 13:14, and John 1, 8, 10.</p>
        <p><strong>Did the Nicene Council recover the apostolic faith, or impose a Hellenistic framework on a simpler biblical monotheism?</strong></p>`,
      },
      {
        id: 'q3',
        title: '1914 and failed expectations',
        body: `<p>The Watch Tower Society has repeatedly identified specific dates (1914, 1925, 1975 most prominently) as marking the imminent end of the world system, and has repeatedly reinterpreted predictions as those dates passed without the predicted events. Critics see this as a pattern of failed prophecy that should disqualify the Watch Tower's claim to prophetic authority (Deuteronomy 18:22). The Watch Tower frames the reinterpretations as refinements of light, citing Proverbs 4:18.</p>
        <p><strong>How should a religious organization's track record of date-setting and revised expectations affect its claim to be God's exclusive channel of truth?</strong></p>`,
      },
      {
        id: 'q4',
        title: 'Blood, conscience, and biblical interpretation',
        body: `<p>The Watch Tower's prohibition on blood transfusions rests on Acts 15:29 ("abstain from... blood"), read as a universal biblical principle applicable to medical transfusions. Mainstream biblical scholarship reads the Jerusalem Council's prohibition as concerning meat with the blood still in it, a Levitical food law extended for the sake of Jewish-Gentile fellowship. The Witnesses' application has cost lives, particularly children's.</p>
        <p><strong>When does a religious community's interpretation of an ancient text rise to a level of seriousness that justifies risking physical death, especially of those who cannot consent for themselves?</strong></p>`,
      },
      {
        id: 'q5',
        title: 'Disfellowshipping and the cost of leaving',
        body: `<p>The Watch Tower's disfellowshipping discipline requires faithful Witnesses to shun expelled members entirely, including immediate family members — no normal social contact, no holiday gatherings, no greetings beyond what is required. The discipline is defended biblically (1 Corinthians 5:11; 2 John 10) as protecting the congregation from spiritual contamination. Critics, including some former members and human rights organizations, argue that it functions as social coercion that violates conscience and human dignity.</p>
        <p><strong>Is the Watch Tower's practice a faithful application of biblical church discipline, or an instrument of psychological control that exceeds anything the apostles intended?</strong></p>`,
      },
    ],
    keyTexts: [
      { title: 'The New World Translation', desc: 'The Watch Tower\'s own translation of the Bible (NT 1950, OT 1961, revised 2013). Used exclusively in Witness publications and worship.' },
      { title: 'The Watchtower magazine', desc: 'Semi-monthly publication, the Witnesses\' primary teaching organ since 1879. Two editions: the public edition (for non-Witnesses, simpler doctrinal content) and the study edition (for Witnesses, contains the weekly Sunday study article).' },
      { title: 'Awake! magazine', desc: 'Monthly companion publication addressing contemporary issues from a Watch Tower perspective.' },
      { title: 'Insight on the Scriptures', desc: 'Two-volume Bible encyclopedia (1988) giving Watch Tower interpretations of biblical persons, places, and themes.' },
      { title: 'What Does the Bible Really Teach?', desc: 'Primary introductory study book for Bible studies with non-Witnesses (2005, revised editions). Replaced an earlier book series in this role.' },
    ],
    historicalResponse: `<p>Mainstream Christianity has consistently classified Jehovah's Witnesses as outside historic Christianity. The major Christian traditions — Catholic, Orthodox, mainline Protestant, evangelical — share substantial assessment despite significant disagreements among themselves on other matters: the Watch Tower's rejection of the Trinity, the full deity of Christ, and the personhood of the Holy Spirit places it outside the Nicene communion.</p>
    <p>Major scholarly engagements: <strong>Walter Martin's <em>The Kingdom of the Cults</em></strong> (1965, multiple editions) gave the influential mid-century evangelical assessment. <strong>Ron Rhodes</strong>'s <em>Reasoning from the Scriptures with the Jehovah's Witnesses</em> (1993). <strong>Anthony Hoekema's <em>The Four Major Cults</em></strong> (1963). The <strong>Christian Research Institute</strong>, the <strong>Watchman Fellowship</strong>, and similar evangelical apologetics organizations have produced extensive material engaging Witness theology.</p>
    <p>Significant first-person accounts from former Witnesses have shaped public understanding: <strong>Raymond Franz</strong>'s <em>Crisis of Conscience</em> (1983, the memoir of a former Governing Body member who left the organization in 1980), <strong>Barbara Anderson</strong>'s ongoing work documenting the Watch Tower's handling of child sexual abuse, and the Australian Royal Commission into Institutional Responses to Child Sexual Abuse's significant 2015–17 findings concerning the Jehovah's Witnesses' two-witness rule and handling of abuse cases.</p>
    <p>The Witnesses themselves maintain an internal scholarly apparatus through the Watch Tower's writing department in Warwick. The Governing Body issues the authoritative interpretations of doctrine, with regular refinements ("new light," per Proverbs 4:18) published in the study edition of The Watchtower.</p>`,
    historicalNote: 'The Watch Tower Bible and Tract Society was incorporated in Pennsylvania in 1884 as "Zion\'s Watch Tower Tract Society," with Charles Taze Russell as president. After Russell\'s death in 1916, Joseph Franklin Rutherford took control and consolidated power, formally renaming the movement "Jehovah\'s Witnesses" at a 1931 convention in Columbus, Ohio. The Witnesses\' refusal to perform the Hitler salute, serve in the military, or pledge allegiance to the Nazi state led to severe persecution under the Third Reich — approximately 10,000 German Witnesses were imprisoned in concentration camps wearing the purple triangle, with about 1,400 killed. The US Supreme Court\'s Jehovah\'s Witnesses cases of the 1940s — particularly West Virginia State Board of Education v. Barnette (1943) — established foundational First Amendment protections for religious dissent. The Australian Royal Commission (2015–17) and subsequent national inquiries in Canada, the Netherlands, and the UK have exposed systematic Watch Tower mishandling of child sexual abuse complaints.',
    relatedMovements: ['mov-lds', 'mov-cs'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  {
    id: 'mov-oneness',
    name: 'Oneness Pentecostalism',
    icon: '🔥',
    founded: '1913–1916, "New Issue" within early Pentecostalism',
    adherents: '~24 million worldwide (UPCI and related Oneness groups, 2020 estimates)',
    headquarters: 'United Pentecostal Church International — Hazelwood, Missouri; many independent and international groups',
    category: 'Pentecostal',
    summary: `Oneness Pentecostalism emerged in 1913–1916 as a controversy within the early Pentecostal movement, when several leaders — beginning with Robert E. McAlister at the Arroyo Seco camp meeting near Los Angeles — concluded that the apostles had baptized only "in the name of Jesus" (Acts 2:38, 8:16, 10:48, 19:5), not in the Trinitarian formula of Matthew 28:19. The deeper theological move was the rejection of the Trinity itself in favor of a "oneness" theology in which Father, Son, and Holy Spirit are not three eternal Persons but three modes, manifestations, or roles of the one God who is Jesus. The largest Oneness body, the United Pentecostal Church International (UPCI), formed in 1945 from the merger of two earlier Oneness groups. Oneness Pentecostalism shares with Trinitarian Pentecostalism the experience of Spirit baptism with tongues, divine healing, premillennial eschatology, and high biblical authority — but differs sharply on the doctrine of God and on baptismal practice (baptism by full immersion specifically "in the name of Jesus Christ"). Oneness Pentecostalism is one of the fastest-growing Christian movements globally, with particular strength in Latin America (Apostolic Church of Faith in Christ Jesus in Mexico, with millions of adherents), Africa, and Asia.`,
    selfDescription: `<p>Oneness Pentecostals describe themselves as restorationists — recovering the apostolic faith and apostolic baptismal practice from which mainline Christianity has departed. The UPCI's "Articles of Faith" affirm: "The one true God has revealed Himself as our Father, in His Son Jesus Christ for our redemption, and as the Holy Spirit by emanation of Himself in spiritual activity in our lives" (UPCI Manual). God is absolutely one — not three persons sharing one essence, but one Person who has manifested himself in three modes or relationships through the economy of salvation.</p>
    <p>The central Oneness conviction: the name "Jesus" reveals the one Name that belongs equally to Father, Son, and Holy Spirit. Matthew 28:19's "in the name" (singular) of "Father, Son, and Holy Spirit" is read as referring to a single name — and that name is Jesus, the only saving name (Acts 4:12). Baptism must therefore be administered specifically with the words "in the name of Jesus Christ" or some close variant — this is held to be necessary for valid baptism, not optional.</p>
    <p>Oneness Pentecostalism shares Pentecostal distinctives: Spirit baptism as a subsequent experience to conversion, evidenced by speaking in tongues; divine healing; premillennial eschatology; biblical inerrancy. The classical UPCI position has been that Spirit baptism with tongues is necessary for salvation (a position that distinguishes it from Trinitarian Pentecostalism, which generally regards tongues as the initial physical evidence but not the means of salvation itself). Oneness Pentecostals often hold conservative cultural standards — no makeup or jewelry for women, modest dress codes, restrictions on entertainment — though these vary by congregation.</p>`,
    distinctives: [
      {
        title: 'The Oneness of God',
        body: `Oneness theology rejects the doctrine that Father, Son, and Holy Spirit are three distinct eternal Persons within one divine essence (the Nicene homoousios applied to all three Persons). Instead, the one God — Jesus — has manifested himself in three different ways through the economy of salvation: as Father (the divine essence and creator role), as Son (the human incarnation, the body), and as Holy Spirit (the divine presence in the church). David K. Bernard's <em>The Oneness of God</em> (1983) is the systematic UPCI treatment. The position is consciously similar to early modalism / Sabellianism, though Oneness theologians contest the equivalence.`,
      },
      {
        title: 'Jesus is the Name',
        body: `For Oneness Pentecostals, "Jesus" is not merely the human name of the incarnate Son but the revealed name of the one God — the singular Name in which Father, Son, and Holy Spirit are summed up. Acts 4:12 ("there is no other name under heaven... by which we must be saved") is read in this maximal sense. The doxology and the baptismal formula must therefore center on Jesus, not on a tripartite formula.`,
      },
      {
        title: 'Jesus-Name baptism',
        body: `Baptism is by full immersion, administered specifically "in the name of Jesus Christ" (Acts 2:38) or "in the name of the Lord Jesus" (Acts 8:16; 19:5). Baptism in the Trinitarian formula of Matthew 28:19 (read as a description of the one Name rather than a formula) is regarded as inadequate by most Oneness groups; converts from Trinitarian backgrounds are typically rebaptized in the Jesus name upon joining a Oneness church.`,
      },
      {
        title: 'The "new birth" of Acts 2:38',
        body: `The classical Oneness understanding of salvation, articulated as the "new birth," combines repentance, water baptism in Jesus's name, and Spirit baptism evidenced by tongues into a unified salvific event drawn from Acts 2:38: "Repent and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins, and you shall receive the gift of the Holy Spirit." All three are typically held to be necessary for full salvation. This position is more soteriologically demanding than mainstream evangelicalism and represents a recovery, Oneness Pentecostals argue, of the apostolic gospel preached on Pentecost.`,
      },
      {
        title: 'Holiness standards',
        body: `Many Oneness congregations, particularly within the UPCI, maintain conservative standards regarding dress, grooming, and entertainment that are stricter than typical evangelicalism: women keep their hair uncut and avoid pants, makeup, and jewelry; modesty standards apply to all members; many avoid television, movies, and similar entertainment. These holiness standards have been a major feature of Oneness Pentecostal identity, though they are easing in many congregations under generational pressure.`,
      },
    ],
    departures: `<p>Mainstream Christianity — Catholic, Orthodox, Protestant including the largest Trinitarian Pentecostal bodies — holds that Oneness Pentecostalism departs from Nicene Christianity on the doctrine of God himself:</p>
    <p><strong>(1) The Trinity.</strong> The Council of Nicaea (325 AD) defined the Son as <em>homoousios</em> with the Father — distinct in person, identical in essence. The Council of Constantinople (381 AD) extended this to the Spirit. The Athanasian Creed makes the distinction explicit: "we worship one God in Trinity, and Trinity in Unity; neither confounding the persons nor dividing the substance." Oneness theology rejects this conciliar definition.</p>
    <p><strong>(2) Modalism revisited.</strong> The early Church specifically rejected modalist views — Sabellianism, Patripassianism — in the second and third centuries (Tertullian's <em>Against Praxeas</em>, c. 213 AD, is the classical patristic refutation). Modalism teaches that Father, Son, and Holy Spirit are successive modes or roles of the one God, not distinct eternal Persons. Oneness Pentecostal theologians contest the precise equivalence with ancient modalism, but the position is structurally similar enough that the historic Christian objections apply.</p>
    <p><strong>(3) Baptismal practice.</strong> Most major Christian traditions accept Trinitarian baptism in the Matthew 28:19 form as valid Christian baptism. Oneness Pentecostalism generally requires rebaptism in the Jesus-name form, holding Trinitarian baptism to be invalid. This means that even Oneness Pentecostals who agreed with most other Pentecostal teaching would be unable to accept Trinitarian Pentecostals as having received valid baptism.</p>
    <p>The Pentecostal World Conference, the Assemblies of God, the Church of God in Christ, the Foursquare Church, and other Trinitarian Pentecostal bodies have all declined fellowship with Oneness Pentecostals on the Trinitarian question. The Assemblies of God's 1916 "Statement of Fundamental Truths" was specifically formulated to exclude Oneness teaching from AG fellowship — the AG having lost approximately 25% of its ministers to the New Issue in the years 1913–1916.</p>
    <p>Within Oneness Pentecostalism itself, the question of whether Trinitarian Christians are saved is genuinely contested. Many Oneness believers hold that Trinitarian Christians may be saved if they have genuine faith in Jesus, while others hold that the rejection of Oneness baptism and Oneness theology of God places one outside the saving covenant.</p>`,
    discussionQuestions: [
      {
        id: 'q1',
        title: 'Matthew 28:19 vs. Acts 2:38',
        body: `<p>Matthew 28:19 commands baptism "in the name of the Father and of the Son and of the Holy Spirit." Acts 2:38 records Peter commanding baptism "in the name of Jesus Christ." Oneness Pentecostals read these as harmonious — Matthew gives the description of the one Name; Acts gives the actual formula. Trinitarian Christians read these as harmonious differently — Matthew gives the formula; Acts describes the authority and content of baptism in summary form.</p>
        <p><strong>Which reading does justice to both texts? And is baptism in either form valid?</strong></p>`,
      },
      {
        id: 'q2',
        title: 'Modalism: heresy or recovery?',
        body: `<p>The early Church explicitly rejected modalism — the teaching that Father, Son, and Holy Spirit are modes or roles of the one God rather than distinct eternal Persons. Tertullian's <em>Against Praxeas</em> (c. 213) defended what would become the Nicene doctrine; Praxeas, Noetus, and Sabellius (whose name "Sabellianism" is given to the modalist position) were condemned. Oneness Pentecostals argue that the Church was wrong then and that the apostolic faith was modalist.</p>
        <p><strong>Did the early Church get the Trinity right, or did it import Greek philosophical categories that distorted the simpler biblical monotheism the Oneness movement seeks to recover?</strong></p>`,
      },
      {
        id: 'q3',
        title: 'The Jesus on the cross',
        body: `<p>Trinitarian theology distinguishes the Father and the Son such that the Son truly dies on the cross while the Father, in his divine immortality, does not die. The Son cries to the Father ("Why have you forsaken me?"). Oneness theology has to account for these texts within a framework where Jesus simply is the Father in his Son-manifestation. Critics call this Patripassianism — the Father suffering on the cross.</p>
        <p><strong>Does Oneness theology coherently explain Christ's prayers to the Father, the Father's voice from heaven at the baptism and transfiguration, and the dialogue of John 17 — or does it collapse these into a single divine Person performing both sides?</strong></p>`,
      },
      {
        id: 'q4',
        title: 'Tongues as initial evidence — or means of salvation?',
        body: `<p>Trinitarian Pentecostalism (Assemblies of God, Church of God in Christ, Foursquare, classical Pentecostalism broadly) teaches that Spirit baptism is evidenced by speaking in tongues — but that conversion to Christ is what saves, and Spirit baptism is a subsequent empowering experience. Classical Oneness Pentecostalism teaches that the "new birth" of Acts 2:38 incorporates Spirit baptism with tongues as part of the salvific event itself.</p>
        <p><strong>Are the unbaptized in the Spirit, who have not spoken in tongues, genuinely saved? If yes, what does Acts 2:38 mean? If no, what about the thief on the cross and countless faithful Christians across history who never spoke in tongues?</strong></p>`,
      },
      {
        id: 'q5',
        title: 'Holiness standards: biblical principle or cultural code?',
        body: `<p>Conservative Oneness Pentecostalism maintains strict standards regarding women's hair, dress, makeup, jewelry, and entertainment that go significantly beyond standard evangelical Christianity. The standards are grounded in texts like 1 Corinthians 11:5–15, 1 Timothy 2:9, and 1 Peter 3:3–5. Critics argue the texts are being read selectively (men's hair is also addressed in 1 Corinthians 11; pearls are forbidden in 1 Timothy 2 but routinely worn by women in conservative congregations) and that the standards function more as a tribal identity marker than as biblical obedience.</p>
        <p><strong>Are conservative Oneness holiness standards faithful application of biblical principle, or cultural codes that have hardened into law in ways the apostles did not intend?</strong></p>`,
      },
    ],
    keyTexts: [
      { title: 'The Bible (KJV preferred)', desc: 'Oneness Pentecostals are uniformly biblical inerrantists. The King James Version is the dominant translation, though some congregations use the NKJV.' },
      { title: 'The Oneness of God by David K. Bernard', desc: 'The systematic statement of UPCI theology of God (1983). Part of Bernard\'s "Pentecostal Series" — the standard Oneness systematic theology.' },
      { title: 'The New Birth by David K. Bernard', desc: 'The systematic UPCI statement on salvation as repentance, Jesus-name baptism, and Spirit baptism with tongues.' },
      { title: 'UPCI Manual', desc: 'The constitution and articles of faith of the United Pentecostal Church International, providing the authoritative doctrinal statement for UPCI churches.' },
    ],
    historicalResponse: `<p>Trinitarian Christianity — Catholic, Orthodox, mainline Protestant, and Trinitarian Pentecostal — has uniformly classified Oneness Pentecostalism as outside Nicene Christian orthodoxy on the doctrine of the Trinity, while typically affirming significant agreement on biblical authority, evangelism, holiness, and the experiences of Spirit and tongues.</p>
    <p>The 1916 Assemblies of God "Statement of Fundamental Truths" was formulated specifically to exclude Oneness teaching from AG fellowship — the AG had lost approximately 156 of its 585 ministers (about 27%) to the "New Issue" by 1916. The split was substantial and bitter, with significant relational consequences across decades. The 1948 founding of the United Pentecostal Church (which became the UPCI in 1972) consolidated the largest American Oneness body.</p>
    <p>Trinitarian Pentecostal engagement with Oneness theology has been substantial. <strong>Gregory A. Boyd's <em>Oneness Pentecostals and the Trinity</em></strong> (1992) gave the major evangelical-Trinitarian critique. <strong>Calvin Beisner's <em>Jesus Only Churches</em></strong> (1998). <strong>William Menzies and Stanley Horton's <em>Bible Doctrines</em></strong> (1993) gives the classical AG perspective.</p>
    <p>From the Oneness side: <strong>David K. Bernard</strong> (current General Superintendent of the UPCI) has produced an extensive systematic theological corpus — his "Pentecostal Series" includes seven volumes covering theology proper, Christology, salvation, ecclesiology, and pneumatology. Bernard's <em>The Oneness of God</em>, <em>The New Birth</em>, and <em>The Oneness View of Jesus Christ</em> are the standard treatments. Bernard's work has been notable for its scholarly engagement with patristic sources, biblical exegesis, and contemporary theology.</p>
    <p>The global Oneness movement has grown rapidly. The Apostolic Church of Faith in Christ Jesus (Iglesia Apostólica) in Mexico, the True Jesus Church (founded 1917 in China by Paul Wei, with strong influence in East Asia), the various indigenous Oneness movements in Africa, and the UPCI's international growth have made Oneness Pentecostalism one of the fastest-growing forms of Christianity globally. The Pentecostal World Conference and Trinitarian Pentecostal bodies maintain that fellowship is not possible without resolution of the Trinitarian question.</p>`,
    historicalNote: 'The "New Issue" emerged at the Arroyo Seco World-Wide Apostolic Faith Camp Meeting near Los Angeles in April 1913, when Canadian Pentecostal Robert E. McAlister noted in a sermon that the apostles had baptized in the name of Jesus rather than in the Trinitarian formula. Frank J. Ewart developed the theological implications. Glenn Cook brought Ewart\'s teaching to the Midwest. The doctrine spread rapidly through early Pentecostal networks. The 1916 Assemblies of God General Council in St. Louis adopted a Trinitarian "Statement of Fundamental Truths" specifically to exclude Oneness teaching, precipitating the departure of approximately 156 ministers including E. N. Bell (who initially left, then returned to Trinitarian belief and was AG\'s second General Superintendent). The Pentecostal Assemblies of the World (PAW) became the largest Oneness body in the early 20th century; the racial integration that had characterized early Pentecostalism eroded along denominational lines, with the PAW retaining a substantial Black membership while predominantly-white Oneness bodies formed separate fellowships, eventually merging into the UPCI (1945, finalized 1972). Notable Oneness figures: Andrew Urshan (Iranian-born apostle to the Persians), G.T. Haywood (the leading early Black Oneness theologian), Frank Ewart, Howard Goss, T.D. Jakes (the most prominent contemporary American Oneness preacher, though Jakes has moved toward semi-Trinitarian language in recent years).',
    relatedMovements: ['mov-sda'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  {
    id: 'mov-sda',
    name: 'Seventh-day Adventism',
    icon: '🕖',
    founded: '1863, growing out of the Millerite movement of the 1830s–40s',
    adherents: '~22 million baptized worldwide (General Conference of Seventh-day Adventists, 2023)',
    headquarters: 'Silver Spring, Maryland (General Conference)',
    category: 'Adventist',
    summary: `Seventh-day Adventism formally organized in 1863 as a post-Millerite movement that retained the Millerite expectation of Christ's imminent second coming while reinterpreting the Great Disappointment of October 22, 1844, as the beginning of Christ's heavenly ministry in the "Most Holy Place" — the doctrine of the Investigative Judgment. The movement was shaped most decisively by Ellen G. White (1827–1915), whose prophetic gift Adventists hold to be a manifestation of the New Testament gift of prophecy. Adventists keep the seventh-day Sabbath (Saturday) rather than Sunday; teach soul sleep and conditional immortality (the wicked are annihilated, not eternally tormented); practice strict health reform including dietary recommendations (vegetarianism widely encouraged), abstinence from alcohol, tobacco, and unclean meats per Leviticus 11; and emphasize the imminent return of Christ. The Adventist position on the Trinity has evolved significantly — early Adventism (including Joseph Bates, James White, and others) was largely non-Trinitarian, but the official position since the 1931 Statement of Beliefs and especially since the 1980 formal Statement of Fundamental Beliefs is firmly Trinitarian. Adventism runs the largest Protestant educational and healthcare networks in the world (over 9,400 schools, 200+ hospitals).`,
    selfDescription: `<p>Seventh-day Adventists describe themselves as the "remnant church" of Revelation 12:17 ("the rest of her offspring, who keep the commandments of God and have the testimony of Jesus") — the eschatological community preparing the world for Christ's return. The 28 Fundamental Beliefs (current form 2005) articulate official Adventist doctrine, beginning with the Trinity (Belief 2) and the deity of Christ (Belief 4) — both fully Nicene in formulation. Adventists confess salvation by grace through faith, the bodily resurrection of Christ, the literal second coming, and the authority of Scripture.</p>
    <p>The distinctively Adventist beliefs cluster around eschatology, anthropology, and ecclesiology: the seventh-day Sabbath as God's eternal sign (Belief 20); the heavenly sanctuary doctrine, in which Christ entered the Most Holy Place in 1844 to perform the antitypical Day of Atonement (Belief 24); the gift of prophecy as exemplified in Ellen White's ministry (Belief 18); conditional immortality and the destruction of the wicked rather than eternal conscious torment (Belief 27); and the imminent, premillennial, literal return of Christ (Belief 25).</p>
    <p>Adventists practice three sacraments-like ordinances: water baptism by immersion of adult believers; foot-washing and the Lord's Supper (the "ordinances of humility and the Lord's Supper," Belief 16). Health reform — vegetarianism (or at minimum kosher-like dietary restrictions), abstinence from alcohol and tobacco, regular exercise — is religiously significant, expressed through institutions like the Adventist Health hospitals and educational programs.</p>`,
    distinctives: [
      {
        title: 'The seventh-day Sabbath',
        body: `Adventists keep the seventh day (Saturday, sunset to sunset) as the Sabbath of the fourth commandment (Exodus 20:8–11). The Sabbath is held to be God's eternal sign of his creative and redemptive lordship, never abolished or transferred to Sunday. The transfer of Sabbath observance to Sunday is traced to the influence of Constantine and the Roman papacy; the restoration of the seventh-day Sabbath is held to be central to the eschatological identity of the remnant church.`,
      },
      {
        title: 'The Investigative Judgment and the heavenly sanctuary',
        body: `When Christ failed to return on October 22, 1844 (the Millerite "Great Disappointment"), Hiram Edson received what Adventists interpret as a divine insight: Christ on that date had entered the Most Holy Place of the heavenly sanctuary to begin a pre-Advent "investigative judgment" of the books of those who had professed faith in him. This doctrine, developed by Joseph Bates, Ellen White, and others, is unique to Adventism and is one of its most distinctive — and most controversial — teachings. Critics within and outside Adventism have argued it lacks biblical foundation; defenders (Gerhard Pfandl, Roy Adams, William Shea) argue it is the natural reading of Daniel 8:14 in light of the typology of Leviticus 16.`,
      },
      {
        title: 'The prophetic gift of Ellen G. White',
        body: `Ellen G. White (1827–1915, née Harmon) is held by Adventists to have manifested the New Testament gift of prophecy. Her ministry, beginning at age 17 in 1844, produced thousands of pages of writings, dreams, and visions. Her most enduringly influential works include <em>Steps to Christ</em> (1892), <em>The Desire of Ages</em> (1898), <em>The Great Controversy</em> (1888), and the five-volume Conflict of the Ages series. Official Adventist doctrine holds that her writings are not equal to Scripture (Scripture is the ultimate norm) but are "a continuing and authoritative source of truth" that provides "comfort, guidance, instruction, and correction to the church." Her counsel on health reform, education, and Christian living is regarded as inspired guidance.`,
      },
      {
        title: 'Soul sleep and conditional immortality',
        body: `Adventists teach that the soul is not naturally immortal but is the integrated unity of body and breath/spirit (Genesis 2:7). At death, the dead "sleep" unconsciously until the resurrection. The righteous are raised to eternal life at Christ's return; the wicked are raised at the end of the millennium for judgment and then destroyed permanently in the lake of fire. This is annihilationism (conditional immortality), which Adventists hold to be the consistent biblical teaching, contrasting with the doctrine of eternal conscious torment.`,
      },
      {
        title: 'Health reform',
        body: `Beginning with Ellen White's vision of 1863 on health reform, Adventists have made health a religious commitment. Vegetarianism is strongly recommended (about 35% of American Adventists are vegetarian); kosher-like dietary restrictions per Leviticus 11 are observed (no pork, shellfish, etc.); abstinence from alcohol, tobacco, and recreational drugs is required for church membership; regular exercise and rest are religiously framed. The Adventist Health system, the Loma Linda University Health hospitals, and the long-running Adventist Health Study (the world's largest cohort study on diet and longevity) reflect this distinctive emphasis. Loma Linda, California — heavily Adventist — is one of the world's five "Blue Zones" of exceptional longevity.`,
      },
    ],
    departures: `<p>The question of how Seventh-day Adventism relates to historic Christianity is more complex than for some other movements on this page. Adventism in its mature form is Trinitarian, accepts the deity of Christ in fully Nicene terms, holds to salvation by grace through faith, and confesses biblical authority. On the central doctrines of God, Christ, atonement, and salvation, Adventism is within mainstream Protestantism — and is recognized as such by most evangelical bodies today, though the recognition was contested in the mid-20th century.</p>
    <p>Mainstream Christian engagement with Adventism distinguishes between (a) Adventism's distinctive teachings on Sabbath, prophecy, sanctuary, and anthropology, which many evangelicals regard as eccentric but not heretical, and (b) historical positions taken in earlier Adventist literature that have been controversial:</p>
    <p><strong>(1) The Investigative Judgment.</strong> Many evangelical critics (most notably Desmond Ford, a former Adventist seminary professor who lost his Adventist credentials in 1980 after challenging the doctrine) have argued that the Investigative Judgment lacks biblical foundation and creates a soteriology in which assurance of salvation is undermined. The Adventist response (Roy Adams, Gerhard Pfandl, William Shea) maintains the doctrine while emphasizing it does not threaten salvation by grace.</p>
    <p><strong>(2) The status of Ellen White's writings.</strong> Adventism officially holds that Scripture is the ultimate norm and that White's writings are subordinate. Critics — including some who left Adventism — have argued that in practice White's writings function as a second canon. The 1980s plagiarism controversies (Walter Rea's <em>The White Lie</em>, 1982, documenting extensive uncredited borrowing in White's books) raised significant questions about the nature of her prophetic gift; the Adventist Church responded with the Veltman Report (1988, on <em>The Desire of Ages</em>) acknowledging substantial borrowing while defending White's prophetic vocation.</p>
    <p><strong>(3) Early Adventist anti-Trinitarianism.</strong> Many of the founding Adventists — James White, Joseph Bates, Uriah Smith — were anti-Trinitarian in the Arian or semi-Arian tradition. The transition to full Trinitarianism happened gradually, with the 1931 Statement of Beliefs marking the official shift and the 1980 Fundamental Beliefs cementing it. Some critics argue the change represents a fundamental break with founding Adventism; Adventists generally view it as a maturation of doctrine under the guidance of the Spirit.</p>
    <p><strong>(4) The "remnant" ecclesiology.</strong> Adventism's identification of itself as the eschatological "remnant church" can be read as exclusive — implying that other Christians are at best partial or compromised. Modern Adventism has nuanced this significantly, with the General Conference acknowledging that genuine Christians exist throughout Christendom while maintaining Adventism's prophetic role.</p>
    <p>The major evangelical assessment of Adventism shifted in 1957 with the publication of <strong>Walter Martin and Donald Grey Barnhouse's <em>The Truth About Seventh-day Adventism</em></strong>. Martin (the foremost evangelical "cult watcher" of the era) and Barnhouse concluded after extensive dialogue with Adventist leaders that Seventh-day Adventism was a Christian denomination, not a non-Christian sect — albeit with significant eccentricities. This judgment has held in most evangelical circles since, though some hardline evangelical critics dissent.</p>`,
    discussionQuestions: [
      {
        id: 'q1',
        title: 'The Investigative Judgment',
        body: `<p>The doctrine of the Investigative Judgment teaches that since 1844, Christ has been examining the records of all who have professed faith in him to determine who is truly his. Critics — including former Adventist theologian Desmond Ford in his 1979 Glacier View paper — argue that this doctrine has no clear biblical basis, that it creates anxiety about salvation, and that the events of 1844 require this complex interpretive framework only because the Millerite prediction failed.</p>
        <p><strong>Is the Investigative Judgment a genuine biblical doctrine drawn from Daniel 8 and Leviticus 16, or a theological rescue operation that preserved Millerism by making its central prediction unfalsifiable?</strong></p>`,
      },
      {
        id: 'q2',
        title: 'Sabbath: which day?',
        body: `<p>Adventists keep the seventh-day Sabbath as God's eternal sign and as the fourth commandment, never abolished. Mainstream Christianity since the apostolic age has worshiped on the first day of the week (the Lord's Day, the day of resurrection), generally regarding the Sabbath commandment as either fulfilled in Christ (Hebrews 4:9–11; Colossians 2:16–17) or as transferred to Sunday by apostolic and Spirit-led practice.</p>
        <p><strong>Did the Church rightly recognize the Lord's Day as the new Sabbath in continuity with the resurrection, or did it (as Adventists hold) compromise with paganism and papal authority in changing God's appointed day?</strong></p>`,
      },
      {
        id: 'q3',
        title: 'Ellen White: prophet or talented religious writer?',
        body: `<p>Adventists hold that Ellen G. White exercised the New Testament gift of prophecy and that her writings carry continuing authority (subordinate to Scripture). Critics point to: documented borrowing of significant content from contemporaneous Christian writers without attribution (the Veltman Report); failed predictions (specific dates that did not materialize); and the unusual position of her writings as functionally canonical in many Adventist contexts.</p>
        <p><strong>Was Ellen White a genuine prophet, an inspired Christian writer in the broader sense, or something else? And what should an Adventist do with the documented evidence of her literary borrowing?</strong></p>`,
      },
      {
        id: 'q4',
        title: 'Soul sleep and the destiny of the wicked',
        body: `<p>Adventists teach that the dead sleep unconsciously until the resurrection, that the wicked are not eternally tormented but are destroyed permanently in the lake of fire (annihilationism / conditional immortality). The historic Christian position has generally been that the soul exists consciously after death and that the wicked face eternal conscious torment.</p>
        <p><strong>Does the Adventist position more faithfully read Scripture (which speaks of life as God's gift, death as wages of sin, and destruction of the wicked rather than their endless preservation), or does it dilute the seriousness of judgment that historic Christianity has confessed?</strong></p>`,
      },
      {
        id: 'q5',
        title: 'Health reform: faithfulness or works-righteousness?',
        body: `<p>Adventist health reform — vegetarianism, dietary restrictions per Leviticus 11, abstinence from alcohol and tobacco, emphasis on exercise — has produced measurable longevity benefits (the Adventist Health Study, Blue Zones research at Loma Linda) and grounds an enormous global Adventist hospital and educational network. Critics argue that these practices, framed religiously, risk obscuring the gospel — making Christian identity contingent on dietary discipline rather than on grace.</p>
        <p><strong>Is Adventist health reform faithful stewardship of the body as God's temple (1 Corinthians 6:19), or has it hardened into a quasi-legalistic regime that subtly displaces the gospel?</strong></p>`,
      },
    ],
    keyTexts: [
      { title: 'The Bible (KJV historically, multiple translations now)', desc: 'Held as the ultimate norm. The NKJV is widely used in Adventist publications today; the NIV and other translations are accepted.' },
      { title: '28 Fundamental Beliefs', desc: 'The current (2005) official doctrinal statement of the Seventh-day Adventist Church. Replaced earlier 27 Fundamental Beliefs (1980).' },
      { title: 'The Conflict of the Ages series by Ellen G. White', desc: 'Five volumes: Patriarchs and Prophets, Prophets and Kings, The Desire of Ages, The Acts of the Apostles, The Great Controversy. The major systematic theological narrative of Adventist understanding of salvation history.' },
      { title: 'Steps to Christ by Ellen G. White', desc: 'A short devotional classic (1892), perhaps the most widely-distributed Adventist book; over 100 million copies printed in over 150 languages.' },
      { title: 'Seventh-day Adventists Believe', desc: 'The official Adventist systematic theology, a chapter-by-chapter exposition of the 28 Fundamental Beliefs.' },
    ],
    historicalResponse: `<p>The mainstream Protestant assessment of Seventh-day Adventism shifted significantly in the mid-20th century. Earlier evangelical writers (J. Gresham Machen, Louis Talbot) had generally classified Adventism as a non-Christian sect on the basis of the Sabbath, the Investigative Judgment, and Ellen White's prophetic role.</p>
    <p>The watershed was <strong>Walter Martin and Donald Grey Barnhouse's <em>The Truth About Seventh-day Adventism</em></strong> (1960). Martin, the foremost American evangelical apologist on the cults of his era, undertook a four-year direct dialogue with Adventist leaders (Le Roy Edwin Froom, Walter Read, T.E. Unruh) and concluded — to the dismay of some of his evangelical readers — that contemporary Adventism was a Christian denomination, deeply orthodox on the major doctrines (Trinity, deity of Christ, atonement, salvation by grace) while distinctive on the Sabbath, sanctuary doctrine, prophetic gift, and dietary practice. Martin's reassessment became the dominant evangelical position, though hardline critics (Anthony Hoekema, John Whitcomb) continued to classify Adventism as outside the Christian mainstream.</p>
    <p>Internal Adventist controversy: <strong>Desmond Ford's</strong> 1979 paper "Daniel 8:14, the Day of Atonement, and the Investigative Judgment" challenged the foundational Adventist doctrine. The Glacier View Conference (August 1980) resulted in Ford losing his Adventist credentials. The controversy split many Adventists, with Ford's followers continuing the critique through Good News Unlimited and similar organizations. The <strong>Walter Rea controversy</strong> (1980s) followed: Rea's <em>The White Lie</em> (1982) documented Ellen White's borrowing, leading to the General Conference's Veltman Report (1988) acknowledging extensive borrowing while defending White's vocation.</p>
    <p>Modern Adventist scholarship has engaged these questions with substantial rigor. Adventist universities (Andrews University in Michigan, Loma Linda University in California) maintain accredited theological programs. Notable Adventist scholars: Roy Adams (former Adventist Review editor), Gerhard Pfandl, William Shea, Hans LaRondelle, Sigve Tonstad, John Walton (some sympathies, though Walton himself is not Adventist).</p>
    <p>Adventism's growth has been substantial in the global South — particularly Brazil, Mexico, the Philippines, sub-Saharan Africa. The 22 million baptized members make Adventism larger than many longer-established denominations.</p>`,
    historicalNote: 'William Miller (1782–1849), a Baptist farmer in upstate New York, calculated from Daniel 8:14 ("unto two thousand and three hundred days; then shall the sanctuary be cleansed") that Christ would return between March 1843 and March 1844; the date was refined to October 22, 1844. The "Great Disappointment" of October 22, 1844, scattered the Millerite movement; some lost their faith entirely, others reinterpreted the date as Christ\'s entrance into the heavenly sanctuary. Hiram Edson\'s vision of October 23 became foundational for the Adventist Investigative Judgment doctrine. Ellen Harmon (later White) began receiving visions in December 1844. The Seventh-day Adventist Church was formally organized at Battle Creek, Michigan, in May 1863, with 3,500 founding members. The General Conference moved to Washington, DC in 1903 and to Silver Spring, Maryland in 1989. Loma Linda, California — established by Ellen White and John Harvey Kellogg (the cereal magnate, also an Adventist before his eventual break) — became one of the Adventist healthcare flagships. Adventist World Radio, the Hope Channel, and the Three Angels Broadcasting Network (3ABN, independent of the official Church) have given Adventism substantial global media reach.',
    relatedMovements: ['mov-jw', 'mov-oneness'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  {
    id: 'mov-cs',
    name: 'Christian Science',
    icon: '✨',
    founded: '1879, by Mary Baker Eddy (1821–1910)',
    adherents: 'Estimated 50,000–400,000 worldwide; declining (precise figures not published)',
    headquarters: 'The First Church of Christ, Scientist — Boston, Massachusetts (the "Mother Church")',
    category: 'Metaphysical',
    summary: `Christian Science was founded by Mary Baker Eddy in Boston in 1879 following her recovery from injury in 1866 — an event she described as the discovery of the divine Science that Jesus had taught and practiced. The Church of Christ, Scientist, governed from its Boston "Mother Church," teaches that God is divine Mind — all good, infinite, and the only reality — and that matter, sin, sickness, and death are illusions or false beliefs of "mortal mind" that can be healed through correct spiritual understanding. Christian Science practitioners — trained according to standards set by Eddy's textbook <em>Science and Health with Key to the Scriptures</em> (1875, with later additions) — offer prayer-based healing as the primary therapeutic modality for members, who have historically declined medical treatment in many circumstances. The movement is the only major religious movement of American origin to have been founded and led by a woman. It has experienced sustained decline since mid-20th-century peaks, but has been historically and culturally significant far out of proportion to its current numbers — through The Christian Science Monitor newspaper (founded 1908, Pulitzer Prize-winning), the substantial publishing apparatus, and its Reading Rooms in cities worldwide.`,
    selfDescription: `<p>Christian Scientists describe their movement as a recovery of the lost teaching of original Christianity — specifically, the science of spiritual healing that Jesus and his disciples practiced. The Church's tenets, articulated by Mary Baker Eddy in <em>Science and Health</em>, summarize the foundational teaching: "There is no life, truth, intelligence, nor substance in matter. All is infinite Mind and its infinite manifestation, for God is All-in-all. Spirit is immortal Truth; matter is mortal error. Spirit is the real and eternal; matter is the unreal and temporal. Spirit is God, and man is His image and likeness. Therefore man is not material; he is spiritual."</p>
    <p>The Church bases its teaching on the Bible (specifically the King James Version) and on Eddy's <em>Science and Health with Key to the Scriptures</em>, which Christian Scientists hold to be inspired and which serves with the Bible as the dual "pastor" of every Christian Science church. Sunday services consist of readings from the Bible and from <em>Science and Health</em> on weekly Bible Lesson topics; there is no ordained ministry in the conventional sense, but rather Readers chosen for three-year terms.</p>
    <p>The Christian Science understanding of healing follows from its understanding of reality: since matter is unreal and only Spirit (God, divine Mind) is real, what appears as physical illness is actually a false belief in mortal mind that yields to correct spiritual understanding. Healing comes through prayer that reorients consciousness from the false belief in disease to the truth of God's allness and man's spiritual perfection. Christian Science practitioners are trained to provide this spiritual treatment for fee; nurses provide care during healing without administering medical intervention.</p>
    <p>Christian Science has historically opposed not only medicine for its members but also the materialist worldview underlying it. Eddy taught that hypnotism, animal magnetism, and what she called "Malicious Animal Magnetism" (M.A.M.) were real spiritual dangers — mental influences that could cause harm. Christian Scientists are encouraged to demonstrate their understanding through reliance on God in matters of health, livelihood, and life.</p>`,
    distinctives: [
      {
        title: 'God as divine Mind, matter as illusion',
        body: `The foundational metaphysical claim of Christian Science is that God — divine Mind, Spirit, Soul, Principle, Life, Truth, Love (Eddy's "seven synonyms for God") — is all that is real. Matter, including the human body, is unreal — a mistaken belief of "mortal mind." Eddy taught: "There is no life, truth, intelligence, nor substance in matter." This metaphysical idealism distinguishes Christian Science from every form of traditional Christianity (which affirms the goodness of created matter, the genuine reality of physical bodies, and the incarnation of God in a real human body).`,
      },
      {
        title: 'Sickness, sin, and death as illusions',
        body: `Because matter is unreal, sickness and physical death are also unreal — they are appearances generated by the false belief of mortal mind. They are healed not by acting on the body but by replacing the false belief with the true understanding of man's spiritual being. Sin, similarly, is the false belief that man is fallen and material; truly understood, man as God's image is already perfect. Christian Science healing is essentially a re-education of consciousness from the false to the true.`,
      },
      {
        title: 'Jesus and "the Christ" distinguished',
        body: `Christian Science distinguishes between the human Jesus and "the Christ," which Eddy understood as the divine idea or principle that Jesus most fully exemplified but did not exhaust. "Christ" is the eternal Truth that has come to humanity through many vehicles and that Jesus revealed most completely. The crucifixion is real as a historical event but is significant primarily because Jesus's understanding of the unreality of matter allowed him to overcome death and demonstrate the immortality of Spirit — not because his death made atonement for sins in any propitiatory sense. Christian Science teaches that Jesus did not suffer in the way traditional Christianity teaches — his understanding lifted him above the false belief of suffering.`,
      },
      {
        title: 'Healing as core practice',
        body: `Healing is the central practice of Christian Science. Practitioners — listed in the Christian Science Journal — offer prayer treatment for healing, typically for an hourly fee. Members traditionally do not use medical doctors or medications for their primary care, though the official position has softened slightly in recent decades. The Christian Science Sentinel and Christian Science Journal publish first-person testimonies of healing that are vetted by the Church before publication. Healing claims are foundational to Christian Science's self-understanding as a "demonstrable" religion.`,
      },
      {
        title: 'No clergy, no sacraments in the usual sense',
        body: `Christian Science has no ordained clergy. Each church has two Readers (a First Reader and a Second Reader) elected for three-year terms; they read from the Bible and <em>Science and Health</em> at services. There is no Eucharist in the traditional sense; the Lord's Supper is observed twice yearly through prayer and the reading of designated passages, not through bread and wine. Baptism is interpreted spiritually rather than performed as a water ritual. The church polity is unique: each local Church of Christ, Scientist is autonomous, but all are accountable to the Mother Church in Boston through the Christian Science Board of Directors.`,
      },
    ],
    departures: `<p>Christian Science departs from historic Christianity on every major doctrinal locus — the doctrine of God, the doctrine of creation, the doctrine of humanity, the doctrine of Christ, the doctrine of sin, the doctrine of atonement, the doctrine of the resurrection, the doctrine of the sacraments. The departures are not subtle nuances but fundamental redefinitions of the categories themselves.</p>
    <p><strong>(1) The nature of God.</strong> Christian Science teaches God as impersonal divine Mind, Principle, the seven synonyms (Mind, Spirit, Soul, Principle, Life, Truth, Love). The personal God of historic Christianity — who speaks, knows, wills, loves, and acts in history; who became incarnate in Jesus Christ; who hears prayer and forgives sin — is replaced by an impersonal divine principle whose "love" is more like a metaphysical truth than a personal relationship.</p>
    <p><strong>(2) The reality of creation.</strong> Christian Science denies the reality of matter altogether. Genesis 1, which Christians have read as God's creation of a good material universe, is reinterpreted as the spiritual unfolding of divine Mind. The Christian doctrine that God created a real material world that is genuinely good (and which the Incarnation took up and the Resurrection vindicated) is rejected.</p>
    <p><strong>(3) The Incarnation.</strong> Historic Christianity confesses that God the Son became truly human, taking on a real body, growing tired, eating, sleeping, suffering, and dying. Christian Science distinguishes Jesus (the man) from Christ (the divine idea) in ways that disable the historic doctrine of the hypostatic union. Jesus did not really suffer as we suffer; his elevated spiritual consciousness lifted him above material experience.</p>
    <p><strong>(4) The Atonement.</strong> Historic Christianity confesses that Christ's death made propitiation for sin and reconciled humanity to God (Romans 3:25; 1 John 2:2). Christian Science denies that sin is real in a way that requires propitiation; the crucifixion is significant as Jesus's demonstration of the unreality of death, not as the satisfaction of divine justice.</p>
    <p><strong>(5) The bodily Resurrection.</strong> Christian Science teaches that Jesus, having demonstrated the unreality of death, continued his ministry in such a way that his disciples could perceive him. The bodily, physical, fleshly resurrection that historic Christianity confesses is replaced by a spiritual demonstration of the unreality of death.</p>
    <p><strong>(6) The sacraments.</strong> Water baptism and the eucharistic Lord's Supper are reinterpreted spiritually and largely set aside as outward forms that point to spiritual realities Christian Science can now access directly.</p>
    <p>The cumulative effect is that Christian Science, despite its name and despite Mary Baker Eddy's lifelong love of the Bible, is not Christianity in the historic sense but a metaphysical philosophy in the family of New Thought and 19th-century American religious idealism, which uses Christian vocabulary to express a fundamentally different worldview. Mainstream Christianity — Catholic, Orthodox, Protestant, evangelical, Pentecostal — has uniformly classified Christian Science as outside historic Christianity.</p>`,
    discussionQuestions: [
      {
        id: 'q1',
        title: 'Is matter real?',
        body: `<p>Christian Science teaches that matter is unreal — that the physical world is a false appearance produced by mortal mind. Historic Christianity teaches that God created a real material universe and pronounced it good (Genesis 1:31), that the Word became flesh (John 1:14), and that Christians will be raised with real bodies (1 Corinthians 15:42–44).</p>
        <p><strong>Which view does justice to the actual experience of being human — the joys and sufferings, hungers and satisfactions, births and deaths of bodily life — and to what God himself has revealed about his creation?</strong></p>`,
      },
      {
        id: 'q2',
        title: 'Healing and the body',
        body: `<p>Christian Science teaches that physical illness is a false belief that yields to correct spiritual understanding, with prayer as the appropriate therapy rather than medicine. Mainstream Christianity has always taught that healing is a real possibility through prayer (James 5:14–15) but has also taught that physicians are God's instruments (Luke, the beloved physician; Sirach 38:1–15) and that bodies are real and require care.</p>
        <p><strong>Has Christian Science recovered a forgotten New Testament practice of spiritual healing, or has it created a system that prevents members from receiving the medical care God has also provided through human means?</strong></p>`,
      },
      {
        id: 'q3',
        title: 'Jesus suffered or only seemed to suffer?',
        body: `<p>Christian Science distinguishes between the man Jesus and the Christ idea, teaching that Jesus's elevated consciousness lifted him above the experience of real suffering on the cross. Historic Christianity has always insisted on Jesus's genuine humanity — that he was hungry, tired, grieved, and that he died a real death in agony (Hebrews 4:15; Matthew 26:38; Philippians 2:8). The early Church specifically condemned Docetism (the view that Jesus only seemed to suffer) as heresy.</p>
        <p><strong>Is the Christian Science Jesus the Jesus of the Gospels — the Word made flesh who shared our human suffering — or a docetic figure who merely appeared to share our condition?</strong></p>`,
      },
      {
        id: 'q4',
        title: 'Mary Baker Eddy and Scripture',
        body: `<p>The Christian Science Mother Church established <em>Science and Health with Key to the Scriptures</em> as the "pastor" of every Christian Science church alongside the Bible. Eddy held that her book was inspired and that it provided the key to understanding the Bible — that without her interpretive framework, the Bible's spiritual teaching cannot be correctly received. Mainstream Christianity from the Reformation forward has held the Bible to be sufficient for Christian faith and life (Westminster Confession I.6) and has resisted parallel authorities of this kind.</p>
        <p><strong>Does <em>Science and Health</em> reveal the Bible's deeper meaning, or does it impose a foreign metaphysical framework that the biblical writers themselves would not have recognized?</strong></p>`,
      },
      {
        id: 'q5',
        title: 'Children, treatment, and the limits of religious freedom',
        body: `<p>Christian Science families have historically declined medical treatment for their children in many circumstances, leading over decades to dozens of legal cases where Christian Science parents were prosecuted for neglect when children died from treatable conditions. The Church has consistently defended the religious-liberty right to choose spiritual treatment. Critics argue that whatever an adult chooses for themselves, children cannot consent to refuse life-saving medicine.</p>
        <p><strong>Where should religious liberty end and the state's duty to protect children begin? And what should a faithful Christian Science parent do when their child is gravely ill?</strong></p>`,
      },
    ],
    keyTexts: [
      { title: 'The Bible (KJV)', desc: 'Used in tandem with Science and Health as joint pastor of the Christian Science church.' },
      { title: 'Science and Health with Key to the Scriptures by Mary Baker Eddy', desc: 'First edition 1875; final edition 1910. The foundational systematic statement of Christian Science teaching, with extensive scriptural exposition.' },
      { title: 'Manual of The Mother Church by Mary Baker Eddy', desc: 'The constitutional document governing the Christian Science Mother Church and its branch churches. Eddy intended its rules to be perpetual after her death.' },
      { title: 'Miscellaneous Writings and other works by Eddy', desc: 'Including Retrospection and Introspection (autobiographical), Pulpit and Press, and various devotional and instructional works.' },
      { title: 'Christian Science Sentinel; Christian Science Journal; Christian Science Quarterly', desc: 'The Church\'s ongoing publications, providing weekly Bible lessons, testimonies of healing, and articles on the Christian Science life.' },
    ],
    historicalResponse: `<p>Mainstream Christianity has uniformly classified Christian Science as outside the historic Christian faith — not on a single point of doctrinal disagreement but on the comprehensive reinterpretation of Christian categories that Eddy's work involves. The major denominations, evangelical organizations, and Christian apologetic literature have consistently maintained this assessment.</p>
    <p>Major scholarly engagements: <strong>Walter Martin's <em>The Kingdom of the Cults</em></strong> gives the influential 20th-century evangelical assessment. <strong>Anthony Hoekema's <em>The Four Major Cults</em></strong> (1963). <strong>Charles S. Braden's <em>Christian Science Today</em></strong> (1958) gives an academic religious-studies treatment. <strong>Stephen Gottschalk's <em>The Emergence of Christian Science in American Religious Life</em></strong> (1973) provides the major scholarly history.</p>
    <p>Internal Christian Science scholarship has been limited compared to other movements on this page — the Church has historically not encouraged academic engagement that might subject its claims to ordinary scholarly methods. Notable Christian Science writers include Charles Carpenter, Robert Peel (Eddy's most thorough modern biographer, his three-volume biography 1966–77), and various Mother Church publications.</p>
    <p>Christian Science has declined substantially from its mid-20th-century peak. Membership figures are not publicly reported (Eddy's <em>Manual</em> forbids public membership counts), but the visible markers of decline are clear: the number of US Christian Science churches has dropped from approximately 1,800 in 1971 to under 1,000 today; the Reading Rooms have closed in many cities; the Christian Science Monitor ceased its print daily edition in 2008. Internal Church discussion about adaptation, the role of medical care, and the meaning of Christian Science in a 21st-century context is ongoing.</p>
    <p>The Christian Science Monitor remains a distinguished news publication, winning Pulitzer Prizes and maintaining a substantial international reporting reputation that is largely independent of the Church's specific doctrinal positions. The Christian Science Publishing Society continues to publish Eddy's works and the Church's periodicals.</p>`,
    historicalNote: 'Mary Baker Eddy was born in Bow, New Hampshire, in 1821 into a strict Calvinist household. She suffered from chronic illness throughout her early life. After an 1866 fall on ice in Lynn, Massachusetts, that she expected would be fatal, she experienced what she described as a sudden recovery while reading Matthew 9 — Christ\'s healing of the man with palsy. She dated her discovery of Christian Science to this event. Eddy taught and developed her system through the 1870s, publishing <em>Science and Health</em> in 1875 and founding the Massachusetts Metaphysical College in 1881. The Church of Christ, Scientist, was chartered in 1879. Eddy founded The Christian Science Monitor in 1908 in part to counter unfavorable press coverage of the Church. She died at age 89 in 1910. The Mother Church\'s Christian Science Board of Directors, established by Eddy in the Manual, governs the Church to the present day. Christian Science peaked in influence and membership in the mid-20th century; sustained decline since then has not been reversed despite various adaptation efforts. Notable Christian Scientists in American public life have included senators (Charles Bennett of Florida), business figures, and entertainers (Mickey Rooney, Joan Crawford, Jean Stapleton). The film <em>Religulous</em> (2008), Caroline Fraser\'s <em>God\'s Perfect Child: Living and Dying in the Christian Science Church</em> (1999), and various media investigations have documented the human cost of medical-refusal cases.',
    relatedMovements: ['mov-lds', 'mov-jw'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  {
    id: 'mov-uu',
    name: 'Unitarian Universalism',
    icon: '⚛️',
    founded: '1961 (merger of American Unitarian Association, founded 1825, and Universalist Church of America, founded 1793)',
    adherents: '~210,000 (USA, primarily); ~1,000 congregations worldwide',
    headquarters: 'Unitarian Universalist Association, Boston, Massachusetts',
    category: 'Liberal religious',
    selfDescription: `<p>Unitarian Universalists describe themselves as a "creedless" faith — a religion of shared values rather than shared beliefs. The official statement of the Unitarian Universalist Association (UUA) frames the tradition around seven Principles: the inherent worth and dignity of every person; justice, equity, and compassion in human relations; acceptance of one another and encouragement to spiritual growth; a free and responsible search for truth and meaning; the right of conscience and the use of the democratic process; the goal of world community with peace, liberty, and justice for all; and respect for the interdependent web of all existence.</p>
    <p>The tradition draws from "Six Sources" — direct experience of transcending mystery and wonder; the words and deeds of prophetic people; wisdom from the world's religions; Jewish and Christian teachings; humanist teachings; and spiritual teachings of earth-centered traditions. UUs include theists, atheists, humanists, pagans, Buddhists, and Christians within their congregations, and the tradition explicitly affirms theological diversity as a strength rather than a weakness to be overcome.</p>
    <p>The historical Unitarian inheritance (denying the Trinity, affirming God's strict unity) and the historical Universalist inheritance (denying eternal punishment, affirming universal salvation) merged in 1961 to form a self-consciously non-dogmatic religious tradition oriented toward ethical living, social justice activism, and individual spiritual exploration. UUs hold that revelation is "not sealed" — that truth comes through many channels and is not finally captured in any one tradition's creeds.</p>`,
    distinctives: [
      { title: 'Unitarianism — the rejection of the Trinity', body: 'The historical Unitarian inheritance holds that God is strictly one, not three persons. Jesus is honored as a great moral teacher and exemplar but is not held to be God incarnate. The Council of Nicaea (325) and the developed Trinitarian theology of the early Church are rejected as later philosophical accretions on a simpler original gospel.' },
      { title: 'Universalism — no eternal punishment', body: 'The historical Universalist inheritance holds that God\'s love is finally inclusive of all, and that no soul is consigned to eternal punishment. Different Universalists have held different views on whether some intermediate purification is involved, but the conviction that hell as eternal conscious torment is incompatible with divine love is foundational.' },
      { title: 'Creedlessness', body: 'UUs explicitly refuse to adopt or require any creed. The Cambridge Platform tradition of congregational polity is taken to its logical conclusion: each individual works out their own beliefs through reason, experience, and conscience. The Seven Principles are commitments to one another about how to behave, not statements about God or salvation.' },
      { title: 'Theological pluralism within congregations', body: 'A single UU congregation will typically include theists, atheists, agnostics, Christians, Jews, Buddhists, pagans, and humanists worshipping together. Sunday worship draws from many traditions; sermons may reference any source. This is not regarded as syncretism to be overcome but as fidelity to the open-ended search for truth.' },
      { title: 'Social justice as central religious practice', body: 'UU communities are characteristically active in progressive social causes — LGBT rights (UUs were the first major religious body to ordain openly gay clergy, in 1980, and have performed same-sex marriages since the 1980s), racial justice, women\'s rights, environmental advocacy, reproductive rights. Activism is regarded as worship.' },
      { title: 'Reason and conscience as religious authorities', body: 'The UU tradition explicitly elevates individual reason and conscience as religious authorities. Where traditional Christianity has placed Scripture and Tradition (and, for Catholics and Orthodox, the Magisterium or the consensus of the Fathers) as authorities to which the individual conscience must submit, UU practice reverses this — the individual is the final arbiter of religious truth.' },
    ],
    departures: `<p>From the perspective of historic Christianity (Catholic, Orthodox, and confessional Protestant), the departures of Unitarian Universalism are foundational rather than peripheral.</p>
    <p><strong>The denial of the Trinity.</strong> The Council of Nicaea (325) and the Nicene-Constantinopolitan Creed (381) defined the orthodox doctrine of God as one in essence, three in persons — the Father, the Son, and the Holy Spirit, all of one essence (homoousios). This is not one Christian position among many; it is the foundational doctrine of the Christian confession of God. To deny it, in classical Christian theology, is not to hold a different Christian view but to confess a different God.</p>
    <p><strong>The denial of the deity of Christ.</strong> The Definition of Chalcedon (451) confessed Christ as "truly God and truly man... one and the same Christ, Son, Lord, only begotten, in two natures, without confusion, without change, without division, without separation." Unitarian theology, in denying that Christ is fully God, parts company with the orthodox confession of who Christ is.</p>
    <p><strong>The relativizing of revelation.</strong> Where classical Christianity confesses Scripture as the written Word of God and Christ as the living Word, UU practice treats biblical and Christian sources as one among many — wisdom traditions that can speak alongside Buddhist, humanist, pagan, and other voices. This relativizes the Christian gospel in a way that the historic confessions do not permit.</p>
    <p><strong>The Universalist claim about hell.</strong> While Christian universalism has had advocates throughout Christian history (Origen, some patristic figures, recently David Bentley Hart), it has never been the consensus or creedal position of any major Christian communion. The Universalist movement\'s strong rejection of any concept of judgment beyond death departs from the consensus reading of Christ\'s own teaching (Matthew 25:46; Mark 9:43–48; Revelation 20:11–15).</p>
    <p><strong>Creedlessness as religious principle.</strong> The Christian tradition has historically held that confession of certain truths is constitutive of Christian identity (Romans 10:9; 1 Corinthians 15:3–4; the apostolic Rule of Faith). To make creedlessness a foundational principle is to refuse the apostolic pattern of holding to "the faith once delivered to the saints" (Jude 3).</p>`,
    discussionQuestions: [
      {
        id: 'q1',
        title: 'Is Unitarian Universalism still a Christian church?',
        body: `<p>The Unitarian and Universalist traditions emerged from within Protestant Christianity. The American Unitarian Association (1825) was a Christian denomination that denied the Trinity but worshipped within a recognizably Christian frame. By the time of the 1961 merger, both denominations had drifted significantly from Christian identity; today, the UUA explicitly includes non-Christian (and non-theist) voices in equal standing.</p>
        <p><strong>At what point does a tradition that started Christian cease to be Christian — and does Unitarian Universalism still hold any meaningful continuity with the Christian movement it grew from?</strong></p>`,
      },
      {
        id: 'q2',
        title: 'The Trinity and the unity of God',
        body: `<p>The Unitarian tradition holds that the Council of Nicaea (325) and its Trinitarian definitions corrupted a simpler original Christianity in which God was strictly one and Jesus was a great teacher but not God. The orthodox tradition holds that Nicaea articulated what was implicit in the apostolic preaching from the beginning. Both sides claim historical continuity with the first century.</p>
        <p><strong>Did Nicaea articulate or corrupt the apostolic gospel? And what does it mean for Unitarianism\'s claim if the New Testament itself treats Jesus in ways that strain a purely Unitarian reading?</strong></p>`,
      },
      {
        id: 'q3',
        title: 'Creedlessness as religious principle',
        body: `<p>UU practice makes creedlessness a foundational principle — no member must affirm any specific belief about God, Christ, salvation, or anything else; the Seven Principles are behavioral commitments, not theological claims. Traditional Christianity has held that confessing certain truths is constitutive of Christian identity. Can a religion be a religion without any required beliefs at all?</p>
        <p><strong>Is creedlessness genuine spiritual freedom — letting each person find their own truth — or is it the dissolution of religion into a kind of progressive social club? What is the cost of having no shared confession?</strong></p>`,
      },
      {
        id: 'q4',
        title: 'Universal salvation',
        body: `<p>The Universalist tradition holds that God\'s love is finally inclusive of all, that no soul is eternally lost. This has had Christian advocates (Origen, Gregory of Nyssa arguably, David Bentley Hart today) but has never been the mainstream Christian confession. The biblical witness includes both texts that lean universal (1 Timothy 2:4; Colossians 1:20; 1 Corinthians 15:22) and texts that strongly suggest some form of permanent judgment (Matthew 25:46; Revelation 20:11–15).</p>
        <p><strong>Is universal salvation a true reading of Scripture finally beating out the harsher texts, or is it an emotional preference imposed on a Bible that resists it? Can divine love require the salvation of every soul?</strong></p>`,
      },
      {
        id: 'q5',
        title: 'Many sources or one Lord',
        body: `<p>UU draws from "Six Sources" — direct experience, prophetic people, world religions, Jewish-Christian heritage, humanist insight, and earth-centered traditions. Each source carries equal authority; none is finally controlling. The Christian tradition has historically held that while truth can be found in many places, Christ is uniquely Lord — "the way, the truth, and the life" (John 14:6).</p>
        <p><strong>Is the UU approach a generous and humble acknowledgement that truth comes from many sources, or a refusal to make the central Christian claim that the way to the Father is through the Son?</strong></p>`,
      },
    ],
    keyTexts: [
      { title: 'The Cambridge Platform (1648)', desc: 'The original New England congregational polity document. Sets out the local-church autonomy that later allowed Unitarian and Universalist divergence within Protestantism.' },
      { title: 'William Ellery Channing, "Unitarian Christianity" (1819)', desc: 'The Baltimore Sermon — the founding theological statement of American Unitarianism. Channing argued that the Trinity is unbiblical and that Jesus is a moral exemplar but not God.' },
      { title: 'Hosea Ballou, A Treatise on Atonement (1805)', desc: 'The foundational text of American Universalism. Ballou argued that the atonement is reconciliation of humans to God, not satisfaction of divine wrath, and that all souls are finally saved.' },
      { title: 'The Seven Principles and Six Sources', desc: 'The contemporary foundational statement of UU identity, adopted by the UUA in 1985. Not a creed but a covenant.' },
      { title: 'James Luther Adams, On Being Human Religiously (1976)', desc: 'The major 20th-century UU theologian. Adams (1901–1994) developed the most substantial theological account of liberal religion in the 20th century.' },
    ],
    historicalResponse: `<p>Christian responses to Unitarian Universalism have ranged from sharp polemic to genuine theological engagement.</p>
    <p>The American Unitarian controversy of the early 19th century split the Congregational churches of New England, with the orthodox party (led by Lyman Beecher and others) and the Unitarian party (led by Channing and others) divided on the Trinity. Yale and Andover stood with orthodoxy; Harvard moved decisively to the Unitarian side after 1805. <strong>Andrews Norton</strong> (1786–1853, the "Unitarian Pope"), and on the orthodox side <strong>Moses Stuart</strong> (1780–1852) at Andover, conducted the most substantial theological exchange of the early 19th-century American religious scene.</p>
    <p><strong>Karl Barth</strong> and the dialectical theology of the early 20th century engaged liberal Protestantism — including its Unitarian and proto-Unitarian forms — as a fundamental departure from the Reformed faith. Barth\'s <em>Romans</em> commentary (1922) and <em>Church Dogmatics</em> (1932 onward) framed the central question of modern theology as whether revelation is God\'s self-disclosure in Christ or human religious experience interpreted in many ways.</p>
    <p><strong>Reinhold Niebuhr</strong> (1892–1971), though himself drawn to liberal theology in some ways, sharply criticized the optimistic anthropology and moralism of Unitarian and broader liberal Protestantism in works including <em>Moral Man and Immoral Society</em> (1932) and <em>The Nature and Destiny of Man</em> (1941–43).</p>
    <p>Contemporary evangelical engagement (e.g. <strong>Carl Henry</strong>, <strong>D.A. Carson</strong>) has typically classified Unitarian Universalism as a post-Christian religious movement rather than a variant of Christianity. The historic confessional churches (Catholic, Orthodox, Lutheran, Reformed, Anglican in its evangelical and Anglo-Catholic forms) have not recognized UU as a Christian communion in any meaningful sense.</p>
    <p>Catholic engagement, particularly post-Vatican II, has been irenic but clear. The Catholic Church does not recognize UU baptism (where it is practiced at all) and treats UU as a non-Christian religious tradition for purposes of marriage and other sacramental questions. The genuine theological engagement that does exist (in academic settings, in interfaith dialogue) has framed UU as a sister tradition in the broader category of religion rather than as a Christian dialogue partner.</p>`,
    historicalNote: 'The Unitarian movement traces theologically to figures including Michael Servetus (1511–1553, executed for anti-Trinitarian theology in Geneva at Calvin\'s instigation), Faustus Socinus (1539–1604, the Polish Brethren), and John Biddle (1615–62, the "father of English Unitarianism"). The American Unitarian Association was founded in 1825 in Boston; the Universalist Church of America was organized in 1793. Their 1961 merger formed the UUA. Membership peaked around 250,000 in the 1960s and has slowly declined to ~210,000. The UU congregation in Selma, Alabama (Rev. James Reeb, murdered there in March 1965 by white supremacists during the voting rights campaign) is one of the more notable martyr-figures of the modern UU tradition. The UUA was the first major American religious body to ordain openly gay clergy (1980) and to perform same-sex weddings (early 1980s). The contemporary UU movement is characteristically progressive politically and theologically pluralistic.',
    relatedMovements: ['mov-cs'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  {
    id: 'mov-unification',
    name: 'Unification Church / Family Federation',
    icon: '☀️',
    founded: '1954, by Sun Myung Moon (1920–2012) in South Korea',
    adherents: 'Disputed; movement claims ~1–3 million; outside estimates ~100,000–250,000 active members worldwide',
    headquarters: 'Family Federation for World Peace and Unification, headquartered in Seoul, South Korea',
    category: 'New religious',
    selfDescription: `<p>The Unification Church — formally the Family Federation for World Peace and Unification since 1994 — was founded by Sun Myung Moon (1920–2012), a Korean evangelist who claimed that as a teenager on Easter morning 1935, Jesus appeared to him and asked him to complete the mission Jesus had been unable to complete on earth.</p>
    <p>Moon\'s teaching, set out in <em>Divine Principle</em> (Korean original 1957, English 1973), centers on his account of human history as the unfolding of God\'s providence to restore the Fall. The Fall, in Moon\'s teaching, was not Adam and Eve eating fruit but Eve\'s sexual seduction by Lucifer, transmitting fallen blood lineage to humanity. The mission of the Messiah is to establish a "True Family" through marriage and physical reproduction, restoring God\'s original lineage and ideal of creation. Jesus, according to Moon, partially accomplished this — establishing spiritual salvation through his death — but was unable to marry and complete the physical restoration. The mission therefore awaits a second Messiah, the "Lord of the Second Advent."</p>
    <p>Moon never explicitly claimed to be that Messiah in his public teaching until late in his life, but his church increasingly identified him as such. Moon and his wife Hak Ja Han (b. 1943) are referred to as the "True Parents" of humanity; their marriage in 1960 inaugurated what the movement calls the era of restoration.</p>
    <p>The movement is famous for its mass weddings — "blessing ceremonies" in which thousands of couples (often matched by Moon himself) are married simultaneously. The largest such ceremony, in October 1995, involved 360,000 couples worldwide via satellite. The blessing is held to graft believers into the True Family\'s lineage and to begin the restoration of God\'s original creation ideal.</p>`,
    distinctives: [
      { title: 'Sun Myung Moon as the Lord of the Second Advent', body: 'The movement holds that Sun Myung Moon was the second messianic figure foretold in Christian eschatology — sent to complete the unfinished mission of Jesus. Moon is regarded as the True Father; Hak Ja Han as the True Mother; together they are the True Parents through whom humanity is restored.' },
      { title: 'The reinterpretation of the Fall', body: 'The Fall in Genesis 3 is read as Eve\'s spiritual and physical seduction by Lucifer (the serpent), transmitting "fallen lineage" to humanity through sexual reproduction. The cure must therefore involve the restoration of pure lineage through True Parents.' },
      { title: 'Mass weddings (the Blessing)', body: 'The Blessing ceremony is the central sacrament of the movement. Couples are matched (originally by Moon personally; now by various means) and married in mass ceremonies that graft them into the True Family lineage. Blessed couples are held to be free from the satanic blood lineage of fallen humanity.' },
      { title: 'Jesus failed', body: 'According to Divine Principle, Jesus came to establish the True Family but was killed before he could marry. His death achieved spiritual salvation but not the complete physical restoration God intended. This frank claim — that Jesus failed his core mission — is among the most controversial of Unification teachings.' },
      { title: 'Theological syncretism', body: 'Divine Principle draws on Christian, Korean shamanistic, and Confucian elements, integrated into a distinctively Korean reading of salvation history. The movement positions itself as the completion of Christianity rather than a different religion, though most Christian observers regard it as a different religion.' },
      { title: 'Political and economic empire', body: 'The Unification movement built one of the most extensive religious-business empires in the modern world: The Washington Times (founded 1982), the Unification Theological Seminary, news services, fishing and hotel businesses globally, university institutions in Korea and elsewhere. Moon\'s personal wealth and the movement\'s political engagement (particularly with American conservative politicians from the 1970s onward) gave it substantial geopolitical visibility.' },
    ],
    departures: `<p>The departures of the Unification movement from historic Christianity are comprehensive and structural rather than incidental.</p>
    <p><strong>The deity and finality of Christ.</strong> Christianity confesses Christ as God incarnate, the unique and final Word of God. The Unification claim that Christ\'s mission was incomplete and required a second Messiah (Moon) directly contradicts the Christian confession that Christ has accomplished salvation "once for all" (Hebrews 9:26). The Christian Christ does not need a successor.</p>
    <p><strong>The reinterpretation of the Fall.</strong> The sexual interpretation of the Fall — Eve seduced by Lucifer, fallen lineage transmitted through reproduction — has no biblical basis. The traditional Christian reading of Genesis 3 holds that the Fall consisted in disobedience to God\'s command (eating the fruit), not in sexual transgression. The Unification interpretation makes physical lineage rather than spiritual rebellion the locus of fallenness.</p>
    <p><strong>The deification of Moon and Hak Ja Han.</strong> The treatment of Sun Myung Moon and Hak Ja Han as "True Parents" of humanity, on a par with or superseding Christ\'s role, is incompatible with Christian confession of the unique mediation of Christ (1 Timothy 2:5). Christian engagement with the movement has consistently identified this as the central theological problem.</p>
    <p><strong>Salvation through marriage.</strong> The Unification doctrine that salvation requires the Blessing ceremony — being grafted into True Family lineage through ritual marriage — adds a requirement to salvation that has no biblical warrant. The Christian gospel of salvation by grace through faith in Christ requires no such ritual graft.</p>
    <p><strong>The Christian text as raw material.</strong> Divine Principle treats the Bible as one source among others to be integrated into Moon\'s revelatory framework. Where historic Christianity submits all teaching to Scripture, the Unification approach submits Scripture to Divine Principle.</p>`,
    discussionQuestions: [
      {
        id: 'q1',
        title: 'Did Jesus fail?',
        body: `<p>The most provocative Unification claim is that Jesus failed his primary mission — to establish the True Family through marriage and physical lineage — and that his death achieved only partial (spiritual) salvation. The crucifixion, in Unification teaching, was not the supreme achievement of God\'s saving plan but the tragic consequence of Israel\'s rejection of the Messiah. Traditional Christianity holds the crucifixion as the central saving event.</p>
        <p><strong>Was the cross the climax of God\'s saving work or, as Unification teaches, the failure that necessitated a second Messiah?</strong></p>`,
      },
      {
        id: 'q2',
        title: 'The True Family',
        body: `<p>The Unification movement makes physical lineage central to salvation — the Fall was the corruption of human bloodline through Eve\'s sexual transgression with Lucifer; salvation is the restoration of true lineage through the True Family. Christianity has historically treated the New Birth (John 3:3) as spiritual rather than physical, and the family of God as constituted by adoption rather than bloodline (Galatians 3:28; Romans 8:15).</p>
        <p><strong>Is salvation a matter of lineage or of relationship? And what should we make of the Unification claim that the family bloodline carries the locus of sin and redemption?</strong></p>`,
      },
      {
        id: 'q3',
        title: 'A second Messiah',
        body: `<p>Unification teaching identifies Sun Myung Moon as the Lord of the Second Advent — a second messianic figure with a mission Jesus could not complete. Christianity confesses one Messiah, returning at the end of the age in glory, not a second incarnate Messiah arriving in modern history.</p>
        <p><strong>Could there be a second Messiah, completing what the first could not — or does the Christian gospel require that there be one Christ, finally and definitively?</strong></p>`,
      },
      {
        id: 'q4',
        title: 'Mass weddings as sacrament',
        body: `<p>The Blessing ceremony — mass weddings of thousands of couples matched by the movement\'s leadership — is the central sacrament of Unification practice. It is held to graft believers into the True Family lineage and to free them from satanic bloodline. Traditional Christian marriage is between two individuals before God; the matching by religious authorities (often without the couples having met) is foreign to Christian practice.</p>
        <p><strong>Can the Blessing ceremony be understood as a deepening of Christian marriage theology, or does the matching-by-leadership model and the lineage theology make it something fundamentally different?</strong></p>`,
      },
      {
        id: 'q5',
        title: 'The post-Moon movement',
        body: `<p>Sun Myung Moon died in 2012. The movement has since experienced significant family conflict over succession — sons (Hyun Jin Moon, Hyung Jin Moon, Justin Moon) and the widow Hak Ja Han claiming various legitimate inheritances of leadership. The Family Federation (Hak Ja Han\'s branch), the Family Peace Association (Hyun Jin Moon\'s branch), and the Sanctuary Church (Hyung Jin Moon\'s branch) now compete for the Unification mantle.</p>
        <p><strong>What does the post-Moon succession crisis suggest about the Unification movement\'s claim to embody God\'s providential restoration of humanity? Should religious movements that depend on a single founder figure be evaluated by their viability after that founder\'s death?</strong></p>`,
      },
    ],
    keyTexts: [
      { title: 'Divine Principle (1957/1973)', desc: 'The foundational systematic theology of the Unification movement, attributed to Sun Myung Moon but compiled by his disciple Hyo Won Eu. Sets out the doctrine of the Fall, the providential history of restoration, and the mission of the Lord of the Second Advent.' },
      { title: 'Outline of the Principle, Level 4', desc: 'A more accessible compilation of Unification teaching, widely used in workshops and study groups.' },
      { title: 'The Sermons of Sun Myung Moon', desc: 'Hundreds of volumes of Moon\'s recorded teaching, sermons, and pastoral addresses, treated within the movement as ongoing revelatory teaching.' },
      { title: 'Cheon Seong Gyeong (Heavenly Scripture)', desc: 'The compilation of Moon\'s teachings published in 2005, treated as scripture by the movement.' },
      { title: 'Pyung Hwa Shin Gyeong (Pacific Rim Heavenly Scripture)', desc: 'Later compilation of Moon\'s teachings, post-dating Cheon Seong Gyeong.' },
    ],
    historicalResponse: `<p>Christian engagement with the Unification movement has been extensive since the 1970s, primarily classifying it as a non-Christian new religious movement rather than a Christian variant.</p>
    <p>The Korean Christian context shaped early evaluations. Korean Protestant churches (heavily Presbyterian) categorically rejected Moon\'s movement as heretical from the 1960s onward. The Korean Christian theological response, especially through institutions like Yonsei University and the conservative Presbyterian seminaries, framed Moon\'s teaching as outside any meaningful Christian boundary.</p>
    <p>The American response intensified after the movement\'s major growth in the 1970s. <strong>Ronald Enroth</strong>\'s <em>The Lure of the Cults</em> (1979) and the broader Christian "counter-cult" movement of the 1970s–80s engaged Unification theology as foreign to Christianity. Academic engagement (e.g. through the work of <strong>Eileen Barker</strong> at the London School of Economics, whose <em>The Making of a Moonie</em>, 1984, gave a sociologically careful account of the movement) has tended to be more nuanced than the popular counter-cult literature.</p>
    <p><strong>Walter Martin</strong>\'s <em>Kingdom of the Cults</em> (multiple editions from 1965; the chapter on Unification was added in later editions) gave the standard evangelical assessment. <strong>The Christian Research Institute</strong> and similar organizations have engaged Unification theology as outside Christian orthodoxy.</p>
    <p>The movement\'s significant social and political activity — Moon\'s relationships with American conservative politicians (Richard Nixon, George H.W. Bush, others), the founding of The Washington Times, the involvement of major academic and political figures in Unification-funded conferences — gave the movement a public visibility disproportionate to its membership.</p>
    <p>Major mainstream Christian bodies (Catholic, Orthodox, mainline Protestant, evangelical) have consistently distinguished interfaith dialogue (in which Unification representatives may participate as representatives of their own tradition) from Christian dialogue (which presupposes shared Christian commitments that Unification does not affirm).</p>`,
    historicalNote: 'Sun Myung Moon was born in 1920 in what is now North Korea. After his claimed Easter 1935 vision of Jesus, he studied electrical engineering in Tokyo, returned to Korea, and was imprisoned by the North Korean Communist regime (1948–50) — released by United Nations forces during the Korean War. He founded the Holy Spirit Association for the Unification of World Christianity (Tongil-gyo) on May 1, 1954, in Seoul. The movement grew through Korea and Japan in the 1950s–60s and expanded to the United States in the early 1970s. Moon married Hak Ja Han in 1960 (his second marriage). Major mass weddings: 1,800 couples in 1975; 2,075 in 1982; 6,500 in 1988; 30,000 in 1992; 360,000 worldwide (via satellite) in 1995. Moon was convicted of tax fraud in the United States in 1982 and served 13 months in federal prison. He died on September 3, 2012. The post-Moon succession dispute among his sons and widow continues to fragment the movement. The Family Federation under Hak Ja Han remains the largest branch.',
    relatedMovements: ['mov-lds'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  {
    id: 'mov-satanism',
    name: 'Satanism (LaVeyan & The Satanic Temple)',
    icon: '⛧',
    founded: 'Church of Satan, 1966 (Anton LaVey); The Satanic Temple, 2013',
    adherents: 'Disputed; Church of Satan does not publish numbers (likely under 100,000); The Satanic Temple claims ~700,000 registered supporters (membership tier lower)',
    headquarters: 'Church of Satan: Salem, Massachusetts; The Satanic Temple: Salem, Massachusetts',
    category: 'Atheistic / philosophical',
    selfDescription: `<p>Modern Satanism, as represented by its two largest organizations, is an explicitly atheistic philosophy that uses "Satan" as a symbol of rebellion against religious authority, individualism, and the affirmation of human nature — not as a deity to be worshipped. Both organizations make this explicit and emphatic in their public materials.</p>
    <p><strong>The Church of Satan</strong>, founded by Anton LaVey (1930–1997) in San Francisco on April 30, 1966 (Walpurgisnacht), is built on the philosophy LaVey systematized in <em>The Satanic Bible</em> (1969). LaVeyan Satanism affirms: humans are animals like any other; the supernatural does not exist; "Satan" represents the rejection of supernatural and authoritarian religion, particularly Christianity; the individual is the highest moral authority; indulgence rather than abstinence is the proper response to human desire (within the limits set by the law and others\' rights); strength, productivity, and self-reliance are virtues.</p>
    <p><strong>The Satanic Temple</strong> (TST), founded by Lucien Greaves and Malcolm Jarry in 2013, is an explicitly atheistic religious organization that uses Satanism as a vehicle for progressive activism, especially around religious freedom, reproductive rights, and the separation of church and state. TST\'s Seven Fundamental Tenets emphasize compassion, the pursuit of justice, bodily autonomy, the freedoms of others, that beliefs should conform to one\'s best scientific understanding, that one should not distort scientific facts to fit beliefs, that mistakes should be met with apology, and that every tenet is a guiding principle to inspire nobility rather than a written law.</p>
    <p>Both organizations are explicit that they do not believe in Satan as a literal being. Theistic Satanism (those who actually worship Satan as a deity) does exist but is a far smaller and more diffuse phenomenon than the two organized atheistic movements; estimates of theistic Satanists worldwide range from a few thousand to perhaps 50,000, with no central organization.</p>`,
    distinctives: [
      { title: 'Atheism', body: 'Both major Satanist organizations are explicitly atheistic. They do not believe in God, Satan, demons, heaven, hell, or any supernatural realities. "Satan" is a symbol, not a being. This distinguishes modern Satanism categorically from any form of religious tradition that worships supernatural entities.' },
      { title: 'Anti-religious authority', body: 'Satanism positions itself in deliberate opposition to organized religion, particularly Christianity. The Christian conception of God as a moral authority binding the individual conscience is precisely what Satanism rejects. The individual is the highest moral authority.' },
      { title: 'Indulgence rather than abstinence (LaVeyan)', body: 'LaVeyan Satanism explicitly inverts traditional Christian sexual ethics, dietary restrictions, and ascetic disciplines. Indulgence (in pleasure, comfort, and self-expression) is valorized; abstinence is regarded as life-denying. This applies within the limits of consent, the law, and respect for others.' },
      { title: 'Religious-freedom activism (TST)', body: 'The Satanic Temple has used its religious status as a legal vehicle for activism — most notably submitting a statue of Baphomet for installation at the Oklahoma State Capitol when the state placed a Ten Commandments monument there; legal challenges to abortion restrictions framed as religious-freedom claims; the After School Satan program as counter-programming to evangelical Good News Clubs in public schools.' },
      { title: 'Symbolic ritual', body: 'Both organizations practice ritual — Satanic Mass, Black Mass, ordination ceremonies — but understand ritual as psychological theater and group bonding rather than as efficacious religious act. The ritual achieves emotional and social effects, not metaphysical ones.' },
      { title: 'Rejection of equating Satanism with violence or harm', body: 'Both organizations explicitly reject the popular conception of Satanism as involving animal sacrifice, child abuse, criminal activity, or any form of violence. Both publicly support law enforcement and reject claims of "Satanic Ritual Abuse" (a moral panic of the 1980s that has been thoroughly discredited).' },
    ],
    departures: `<p>The Satanism question is structurally different from the other movements profiled here. Where Mormonism, Jehovah\'s Witnesses, and Adventism claim Christian identity and differ on the interpretation of Christian doctrine, Satanism explicitly defines itself in opposition to Christianity. The departures are not internal Christian disputes but the affirmation of a non-Christian and indeed anti-Christian philosophy.</p>
    <p><strong>The denial of God.</strong> The first article of Christian faith — "I believe in God the Father almighty, Creator of heaven and earth" — is denied. Satanism is atheistic. The Christian doctrine of God as the source of all that is, eternally loving, righteous, and merciful, is rejected.</p>
    <p><strong>The denial of Christ.</strong> Satanism rejects Christ as Lord, denies the Incarnation, the atonement, the resurrection. Where Unitarian Universalism removes Christ from his central role while honoring him as a moral teacher, Satanism rejects Christianity\'s central figure as well as its central claims.</p>
    <p><strong>The inversion of Christian ethics.</strong> LaVeyan Satanism explicitly inverts several Christian moral commitments — affirming pride, indulgence, vengeance against enemies, and self-prioritization where Christianity affirms humility, self-control, forgiveness, and love of neighbor and enemy. (The Satanic Temple\'s Seven Fundamental Tenets are more compassionate in tone and have substantial overlap with humanistic ethics that historic Christianity also shares.)</p>
    <p><strong>The autonomous self as final authority.</strong> The deepest theological divergence may be the locus of moral authority. Christianity teaches that God is the source and standard of goodness, that human flourishing is found in conformity to God\'s will. Satanism teaches that the individual is the highest moral authority, accountable only to themselves (within the limits of others\' rights and the law).</p>`,
    discussionQuestions: [
      {
        id: 'q1',
        title: 'Atheistic Satanism: provocative philosophy or empty pose?',
        body: `<p>Modern Satanism\'s central insight, defenders argue, is the use of provocative iconography to expose hypocrisy in Christian-majority societies and to defend religious freedom for all. Critics argue that an atheistic philosophy that adopts "Satan" as a symbol is parasitic on Christianity — it has nothing positive to say without the Christian framework it inverts. Without Christianity, there is no Satan to be a symbol of.</p>
        <p><strong>Is modern atheistic Satanism a coherent and positive philosophical tradition, or is it inevitably dependent on the Christianity it rejects — a kind of reactive identity that disappears the moment Christianity does?</strong></p>`,
      },
      {
        id: 'q2',
        title: 'The individual as final moral authority',
        body: `<p>The core ethical claim of LaVeyan Satanism is that the individual is the highest moral authority — accountable only to themselves and (in practical terms) the law and the rights of others. Christianity teaches that human flourishing is found in submission to God\'s will, that the individual conscience is not the final court.</p>
        <p><strong>Can a moral framework that locates final authority in the autonomous individual produce stable virtue and community, or does it collapse into mere preference? What is the moral cost of denying any higher authority than the self?</strong></p>`,
      },
      {
        id: 'q3',
        title: 'Religious freedom and Satanic activism',
        body: `<p>The Satanic Temple\'s activism — submitting Baphomet statues alongside Ten Commandments monuments, opposing abortion restrictions on religious-freedom grounds, the After School Satan program — uses religious-freedom law as a vehicle for progressive causes. Christians who believe in robust religious-freedom protection face the question: if those protections cover Christianity, must they not also cover Satanism?</p>
        <p><strong>Does religious-freedom protection that includes Christianity necessarily include Satanism? And what does TST\'s use of religious-freedom law reveal about the current state of American church-state relations?</strong></p>`,
      },
      {
        id: 'q4',
        title: 'The Christian moral inheritance in Satanism',
        body: `<p>The Satanic Temple\'s Seven Fundamental Tenets — compassion, justice, bodily autonomy, freedom, scientific responsibility, humility about mistakes, nobility of spirit — read like a humanistic restatement of much that the Christian moral tradition has affirmed. Critics argue that Satanism\'s positive content is essentially the Christian moral inheritance with the theology stripped out; defenders argue that these values can be grounded in human nature without theological foundations.</p>
        <p><strong>Can the moral content of Western humanism survive its separation from the Christian theological tradition that nurtured it, or does it require a religious grounding it has lost?</strong></p>`,
      },
      {
        id: 'q5',
        title: 'Satanism and the dignity of opposition',
        body: `<p>A theological question Christianity itself has not fully resolved: what is the proper Christian response to those who deliberately and self-consciously oppose the Christian gospel? The historic responses have ranged from violent persecution (most of Christian history) to argumentative engagement (the apologetic tradition) to indifference to ironic engagement. Satanism puts this question in its sharpest form — adversaries who name themselves as adversaries.</p>
        <p><strong>How should Christians engage those who explicitly define themselves against Christianity? And what does it say about Christian witness in a particular cultural moment when a self-consciously anti-Christian organization can claim hundreds of thousands of registered supporters?</strong></p>`,
      },
    ],
    keyTexts: [
      { title: 'The Satanic Bible by Anton LaVey (1969)', desc: 'The foundational text of LaVeyan Satanism. Sets out the philosophy, the Nine Satanic Statements, the Eleven Satanic Rules of the Earth, and the ritual framework. Has remained in print continuously since 1969.' },
      { title: 'The Satanic Rituals by Anton LaVey (1972)', desc: 'The ritual companion to The Satanic Bible. Provides texts and instructions for Satanic ceremonies, understood as psychological theater rather than supernatural acts.' },
      { title: 'The Satanic Witch by Anton LaVey (1989)', desc: 'LaVey\'s work on what he called "Lesser Magic" — practical psychological influence — directed particularly at women practitioners.' },
      { title: 'The Seven Fundamental Tenets of The Satanic Temple', desc: 'The founding ethical statement of The Satanic Temple, comparable in role to the UU Seven Principles or other contemporary humanistic statements.' },
      { title: 'The Devil\'s Tome by Shane Bugbee (2021)', desc: 'A documentary work tracing the rise of The Satanic Temple. Also: the documentary film Hail Satan? (Penny Lane, 2019), which gave a sympathetic but documentary account of TST.' },
    ],
    historicalResponse: `<p>Christian engagement with modern Satanism has gone through several distinct phases.</p>
    <p><strong>The Satanic Panic of the 1980s.</strong> American evangelical engagement with Satanism in the 1980s was shaped by what historians now call the "Satanic Panic" — a moral panic centered on claims of "Satanic Ritual Abuse" (organized networks of Satanists abusing children, holding human sacrifices, etc.). Major figures in the panic included Mike Warnke, whose <em>The Satan Seller</em> (1973) claimed insider knowledge of Satanism; the McMartin preschool trial (1984–90); the West Memphis Three case (1993). The panic produced extensive police investigations, lengthy prison sentences (many of which have since been overturned as the underlying claims proved false), and significant evangelical literature that has not aged well. The FBI investigation by Special Agent Kenneth Lanning (1989, 1992) and subsequent academic studies established that the alleged organized Satanic crime network did not exist; what remained was the small and diffuse phenomenon of self-identified Satanists, almost entirely non-criminal.</p>
    <p><strong>Sober Christian engagement.</strong> Sober Christian engagement with actual organized Satanism has been more limited but more accurate. <strong>Ronald Enroth</strong>\'s academic work, <strong>James R. Lewis</strong>\'s scholarly studies of new religious movements including Satanism, and the broader sociological literature have given more accurate accounts of what Church of Satan and TST actually teach.</p>
    <p><strong>Apologetic and pastoral engagement.</strong> Conservative Christian apologetic literature has typically engaged Satanism as a particular form of unbelief — explicit rejection of the Christian gospel — rather than as a religious tradition to be respected on its own terms. <strong>The Christian Research Institute</strong> and similar organizations have produced apologetic material aimed at Christians who might encounter Satanist claims.</p>
    <p><strong>Cultural engagement.</strong> The cultural response to The Satanic Temple in particular has been significant. TST\'s litigation strategy (the Baphomet statue at Oklahoma; the After School Satan program; the abortion-rights cases) has made it a focal point of contemporary church-state debates. Christian responses have ranged from outraged opposition to the recognition (sometimes reluctant) that TST is using legal mechanisms that depend on the same religious-freedom framework that Christian institutions also depend on.</p>
    <p><strong>Pastoral and theological engagement.</strong> Major Christian theological engagement with Satanism as a phenomenon — beyond apologetics — has been limited. The deepest treatments have come not from those engaging organized atheistic Satanism but from those engaging the broader cultural patterns of which it is one expression: <strong>Charles Taylor</strong> on the secular age, <strong>David Bentley Hart</strong> on atheism, <strong>Augustine</strong> on the libido dominandi as a perpetually-available human possibility.</p>`,
    historicalNote: 'Anton LaVey (born Howard Stanton Levey, 1930–1997) was a San Francisco organist, lecturer, and showman who founded the Church of Satan on April 30, 1966 ("Year One Anno Satanas"). His daughter Karla LaVey and later Peter Gilmore led the organization after his death; Gilmore has been High Priest since 2001. The Satanic Temple was founded in 2013 by Lucien Greaves (pseudonym of Doug Mesner) and Malcolm Jarry. TST was recognized by the IRS as a tax-exempt religious organization in 2019. The 8.5-foot Baphomet statue commissioned by TST for the Oklahoma State Capitol (when the state had placed a Ten Commandments monument there) became iconic in church-state debates of the 2010s; both monuments were eventually removed. TST claimed approximately 700,000 registered members in 2023 (registration is free; active congregational membership is much lower — likely in the tens of thousands). The Church of Satan does not publish membership numbers but its public visibility has been less than TST\'s. The Hail Satan? documentary (Penny Lane, 2019) gave TST significant cultural visibility.',
    relatedMovements: ['mov-uu'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  {
    id: 'mov-rastafari',
    name: 'Rastafari',
    icon: '🦁',
    founded: '1930s, Jamaica',
    adherents: '~700,000–1,000,000 worldwide; majority in Jamaica and the Caribbean diaspora',
    headquarters: 'No central authority; major centers in Jamaica (Kingston), Ethiopia (Shashamane), and the African diaspora',
    category: 'African diasporic',
    selfDescription: `<p>Rastafari (Rastafarians often reject the suffix "-ism" as an imposition of Western categorization) is an Afrocentric spiritual movement that emerged in Jamaica in the 1930s, centered on the belief that Haile Selassie I (1892–1975), Emperor of Ethiopia from 1930 to 1974, is the Second Coming of Christ — the messianic figure prophesied in the Bible and the King of Kings foretold in Revelation 5:5 and 19:16.</p>
    <p>The movement emerged from the intersection of Marcus Garvey\'s Pan-Africanism (Garvey predicted "Look to Africa, where a black king shall be crowned, for the day of deliverance is at hand"), Ethiopianism (a strand of Black Christian theology emphasizing Africa\'s biblical significance), and the actual coronation of Ras Tafari Makonnen as Emperor Haile Selassie I on November 2, 1930, in Addis Ababa. For early Rastafari, this coronation fulfilled prophecy: the Lion of Judah had come; Black redemption was at hand; the return to Africa (Ethiopia) was the promised exodus.</p>
    <p>Haile Selassie himself was a baptized member of the Ethiopian Orthodox Tewahedo Church throughout his life and never accepted the divine claims made about him. On his historic 1966 visit to Jamaica, Selassie was visibly moved by the Rastafari welcome — the visit (April 21, 1966) is celebrated as Grounation Day. Selassie reportedly told leading Rastas that they should "liberate yourselves first" before contemplating relocation to Ethiopia. After Selassie\'s death (1975, in Ethiopian Communist imprisonment), most Rastafari held either that he had not died (his "disappearance" being mystical) or that his earthly death did not negate his divine status.</p>
    <p>Rastafari is not a single organized church but a diverse movement with various "Mansions" (houses, traditions): the Nyahbinghi Order (the oldest and most traditional); the Bobo Shanti (founded by Charles Edwards / Prince Emmanuel in 1958); the Twelve Tribes of Israel (founded by Vernon Carrington / Prophet Gad in 1968, the mansion to which Bob Marley belonged). Rastafari spread globally through reggae music — particularly the work of Bob Marley (1945–1981), Peter Tosh, Burning Spear, and others — and is now found throughout the African diaspora and beyond.</p>`,
    distinctives: [
      { title: 'Haile Selassie as the returned Christ', body: 'The central conviction of Rastafari is that Haile Selassie I — Ras Tafari Makonnen, crowned Emperor of Ethiopia on November 2, 1930 — was the returned Christ, the messianic figure prophesied in Daniel and Revelation. Selassie\'s lineage was traced to King Solomon and the Queen of Sheba through the Ethiopian Solomonic dynasty; his coronation as "King of Kings, Lord of Lords, Lion of the Tribe of Judah" was understood as the fulfillment of biblical prophecy.' },
      { title: 'Repatriation to Africa', body: 'A central commitment of Rastafari is the literal or spiritual return of African-descended peoples to Africa — particularly to Ethiopia. The Shashamane settlement in Ethiopia (a land grant by Haile Selassie in 1948 to those of African descent who wished to return) has been the primary destination for those undertaking literal repatriation; the small community there continues.' },
      { title: 'Ital diet', body: 'Rastafari typically observe a dietary discipline called "Ital" (from "vital") — a vegetarian or vegan diet emphasizing natural, unprocessed foods. Pork, shellfish, alcohol, and processed foods are typically avoided. The diet draws on Levitical principles (Leviticus 11) and on Rastafari\'s broader emphasis on natural living.' },
      { title: 'Dreadlocks (the "natty dread")', body: 'The wearing of uncut, untrimmed hair (locks) is a Rastafari distinctive grounded in the Nazirite vow of Numbers 6:5 ("All the days of his vow of separation no razor shall pass over his head"). The locks symbolize the Lion of Judah\'s mane and the Rastafari covenant with Jah.' },
      { title: 'Sacramental cannabis use', body: 'Rastafari hold that ganja (cannabis) is the sacred herb mentioned in scripture (variously identified with the "tree of life" in Revelation 22:2, the herbs growing on the grave of King Solomon, or other biblical references). Ganja is used in worship, in reasoning (group spiritual discussion), and in meditation. The sacramental claim has been the basis of religious-freedom litigation in multiple jurisdictions.' },
      { title: 'Pan-African consciousness and Babylon', body: 'The historical experience of slavery, colonization, and ongoing racial injustice is theologically interpreted as "Babylon" — the system of oppression from which the chosen people must come out (Revelation 18:4: "Come out of her, my people"). Rastafari is fundamentally a Black theological movement responding to the historical situation of Africans in the diaspora.' },
    ],
    departures: `<p>Rastafari\'s departures from historic Christianity center on the person of Haile Selassie and the broader theology of the movement, though Rastafari positions itself as the fulfillment of biblical Christianity rather than as a departure from it.</p>
    <p><strong>The divinity of Haile Selassie.</strong> The central Rastafari claim — that Haile Selassie was the returned Christ, Jah in human form — is incompatible with the Christian confession that Christ\'s return will be public, universal, and at the end of the age (Matthew 24:27, 30; Acts 1:11; 1 Thessalonians 4:16). Selassie was emperor of one country, never claimed messianic status, and remained a baptized Christian in the Ethiopian Orthodox tradition throughout his life. The Rastafari identification of him as the returned Christ is rejected by all major Christian communions, including the Ethiopian Orthodox Church to which Selassie himself belonged.</p>
    <p><strong>The status of Jesus.</strong> Most Rastafari hold that Jesus and Haile Selassie are the same divine figure — Jesus came as the Lamb, returned as the conquering Lion. Some Rastafari traditions are more strictly focused on Selassie as the present manifestation, with Jesus as a prior incarnation. Either framing displaces the unique and final mediation of Christ that historic Christianity confesses.</p>
    <p><strong>Reincarnation.</strong> Some Rastafari traditions affirm reincarnation in some form — Selassie as the returned Christ being the foundational instance. The Christian doctrine of resurrection is structurally different from reincarnation (one bodily life followed by judgment and bodily resurrection, vs. multiple lives across time).</p>
    <p><strong>The deification of the historical political figure.</strong> The identification of a specific 20th-century political ruler (whatever his virtues) with God incarnate is a category Christian theology has not permitted since the rejection of the Roman imperial cult. Selassie\'s actual record — including his rule\'s authoritarian aspects, the famines under his government, and his eventual deposition by the Marxist Derg in 1974 — has complicated even sympathetic engagement with the Rastafari deification claim.</p>`,
    discussionQuestions: [
      {
        id: 'q1',
        title: 'Haile Selassie as the returned Christ',
        body: `<p>Rastafari identifies Haile Selassie I, Emperor of Ethiopia 1930–74, as the returned Christ — the Lion of Judah of Revelation 5:5, the King of Kings of Revelation 19:16. Selassie himself never claimed messianic status, remained a baptized Ethiopian Orthodox Christian, and reportedly told Rastafari leaders to "liberate yourselves first." The Christian eschatological tradition holds that Christ\'s return will be public and universal (Matthew 24:27), not the rule of a single nation\'s emperor.</p>
        <p><strong>What is the evidence that should determine whether a specific historical figure is the returned Christ? And what does it mean that the figure himself denied the claim made about him?</strong></p>`,
      },
      {
        id: 'q2',
        title: 'African theology and Babylon',
        body: `<p>Rastafari emerged from the experience of African peoples enslaved and dispossessed by European Christian powers. Its theological reading of Africa as Zion and Europe (or America) as Babylon — the system from which the chosen people must escape — gives African suffering a biblical interpretation that white Christianity has often refused to provide. Critics within Christianity argue that this is an ethnic narrowing of a universal gospel; defenders argue that it is the recovery of a gospel that has always had a particular concern for the oppressed.</p>
        <p><strong>Has historic Christianity adequately reckoned with its complicity in African enslavement and colonization? And is Rastafari\'s Black theological reading of Scripture a legitimate hermeneutical recovery or a problematic ethnic reading?</strong></p>`,
      },
      {
        id: 'q3',
        title: 'Sacramental cannabis',
        body: `<p>Rastafari holds that ganja (cannabis) is a sacred herb that aids in worship, meditation, and reasoning together — based on various biblical interpretations and the broader Rastafari emphasis on natural creation. Christian traditions have varied widely on the use of intoxicants in worship (wine in the Eucharist is universal; the use of more strongly mind-altering substances is rare to nonexistent in mainstream Christianity).</p>
        <p><strong>Is sacramental cannabis use a legitimate development of a biblical principle, or does it conflate scripture\'s ambiguous references to "herbs" with a particular psychoactive plant?</strong></p>`,
      },
      {
        id: 'q4',
        title: 'Reggae and the global spread',
        body: `<p>Rastafari\'s extraordinary global spread — from a small Jamaican movement in the 1930s to a presence in virtually every African diaspora community worldwide — has been carried primarily by music, particularly the international success of reggae and figures like Bob Marley. Most global Rastafari "converts" engaged the movement initially through reggae, not through theological investigation.</p>
        <p><strong>What does it mean theologically that a religious movement has spread primarily through popular music rather than through preaching, theological argument, or scripture? Is this a sign of the Spirit working through unexpected channels, or a sign that what has spread is a cultural style rather than a religious commitment?</strong></p>`,
      },
      {
        id: 'q5',
        title: 'The Selassie problem',
        body: `<p>The historical Haile Selassie was a more complicated figure than Rastafari hagiography acknowledges. His government suppressed Communist and other opposition; his response to the 1972–74 famine in Wollo (which killed an estimated 200,000 people) was widely criticized as inadequate; he was deposed by the Marxist Derg in 1974 and died in 1975 in unclear circumstances (officially of natural causes; widely believed to have been killed by his captors). Many traditional Rastafari hold that Selassie did not actually die.</p>
        <p><strong>How should Rastafari engage with the actual historical record of the figure they identify as divine? And what does it mean for a religious claim if its central figure proved historically fallible?</strong></p>`,
      },
    ],
    keyTexts: [
      { title: 'The King James Bible', desc: 'Rastafari read the Bible — particularly the KJV, the dominant translation in English-speaking Caribbean Christianity — through a distinctive Black theological lens. Particular focus on Revelation, Daniel, the prophets, and the Genesis covenant traditions.' },
      { title: 'The Holy Piby (Robert Athlyi Rogers, 1924)', desc: 'The "Black Man\'s Bible," a foundational text of Ethiopianist Black religious thought that significantly shaped early Rastafari. Sets out the Black religious nationalism that Rastafari developed.' },
      { title: 'The Kebra Nagast', desc: 'The 14th-century Ethiopian text recounting the lineage of the Solomonic dynasty (the line from which Haile Selassie claimed descent) through the Queen of Sheba and Solomon. Treated by Rastafari as a key text supporting Selassie\'s messianic claim.' },
      { title: 'The Promised Key (Leonard Howell, 1935)', desc: 'Howell (1898–1981) is generally regarded as the first Rastafari leader. His pamphlet sets out the early Rastafari understanding of Selassie\'s divinity and the call to repatriation.' },
      { title: 'The works of Marcus Garvey', desc: 'Garvey (1887–1940), though not himself a Rastafari and arguably skeptical of the movement, is regarded as a prophetic precursor whose Pan-Africanism prepared the way for Rastafari. The Universal Negro Improvement Association\'s ideology is foundational to Rastafari self-understanding.' },
    ],
    historicalResponse: `<p>Christian engagement with Rastafari has been both more sympathetic and more limited than engagement with other movements profiled here. This reflects several factors: Rastafari\'s small size relative to the global Christian community; its cultural rather than aggressive missionary expansion; its substantial overlap with Black Christian theological concerns; and the relative absence of significant Christian polemic against it.</p>
    <p><strong>The Ethiopian Orthodox engagement.</strong> The Ethiopian Orthodox Tewahedo Church — to which Haile Selassie himself belonged — has been the Christian body most directly engaged with Rastafari. The Ethiopian Orthodox position is clear: Selassie was a baptized Orthodox Christian throughout his life, never claimed divinity, and is not to be worshipped. The Ethiopian Orthodox Church has welcomed Rastafari pilgrims to the Shashamane settlement and to Ethiopia broadly, but has consistently called for Rastafari to receive Christian baptism and to recognize Christ rather than Selassie as Lord. Some Rastafari have converted to Ethiopian Orthodoxy; others have maintained Rastafari identity while engaging Orthodox practice.</p>
    <p><strong>Caribbean Christian engagement.</strong> The Caribbean churches (predominantly evangelical Protestant, with significant Catholic and Anglican presences) have generally engaged Rastafari with a mixture of pastoral concern and theological clarity. The substantial Rastafari population in Jamaica means that virtually every Caribbean Christian community has Rastafari acquaintances, family members, or neighbors; the engagement is typically more personal than polemical.</p>
    <p><strong>Black liberation theology.</strong> The Black liberation theology of <strong>James Cone</strong> (1938–2018), the broader Black Christian theological tradition (Cornel West, J. Deotis Roberts, others), and the Caribbean theological work of <strong>Theo Witvliet</strong>, <strong>Noel Erskine</strong>, and others has engaged Rastafari as a sibling movement in the broader project of African Christian self-understanding — sharing many concerns with Rastafari (the Black experience of suffering, the call to liberation, the need for African theological self-articulation) while disagreeing on Christology and the deification of Selassie.</p>
    <p><strong>Reggae and Christian musical engagement.</strong> The musical and cultural overlap between Rastafari reggae and Caribbean Christian gospel has produced a substantial body of crossover work. Bob Marley\'s engagement with Christian themes (the album <em>Burnin\'</em>, songs like "Redemption Song"), the wider reggae tradition\'s biblical lyricism, and the response of Caribbean gospel artists who have drawn from reggae forms have made the Rastafari-Christian encounter a substantial cultural phenomenon.</p>
    <p><strong>Christian conversion narratives.</strong> Bob Marley\'s reported deathbed baptism into Ethiopian Orthodoxy (November 1980), the conversion of various other notable Rastafari to Christianity over the decades, and the broader phenomenon of conversion between Rastafari and Christian identity has been an area of mutual engagement. Marley\'s baptism remains contested in Rastafari circles; some hold it was coerced by family, others that it reflected a genuine end-of-life return to Orthodox Christianity.</p>`,
    historicalNote: 'Haile Selassie I (born Tafari Makonnen, 1892) was crowned Emperor of Ethiopia on November 2, 1930. His coronation was attended by representatives of major world powers and reported globally. Marcus Garvey had reportedly predicted ("Look to Africa, where a black king shall be crowned, for the day of deliverance is at hand"), and early Rastafari saw the coronation as that prophecy\'s fulfillment. Leonard Howell, generally regarded as the first Rastafari leader, was preaching Selassie\'s divinity by 1933. Selassie\'s visit to Jamaica on April 21, 1966 — Grounation Day — was the most consequential moment in Rastafari history; an estimated 100,000 Rastafari met his plane at Kingston airport. The Marxist Derg deposed Selassie in September 1974; he died in custody on August 27, 1975 (the official cause was respiratory failure; he was reportedly suffocated by his captors). Bob Marley\'s rise to global stardom (Burnin\' 1973; Natty Dread 1974; Exodus 1977) made Rastafari globally visible. Marley died of cancer on May 11, 1981, having reportedly received baptism into the Ethiopian Orthodox Church days before his death. The contemporary global Rastafari movement has perhaps 700,000-1,000,000 adherents.',
    relatedMovements: ['mov-sda'],
  },

];

// ═══════════════════════════════════════════════════════════
// PATCH 6 — RELIGIONS array (The Wider Conversation)
// ═══════════════════════════════════════════════════════════

const RELIGIONS = [

  // ╔══════════════════════════════════════════════════════════╗
  {
    id: 'rel-judaism',
    name: 'Judaism',
    icon: '✡️',
    founded: 'Patriarchal period c. 2000–1500 BC; Sinai covenant c. 1300 BC; rabbinic Judaism after 70 AD',
    adherents: '~15 million worldwide (2023): ~7.5M Israel, ~6M USA, ~1.5M elsewhere',
    category: 'Abrahamic',
    founder: 'Abraham, called by God (Genesis 12); Moses, the lawgiver (Exodus); the prophets',
    summary: `Judaism is the oldest of the Abrahamic monotheisms and the religion of the people of Israel. It is uniquely positioned in relation to Christianity: not a foreign religion to be encountered from outside, but the matrix from which Christianity emerged, the religion of Jesus and the apostles, and the people to whom the Hebrew Scriptures were given. Modern Judaism is the rabbinic tradition that developed after the destruction of the Second Temple in 70 AD, organized around Torah study, the synagogue, halakhic practice, and the unbroken witness of the Jewish people. The major contemporary branches include Orthodox (Modern Orthodox and Haredi), Conservative/Masorti, Reform/Progressive, and Reconstructionist, with significant cultural and Secular Jewish identities alongside. The question of who Jesus was — and is — divides Judaism from Christianity decisively; the question of the one God of Israel unites them as no other religions are united.`,
    coreBeliefs: `<p><strong>The Oneness of God (Shema).</strong> Deuteronomy 6:4 — "Hear, O Israel: the LORD our God, the LORD is one" — is the central confession of Judaism, recited twice daily by observant Jews. God is strictly one, indivisible, incorporeal, eternal, the Creator and sustainer of all that exists. Maimonides's Thirteen Principles of Faith (12th century) articulate the classical formulation: God's existence, unity, incorporeality, eternity, exclusive worship, prophecy, the supremacy of Moses, the divine origin of Torah, the immutability of Torah, divine providence, divine retribution, the coming of the Messiah, and the resurrection of the dead.</p>
    <p><strong>The Torah and the Tanakh.</strong> The Hebrew Bible (Tanakh — Torah, Nevi'im, Ketuvim) is the foundational revelation. The Torah (the five books of Moses) is held to be the direct revelation of God to Moses at Sinai; the Prophets and Writings are also divinely inspired. Rabbinic Judaism holds that Moses received both the Written Torah and the Oral Torah at Sinai, with the Oral Torah eventually committed to writing in the Mishnah (c. 200 AD) and the Talmud (Jerusalem c. 400 AD; Babylonian c. 500 AD).</p>
    <p><strong>Covenant.</strong> The defining structure of Judaism is the covenant between God and the people of Israel — initiated with Abraham (Genesis 12, 15, 17), renewed and elaborated at Sinai (Exodus 19–24), and continually reaffirmed throughout the Hebrew Scriptures. The Jewish people are a chosen people not in a sense of metaphysical privilege but of particular responsibility: to bear witness to the one God, to study and live by Torah, and to be a light to the nations (Isaiah 49:6).</p>
    <p><strong>Halakha — the way.</strong> Jewish religious life is shaped by halakha, the body of Jewish law derived from Torah and rabbinic interpretation. The commandments (mitzvot) — traditionally counted as 613 — include the obligations of Sabbath observance, kosher food laws, sexual ethics, festival observance, charity, justice, prayer, and Torah study. Orthodox Judaism holds halakha to be binding in its full traditional form; Conservative Judaism affirms halakhic obligation while permitting more historical-critical interpretation; Reform Judaism emphasizes ethical monotheism and individual autonomy in ritual observance.</p>
    <p><strong>Messianic hope.</strong> Judaism awaits a Messiah (mashiach — "anointed one") — a human figure descended from David, who will rebuild the Temple in Jerusalem, gather the exiles of Israel back to the land, establish universal peace and justice, and inaugurate the age to come. The Messiah is not divine in Jewish expectation; he is a great king and prophet, not God incarnate. Some Jewish traditions speak of the World to Come (Olam Ha-Ba) and the resurrection of the dead, though these doctrines are less developed than in Christianity and Islam.</p>`,
    keyTexts: [
      { title: 'The Tanakh (Hebrew Bible)', desc: 'The acrostic name (Torah, Nevi\'im, Ketuvim) for the Hebrew Scriptures. Roughly corresponds to the Christian Old Testament with a different ordering. The Torah (Genesis, Exodus, Leviticus, Numbers, Deuteronomy) is the most central text; reading the Torah through annually in the synagogue is a foundational Jewish practice.' },
      { title: 'The Mishnah', desc: 'The first major codification of the Oral Torah, compiled by Rabbi Judah ha-Nasi c. 200 AD. Six orders covering all areas of Jewish law and life.' },
      { title: 'The Talmud', desc: 'The vast rabbinic discussion and elaboration of the Mishnah. The Babylonian Talmud (Bavli, c. 500 AD) is the more authoritative; the Jerusalem Talmud (Yerushalmi, c. 400 AD) is less complete. Over 5,000 pages in standard editions, the Talmud has been the central study text of rabbinic Judaism for 1,500 years.' },
      { title: 'The Mishneh Torah by Maimonides', desc: 'Moses Maimonides\'s (1138–1204) systematic compilation of Jewish law in 14 books, completed 1180. Among the most influential post-Talmudic works.' },
      { title: 'The Shulchan Aruch by Joseph Karo', desc: 'The 16th-century code of Jewish law (1565) that, with the glosses of Moses Isserles for Ashkenazi practice, remains the standard halakhic reference for Orthodox Judaism.' },
      { title: 'The Zohar', desc: 'The foundational text of Jewish mysticism (Kabbalah), traditionally attributed to Rabbi Shimon bar Yochai (2nd century AD) but actually compiled in 13th-century Spain by Moses de Leon. The Zohar shapes Hasidic and much of Sephardic spirituality.' },
    ],
    pointsOfContact: `<p>Judaism and Christianity share more than any two religions on earth. They share:</p>
    <p><strong>One God</strong> — the strict monotheism of the Shema, the personal Creator God who made the heavens and the earth, called Abraham, delivered Israel from Egypt, gave the Torah at Sinai, and spoke through the prophets.</p>
    <p><strong>The Hebrew Scriptures</strong> — the Tanakh is the Christian Old Testament, accepted by Christians as inspired and authoritative Scripture, read in every Christian liturgy.</p>
    <p><strong>The covenant tradition</strong> — God's covenants with Noah, Abraham, Moses, and David are received by both traditions as foundational acts of divine self-revelation.</p>
    <p><strong>The prophetic tradition</strong> — Isaiah, Jeremiah, Ezekiel, the twelve minor prophets are honored in both traditions as God's messengers.</p>
    <p><strong>Messianic expectation</strong> — both traditions await the coming of the Messiah and the age of universal peace and justice; Christianity holds that the Messiah has come and will come again, Judaism holds that the Messiah is yet to come.</p>
    <p><strong>The ethical tradition</strong> — the Ten Commandments, the call to love one's neighbour (Leviticus 19:18), the demand for justice for the poor and the stranger, the centrality of family and community.</p>
    <p><strong>Eschatological hope</strong> — both traditions speak of the resurrection of the dead, the World to Come, and God's ultimate triumph over evil.</p>
    <p>The earliest Christians were Jews. Jesus, Mary, the Twelve Apostles, Paul, and the early Jerusalem church were all observant Jews. The New Testament is saturated with the language, imagery, and theology of the Hebrew Scriptures. Paul's anguished reflection in Romans 9–11 on the unbelief of Israel — "the gifts and calling of God are irrevocable" (Romans 11:29) — captures something the Christian tradition has never been able fully to resolve: the Jewish people remain, in some sense the Church has struggled to define, in covenant with God.</p>`,
    pointsOfDivergence: `<p>The fundamental divergence is the person of Jesus.</p>
    <p><strong>Jesus.</strong> Judaism does not accept Jesus as the Messiah. Specifically: the Jewish messianic expectation required the Messiah to gather the exiles of Israel back to the land, rebuild the Temple, establish universal peace, and bring the knowledge of God to all nations (Isaiah 2:2–4; 11:1–10; Jeremiah 33:14–18; Ezekiel 37:21–28). Jesus did none of these things in his earthly ministry. The Temple was destroyed in 70 AD, not rebuilt; the Jewish people were dispersed further, not gathered; the world remained at war, not at peace. For traditional Judaism, this is sufficient evidence that Jesus was not the Messiah.</p>
    <p><strong>The deity of Christ.</strong> Beyond the Messianic question, Judaism cannot accept the Christian claim that Jesus is God incarnate. The Christian doctrine of the Trinity — one God in three persons, the Son co-eternal with the Father — is widely understood in Judaism to compromise the strict monotheism of the Shema. From the Jewish perspective, no man can be God; God is incorporeal, indivisible, and beyond human form (Deuteronomy 4:15–16; Numbers 23:19). The Christian doctrine of the Incarnation is the most fundamental theological barrier between the two faiths.</p>
    <p><strong>Original sin and salvation.</strong> Judaism does not hold the Christian doctrine of original sin in the Augustinian form. Each person stands responsible before God for their own actions; the yetzer ha-ra (evil inclination) struggles against the yetzer ha-tov (good inclination) in every heart, but humans are not radically incapable of obeying God. Salvation in Judaism is not a single moment of justification by faith but a way of life — Torah observance, repentance (teshuvah), good deeds (mitzvot), and the mercy of God.</p>
    <p><strong>Torah and the Law.</strong> Christianity (since Paul) has held that the ceremonial law (sacrifices, kosher laws, circumcision, Sabbath in its Jewish form) is fulfilled in Christ and no longer binding on Gentile believers. Judaism holds the Torah eternally binding on the Jewish people. The Gentile world is bound by the seven Noahide laws (the universal moral obligations of all humanity); Jews are bound by the full 613 commandments.</p>
    <p><strong>The Trinity and the Holy Spirit.</strong> The Christian doctrines of the Trinity and the personhood of the Holy Spirit are absent from Jewish theology. Judaism speaks of God's spirit (ruach Elohim) as God's active presence in the world, not as a distinct person within the Godhead.</p>`,
    discussionQuestions: [
      {
        id: 'q1',
        title: 'The Messiah and the unfulfilled prophecies',
        body: `<p>Traditional Jewish messianic expectation requires the Messiah to gather the exiles to Israel, rebuild the Temple, establish universal peace, and bring all nations to acknowledge the God of Israel. Christianity confesses Jesus as the Messiah and explains the unfulfilled prophecies as awaiting his second coming. Judaism asks: a Messiah who must come twice — is that really the Messiah promised in the prophets?</p>
        <p><strong>If Jesus is the Messiah, why was the world he left behind so visibly unredeemed — and what kind of evidence could decide this question between Christians and Jews?</strong></p>`,
      },
      {
        id: 'q2',
        title: 'One God, three persons',
        body: `<p>The Shema — "Hear, O Israel: the LORD our God, the LORD is one" — is the most central confession of Judaism. The Christian doctrine of the Trinity confesses one God in three persons, with Jesus as God the Son co-eternal with the Father. Judaism holds that this compromises monotheism; Christianity holds that the Trinity is the deepest possible expression of monotheism, drawn from the New Testament's portrait of Jesus.</p>
        <p><strong>Is the Trinity the truest reading of God's self-revelation, or a Hellenistic philosophical construction that obscured the simpler unity of God taught by Moses and the prophets?</strong></p>`,
      },
      {
        id: 'q3',
        title: 'The Suffering Servant',
        body: `<p>Isaiah 52:13–53:12 — the "Suffering Servant" passage — describes one who is "despised and rejected," "wounded for our transgressions," who bore "the sin of many." Christians have read this from the first century as a prophecy of Christ's atoning death. Jewish interpretation has traditionally read the Servant as the people of Israel collectively, suffering as a corporate witness to the nations.</p>
        <p><strong>Does the Suffering Servant of Isaiah 53 point to the corporate suffering of Israel, to an individual Messiah, or to both — and how do we adjudicate between such different readings of the same text?</strong></p>`,
      },
      {
        id: 'q4',
        title: 'The continuing covenant with Israel',
        body: `<p>Paul writes in Romans 11:29: "The gifts and calling of God are irrevocable." After 1,900 years of supersessionist Christian theology that read the Church as having replaced Israel, Vatican II's <em>Nostra Aetate</em> (1965) and subsequent Protestant statements have moved decisively away from that position. Judaism asks: if God's covenant with Israel remains, why does Christianity continue to evangelize Jews?</p>
        <p><strong>Does the Jewish people remain in covenant with God in such a way that conversion to Christianity is unnecessary — or even inappropriate — for Jews? What does Christian mission to Jews mean in light of the gifts and calling that "are irrevocable"?</strong></p>`,
      },
      {
        id: 'q5',
        title: 'Torah, Law, and the life of obedience',
        body: `<p>Judaism's life of Torah obedience — 613 commandments shaping every meal, every Sabbath, every life passage — has sustained Jewish identity through millennia of dispersion, persecution, and assimilation. Paul wrote of the Law as a "tutor to bring us to Christ" (Galatians 3:24), now fulfilled in Christ. Christians often perceive Jewish Torah observance as legalistic; Jews perceive Christian freedom from the Law as antinomian.</p>
        <p><strong>Is Torah observance an obstacle to grace, or its embodiment in daily life? And what does it mean that Jewish Torah-observant communities have produced extraordinary moral and spiritual depth over millennia?</strong></p>`,
      },
    ],
    historicalRelation: `<p>The relationship between Judaism and Christianity is the deepest, longest, and most painful interreligious relationship in Western history.</p>
    <p>For the first decades of the Church, Christianity was a Jewish movement. The decisive break came gradually: the Council of Jerusalem (Acts 15, c. 50 AD) ruled that Gentile converts need not observe the ceremonial law; the destruction of the Second Temple in 70 AD reshaped both Jewish and Christian self-understanding; the Bar Kokhba revolt (132–135 AD), in which Rabbi Akiva proclaimed Bar Kokhba as Messiah and many Jewish Christians refused to follow, sealed the institutional separation.</p>
    <p>The patristic period developed Christian anti-Jewish polemic in tragic directions. John Chrysostom's <em>Eight Homilies Against the Jews</em> (386 AD), Melito of Sardis's <em>On Pascha</em>, the language of "the Jews" in later Christian liturgy and preaching, and the canonical legislation that increasingly marginalized Jewish communities in Christian Europe shaped the soil from which medieval and modern anti-Semitism grew.</p>
    <p>The medieval period saw the development of distinctively Jewish communities under Christian rule, with intellectual and economic flourishing alongside catastrophic persecution. The First Crusade (1096) included the slaughter of Rhineland Jewish communities. The blood libel (the false accusation of ritual murder), the expulsions (England 1290, France 1306, Spain 1492, Portugal 1497), the ghettos (Venice 1516, Rome 1555), and recurrent pogroms shaped the Jewish experience of Christian Europe.</p>
    <p>The Holocaust — the murder of approximately six million European Jews by Nazi Germany and its collaborators between 1933 and 1945 — was not a directly Christian act, but it occurred in a culture shaped by 1,800 years of Christian anti-Judaism. The post-Holocaust Christian theological reckoning has been one of the most significant developments in 20th-century Christian thought.</p>
    <p>Vatican II's <strong><em>Nostra Aetate</em></strong> (October 28, 1965) declared: "The Church... cannot forget that she received the revelation of the Old Testament through the people with whom God in His inexpressible mercy concluded the Ancient Covenant. Nor can she forget that she draws sustenance from the root of that well-cultivated olive tree onto which have been grafted the wild shoots, the Gentiles." The decree explicitly repudiated the charge of deicide and any teaching that the Jewish people are collectively guilty for Christ's death.</p>
    <p>The Vatican's <em>The Gifts and the Calling of God Are Irrevocable</em> (December 10, 2015) went further: "The Catholic Church neither conducts nor supports any specific institutional mission work directed towards Jews." Various Protestant statements — the Evangelical Lutheran Church in America's <em>Declaration to the Jewish Community</em> (1994), the World Council of Churches' statements, the Leuenberg Church Fellowship's documents — have similarly addressed the post-Holocaust theological question.</p>
    <p>Significant Jewish-Christian dialogue continues through bodies including the International Council of Christians and Jews, the Christian Scholars Group on Christian-Jewish Relations, and many local and regional dialogues. The question of the State of Israel (since 1948), of Christian Zionism, and of the relationship between modern political Israel and biblical Israel adds further complexity that the Israel-Church topic on the doctrinal ledger addresses in detail.</p>`,
    historicalNote: 'Maimonides (Moses ben Maimon, 1138–1204) — Rambam — is the most influential Jewish thinker after the Talmudic age; his Mishneh Torah and Guide for the Perplexed shape both Jewish law and philosophy. Rashi (Solomon ben Isaac, 1040–1105) wrote the most studied commentary on the Talmud and Hebrew Bible. The expulsion of Jews from Spain on Tisha B\'Av 1492 (the same day commemorating the destruction of both Temples) precipitated the Sephardic dispersion and shaped the Kabbalistic flowering of 16th-century Safed (Isaac Luria). Hasidism, founded by the Baal Shem Tov (c. 1700–60), introduced mystical and joyful piety to Eastern European Judaism. The Haskalah (Jewish Enlightenment, 18th–19th centuries) led to Reform Judaism (Germany, 19th century) and reshaped modern Jewish identity. Theodor Herzl\'s Zionism produced the State of Israel (1948). Approximately six million Jews were murdered in the Holocaust (1933–45). The post-Holocaust era has seen the largest Jewish population shift since the Babylonian exile — over 95% of Jews today live in Israel or the United States.',
    relatedReligions: ['rel-islam'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  {
    id: 'rel-islam',
    name: 'Islam',
    icon: '☪️',
    founded: '610 AD, with the first revelation to Muhammad in the cave of Hira',
    adherents: '~1.9 billion worldwide (2023); approximately 24% of global population',
    category: 'Abrahamic',
    founder: 'Muhammad ibn Abdullah (c. 570–632 AD), the Seal of the Prophets',
    summary: `Islam is the second-largest religion in the world and the most rapidly-growing of the Abrahamic faiths. The Arabic word <em>islam</em> means "submission" — the voluntary surrender of the human will to the will of Allah, the one God. A Muslim is "one who submits." Muslims confess that Allah is the same God worshipped by Abraham, Moses, and Jesus; that the Qur'an is the final, uncorrupted revelation given through the angel Gabriel to Muhammad over 23 years (610–632 AD); that Muhammad is the Seal of the Prophets, the final messenger of God. The major divisions are Sunni (~85–90% of Muslims worldwide) and Shi'a (~10–15%, predominantly in Iran, Iraq, Bahrain, Azerbaijan, and Lebanon), with various sub-traditions including Wahhabi/Salafi, the Sufi spiritual orders, the Ibadi (in Oman), and the Ahmadiyya (whose status as Muslim is contested by mainstream Islam). Islam shares with Judaism and Christianity an Abrahamic genealogy, a strict monotheism, a sacred Scripture, prophetic mediation, and an eschatological orientation — and diverges sharply from Christianity on the doctrine of God (rejecting the Trinity), the person of Jesus (a prophet but not divine, not crucified, not the son of God in any but a metaphorical sense), and the nature of salvation.`,
    coreBeliefs: `<p><strong>Tawhid — the absolute oneness of God.</strong> The central confession of Islam is <em>la ilaha illa Allah</em> — "there is no god but Allah." Tawhid (oneness) is the heart of Islamic theology: Allah is absolutely one, indivisible, without partners, without offspring, without equal. The Qur'an explicitly rejects any conception of God as having children or sharing his divinity (Surah 112: "Say: He is Allah, the One; Allah, the Eternal Refuge; He neither begets nor is born, nor is there to Him any equivalent").</p>
    <p><strong>The Five Pillars of Islam.</strong> The five obligatory acts that structure the Muslim life: (1) the Shahada — the testimony of faith ("There is no god but Allah, and Muhammad is the Messenger of Allah"); (2) Salah — the five daily prayers, performed facing Mecca; (3) Zakat — the obligatory almsgiving of approximately 2.5% of net wealth annually; (4) Sawm — the fast of Ramadan, the lunar month commemorating the first revelation of the Qur'an; (5) Hajj — the pilgrimage to Mecca, obligatory once in a lifetime for those who are able.</p>
    <p><strong>The Six Articles of Faith.</strong> Belief in: (1) Allah, the one God; (2) the angels, including Gabriel (Jibril) who brought revelation, Michael (Mikail), and Israfil who will sound the trumpet on the Day of Judgment; (3) the prophets and messengers — beginning with Adam, including Noah, Abraham, Moses, David, Jesus, and culminating in Muhammad (some traditions enumerate 25 named prophets, others speak of 124,000); (4) the holy books — the Torah given to Moses (Tawrat), the Psalms given to David (Zabur), the Gospel given to Jesus (Injil), and the Qur'an given to Muhammad, the last and final and uncorrupted revelation; (5) the Day of Judgment, when all humans will be raised and judged according to their deeds; (6) Qadar — divine predestination, the sovereign decree of Allah.</p>
    <p><strong>The Qur'an.</strong> The Muslim sacred scripture, revealed by the angel Gabriel to Muhammad over 23 years (610–632 AD). The Qur'an consists of 114 chapters (surahs) of varying length, traditionally arranged from longest to shortest (with the opening Surah al-Fatiha as an exception). The Qur'an is held to be the literal word of Allah, preserved without alteration; its Arabic original is the only canonical text — translations are regarded as interpretations, not as the Qur'an proper.</p>
    <p><strong>Sharia and the path of life.</strong> Sharia (the "path") is the comprehensive Islamic law derived from the Qur'an, the Sunnah (the practice of Muhammad, preserved in the hadith literature), ijma (scholarly consensus), and qiyas (analogical reasoning). The four major Sunni schools of jurisprudence (madhhab) — Hanafi, Maliki, Shafi'i, Hanbali — and the Shi'a schools (primarily Ja'fari) interpret sharia somewhat differently in matters of detail while agreeing on essentials. Islam is comprehensive in scope: it provides guidance for prayer, marriage, inheritance, commerce, criminal law, war, and the structure of society.</p>
    <p><strong>Eschatology.</strong> Islam teaches the resurrection of the body, the Day of Judgment, paradise (Jannah) for the righteous and hell (Jahannam) for the wicked. The intermediate state (barzakh) describes the period between death and resurrection. Various signs precede the Day of Judgment, including the appearance of the Mahdi (the rightly-guided one, in Shi'a Islam the Hidden Imam returned), the return of Jesus (Isa) — who in Islamic eschatology returns to defeat the false messiah (al-Dajjal) and to confirm Islam as the true religion.</p>`,
    keyTexts: [
      { title: 'The Qur\'an', desc: 'The central sacred text of Islam, comprising 114 surahs. Held to be the literal word of Allah revealed to Muhammad in Arabic. The text is divided into Meccan surahs (revealed during Muhammad\'s years in Mecca, 610–622 AD, focused on monotheism, prophecy, and judgment) and Medinan surahs (revealed during the Medina period, 622–632 AD, focused on community life, law, and warfare). Standardized in its current form under the third caliph Uthman c. 650 AD.' },
      { title: 'The Hadith Collections', desc: 'The recorded sayings and actions of Muhammad. The Sunni canonical "Six Books" are Sahih al-Bukhari, Sahih Muslim (the two most authoritative), Sunan Abu Dawud, Jami al-Tirmidhi, Sunan al-Nasa\'i, and Sunan ibn Majah. Shi\'a Islam has its own distinct canonical collections, including al-Kafi by al-Kulayni.' },
      { title: 'The Sunnah', desc: 'The "path" or "way" of the Prophet — Muhammad\'s example of how a Muslim should live, derived from the hadith literature. Together with the Qur\'an, the Sunnah forms the primary basis of sharia.' },
      { title: 'The Tafsir tradition', desc: 'Qur\'anic commentary. Major classical works include al-Tabari\'s Jami al-Bayan (10th century), al-Razi\'s Mafatih al-Ghayb (12th–13th century), and ibn Kathir\'s Tafsir al-Qur\'an al-Azim (14th century). Modern works include the highly influential Tafhim al-Qur\'an by Sayyid Abul A\'la Mawdudi.' },
      { title: 'Ihya Ulum al-Din by al-Ghazali', desc: 'The Revival of the Religious Sciences (c. 1100), Abu Hamid al-Ghazali\'s monumental work synthesizing law, theology, and Sufi spirituality. Among the most influential Islamic books outside the Qur\'an and hadith.' },
      { title: 'The Masnavi by Rumi', desc: 'Jalal al-Din Rumi\'s (1207–1273) vast mystical poem, the foundational text of Persian Sufi spirituality and one of the supreme works of Islamic literature.' },
    ],
    pointsOfContact: `<p>Islam, Christianity, and Judaism share an Abrahamic genealogy that is closer than any other interreligious relationship in the world.</p>
    <p><strong>One Creator God.</strong> Islam and Christianity both confess that there is one God, eternal, transcendent, the Creator and sustainer of all that exists. Muslims and Christians agree against polytheism and against atheism that ultimate reality is personal, righteous, and just.</p>
    <p><strong>The Abrahamic narrative.</strong> Muslims revere Abraham (Ibrahim) as a great prophet and the father of monotheism. Both traditions affirm Abraham's call by God (Genesis 12; Surah 6, 14), his testing in the offering of his son (the Aqedah, Genesis 22; the Eid al-Adha tradition, Surah 37), and his role as the spiritual father of the believing community.</p>
    <p><strong>The prophetic tradition.</strong> Muslims affirm Noah, Abraham, Moses, David, John the Baptist (Yahya), and Jesus (Isa) as genuine prophets sent by God. The Qur'an speaks at length of Moses (musa) and the exodus, and of Jesus (Isa) — including his virgin birth (Surah 19), his miracles (Surah 5:110), his title as al-Masih (the Messiah), and his being a "word from God" and "spirit from God" (Surah 4:171, though interpreted in Islamic theology in ways that do not affirm his divinity).</p>
    <p><strong>The reality of revelation.</strong> Both traditions hold that God reveals himself through prophets and through Scripture. Both believe that human beings are accountable to God for how they live, and that God's revelation provides authoritative guidance.</p>
    <p><strong>The eschatological framework.</strong> The resurrection of the dead, the Day of Judgment, the moral seriousness of human life, heaven and hell — these are shared with Christianity (and Judaism) and are not features of most non-Abrahamic traditions.</p>
    <p><strong>The dignity of every human being.</strong> Both traditions teach that every human being is created by God with dignity and worth, that the murder of an innocent is "as though he had murdered all of mankind" (Qur'an 5:32), that justice and mercy are central divine attributes that humans are called to imitate.</p>
    <p><strong>Mary, the mother of Jesus.</strong> Mary (Maryam) is more frequently named in the Qur'an than in the New Testament. She is the only woman named in the Qur'an and is honored as one of the four perfect women in Islamic tradition (along with Asiyah the wife of Pharaoh, Khadijah the wife of Muhammad, and Fatimah the daughter of Muhammad). Surah 19 (Maryam) is named for her and gives an extended account of the Annunciation and the virgin birth.</p>`,
    pointsOfDivergence: `<p>The differences between Islam and Christianity are profound and concentrate on the doctrine of God, the person of Jesus, and the nature of revelation.</p>
    <p><strong>The Trinity.</strong> Islam's most central conviction — tawhid, the absolute oneness of God — explicitly rejects the Christian doctrine of the Trinity. The Qur'an states: "Say not, 'Three' — desist! It is better for you. Indeed, Allah is but one God" (Surah 4:171). Surah 5:73 condemns those who say "Allah is the third of three." From the Islamic perspective, the Trinity is shirk — the unforgivable sin of associating partners with Allah. From the Christian perspective, the Trinity is the deepest expression of biblical monotheism, drawn from the New Testament's portrait of Jesus and the Spirit. The two cannot both be right.</p>
    <p><strong>The deity of Christ.</strong> Islam honors Jesus (Isa) as a great prophet, born of a virgin, a worker of miracles, a Messiah — but emphatically denies that he was God incarnate. Surah 5:75: "The Messiah, son of Mary, was no more than a messenger; messengers passed away before him." Surah 4:171: "The Messiah, Jesus the son of Mary, was only a messenger of Allah, and His word which He directed to Mary and a soul created at a command from Him. So believe in Allah and His messengers. And do not say, 'Three.'"</p>
    <p><strong>The crucifixion.</strong> Surah 4:157–158 denies the crucifixion of Jesus: "and they did not kill him, nor did they crucify him; but [another] was made to resemble him to them. And indeed, those who differ over it are in doubt about it. They have no knowledge of it except the following of assumption. And they did not kill him, for certain. Rather, Allah raised him to Himself." Various Islamic traditions explain that Allah took Jesus directly to heaven, with another person (often identified as Judas) being crucified in his place. The historical evidence for Jesus's crucifixion is among the most attested facts in ancient history — even most non-Christian scholars accept it.</p>
    <p><strong>The Bible.</strong> Islam holds that the Tawrat (Torah), Zabur (Psalms), and Injil (Gospel) were genuinely revealed by Allah, but that the texts now possessed by Jews and Christians have been corrupted (tahrif) — through textual alteration, loss, or theological distortion. The Qur'an is held to be the final, perfectly preserved revelation that corrects the earlier scriptures. Christians and Jews hold that their scriptures, while subject to ordinary textual transmission processes that scholars can study, have not been corrupted in any substantive theological sense.</p>
    <p><strong>Muhammad as the Seal of the Prophets.</strong> Islam teaches that Muhammad is the final prophet of God (Khatam an-Nabiyyin, "the Seal of the Prophets" — Surah 33:40). After Muhammad, no further prophet will come. The Christian claim that the apostles were sent by the risen Christ is incompatible with this finality. Conversely, Christianity holds Christ to be God's final and complete revelation (Hebrews 1:1–2) — not one prophet among many, and not subject to supersession by any later messenger.</p>
    <p><strong>Sin and salvation.</strong> Islam does not hold the Christian doctrine of original sin. Every human is born in a state of fitra — innate goodness, oriented toward God. Salvation in Islam comes through submission to Allah, faith in the prophets and messengers, performance of the five pillars, and right living — with the mercy of Allah as the decisive factor on the Day of Judgment. The Christian doctrine of justification by grace through faith, with Christ's death as substitutionary atonement, has no Islamic parallel; from the Islamic perspective, every person bears their own sins and answers for them directly.</p>
    <p><strong>The role of Muhammad and Jesus.</strong> Christianity confesses Jesus as Lord, worships him, and centers worship on him. Islam regards worship of any but Allah as the gravest of sins (shirk). Muhammad himself is honored as the greatest prophet but is not worshipped; the phrase "Peace be upon him" (sallallahu alayhi wa sallam) is said after his name, but he is not invoked in prayer to Allah.</p>`,
    discussionQuestions: [
      {
        id: 'q1',
        title: 'The crucifixion',
        body: `<p>Surah 4:157 denies that Jesus was crucified, asserting that "it appeared so to them" — Allah took Jesus directly to heaven. The historical evidence for Jesus's crucifixion under Pontius Pilate is among the most attested facts in ancient history: the four Gospels, the Pauline letters (written within 25 years of the event), the Roman historian Tacitus (Annals 15.44), the Jewish historian Josephus (Antiquities 18.3.3), and the Babylonian Talmud all attest it. No first- or second-century source denies it.</p>
        <p><strong>What does it mean that the Qur'an, six centuries after the event, denies what virtually every first- and second-century source affirms? And how should historical evidence weigh against a later revelatory text?</strong></p>`,
      },
      {
        id: 'q2',
        title: 'Tawhid and the Trinity',
        body: `<p>Islam's deepest theological commitment is tawhid — the absolute, indivisible oneness of God. The Qur'an repeatedly rejects "three gods" and "associating partners" with Allah (Surah 4:171; 5:73; 5:116). Christianity confesses one God in three persons — Father, Son, Holy Spirit — drawing the same conclusion from the same monotheistic premise: that God is one, eternal, indivisible, but eternally exists in tri-personal life of love.</p>
        <p><strong>Is the Trinity a violation of monotheism, as Islam insists, or its deepest possible expression? What turns on this — for prayer, for worship, for the very identity of God?</strong></p>`,
      },
      {
        id: 'q3',
        title: 'The corruption of the earlier Scriptures',
        body: `<p>Islam honors the Tawrat, Zabur, and Injil as originally revealed by Allah, but teaches that they have been corrupted (tahrif). The Qur'an is the final, perfectly preserved revelation. Christians and Jews argue: if Allah preserved the Qur'an perfectly across 14 centuries (transmitted through enormous Muslim populations across vast geography), why would he have failed to preserve the earlier revelations he himself gave to Jews and Christians?</p>
        <p><strong>What kind of God would give a revelation he could not protect from corruption? And how would the alleged corruption of the Torah, Psalms, and Gospels have occurred given the enormous scholarly attention and broad geographic dispersion of the Jewish and Christian communities?</strong></p>`,
      },
      {
        id: 'q4',
        title: 'The Seal of the Prophets',
        body: `<p>Islam holds Muhammad to be the final prophet — Khatam an-Nabiyyin — completing and superseding all prior revelation. Christianity holds Christ to be God's final and definitive Word (Hebrews 1:1–2): "Long ago, at many times and in many ways, God spoke to our fathers by the prophets, but in these last days he has spoken to us by his Son."</p>
        <p><strong>On what grounds should one decide between these two final-word claims? And if both claims of finality cannot be true, how does an honest seeker after God evaluate which (if either) is in fact final?</strong></p>`,
      },
      {
        id: 'q5',
        title: 'Salvation: submission or grace',
        body: `<p>Islam frames the human relationship to God as submission (the literal meaning of <em>islam</em>) — surrender to Allah's will, performance of the five pillars, observance of sharia, with mercy from Allah weighing the deeds at judgment. Christianity frames it as receiving grace — God's free gift of forgiveness through Christ's atoning death, with works flowing from gratitude rather than meriting salvation.</p>
        <p><strong>Which account better fits the human condition as we actually find it — broken, divided, unable fully to do what we know we should — and which produces deeper transformation of the heart: the demand for obedience or the gift of grace?</strong></p>`,
      },
    ],
    historicalRelation: `<p>The Christian-Muslim relationship spans 1,400 years and has been the most consequential interreligious encounter in world history outside the Christian-Jewish relationship itself.</p>
    <p>The early Islamic conquests (633–732 AD) brought the previously-Christian heartlands of the Middle East and North Africa under Muslim political rule within a single century. Syria, Egypt, Palestine, North Africa, Spain — Christian communities under Roman and Byzantine rule were now under the rule of Muslim caliphs, with the dhimmi (protected non-Muslim) status that permitted continued Christian (and Jewish) life under specific legal constraints and the payment of the jizya tax.</p>
    <p>Christian theological engagement with Islam began immediately. <strong>John of Damascus</strong> (c. 675–749), a Christian theologian writing under the early Umayyad caliphate, gave the first significant Christian theological response to Islam in his <em>Fount of Knowledge</em>, classifying Islam as a Christian heresy (specifically a derivative of Arianism) rather than a new religion. The medieval Western Christian engagement was shaped by the Crusades (1095–1291) — eight major military campaigns to recover the Holy Land from Muslim rule — and by the parallel intellectual encounter through Arabic scholarship in Spain (the convivencia, the period of relative Christian-Muslim-Jewish coexistence under Andalusian rule).</p>
    <p>The fall of Constantinople to the Ottoman Turks on May 29, 1453, ended the Byzantine Empire and shaped Eastern Orthodox identity for centuries thereafter. The siege of Vienna (1683) marked the high-water mark of Ottoman expansion into Europe.</p>
    <p>Major Christian theological engagements: <strong>Thomas Aquinas's <em>Summa Contra Gentiles</em></strong> (1259–65), partly composed as resources for Christian missionaries among Muslims. <strong>Ramon Llull</strong> (1232–1315), the Catalan philosopher who learned Arabic and devoted his life to the conversion of Muslims, the founder of Christian Arabic studies and ultimately martyred in Tunis. <strong>Henry Martyn</strong> (1781–1812), Anglican missionary to India and Persia who translated the New Testament into Urdu, Persian, and Arabic.</p>
    <p>The modern era has produced both sharper confrontation and deeper dialogue. <strong>Louis Massignon</strong> (1883–1962), the French Catholic Islamicist whose study of al-Hallaj transformed Catholic-Muslim understanding. <strong>Kenneth Cragg</strong> (1913–2012), Anglican bishop and one of the most influential 20th-century Christian engagers of Islam (<em>The Call of the Minaret</em>, 1956). <strong>Hans Küng</strong>'s <em>Christianity and the World Religions</em> (1985) and <em>Islam: Past, Present, and Future</em> (2004). The contemporary movement of "Christian witness in a multi-religious world" through the World Council of Churches and the Vatican's Pontifical Council for Interreligious Dialogue continues this engagement.</p>
    <p>Vatican II's <strong><em>Nostra Aetate</em></strong> §3 addressed Islam directly: "The Church regards with esteem also the Moslems. They adore the one God, living and subsisting in Himself; merciful and all-powerful, the Creator of heaven and earth, who has spoken to men; they take pains to submit wholeheartedly to even His inscrutable decrees, just as Abraham, with whom the faith of Islam takes pleasure in linking itself, submitted to God." The decree called for both parties to "forget the past and to work sincerely for mutual understanding and to preserve as well as to promote together for the benefit of all mankind social justice and moral welfare, as well as peace and freedom."</p>
    <p>The <strong>A Common Word</strong> initiative (October 2007) was an open letter from 138 Muslim scholars to Pope Benedict XVI and other Christian leaders, calling for dialogue on the basis of the shared commandments to love God and neighbour. The initiative generated significant Christian response and ongoing dialogue networks.</p>
    <p>The 21st century has been marked by violent extremism on the part of small but significant Muslim minorities (al-Qaeda, ISIS, Boko Haram), the persecution of Middle Eastern Christian communities to the point of near-extinction in some regions (Syria, Iraq), and ongoing demographic and political tensions in Western Europe and elsewhere — alongside vigorous dialogue, the continuing growth of Islam globally, and the conversion of significant numbers of Muslims to Christianity, particularly in the Middle East and North Africa (Iran, Algeria) under conditions of significant persecution.</p>`,
    historicalNote: 'Muhammad was born c. 570 AD in Mecca, orphaned young, raised by his grandfather and uncle, became a merchant, and married the wealthy widow Khadijah at age 25. At age 40 (610 AD), during a religious retreat in the cave of Hira near Mecca, he received the first revelation through the angel Gabriel. The Hijra — Muhammad\'s migration from Mecca to Medina in 622 AD — marks the beginning of the Islamic calendar. After consolidating power in Medina, Muhammad returned to conquer Mecca peacefully in 630 AD; he died in 632 AD. The Sunni-Shi\'a split originates in the question of succession after Muhammad\'s death — Sunnis affirming the legitimacy of the first four "rightly-guided" caliphs (Abu Bakr, Umar, Uthman, Ali); Shi\'a holding that leadership belonged by right to Ali (Muhammad\'s cousin and son-in-law) and his descendants. The early Islamic conquests took Muslim rule from Spain to India within a century. The Abbasid Caliphate (750–1258), centred in Baghdad, produced the Islamic Golden Age — extraordinary contributions in mathematics (al-Khwarizmi, algorithms; algebra), medicine (Ibn Sina, the Canon of Medicine), philosophy (al-Farabi, Ibn Rushd/Averroes), and astronomy. The Ottoman Empire (1299–1923) was the last great Sunni Islamic empire; the Safavid (1501–1736) established Shi\'a Islam as the state religion of Iran.',
    relatedReligions: ['rel-judaism'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  {
    id: 'rel-hinduism',
    name: 'Hinduism',
    icon: '🕉️',
    founded: 'Vedic period c. 1500–500 BC; classical Hinduism c. 200 BC–500 AD; no single founding moment',
    adherents: '~1.2 billion worldwide; ~1.1 billion in India',
    category: 'Dharmic',
    founder: 'No single founder; the Vedas are held to be eternal (apaurusheya — "not of human authorship")',
    summary: `Hinduism is the world's oldest major living religion — a vast and diverse tradition without a single founder, central authority, or universally-agreed creed. The English term "Hinduism" was coined by 19th-century British colonial administrators for the religious traditions of the Indian subcontinent; the term sanatana dharma ("eternal religion" or "eternal way") is the more traditional self-designation. Hinduism encompasses an extraordinary diversity of philosophical schools, devotional movements (bhakti), ritual traditions, monastic orders, and folk practices — held together not by doctrinal uniformity but by shared scriptures (the Vedas and the great epics), shared concepts (dharma, karma, moksha, samsara), shared rituals, and shared cultural matrices. Hindu thought encompasses strict monism (Advaita Vedanta, in which only Brahman is real), qualified non-dualism (Vishishtadvaita, in which souls are real distinct beings eternally related to Brahman), dualism (Dvaita, with God and souls as genuinely distinct), polytheism (the thousands of deities of folk practice), pantheism, and panentheism. The encounter between Hinduism and Christianity has been complex and continuing for two thousand years (the tradition of Thomas the Apostle in Kerala dates to the first century), though intensive engagement dates from the European colonial era.`,
    coreBeliefs: `<p><strong>Brahman.</strong> The Absolute Reality, the ground of all being. In Advaita Vedanta (Shankara, 8th century), Brahman is nirguna ("without qualities") — the impersonal Absolute, beyond all distinctions, beyond all concepts; the world we perceive is maya, a kind of cosmic illusion. In other Vedantic schools (Ramanuja's Vishishtadvaita, Madhva's Dvaita), Brahman is saguna ("with qualities") — personal, supremely good, the proper object of devotion. The tension between impersonal and personal conceptions of the Absolute runs through all Hindu thought.</p>
    <p><strong>The deities.</strong> Hindu devotional practice centres on a vast pantheon of deities. The Trimurti (the "three forms") — Brahma the creator, Vishnu the preserver, Shiva the destroyer-renewer — frames the cosmic functions. Vishnu's ten avataras (incarnations) include Rama and Krishna, around whom enormous devotional traditions have grown. Shiva is worshipped with his consort Parvati and his sons Ganesha (the elephant-headed remover of obstacles) and Kartikeya. The Devi — the Goddess in her many forms (Durga, Kali, Lakshmi, Saraswati, Parvati) — is worshipped both as the consort of male deities and as supreme deity in her own right in the Shakta traditions. The relationship between these deities and the one ultimate Brahman is variously understood: in some traditions they are aspects, manifestations, or accessible forms of the one Brahman; in others they are genuinely distinct deities; in still others they are devotional foci that point beyond themselves to the formless Absolute.</p>
    <p><strong>Atman and the self.</strong> The atman is the true self, the inner consciousness, the witness behind the changing flux of body, sensations, thoughts, and emotions. In Advaita Vedanta, the atman is identical with Brahman — "tat tvam asi" ("that art thou," Chandogya Upanishad 6.8.7); the realization of this identity is liberation. In dualistic schools, the atman is distinct from Brahman but eternally related to him through devotion (bhakti) and grace.</p>
    <p><strong>Karma and samsara.</strong> Every action has consequences that bear fruit; good actions produce good results, bad actions produce bad results, both in this life and in future lives. Samsara is the cycle of birth, death, and rebirth in which souls travel through countless lives, accumulating and burning karma, until eventual liberation (moksha). Time is cyclical and vast — yugas (epochs) succeed each other in long cycles, kalpas (cosmic days of Brahma) stretch across billions of years.</p>
    <p><strong>Moksha — liberation.</strong> The ultimate spiritual goal is liberation from samsara — release from the cycle of rebirth into eternal union with or relationship to the Absolute. Different schools offer different paths (margas): the path of knowledge (jnana marga, the way of philosophical realization), the path of action (karma marga, the way of selfless action), the path of devotion (bhakti marga, the way of loving surrender to a personal God), and the path of meditation (raja marga or yoga, the way of inner discipline).</p>
    <p><strong>Dharma.</strong> The cosmic and moral order; one's duty in accordance with that order. Dharma is shaped by one's stage of life (ashrama: student, householder, forest-dweller, renunciant), by one's social context (varna and jati, traditionally — caste in the Western shorthand), and by universal moral principles (sanatana dharma — the eternal principles such as non-violence, truthfulness, non-stealing, self-control, purity).</p>`,
    keyTexts: [
      { title: 'The Vedas', desc: 'The oldest sacred texts of Hinduism, traditionally regarded as eternally existing and not of human authorship (apaurusheya). The four Vedas are the Rig Veda (the oldest, c. 1500–1200 BC, containing hymns), Sama Veda, Yajur Veda, and Atharva Veda. Each Veda has four parts: Samhitas (hymns), Brahmanas (ritual instructions), Aranyakas (forest texts), and Upanishads (philosophical dialogues).' },
      { title: 'The Upanishads', desc: 'The philosophical texts at the end of the Vedas (c. 800–500 BC), containing the foundational reflections on Brahman, atman, and moksha. The major (mukhya) Upanishads — Chandogya, Brihadaranyaka, Isha, Kena, Katha, Mundaka, Mandukya, Prasna, Aitareya, Taittiriya — are the source of most subsequent Hindu philosophy.' },
      { title: 'The Bhagavad Gita', desc: 'Perhaps the single most widely-read Hindu text. Embedded in the Mahabharata, the Gita (c. 200 BC–200 AD) presents Krishna\'s discourse to the warrior Arjuna on the eve of battle, integrating the paths of knowledge, action, and devotion into a coherent vision. The 700 verses of the Gita are routinely committed to memory.' },
      { title: 'The Mahabharata and the Ramayana', desc: 'The two great Sanskrit epics. The Mahabharata (composed c. 400 BC–400 AD) is the longest epic in world literature, containing the central Hindu philosophical reflections. The Ramayana (c. 500 BC–100 BC) tells the story of Rama, Sita, and Hanuman, and is the cultural backbone of Hindu devotional life.' },
      { title: 'The Puranas', desc: 'Eighteen great Puranas (c. 300–1500 AD) containing mythology, cosmology, genealogy, and theology, with the Vishnu Purana, Shiva Purana, and Devi Bhagavata Purana shaping the devotional life of their respective sectarian traditions.' },
      { title: 'The Brahma Sutras and the major commentaries', desc: 'Badarayana\'s Brahma Sutras (c. 200 BC–200 AD) systematize Upanishadic teaching. The three great commentaries — Shankara\'s Advaita (c. 800 AD), Ramanuja\'s Vishishtadvaita (12th century), and Madhva\'s Dvaita (13th century) — represent the three major Vedantic schools.' },
    ],
    pointsOfContact: `<p>Hinduism and Christianity, despite enormous differences, share more philosophical and religious territory than is often recognized.</p>
    <p><strong>The transcendent Absolute.</strong> Both traditions affirm an ultimate reality that transcends the natural order — God in Christianity, Brahman in much of Hindu thought. Both refuse a flat materialism that reduces reality to physical processes alone.</p>
    <p><strong>The personal God.</strong> The bhakti traditions of Hinduism — the Vaishnava devotion to Vishnu and his avataras (especially Krishna and Rama), the Shaiva devotion to Shiva, the Shakta devotion to the Goddess — affirm a personal supreme Being with whom human beings can enter into relationship of love. Ramanuja's Vishishtadvaita and Madhva's Dvaita are particularly close to the theistic structures of Christianity: a real personal God, a real distinct soul, a real relationship of love between them, a real grace.</p>
    <p><strong>The longing for liberation.</strong> Both traditions affirm that the human predicament involves a deep need for release from the patterns that bind us — sin in Christianity, samsara and avidya (ignorance) in Hinduism. Both teach that liberation comes ultimately as gift, not as achievement alone.</p>
    <p><strong>The path of devotion (bhakti).</strong> The Hindu bhakti tradition — the way of loving surrender to a personal God — has remarkable convergences with Christian spirituality. Krishna's promise in Bhagavad Gita 18:66 — "Abandoning all duties, take refuge in me alone; I will deliver you from all evils, do not grieve" — has been read by Christian dialogue partners as remarkably close to the gospel call to faith in Christ. The mystical writings of the Vaishnava and Shaiva poets — Ramprasad's hymns to Kali, Mira Bai's love-poems to Krishna, the Tamil Alvars and Nayanars — have a depth of devotional intensity that finds its closest Christian parallel in the mystical traditions of Bernard, Teresa, John of the Cross.</p>
    <p><strong>The moral order (dharma).</strong> The Hindu concept of dharma — the cosmic and moral order — affirms that there is an objective right and wrong, that human life is meaningful, that ethical behavior matters cosmically. The principles of ahimsa (non-violence), satya (truthfulness), and karuna (compassion) overlap significantly with Christian moral teaching.</p>
    <p><strong>The integration of life and worship.</strong> Hindu religious life integrates worship, meal, family, work, study, and meditation into a unified life of dharma. The Christian sacramental tradition has parallels — the sanctification of ordinary life through liturgical rhythm, the recognition that the secular and the sacred are not finally separable.</p>
    <p><strong>Asceticism, monasticism, and contemplative life.</strong> Hindu monastic traditions (the sannyasi tradition, the swamis of the major monastic orders) have remarkable parallels with Christian monastic life — celibacy, simplicity, contemplative prayer, withdrawal from the world for the sake of God.</p>`,
    pointsOfDivergence: `<p>The divergences between Hinduism and Christianity are deep and concentrated on the doctrine of God, the nature of the human person, the source of liberation, and the relationship between God and the world.</p>
    <p><strong>The doctrine of God.</strong> Hinduism's most distinctive philosophical position — the Advaita Vedanta of Shankara — holds that ultimate reality (Brahman) is ultimately impersonal, without qualities, beyond all conceptual distinctions. The personal deities (Vishnu, Shiva, Devi) are saguna manifestations of the nirguna Brahman, eventually transcended in liberation. Christianity confesses God as eternally personal, eternally tri-personal, eternally relational — never finally beyond personhood, never the personhood is a lower level of reality to be transcended. The personal-impersonal question is one of the deepest divides in comparative religion.</p>
    <p><strong>Reincarnation and resurrection.</strong> Hinduism teaches reincarnation (samsara) — the soul travels through countless lives, accumulating and burning karma, until eventual liberation. Christianity teaches one earthly life, followed by death, then judgment and resurrection to eternal life or eternal separation. The metaphysical assumptions about the soul, time, history, and the body that underlie these two pictures are fundamentally different.</p>
    <p><strong>The self.</strong> Advaita Hinduism teaches that the deepest truth about the self is its identity with Brahman — that "I" in the deepest sense is Brahman, not a creature distinct from God. Christianity teaches that the self is a creature, real and distinct from God, never absorbed into God but eternally in relationship with him. "He must increase, but I must decrease" (John 3:30) is a different claim from "tat tvam asi" ("that art thou").</p>
    <p><strong>The avatar and the Incarnation.</strong> Hinduism teaches that the divine descends into the world periodically through avataras — manifestations of Vishnu (Rama, Krishna, and others) who appear when dharma is in decline. Christianity confesses the Incarnation — God the Son becoming truly and permanently human, with a definite historical body, a definite death, a definite resurrection. The avatar is one of many descents in cyclical time; the Incarnation is the unique event of God entering history once and forever. As Krishna himself says in Bhagavad Gita 4:7–8, he comes "whenever there is decline of righteousness... in every age" — repeatedly. The Christian "once for all" (Hebrews 9:26) is incompatible.</p>
    <p><strong>Salvation.</strong> Hinduism's primary soteriology (especially in the philosophical schools) is liberation through knowledge (jnana) — realizing one's true identity with Brahman, or one's true relationship as soul to the personal God. Karma — one's accumulated actions across many lifetimes — must be exhausted. Christianity teaches salvation by grace through faith in Christ's atoning death — not as the realization of an eternal truth about the self, but as a gift received from a God who has acted decisively in history.</p>
    <p><strong>Caste.</strong> Traditional Hinduism is structured by the caste system (varna and jati), which Hindu reformers (Ram Mohan Roy in the 19th century, Gandhi in the 20th, Ambedkar's mass Buddhist conversions) have repeatedly challenged from within and which Hindu philosophy itself has resources to critique. Christianity teaches the equal dignity of every person in Christ (Galatians 3:28); the historic Christian engagement with caste has been a major locus of evangelism in India, with Dalit communities representing a disproportionately large share of Indian Christianity.</p>
    <p><strong>The world.</strong> Some Hindu traditions (particularly Advaita) teach that the world is maya — illusion or appearance, ultimately not real. Christianity teaches the world as God's good creation, fallen but to be redeemed, not transcended but transfigured.</p>`,
    discussionQuestions: [
      {
        id: 'q1',
        title: 'Personal God or impersonal Absolute',
        body: `<p>Advaita Vedanta teaches that ultimate reality (Brahman) is beyond personhood — that the personal God of devotional practice is a lower-level reality, ultimately transcended in liberation. Christianity confesses God as eternally personal — that personhood is not a limitation of God but the very reality of God, who has always existed in tri-personal love.</p>
        <p><strong>Is the highest reality personal or beyond personhood? Does the human experience of love, knowledge, and moral responsibility point to a personal God who is their source, or to a deeper impersonal Absolute beyond all such distinctions?</strong></p>`,
      },
      {
        id: 'q2',
        title: 'Avatar and Incarnation',
        body: `<p>Hindu theology affirms many avataras — Krishna's promise in Bhagavad Gita 4:7–8 that he comes "whenever there is decline of righteousness" in every age. Christianity affirms a unique Incarnation — God the Son becoming permanently human, one historical body that died, rose, and ascended. Hinduism asks why Christ's claim should be unique; Christianity asks how an incarnation that recurs through history could ever finally save.</p>
        <p><strong>What makes Christ's claim to be uniquely incarnate different in kind from the Hindu doctrine of repeated avataras — and is the difference one of theology or merely of historical accident?</strong></p>`,
      },
      {
        id: 'q3',
        title: 'Reincarnation and one life',
        body: `<p>Hinduism teaches that the soul migrates through countless lifetimes, accumulating and burning karma, until eventual liberation. Christianity teaches "it is appointed for man to die once, and after that comes judgment" (Hebrews 9:27). Hinduism finds in reincarnation a way to account for the apparent injustice of life — why some are born to suffering and others to ease, why apparent randomness governs lives. Christianity sees in resurrection the irreplaceable seriousness of this one life.</p>
        <p><strong>Does reincarnation make sense of suffering and injustice in ways that one-life Christianity cannot? Or does the urgency and weight of this single life, on Christian assumptions, ground a moral seriousness that endless lifetimes dilute?</strong></p>`,
      },
      {
        id: 'q4',
        title: 'The self: distinct creature or one with God',
        body: `<p>Advaita Hinduism's central insight — "tat tvam asi" ("that art thou") — teaches that the deepest truth of the self is its identity with Brahman. Christianity teaches that the self is real, distinct from God, a creature made in God's image but never absorbed into God. The relationship between divine and human, in Hinduism's most rigorous philosophical form, is one of identity at the deepest level; in Christianity, of communion across an unbridgeable but lovingly crossed ontological distinction.</p>
        <p><strong>Is the goal of religious life the discovery that you are God, or that you are loved by God? What is at stake — for prayer, for ethics, for the experience of selfhood — in this difference?</strong></p>`,
      },
      {
        id: 'q5',
        title: 'Many ways to one God',
        body: `<p>Hinduism characteristically frames itself as inclusive: all sincere religious paths lead toward the divine; Vivekananda at the World's Parliament of Religions (Chicago, 1893) declared that Hinduism teaches "not only toleration but acceptance" of all religions as true paths. Christianity has traditionally claimed that Christ is "the way, the truth, and the life" (John 14:6) and that "there is no other name under heaven... by which we must be saved" (Acts 4:12).</p>
        <p><strong>Can a religion be both fully committed to its own tradition's truth claim and genuinely open to other religions? Is Hinduism's tolerance a deeper truth, or a refusal to make the kinds of decisive claims that the gospel itself requires?</strong></p>`,
      },
    ],
    historicalRelation: `<p>The Christian-Hindu encounter spans two thousand years and is one of the most theologically and culturally rich interreligious relationships in history.</p>
    <p><strong>The Mar Thoma Christians.</strong> The Christian tradition of Kerala in southwest India traces itself to the Apostle Thomas, who tradition holds arrived in India in 52 AD and was martyred near Chennai (Mylapore) in 72 AD. The historical evidence for Thomas's actual ministry is contested, but ancient Christian communities in Kerala (the Saint Thomas Christians or Nasranis) have existed at least from the 3rd–4th centuries and represent one of the oldest continuous Christian communities outside the Mediterranean world.</p>
    <p><strong>The Portuguese era (16th–17th centuries).</strong> The arrival of Vasco da Gama in Calicut (1498) and subsequent Portuguese colonization of Goa initiated a new era of Christian-Hindu contact. The Jesuit mission, beginning with Francis Xavier (in India from 1542), undertook substantial missionary work. <strong>Roberto de Nobili</strong> (1577–1656), the Jesuit in Madurai, pioneered what would later be called "inculturation" — adopting Indian customs, dress, and food, learning Sanskrit, engaging with Hindu philosophy on its own terms, and presenting Christianity in categories the Brahmin intellectual class could engage. Nobili's work was controversial in Rome but influential in subsequent missionary practice.</p>
    <p><strong>The Protestant missions (18th–19th centuries).</strong> The Tranquebar Mission (Bartholomäus Ziegenbalg, 1706) and the work of <strong>William Carey</strong> (1761–1834) in Serampore launched the modern Protestant missionary movement in India. Carey translated the Bible into many Indian languages, established Serampore College (1818), and engaged Hindu society on social reform questions (notably the abolition of sati). The 19th-century encounter between Hindu reformers and Christianity transformed both traditions.</p>
    <p><strong>The Hindu Renaissance.</strong> The encounter with Christianity (and with Western Enlightenment thought through colonial education) catalyzed a major reform movement within Hinduism. <strong>Raja Ram Mohan Roy</strong> (1772–1833) founded the Brahmo Samaj (1828), a monotheistic reform movement that drew on Upanishadic philosophy and Christian ethics in equal measure. <strong>Swami Vivekananda</strong> (1863–1902), the disciple of Ramakrishna, presented Hinduism to the World's Parliament of Religions (Chicago, September 1893) in a form that has shaped Western perceptions of Hinduism ever since. <strong>Sarvepalli Radhakrishnan</strong> (1888–1975), philosopher and President of India, gave the most influential 20th-century philosophical interpretation of Hinduism in its dialogue with Christianity.</p>
    <p><strong>Gandhi.</strong> Mohandas Karamchand Gandhi (1869–1948) read the Sermon on the Mount with deep devotion and developed his theory of non-violent resistance (satyagraha) drawing on both Hindu (ahimsa) and Christian (the Sermon on the Mount, Tolstoy's interpretation of Christ) sources. Gandhi's witness has been a major touchpoint in 20th-century Christian-Hindu dialogue.</p>
    <p><strong>Christian engagement with Hindu philosophy.</strong> The Catholic theologian <strong>Henri Le Saux</strong> (Swami Abhishiktananda, 1910–73) lived as a Hindu sannyasi while remaining a Catholic priest, producing significant works on the meeting of Christian and Hindu spiritual experience. <strong>Bede Griffiths</strong> (1906–1993), the Benedictine monk who founded Shantivanam ashram in Tamil Nadu, similarly explored the integration of Christian and Hindu contemplative life. <strong>Raimon Panikkar</strong> (1918–2010), the Spanish-Indian theologian, devoted his career to the systematic exploration of Christian-Hindu dialogue.</p>
    <p><strong>The contemporary situation.</strong> Indian Christianity comprises approximately 2.3% of the Indian population (28 million people). The Catholic Church in India is the second-largest Christian community in Asia (after the Philippines). Dalit and Adivasi (tribal) communities have been disproportionate sources of Christian conversion. The rise of Hindutva nationalism since the 1990s has brought increased tension and, in some states, anti-conversion legislation. Persecution of Christian converts and missionaries has been documented in various contexts.</p>
    <p>Hinduism's expansion into the Western world through the 20th century — the migrations following Indian independence (1947), the post-1965 American immigration reform, the Hare Krishna movement (ISKCON, founded by A.C. Bhaktivedanta Swami Prabhupada in 1966), the influence of figures like Maharishi Mahesh Yogi (Transcendental Meditation) — has made Christian-Hindu encounter no longer confined to India but a feature of life in Britain, the United States, Canada, Australia, and beyond.</p>`,
    historicalNote: 'The Indus Valley Civilization (c. 2600–1900 BC) shows possible religious continuities with later Hinduism but predates the textual tradition. The Vedic period (c. 1500–500 BC) saw the composition of the Rig Veda and subsequent texts. The Upanishadic philosophical revolution (c. 800–500 BC) developed the central concepts of Brahman, atman, karma, and moksha. The Bhagavad Gita (c. 200 BC–200 AD) and the development of the major Vedantic schools — Shankara\'s Advaita (8th century), Ramanuja\'s Vishishtadvaita (11th–12th century), Madhva\'s Dvaita (13th century) — gave classical Hinduism its enduring philosophical form. The bhakti devotional movement (6th–17th century, with poets including the Tamil Alvars and Nayanars, the Vaishnava poets of North India, Mira Bai, Tulsidas, the Marathi saints) transformed Hindu religious life into one of personal devotion to a personal God. The colonial period (16th–20th centuries) brought decisive encounters with Christianity and Western thought. Indian independence (1947) and the subsequent rise of Hindu nationalism (the BJP\'s political ascendancy from 1980, formation of government 1996, dominance since 2014) have made Hinduism not only a religion but a politically organized cultural identity. The contemporary global Hindu diaspora numbers approximately 30 million.',
    relatedReligions: ['rel-buddhism', 'rel-sikhism'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  {
    id: 'rel-buddhism',
    name: 'Buddhism',
    icon: '☸️',
    founded: 'c. 5th century BC, by Siddhartha Gautama (the Buddha)',
    adherents: '~500 million worldwide; dominant in Thailand, Myanmar, Cambodia, Laos, Sri Lanka, Tibet, Mongolia, and significant in China, Japan, Korea, Vietnam',
    category: 'Dharmic',
    founder: 'Siddhartha Gautama, the Buddha ("the Awakened One"), c. 563–483 BC',
    summary: `Buddhism is the fourth-largest world religion, founded in the 5th century BC in northern India by Siddhartha Gautama, the prince who renounced his royal life to discover the cause and cessation of suffering. After six years of ascetic seeking and a profound enlightenment under the Bodhi tree at Bodh Gaya, the Buddha taught for 45 years before his death (parinirvana) at approximately age 80. His teaching (the Dharma) is structured around the Four Noble Truths — the reality of suffering (dukkha), the cause of suffering (craving / tanha), the cessation of suffering, and the Eightfold Path that leads to cessation. Buddhism is distinctive among world religions in being non-theistic at its core — neither affirming nor denying a creator God, but considering the God-question soteriologically irrelevant. The three major branches are Theravada (the "Way of the Elders," dominant in Sri Lanka and Southeast Asia, focused on the original Pali canon and the path of personal liberation), Mahayana (the "Great Vehicle," dominant in East Asia, with the bodhisattva ideal of postponing personal liberation to help all sentient beings), and Vajrayana (the "Diamond Vehicle," primarily Tibetan Buddhism, integrating tantric practice with Mahayana foundations). The encounter between Buddhism and Christianity is one of the great unsettled philosophical conversations of the modern world.`,
    coreBeliefs: `<p><strong>The Four Noble Truths.</strong> The Buddha's foundational diagnosis of the human predicament. (1) <em>Dukkha</em> — life is characterized by suffering, unsatisfactoriness, instability; even apparent pleasure is shadowed by its impermanence. (2) <em>Samudaya</em> — the cause of suffering is tanha (craving, attachment, thirst): we suffer because we cling to what is impermanent as if it were permanent, to what is not-self as if it were self. (3) <em>Nirodha</em> — the cessation of suffering is possible; by letting go of craving, the cycle of suffering can end. (4) <em>Magga</em> — the Eightfold Path is the way to cessation: right understanding, right intention, right speech, right action, right livelihood, right effort, right mindfulness, right concentration.</p>
    <p><strong>The Three Marks of Existence.</strong> The Buddha's deepest metaphysical observations: (1) <em>Anicca</em> — impermanence: everything that arises also passes away; nothing endures unchanged. (2) <em>Dukkha</em> — unsatisfactoriness: because everything is impermanent, all conditioned existence is ultimately unable to provide lasting satisfaction. (3) <em>Anatta</em> — non-self: there is no permanent, unchanging "I" or soul behind the changing flux of body, sensations, perceptions, mental formations, and consciousness; the "person" is a conventional designation for a continually-changing stream of psychophysical events.</p>
    <p><strong>Karma, samsara, and rebirth.</strong> Buddhism, sharing the Indian intellectual matrix from which it emerged, accepts karma (the moral law of action and result) and samsara (the cycle of birth, death, and rebirth across countless lives). But Buddhism distinctively reframes these: there is no soul (atman) that transmigrates from life to life. What "rebirth" means in Buddhism is a contested philosophical question — the various schools have given different accounts, but all maintain that the doctrine of anatta requires a careful reformulation of how karma and rebirth function without a substantial self.</p>
    <p><strong>Nirvana.</strong> The final goal is nirvana (nibbana in Pali) — literally "extinguishing" or "blowing out." Nirvana is the extinguishing of craving, the cessation of suffering, the end of the cycle of rebirth. What nirvana positively is — beyond the cessation of craving — is one of the deep questions of Buddhist philosophy. The Buddha himself characteristically declined to specify nirvana positively, treating questions like "does the enlightened one exist after death?" as unproductive speculation that does not lead toward awakening.</p>
    <p><strong>The Three Jewels.</strong> The basic objects of Buddhist refuge: the Buddha (the awakened teacher), the Dharma (his teaching, the truth he discovered), and the Sangha (the community of practitioners). Taking refuge in the Three Jewels is the basic act of becoming a Buddhist.</p>
    <p><strong>The bodhisattva path (Mahayana).</strong> Mahayana Buddhism teaches that the highest spiritual aspiration is not personal liberation alone but to become a bodhisattva — one who, motivated by great compassion (mahakaruna), seeks enlightenment for the sake of all sentient beings, vowing to postpone final nirvana until all are liberated. The bodhisattva vow shapes Mahayana spirituality and ethics fundamentally.</p>
    <p><strong>Emptiness (sunyata).</strong> Mahayana Buddhism, especially in Nagarjuna's Madhyamaka (2nd–3rd century AD), teaches that all phenomena are "empty" of inherent self-existence — nothing exists as a self-contained substance; everything arises in interdependent origination (pratityasamutpada). Emptiness is not nothingness but the absence of the kind of fixed, independent existence we ordinarily project onto things.</p>`,
    keyTexts: [
      { title: 'The Pali Canon (Tipitaka)', desc: 'The scriptures of Theravada Buddhism, in the Pali language, traditionally said to preserve the Buddha\'s teachings as recited at the First Council (c. 480 BC) and committed to writing in Sri Lanka c. 30 BC. The "Three Baskets" are the Vinaya (monastic discipline), Sutta (discourses of the Buddha), and Abhidhamma (systematic philosophical analysis). The Dhammapada — a collection of 423 verses from the Buddha — is the most widely-read Theravada text.' },
      { title: 'The Mahayana Sutras', desc: 'A vast corpus of texts that emerged from the 1st century BC, claiming to preserve teachings the Buddha gave to advanced disciples. The most influential: the Heart Sutra and Diamond Sutra (foundational for understanding emptiness), the Lotus Sutra (foundational for East Asian Buddhism, especially Tendai and Nichiren traditions), the Pure Land Sutras (foundational for devotional Buddhism), and the Avatamsaka Sutra (foundational for Huayan/Hwaeom philosophy).' },
      { title: 'Nagarjuna\'s Mulamadhyamakakarika', desc: 'The Fundamental Verses on the Middle Way (2nd–3rd century AD), the foundational philosophical text of the Madhyamaka school. Nagarjuna\'s analytical demonstration of emptiness has shaped Mahayana philosophy ever since.' },
      { title: 'The Tibetan Book of the Dead (Bardo Thodol)', desc: 'The Liberation Through Hearing During the Intermediate State, a Tibetan funerary text describing the experiences of consciousness between death and rebirth. Said to have been composed by Padmasambhava in the 8th century and rediscovered as terma in the 14th century by Karma Lingpa.' },
      { title: 'The Platform Sutra of Huineng', desc: 'The foundational Chan/Zen text, attributed to the Sixth Patriarch Huineng (638–713 AD), emphasizing sudden enlightenment and the doctrine that buddha-nature is innately present in every being.' },
      { title: 'Dogen\'s Shobogenzo', desc: 'The Treasury of the True Dharma Eye (13th century), the magnum opus of Soto Zen\'s founder Eihei Dogen. Among the most philosophically demanding texts in any religious tradition.' },
    ],
    pointsOfContact: `<p>Buddhism and Christianity share more than a casual observer would expect, given their radically different starting points.</p>
    <p><strong>The seriousness of the human condition.</strong> Both traditions take with full seriousness the predicament of human existence — that something is profoundly wrong with how we live, that we cannot fix it ourselves through ordinary means, that the cure requires a radical reorientation. Christian sin and Buddhist dukkha are not identical, but both refuse the easy optimism that says everything is basically fine.</p>
    <p><strong>The diagnosis of self-centredness.</strong> Buddhism's analysis of craving (tanha) as the cause of suffering converges remarkably with the Christian analysis of sin as fundamentally curving in on the self (incurvatus in se, Augustine and Luther). Both identify the central spiritual problem as something like a fundamental misorientation of desire — toward self and toward what is finite — that generates the suffering we experience and the suffering we inflict.</p>
    <p><strong>Compassion as central virtue.</strong> Mahayana Buddhism's exaltation of karuna (compassion) and the bodhisattva ideal has profound parallels in Christianity's love commandment and the imitation of Christ. Both traditions teach that the deepest moral truth is the call to love the suffering other.</p>
    <p><strong>Non-grasping and self-emptying.</strong> The Christian doctrine of kenosis — Christ "emptying himself" (Philippians 2:7) — and the broader Christian call to give up the self for the sake of others has remarkable points of contact with the Buddhist call to relinquish attachment. Thomas Merton noted that the Christian "death to self" and the Buddhist letting-go of self are not the same, but they are not unrelated.</p>
    <p><strong>Contemplative practice.</strong> Buddhist meditation traditions — vipassana, samatha, zazen, dzogchen — and Christian contemplative traditions — the Jesus Prayer, lectio divina, Carmelite contemplation, Centering Prayer — have generated centuries of mutually-illuminating practice and dialogue. Figures like Thomas Merton, Bede Griffiths, and the contemporary monastic interreligious dialogue have made this dialogue a major feature of late 20th and 21st century Christianity.</p>
    <p><strong>Renunciation and monastic life.</strong> The Buddhist Sangha and the Christian monastic tradition are among the few institutions that have produced sustained communities of celibate, contemplative, non-violent renunciation across millennia. The structural parallels — vows, discipline, schedules of prayer/meditation, the relationship between cenobitic and eremitic life — are too close to be coincidence and too divergent to be the same thing.</p>
    <p><strong>Non-violence.</strong> The Buddhist commitment to ahimsa (non-violence) and the Christian Sermon on the Mount converge in their teaching of radical non-retaliation and love even of enemies.</p>`,
    pointsOfDivergence: `<p>The divergences are deep and concentrate on God, the self, salvation, and the nature of ultimate reality.</p>
    <p><strong>God.</strong> The most striking difference is that Buddhism is non-theistic at its philosophical core. The Buddha himself, when asked metaphysical questions about a creator God, characteristically declined to answer — not because he denied a creator but because he held that such questions did not lead toward liberation. Mahayana traditions developed sophisticated theologies of the dharmakaya (the body of reality, the unconditioned), the Buddha-nature, and other transcendent realities — but these are not equivalent to the personal Creator God of Christianity. The Christian gospel begins with God's prior love and action; Buddhism does not.</p>
    <p><strong>The self.</strong> The doctrine of anatta (non-self) is among Buddhism's most distinctive teachings. There is no permanent self, no eternal soul, no fixed "I" that persists through time and across lives. Christianity teaches the soul created by God in his image, real, persistent, and destined for resurrection. The two anthropologies are fundamentally different.</p>
    <p><strong>Salvation: extinguishing or resurrection.</strong> The Buddhist soteriological goal is nirvana — the extinguishing of craving, the cessation of suffering, the end of rebirth. The Christian eschatological goal is resurrection — the bodily raising of the dead to eternal life with God, the new heaven and new earth, every tear wiped away. These are radically different visions of what the final human destiny is. The Buddhist hope is for cessation; the Christian hope is for fullness of being.</p>
    <p><strong>The reality of the world.</strong> Buddhism teaches the impermanence of all conditioned things; many Buddhist schools (especially Madhyamaka) emphasize the emptiness of all phenomena. Christianity teaches the world as God's good creation, fallen but to be redeemed, not transcended but transfigured. The Buddhist movement is fundamentally one of release; the Christian movement is one of redemption.</p>
    <p><strong>Suffering: intrinsic or fallen.</strong> The First Noble Truth — life is suffering — frames suffering as woven into the very fabric of conditioned existence. Christianity teaches that suffering entered through the Fall, that creation was originally good, and that suffering will be definitively overcome in the new creation. The Buddhist diagnosis treats suffering as a function of attachment to what is intrinsically impermanent; the Christian diagnosis treats it as a function of broken relationship that will be restored.</p>
    <p><strong>The Other.</strong> Christianity is fundamentally a religion of encounter with the personal God who reveals himself, calls, judges, forgives, and saves. Buddhism, even in its most theistic Mahayana forms, is fundamentally a religion of awakening to a truth that is always present — the dharma was the dharma before the Buddha and would be after him. The Christian gospel is news; the Buddhist Dharma is timeless. The structural difference between revelation and realization runs deep.</p>
    <p><strong>The role of the founder.</strong> Christ in Christianity is not a teacher whose discoveries we now possess — he is the unique incarnate God whose person and work are the salvation itself. The Buddha in Buddhism is a teacher who discovered and taught the timeless Dharma — what saves is the Dharma, not the Buddha. As the Theravada formulation puts it: "Whether Tathagatas (Buddhas) arise or do not arise, this principle remains" (Samyutta Nikaya 12.20).</p>`,
    discussionQuestions: [
      {
        id: 'q1',
        title: 'God or no-God',
        body: `<p>Buddhism is fundamentally non-theistic — neither affirming nor denying a creator God, but considering the God-question soteriologically irrelevant. Christianity makes the personal Creator God the centre of reality. The Buddha taught that questions about a creator God were "thickets, wildernesses, contortions" that did not lead to liberation; Christianity teaches that knowing God is precisely the point.</p>
        <p><strong>Can a religion that brackets the God-question still answer the deepest human longings? Or does the Christian claim that we are created and loved by a Person make a difference the Buddha overlooked?</strong></p>`,
      },
      {
        id: 'q2',
        title: 'Anatta and the soul',
        body: `<p>Buddhism teaches anatta — that there is no permanent self; the "person" is a continually-changing aggregate of physical and mental phenomena. Christianity teaches the immortal soul, made in God's image, destined for resurrection. The Buddhist analysis of the self as conventional designation rather than substantial entity is among the most rigorous in world philosophy.</p>
        <p><strong>Are we genuinely persons with continuing identity, or is the persistent sense of "I" a sustained illusion? And if there is no real self, who is it that is liberated in nirvana — and who is it that loves and is loved in this lifetime?</strong></p>`,
      },
      {
        id: 'q3',
        title: 'Suffering as intrinsic or fallen',
        body: `<p>The First Noble Truth is that life is dukkha — suffering, unsatisfactoriness — woven into the very nature of conditioned existence. Christianity teaches that creation was originally good, that suffering entered through the Fall, and that suffering will be definitively overcome in the new creation. The Buddha says suffering is intrinsic to existence; the Bible says it is a wound in existence that will be healed.</p>
        <p><strong>Is the world we live in fundamentally broken, or fundamentally fine but full of attachment? Does the universal experience of suffering point to a metaphysical truth about existence as such, or to a particular fall from a good creation that will be redeemed?</strong></p>`,
      },
      {
        id: 'q4',
        title: 'Nirvana and resurrection',
        body: `<p>Buddhism's final hope is nirvana — the extinguishing of craving, the cessation of rebirth, the end of suffering. Christianity's final hope is resurrection — bodily life in the new creation, the kingdom of God where God dwells with his people, every tear wiped from every eye. The Buddhist hope is for the cessation of conditioned existence; the Christian hope is for the transformation and intensification of being.</p>
        <p><strong>Is the deepest human hope the extinguishing of self, or its redemption? Do we yearn for the end of our striving or for its fulfillment?</strong></p>`,
      },
      {
        id: 'q5',
        title: 'Compassion without a creator',
        body: `<p>Mahayana Buddhism's karuna (compassion) and the bodhisattva ideal — the vow to delay personal liberation to help all sentient beings — has commanded profound moral seriousness for two thousand years. Christianity grounds love in the very nature of the Triune God himself: "God is love" (1 John 4:8). The Buddhist bodhisattva acts out of recognition of the suffering of others without needing a metaphysical foundation in a loving God.</p>
        <p><strong>Without a personal God, what finally grounds the moral demand to love? Is the bodhisattva ideal a free-standing moral discovery, or does it implicitly point toward what Christianity makes explicit — that ultimate reality is itself love?</strong></p>`,
      },
    ],
    historicalRelation: `<p>The Christian-Buddhist encounter is comparatively young as major interreligious encounters go, though it now ranks among the most theologically and philosophically significant.</p>
    <p><strong>Early contacts.</strong> Greco-Buddhist contact in the Hellenistic period (after Alexander's conquests, 4th century BC) produced both philosophical exchange (Pyrrho of Elis is said to have encountered Indian gymnosophists) and artistic exchange (the Greco-Buddhist art of Gandhara produced some of the earliest figural representations of the Buddha). The Greek-influenced Indo-Greek and Kushan kingdoms (2nd century BC–3rd century AD) hosted Buddhist communities. Whether early Christianity encountered Buddhism in any direct way is debated — the parallels noted by some between the lives of Jesus and the Buddha are more likely products of common features of religious biography than of historical influence.</p>
    <p><strong>The Silk Road.</strong> Buddhist communities along the Silk Road encountered Nestorian Christians from at least the 7th century. The Xi'an Stele (781 AD) documents the presence of a Christian (Nestorian) community in Tang dynasty China, sometimes called the "Luminous Religion" (Jingjiao). The interactions between Nestorian Christianity and Chinese Buddhism are evident in some of the Chinese Christian texts of this era (the Jesus Sutras), though the Nestorian community was largely extinguished by the 9th century.</p>
    <p><strong>The European discovery of Buddhism.</strong> European awareness of Buddhism as a coherent religious system developed gradually through Catholic missionary contacts. Marco Polo's accounts (13th century) mention Buddhist practices. The Jesuit missions to Japan (Francis Xavier from 1549) and China (Matteo Ricci from 1583) brought Christianity into substantial contact with Mahayana Buddhism. Xavier's encounters with Japanese Buddhism shaped his missionary strategy and his (sometimes uncharitable) characterizations. Ricci's accommodationist strategy in China engaged Confucianism more than Buddhism but indirectly shaped Christian-Buddhist relations.</p>
    <p><strong>The colonial and missionary era.</strong> 19th-century European discovery of Buddhist texts — the publication of the Pali Canon, the translation of major Sanskrit Buddhist works, the work of scholars like T.W. Rhys Davids and Max Müller — gave European intellectuals their first systematic access to Buddhist thought. Schopenhauer was deeply influenced by his encounter with Buddhism through translations available to him. The Theosophical Society (Helena Blavatsky, 1875) introduced Buddhism (in a particular Western form) to Western publics. The World's Parliament of Religions (Chicago, 1893) brought Buddhist representatives (notably Anagarika Dharmapala from Sri Lanka and Soyen Shaku from Japan) to international attention.</p>
    <p><strong>The 20th-century Western encounter.</strong> D.T. Suzuki's introductions to Zen Buddhism (from the 1920s) introduced Mahayana Buddhism to Western audiences in significant depth. The Beat Generation (Jack Kerouac, Allen Ginsberg, Gary Snyder) brought Buddhism into American popular culture in the 1950s–60s. The Tibetan diaspora following Chinese invasion of Tibet (1950–59) brought the Dalai Lama and substantial Tibetan Buddhist community to the West.</p>
    <p><strong>Christian-Buddhist monastic dialogue.</strong> The most theologically serious Christian-Buddhist dialogue has developed through monastic encounter. <strong>Thomas Merton</strong> (1915–68), the Trappist monk, undertook serious engagement with Buddhist thought, particularly with D.T. Suzuki and the Dalai Lama. Merton's death in Bangkok during a monastic interreligious dialogue conference (December 10, 1968) marked both the high point and tragic interruption of his Buddhist engagement. The Monastic Interreligious Dialogue (MID, founded 1978) has sustained this exchange. <strong>Bede Griffiths</strong> at Shantivanam in India, the Snowmass Conference (since 1980), and many other initiatives have continued the dialogue.</p>
    <p><strong>Major theological engagements.</strong> <strong>Paul Tillich</strong> engaged Buddhism in his late work, particularly his trip to Japan in 1960. <strong>John Cobb</strong>'s <em>Christ in a Pluralistic Age</em> (1975) and <em>Beyond Dialogue</em> (1982) developed process-theological engagement with Buddhist philosophy. <strong>Masao Abe</strong> (1915–2006), the Kyoto School philosopher, conducted sustained dialogue with Christian theologians on questions of kenosis, emptiness, and ultimate reality. <strong>Hans Küng</strong>'s <em>Christianity and the World Religions</em> includes substantial Buddhist engagement.</p>
    <p><strong>The contemporary global situation.</strong> Buddhism in the West has shifted from primarily ethnic immigrant communities (Chinese, Vietnamese, Tibetan, Japanese) to substantial convert communities, with mindfulness practices migrating into therapeutic and medical contexts. Christian communities in traditionally Buddhist countries (South Korea is approximately 30% Christian, Vietnam approximately 7%, Thailand under 1%) have shown different patterns of growth and challenge. The Buddhist persecution of Christian and Muslim minorities in Myanmar (Rohingya crisis), Sri Lanka (anti-Tamil and anti-Christian violence), and elsewhere has complicated the popular Western image of Buddhism as uniquely peaceful.</p>`,
    historicalNote: 'Siddhartha Gautama was born c. 563 BC (some scholars favor c. 480 BC) in Lumbini (modern Nepal) to the Shakya royal family. After encountering old age, sickness, death, and a wandering ascetic outside his palace, he renounced his royal life at age 29, undertook six years of severe asceticism, and achieved enlightenment under the Bodhi tree at Bodh Gaya at age 35. He taught for 45 years before his death (parinirvana) at Kushinagar at approximately age 80. The First Council (c. 480 BC) at Rajagriha is traditionally said to have established the Buddhist canon by oral recitation. The Third Council under Emperor Ashoka (c. 250 BC) sent Buddhist missionaries throughout the known world, beginning the spread of Buddhism beyond India. The arrival of Buddhism in China (1st century AD), Korea (4th century), Japan (6th century), and Tibet (7th century) shaped East Asian civilization profoundly. The decline of Buddhism in India (5th–13th centuries) and its near-extinction there after the Muslim conquests was paralleled by its flourishing across East and Southeast Asia. The 14th Dalai Lama (Tenzin Gyatso, b. 1935) was awarded the Nobel Peace Prize in 1989. Buddhism\'s contemporary global growth in Western countries through mindfulness, meditation, and convert communities has made it one of the fastest-growing religious traditions outside its traditional homelands.',
    relatedReligions: ['rel-hinduism'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  {
    id: 'rel-sikhism',
    name: 'Sikhism',
    icon: '☬',
    founded: '1469 AD, by Guru Nanak Dev Ji (1469–1539)',
    adherents: '~30 million worldwide; ~25 million in India (predominantly Punjab); significant diaspora in Canada, UK, USA',
    category: 'Dharmic',
    founder: 'Guru Nanak Dev Ji (1469–1539); succession of ten gurus through Guru Gobind Singh (1666–1708)',
    summary: `Sikhism is the youngest of the major world religions, founded in the Punjab region of South Asia in the late 15th century by Guru Nanak Dev Ji. The Sikh tradition is structured around the teaching and example of ten human gurus (1469–1708) and the eternal Guru — the sacred scripture, the Guru Granth Sahib, which Guru Gobind Singh (the tenth guru) declared the perpetual guru after him. Sikhism teaches strict monotheism — one God who is creator of all that exists, beyond gender, beyond form, present in all reality and accessible to every human being regardless of caste, sex, or social status. The Sikh way of life centers on honest work (kirat karni), remembrance of God's name (naam japna), and sharing with others (vand chakna). The fivefold articles of faith for initiated (Khalsa) Sikhs — kesh (uncut hair, usually under a turban), kara (steel bracelet), kanga (wooden comb), kachera (cotton undergarments), and kirpan (ceremonial sword) — give Sikhs their distinctive global identity. Sikhism is the fifth-largest organized religion in the world.`,
    coreBeliefs: `<p><strong>Ik Onkar — One God.</strong> The opening words of the Guru Granth Sahib: "Ik Onkar" — "One God." Sikhism is strictly monotheistic. God is one, eternal, the creator of all, beyond birth and death, beyond gender, beyond all human categories, accessible to every soul through devotion. God is variously named in the Sikh tradition — Waheguru (Wonderful Lord), Sat Nam (True Name), Akal Purakh (Timeless Being) — but is in essence beyond all names.</p>
    <p><strong>The ten Gurus.</strong> The lineage of teachers who shaped Sikhism: Guru Nanak (1469–1539, the founder); Guru Angad (1504–1552, who systematized Gurmukhi script); Guru Amar Das (1479–1574, who established the langar tradition); Guru Ram Das (1534–1581, founder of Amritsar); Guru Arjan (1563–1606, compiler of the Adi Granth, martyred by the Mughal emperor Jahangir); Guru Hargobind (1595–1644, who introduced the warrior dimension); Guru Har Rai (1630–1661); Guru Har Krishan (1656–1664); Guru Tegh Bahadur (1621–1675, martyred defending Kashmiri Hindus' religious freedom); Guru Gobind Singh (1666–1708, founder of the Khalsa, the tenth and final human guru, who declared the Guru Granth Sahib the eternal guru).</p>
    <p><strong>The Guru Granth Sahib.</strong> The sacred scripture of Sikhism, declared by Guru Gobind Singh in 1708 to be the eternal Guru. It contains 5,894 hymns — the writings of six of the Sikh Gurus plus selected writings from Hindu bhakti saints (Kabir, Ravidas, Namdev, Sain) and Sufi mystics (Sheikh Farid). The Adi Granth was first compiled by Guru Arjan in 1604 and given final form by Guru Gobind Singh. The Guru Granth Sahib is treated with the reverence due to a living guru — placed on a throne (palki) in every gurdwara, ceremonially opened in the morning and put to rest at night, addressed in worship and consulted in major life decisions.</p>
    <p><strong>The three pillars of Sikh life.</strong> (1) <em>Naam Japna</em> — remembrance of God's name through prayer, meditation, and continual mindfulness. (2) <em>Kirat Karni</em> — honest work as the basis of livelihood; Sikhs are forbidden from begging and are expected to earn through legitimate labor. (3) <em>Vand Chakna</em> — sharing with others; the obligation to give to those in need and to share what one has earned.</p>
    <p><strong>The Khalsa and the Five Ks.</strong> Initiated Sikhs (Khalsa, "the pure") wear five articles of faith established by Guru Gobind Singh at the Vaisakhi of 1699: (1) <em>Kesh</em> — uncut hair, symbolizing acceptance of God's will and natural form; (2) <em>Kara</em> — a steel bracelet, symbolizing the unbroken bond with God; (3) <em>Kanga</em> — a wooden comb, symbolizing cleanliness and discipline; (4) <em>Kachera</em> — cotton undergarments, symbolizing modesty and self-control; (5) <em>Kirpan</em> — a ceremonial sword, symbolizing the duty to defend the weak and oppose injustice.</p>
    <p><strong>Equality.</strong> Sikhism teaches the equality of all human beings regardless of caste, sex, religion, or social status. Guru Nanak's foundational declaration — "There is no Hindu, no Muslim" — established Sikhism as a religion that transcends communal divisions. The langar (free community meal served in every gurdwara) embodies this commitment: all are seated together on the floor at the same level, all eat the same food, regardless of background.</p>
    <p><strong>Reincarnation and liberation.</strong> Sikhism, sharing the Indian intellectual matrix, accepts reincarnation. The soul transmigrates through countless lives until liberation (mukti) is achieved through union with God. But Sikhism teaches that liberation is possible in this life through grace and dedicated devotion — not as a postponed result of countless lifetimes.</p>`,
    keyTexts: [
      { title: 'The Guru Granth Sahib', desc: 'The eternal Guru of the Sikhs, declared so by Guru Gobind Singh in 1708. Contains 5,894 hymns in 31 ragas (musical modes), with contributions from six Sikh Gurus (Nanak, Angad, Amar Das, Ram Das, Arjan, Tegh Bahadur), 15 Hindu bhakti saints and Sufi Muslim mystics, and other contributors. The standard text contains 1,430 pages (angs).' },
      { title: 'The Dasam Granth', desc: 'The "Tenth Book," primarily attributed to Guru Gobind Singh. Contains his compositions including the Jaap Sahib, Akal Ustat, and the Zafarnama (his letter to Emperor Aurangzeb). The Dasam Granth\'s authority is secondary to the Guru Granth Sahib but central to Khalsa practice.' },
      { title: 'The Janamsakhis', desc: 'The traditional biographies of Guru Nanak, recording his life, travels, and teachings. The earliest extant Janamsakhis date from the late 16th and 17th centuries.' },
      { title: 'Bhai Gurdas\'s Vaars', desc: 'The compositions of Bhai Gurdas (1551–1636), the scribe of the Adi Granth and a leading early Sikh theologian. His 39 vaars (ballads) are read as the "key to the Guru Granth Sahib."' },
      { title: 'The Rehat Maryada', desc: 'The "Sikh Code of Conduct" — the official prescribed practice of Sikh life and worship, published in 1945 by the Shiromani Gurdwara Parbandhak Committee.' },
    ],
    pointsOfContact: `<p>Sikhism, despite emerging from a different historical and cultural matrix, shares significant theological and ethical territory with Christianity.</p>
    <p><strong>Strict monotheism.</strong> Sikhism's "Ik Onkar" (One God) is structurally similar to the Christian (and Jewish, and Islamic) confession of one God. Both traditions reject polytheism, both teach that God is one, eternal, creator of all that exists. The opening of the Mool Mantar — "Ik Onkar, Sat Nam, Karta Purakh" ("One God, True Name, Creator Being") — would be unobjectionable to Christian monotheism in its basic structure.</p>
    <p><strong>God as personal and accessible.</strong> Both traditions teach a personal God to whom human beings can pray, with whom they can have relationship, who hears, who responds in love. The Sikh emphasis on naam japna (remembrance of God's name) has parallels in the Christian Jesus Prayer tradition and the broader practice of continual prayer.</p>
    <p><strong>The dignity and equality of every person.</strong> Sikhism's foundational commitment to the equality of all human beings — irrespective of caste, sex, religion, race — converges with the Christian conviction that every person bears the image of God. Guru Nanak's challenge to caste and his elevation of women to spiritual equality were among the most radical social claims of his era; they parallel similar (if differently grounded) Christian convictions.</p>
    <p><strong>The integration of devotion and ethics.</strong> The three pillars of Sikh life — remembrance of God, honest work, sharing with others — articulate a vision of integrated spiritual and ethical life that is structurally similar to Christian teaching: prayer, vocational integrity, generosity. Both traditions refuse the separation of "spiritual" and "worldly" categories.</p>
    <p><strong>Religion as service.</strong> The langar tradition — the free community meal served in every gurdwara, with millions of meals served weekly worldwide — embodies a vision of religion as practical service to humanity that Christian traditions of hospitality and care for the poor recognize as their own.</p>
    <p><strong>Martyrdom and witness.</strong> Sikhism has a substantial martyrdom tradition — particularly the martyrdom of Guru Arjan (1606), Guru Tegh Bahadur (1675), and the four sahibzade (the sons of Guru Gobind Singh). Tegh Bahadur's martyrdom was specifically for the religious freedom of Kashmiri Hindus — dying not for his own faith but for others' freedom to practice theirs. This witness to religious freedom and the courage of faith has clear Christian resonances.</p>
    <p><strong>The defense of the oppressed.</strong> The kirpan — the ceremonial sword worn by initiated Sikhs — symbolizes the duty to defend the weak and oppose injustice. Sikh tradition has a substantial just-war tradition, with limits on warfare and a commitment to fight only as a last resort. The Christian just-war tradition, while differently developed, shares similar concerns.</p>`,
    pointsOfDivergence: `<p>The divergences are real and concentrated on the person of Christ, the doctrine of God, the nature of salvation, and several distinctive Indian/Christian metaphysical assumptions.</p>
    <p><strong>The Trinity and the Incarnation.</strong> Sikhism, like Islam and Judaism, rejects the Christian doctrine of the Trinity as inconsistent with strict monotheism. God in Sikh theology is one — without partners, without offspring, without incarnation. The Christian claim that God became permanently human in Christ is incompatible with the Sikh understanding of God as Akal Purakh — the Timeless Being beyond all forms. Sikhism honors Jesus as one among many holy teachers, but does not affirm his unique deity or his role as savior.</p>
    <p><strong>Reincarnation and one life.</strong> Sikhism teaches reincarnation — the soul migrates through many lives until liberation is achieved through grace and devotion. Christianity teaches one earthly life followed by judgment and resurrection. The Indian framework of karma, samsara, and moksha that Sikhism inherits from its broader Dharmic matrix is foreign to Christian eschatology.</p>
    <p><strong>The Gurus and the saints.</strong> Sikhism's distinctive doctrine — that the ten human Gurus and the eternal Guru (the Guru Granth Sahib) are the channel of God's saving message — has no direct Christian parallel. Christianity affirms the unique authority of Christ and (in Catholic, Orthodox, and Anglican traditions) the apostolic succession through bishops and the canonical Scriptures. The Sikh doctrine of a specific lineage of Gurus is distinctive.</p>
    <p><strong>Salvation.</strong> Sikh soteriology is centered on union with God through naam japna (remembrance), grace, and ethical living across one or many lifetimes. Christian soteriology is centered on Christ's atoning death and resurrection, with salvation as God's gift received by faith. The Sikh tradition does not have a doctrine of the atonement in the Christian sense — there is no need for one because there is no Christian doctrine of original sin or substitutionary atonement to which Sikh theology must respond.</p>
    <p><strong>The body and physical practice.</strong> Sikhism's distinctive bodily disciplines — the Five Ks, particularly the uncut hair (kesh) — are unique to Sikh practice and have no Christian parallel. The body, in Sikh tradition, bears the marks of devotion in ways that most Christian traditions do not require.</p>
    <p><strong>Religious inclusivism.</strong> Sikhism characteristically takes an inclusivist view of other religions — many paths can lead to God; Guru Nanak's declaration that "There is no Hindu, no Muslim" is read as affirming the underlying unity beneath diverse religious expressions. Christianity has traditionally claimed Christ as the way, the truth, and the life (John 14:6); the contemporary Christian theological discussion of religious pluralism is one of the most contested questions in modern theology.</p>`,
    discussionQuestions: [
      {
        id: 'q1',
        title: 'One God, no incarnation',
        body: `<p>Sikhism affirms one God as strongly as any monotheistic tradition — Akal Purakh, the Timeless Being, beyond all forms, beyond all incarnations. Christianity affirms one God who has become permanently human in Christ. Sikhism honors Jesus as a great teacher and saint but denies his unique deity; Christianity holds that Christ's deity is not optional to the gospel.</p>
        <p><strong>Can the Christian doctrine of the Incarnation be reconciled with the strict monotheism that Sikhism, Judaism, and Islam all share — or does the Incarnation finally name a different conception of God than these other monotheisms allow?</strong></p>`,
      },
      {
        id: 'q2',
        title: 'The equality of all',
        body: `<p>Sikhism's foundational commitment to the equality of all human beings — across caste, sex, race, religion — was articulated in late 15th-century Punjab with extraordinary radicality. Guru Nanak's declaration "There is no Hindu, no Muslim" and the practice of langar (where all eat together at the same level regardless of background) embodied this commitment. Christianity has historically affirmed the equal dignity of every person in Christ but has often failed to embody it (the history of caste-like distinctions, racial segregation, gender hierarchies).</p>
        <p><strong>Has Sikhism done a better job than historic Christianity of living out the equal dignity of every human being? And what does it mean theologically that Sikh practice — particularly the langar — has so visibly embodied a principle that Christianity has often only proclaimed?</strong></p>`,
      },
      {
        id: 'q3',
        title: 'Many paths or one way',
        body: `<p>Sikhism characteristically holds that many religious paths can lead to God; God is named differently in different traditions but is finally one. Guru Granth Sahib includes writings from Hindu bhakti saints and Muslim Sufi mystics alongside the Sikh Gurus — institutionalizing this religious inclusivism in the very structure of Sikh scripture. Christianity has traditionally claimed that Christ is "the way, the truth, and the life" (John 14:6) and that "there is no other name under heaven... by which we must be saved" (Acts 4:12).</p>
        <p><strong>Is the Sikh inclusivist position closer to the truth than traditional Christian exclusivism — that God receives sincere devotion under whatever name? Or does the Christian gospel require an exclusivity that the Sikh tradition refuses?</strong></p>`,
      },
      {
        id: 'q4',
        title: 'Reincarnation vs. resurrection',
        body: `<p>Sikhism teaches that the soul migrates through countless lives until liberation through union with God. Christianity teaches one earthly life followed by judgment and resurrection. The reincarnation framework gives Sikh ethics a long arc — actions across many lifetimes are accumulating consequences. The Christian one-life framework gives this single life an irreplaceable weight.</p>
        <p><strong>Does the seriousness of this single life depend on its uniqueness, as Christianity teaches — or can the moral weight of action survive the recognition that we may live many lives, as Sikhism teaches?</strong></p>`,
      },
      {
        id: 'q5',
        title: 'The body, the hair, the sword',
        body: `<p>The Five Ks of the Khalsa — uncut hair, the steel bracelet, the comb, the cotton undergarments, the ceremonial sword — mark initiated Sikhs visibly in every culture they enter. The body bears the marks of devotion in a way most Christian traditions do not require (with the partial exceptions of clerical and monastic dress). The kirpan symbolizes both the duty of self-defense and the duty to defend others.</p>
        <p><strong>Does the Sikh integration of body, identity, and faith offer something the Christian tradition has lost — or does the freedom of Christian believers from required external markers reflect a different (and better) theology of the body and grace?</strong></p>`,
      },
    ],
    historicalRelation: `<p>The Sikh-Christian encounter is comparatively recent, dating substantially from the British colonial period in India (18th–20th centuries).</p>
    <p><strong>The founding context.</strong> Guru Nanak (1469–1539) developed Sikhism in the religious matrix of late medieval Punjab, where Hindu bhakti traditions and Muslim Sufi mysticism encountered each other intensively. Nanak's teaching can be read in part as a response to and integration of these two traditions — a unifying monotheism that transcended Hindu-Muslim sectarian division. Christianity was not a significant interlocutor in early Sikh theological development; the first European Christian contact with Sikhism dates from after Guru Nanak's lifetime.</p>
    <p><strong>The Mughal period.</strong> The major theological and political opposition Sikhism faced through its formative period (1469–1708) was from Mughal Islam, not Christianity. The martyrdoms of Guru Arjan (1606, under Emperor Jahangir) and Guru Tegh Bahadur (1675, under Emperor Aurangzeb) shaped Sikh identity as a religion willing to die for religious freedom — for itself and others.</p>
    <p><strong>The British colonial era.</strong> Christian-Sikh encounter began substantially in the 18th and 19th centuries through British colonial presence in Punjab. The British annexation of Punjab in 1849 brought Protestant Christian missionary work into the heartland of Sikhism. Major missionary activity included translation work (the Bible was translated into Punjabi and Gurmukhi) and educational institutions. Christian Punjabi communities developed, with some conversion from Sikh and Hindu backgrounds — though Sikhism was generally less penetrated by Christian conversion than Hindu society more broadly.</p>
    <p><strong>The Singh Sabha and Sikh reform.</strong> Late 19th-century Sikhism, partly in response to Christian and Hindu reformist pressure, developed its own reform and self-articulation movement — the Singh Sabha (founded 1873). The Sikh tradition's distinctive identity was sharpened in this period, particularly through the work of Bhai Vir Singh, Bhai Kahn Singh Nabha, and others.</p>
    <p><strong>Partition and diaspora.</strong> The Partition of India (August 1947) cut the Punjab in two, with West Punjab going to Pakistan and East Punjab to India. The Sikh community suffered catastrophically — approximately one million people died across the Punjab Partition, and Sikhs were essentially eliminated from West Punjab. The Sikh diaspora dates substantially from this period and has expanded enormously in subsequent decades. The Sikh diaspora today is largest in Canada (~770,000), the UK (~500,000), the United States (~700,000), and Australia (~210,000).</p>
    <p><strong>Operation Blue Star and the 1984 violence.</strong> The Indian Army's assault on the Golden Temple complex in Amritsar (June 1984) and the subsequent anti-Sikh violence after the assassination of Indira Gandhi (October–November 1984) shaped contemporary Sikh identity profoundly. Christian-Sikh relations were not directly involved, but the experience of state violence has shaped the Sikh diaspora's political engagement.</p>
    <p><strong>Contemporary dialogue.</strong> Christian-Sikh dialogue has developed primarily in the diaspora contexts where Sikh and Christian communities live in proximity. The Council on Christian-Sikh Relations (UK), various American interfaith organizations, and gurdwara-church partnerships in Canada and elsewhere have built sustained relationships. The post-9/11 increase in anti-Sikh violence (often based on the misidentification of turban-wearing Sikhs as Muslims) has shaped Christian-Sikh interfaith solidarity in the West.</p>
    <p><strong>Sikh communities in the West.</strong> Sikh gurdwaras in cities across North America, Europe, and Australia have become focal points for interfaith engagement. The langar tradition — open to anyone of any background — has been a particularly accessible point of contact. Sikh communities have been involved in disaster relief globally (during COVID, in flood response, in famine relief) with notable scale and discipline.</p>`,
    historicalNote: 'Guru Nanak was born at Talwandi (now Nankana Sahib, Pakistan) in 1469. He undertook extensive travels (the udasis) reportedly reaching Mecca, Baghdad, Sri Lanka, and Tibet, teaching everywhere. He established the first Sikh community at Kartarpur. The succession of ten Gurus shaped Sikhism through 239 years (1469–1708). Guru Arjan compiled the Adi Granth in 1604 at Amritsar. Guru Gobind Singh established the Khalsa at the Vaisakhi of April 13, 1699, and declared the Guru Granth Sahib the eternal Guru in 1708 before his death. The Sikh Empire under Maharaja Ranjit Singh (1801–1839) was the last great pre-colonial Indian state, conquered by the British in two Anglo-Sikh Wars (1845–46 and 1848–49). The Singh Sabha reform movement (founded 1873) sharpened modern Sikh identity. The Partition of India (1947) killed approximately one million people across the Punjab and created the modern Sikh diaspora. The Indian Army\'s Operation Blue Star (June 1984) and the anti-Sikh pogroms of November 1984 killed thousands. The Sikh diaspora today numbers approximately 5 million worldwide.',
    relatedReligions: ['rel-hinduism', 'rel-islam'],
  },

  // ╔══════════════════════════════════════════════════════════╗
  {
    id: 'rel-bahai',
    name: 'The Bahá\'í Faith',
    icon: '⭐',
    founded: '1844 (the Báb), 1863 (Bahá\'u\'lláh\'s public declaration)',
    adherents: '~8 million worldwide, present in over 220 countries and territories',
    category: 'Independent monotheism',
    founder: 'The Báb (Siyyid \'Alí Muhammad, 1819–1850) and Bahá\'u\'lláh (Mírzá Husayn-\'Alí Núrí, 1817–1892)',
    summary: `The Bahá'í Faith is one of the youngest of the world religions and the only major one to claim that all the great religions — Hinduism, Judaism, Zoroastrianism, Buddhism, Christianity, Islam — are progressive revelations from one God, each given for a particular time, culminating (for the present age) in the revelation given through Bahá'u'lláh. Founded in 19th-century Iran, the Bahá'í Faith emerged from the Bábí movement of Siyyid 'Alí Muhammad (the Báb, "the Gate"), a Persian merchant who in 1844 announced that he was the herald of a coming messianic figure. After the Báb's execution by Persian authorities in 1850, Mírzá Husayn-'Alí Núrí — Bahá'u'lláh ("the Glory of God") — declared himself in 1863 to be the one whom the Báb had foretold. Exiled to the Ottoman Empire and eventually imprisoned in Akká (modern Akko, Israel), Bahá'u'lláh wrote extensive scriptures from prison and died in 1892. The Bahá'í Faith is distinctive for its emphasis on the unity of religions, the unity of humanity, the equality of men and women, the elimination of all prejudice, universal compulsory education, the harmony of science and religion, and the establishment of a world federal commonwealth. The world center of the Faith is at Haifa, Israel (the resting place of the Báb and the seat of the Universal House of Justice). The Bahá'í Faith has been one of the most persecuted religious minorities in modern times — particularly in its land of origin, Iran, where Bahá'ís have faced systematic state persecution since the 1979 Islamic Revolution.`,
    coreBeliefs: `<p><strong>The unity of God.</strong> Bahá'í teaching affirms one God — eternal, transcendent, the Creator and Sustainer of all that exists. God is beyond human comprehension; humans can know God only through His Manifestations (the founders of the great religions) who reflect divine attributes within human history.</p>
    <p><strong>Progressive revelation.</strong> The most distinctive Bahá'í teaching is that God reveals himself progressively through history through a succession of Manifestations — Adam, Noah, Krishna, Abraham, Moses, Zoroaster, Buddha, Jesus, Muhammad, the Báb, and Bahá'u'lláh — each appropriate to the time and culture in which they appeared. Each revelation builds on previous ones and prepares for what is to come. Bahá'u'lláh is the Manifestation for the present age and the fulfillment of the messianic expectations of all prior religions.</p>
    <p><strong>The unity of religions.</strong> Bahá'ís hold that all the great religions are essentially one in their spiritual teaching, differing in their social teachings according to the needs of different historical periods. The differences between religions (about the nature of God, salvation, ethics, ritual) are products of human accretion, sectarianism, or the requirements of particular historical contexts — not of fundamental differences in divine revelation.</p>
    <p><strong>The unity of humanity.</strong> All human beings constitute one human family. Distinctions of race, nationality, class, sex, and religion are accidents of birth that should not divide the human family. The Bahá'í Faith calls for the elimination of all forms of prejudice as a precondition for human flourishing.</p>
    <p><strong>The equality of men and women.</strong> Bahá'í teaching affirms the equality of men and women as a foundational principle. Bahá'u'lláh's writings address this explicitly; the elevation of women to full equality with men is one of the cardinal principles of the present age.</p>
    <p><strong>Universal education.</strong> Every human being has the right and the obligation to be educated. Compulsory education for both girls and boys is a Bahá'í principle. Education is the means of spiritual and social progress.</p>
    <p><strong>The harmony of science and religion.</strong> True religion and true science cannot contradict each other; both seek truth, and apparent conflicts arise from misunderstanding of either. The Bahá'í Faith rejects both blind religion and atheistic materialism.</p>
    <p><strong>The need for a world commonwealth.</strong> Bahá'í teaching anticipates the eventual establishment of a federal world commonwealth — with a universal auxiliary language, common standards of currency and measure, and an international tribunal — as necessary for permanent peace and human flourishing. This is not yet realized, but is the eschatological direction toward which humanity is being drawn.</p>
    <p><strong>No clergy.</strong> The Bahá'í Faith has no professional clergy. Local Bahá'í communities elect Local Spiritual Assemblies (nine members) annually; National Spiritual Assemblies are elected from delegates. The Universal House of Justice — an elected body of nine men — serves as the supreme administrative and legislative authority of the Faith, sitting in Haifa.</p>`,
    keyTexts: [
      { title: 'The Kitáb-i-Aqdas (The Most Holy Book)', desc: 'Bahá\'u\'lláh\'s book of laws, composed c. 1873 in Arabic. The foundational legal and devotional text of the Bahá\'í Faith.' },
      { title: 'The Kitáb-i-Íqán (The Book of Certitude)', desc: 'Bahá\'u\'lláh\'s major theological work, composed in 1862 in Persian. Explains the principles of progressive revelation, the unity of religions, and the interpretation of religious scripture.' },
      { title: 'The Seven Valleys and The Four Valleys', desc: 'Bahá\'u\'lláh\'s mystical writings on the soul\'s journey toward God, drawing on Sufi spiritual traditions.' },
      { title: 'The Hidden Words', desc: 'A collection of short ethical and spiritual aphorisms by Bahá\'u\'lláh, composed in 1857–58 during his Baghdad period. The basic devotional text for individual Bahá\'í spiritual practice.' },
      { title: 'The Writings of Abdu\'l-Bahá', desc: 'The extensive writings of Bahá\'u\'lláh\'s son and authorized interpreter, Abbas Effendi (1844–1921), known as the Center of the Covenant. Includes Some Answered Questions and The Promulgation of Universal Peace.' },
      { title: 'The Bayán', desc: 'The principal work of the Báb, written in his Persian and Arabic forms. The major scripture of the Bábí dispensation that preceded and prepared for Bahá\'u\'lláh.' },
    ],
    pointsOfContact: `<p>The Bahá'í Faith is uniquely positioned among world religions in its relationship to Christianity. It affirms Christ as a Manifestation of God, accepts the New Testament as inspired scripture, honours Christian ethics, and includes Christianity within its progressive-revelation framework.</p>
    <p><strong>Christ as Manifestation of God.</strong> The Bahá'í Faith holds Jesus Christ to be a Manifestation of God — one of the great Manifestations whose teaching is divinely revealed. Bahá'í writings honor Christ extensively: his virgin birth, his teaching, his miracles, and his role as the Word of God are affirmed.</p>
    <p><strong>The unity of God.</strong> The Bahá'í Faith and Christianity share strict monotheism. Both teach that there is one God, eternal, the Creator, the Source of all that exists.</p>
    <p><strong>The dignity of every human being.</strong> Both traditions teach that every human being has intrinsic dignity and worth. Bahá'í teaching on the elimination of prejudice and the unity of humanity converges significantly with Christian teaching on the universal love commandment.</p>
    <p><strong>The value of community and worship.</strong> Bahá'í community life — the regular Nineteen Day Feast, devotional meetings, study circles — embodies a vision of religious community that has structural parallels with Christian parish life.</p>
    <p><strong>The hope of universal peace.</strong> The Bahá'í eschatological vision of a world commonwealth, of peace among nations, of an end to violence and prejudice, parallels the Christian hope of the kingdom of God — God's just and peaceful rule embracing all the nations.</p>
    <p><strong>The harmony of faith and reason.</strong> Bahá'í teaching that science and religion are not opposed converges with major Christian intellectual traditions (Catholic and Anglican especially) that have affirmed the same.</p>
    <p><strong>Persecution and witness.</strong> Bahá'ís have been one of the most persecuted religious minorities in modern times — particularly in Iran since the 1979 Revolution. Christian communities in similar circumstances (especially Christian minorities in Muslim-majority countries) have found common cause with Bahá'í communities in advocating for religious freedom.</p>`,
    pointsOfDivergence: `<p>The fundamental divergence is the claim of Bahá'u'lláh.</p>
    <p><strong>The status of Bahá'u'lláh.</strong> The Bahá'í Faith holds Bahá'u'lláh to be the Manifestation of God for the present age — the fulfillment of the messianic expectations of all prior religions, including the second coming of Christ. Christianity holds that Christ's coming was unique and final — that no further Manifestation is needed or possible, that the Holy Spirit was given to the Church at Pentecost to lead it into all truth, and that the canonical New Testament closed public revelation in its apostolic form.</p>
    <p><strong>Progressive revelation vs. final revelation.</strong> The Bahá'í doctrine of progressive revelation — that each great religion is given for its time and is then completed and superseded by the next Manifestation — is incompatible with the Christian conviction that Christ is the final, definitive revelation (Hebrews 1:1–2). The trajectory of revelation in Christianity terminates in Christ; in Bahá'í teaching, it continues through Bahá'u'lláh and into a future when further Manifestations may come.</p>
    <p><strong>The deity of Christ.</strong> The Bahá'í Faith honors Christ as a Manifestation of God but does not affirm his deity in the Nicene sense — Christ is the most perfect mirror of divine attributes available to humanity in his age, but not God incarnate in the sense of being homoousios with the Father. The Christian doctrine of the Incarnation is reframed within the Bahá'í Manifestation theology.</p>
    <p><strong>The atonement.</strong> The Bahá'í Faith does not affirm a substitutionary doctrine of the atonement. Christ's death is meaningful as the supreme example of self-sacrificial love and as the seal of his teaching, but not as a propitiation for sin in the Pauline-Augustinian sense. The Bahá'í framework treats salvation as a process of spiritual development through obedience to the current Manifestation rather than as a definitive event in Christ's saving work.</p>
    <p><strong>Original sin.</strong> The Bahá'í Faith does not hold a doctrine of original sin in the Augustinian form. Human beings are not fundamentally fallen and incapable; they are capable of spiritual progress through education, ethical effort, and devotion. The Christian doctrine of grace as God's prior gift to a humanity that cannot save itself has no direct Bahá'í parallel.</p>
    <p><strong>The Trinity and the Holy Spirit.</strong> The Bahá'í Faith, like the other strict monotheisms (Islam, Judaism, Sikhism), rejects the doctrine of the Trinity as inconsistent with the unity of God. The Holy Spirit in Bahá'í teaching is God's grace and influence in the world, not a person of the Godhead.</p>
    <p><strong>The Church and the Bahá'í community.</strong> Christianity teaches the Church as the Body of Christ, the household of God, the Bride of Christ — a divinely-instituted community with sacramental life and apostolic succession. The Bahá'í Faith has no sacraments, no professional clergy, no doctrine of apostolic succession, and a primarily administrative-democratic ecclesiology.</p>`,
    discussionQuestions: [
      {
        id: 'q1',
        title: 'Progressive revelation or final revelation',
        body: `<p>The Bahá'í Faith teaches that God reveals himself progressively through a succession of Manifestations — Abraham, Moses, Jesus, Muhammad, the Báb, Bahá'u'lláh — each for their own age. Christianity teaches that Christ's revelation is final, complete in itself, and not subject to supersession (Hebrews 1:1–2: "in these last days he has spoken to us by his Son").</p>
        <p><strong>Is revelation a progressive series of teachers each appropriate to their time, or is there one final and definitive revelation that completes what came before? What kind of evidence could distinguish between these two pictures?</strong></p>`,
      },
      {
        id: 'q2',
        title: 'The unity of religions',
        body: `<p>Bahá'í teaching holds that all the great religions are essentially one in their spiritual core, differing only in their social teachings according to the needs of different times. Christianity has traditionally held that Christ's revelation is unique and that other religions, however containing elements of truth and goodness, do not lead independently to salvation (John 14:6; Acts 4:12).</p>
        <p><strong>Are the religions essentially one beneath their apparent differences, or are their differences so fundamental that they teach genuinely different things about God, salvation, and the human condition? Is the Bahá'í position generous wisdom, or a denial of what each religion actually claims about itself?</strong></p>`,
      },
      {
        id: 'q3',
        title: 'The status of Christ',
        body: `<p>The Bahá'í Faith honors Christ as a Manifestation of God — a great teacher whose divine character was the perfect mirror of God for his age. Christianity confesses Christ as God incarnate, of the same divine essence as the Father, uniquely Lord and Savior. The Bahá'í honoring of Christ is sincere and substantial; the Bahá'í denial of Christ's unique deity is also substantial.</p>
        <p><strong>Is the Bahá'í honoring of Christ as one Manifestation among many compatible with what the New Testament actually says about Christ — or does it implicitly demote Christ in a way the apostolic witness will not allow?</strong></p>`,
      },
      {
        id: 'q4',
        title: 'The world commonwealth',
        body: `<p>The Bahá'í Faith anticipates the eventual establishment of a federal world commonwealth — universal language, common currency, international tribunal, the end of war and prejudice — as essential to human flourishing in the present age. Christianity awaits the coming of the kingdom of God — God's just and peaceful rule — but has historically been ambivalent about specific political programs for its realization.</p>
        <p><strong>Is the Bahá'í political vision of a federal world order an authentic expression of religious hope for justice and peace, or does it conflate the kingdom of God with a particular political program? Can religion specify what political institutions will accompany the world's redemption?</strong></p>`,
      },
      {
        id: 'q5',
        title: 'Persecution and the witness of suffering',
        body: `<p>The Bahá'í community has been one of the most persecuted religious minorities in modern times — particularly in Iran since the 1979 Revolution, where systematic state persecution has resulted in executions, imprisonment, exclusion from higher education, denial of property rights, and constant pressure to recant. The Bahá'í response has emphasized non-retaliation, continued community life, and refusal to abandon faith. Early Christian witness in the Roman Empire bore similar characteristics.</p>
        <p><strong>Does the contemporary Bahá'í witness under persecution — its non-violence, its refusal to recant, its continued faithfulness — bear marks of authentic religious witness? And what should Christians learn from contemporary Bahá'í suffering that resembles their own tradition's foundational experience?</strong></p>`,
      },
    ],
    historicalRelation: `<p>The Bahá'í-Christian encounter is relatively young (the Bahá'í Faith itself is only about 180 years old) but has been intensive from early in the Bahá'í Faith's development.</p>
    <p><strong>The founding context.</strong> The Bahá'í Faith emerged from the Bábí movement in 19th-century Iran, in the context of Shi'a Islam. Bahá'u'lláh's exile took him to Baghdad (1853–63, then Ottoman Iraq), Constantinople and Adrianople (1863–68), and finally to the Ottoman penal colony at Akká (Acre) in Ottoman Palestine, where he died in 1892. The Bahá'í world center has remained in this area — the Shrine of Bahá'u'lláh at Bahjí (near Akká) and the Shrine of the Báb on Mount Carmel in Haifa are the holiest sites of the Faith.</p>
    <p><strong>'Abdu'l-Bahá and the West.</strong> Bahá'u'lláh's son and authorized interpreter, 'Abdu'l-Bahá (1844–1921), led the Bahá'í community after his father's death and was the primary figure in the Faith's expansion to the West. After his release from Ottoman imprisonment (he had been a prisoner from age 9 until 1908), 'Abdu'l-Bahá traveled extensively in Europe (1911) and North America (April–December 1912). His talks to Christian audiences — at the Church of the Ascension in New York (April 14, 1912), at Plymouth Congregational Church in Chicago, at Stanford University, and many other venues — established the early American Bahá'í community.</p>
    <p><strong>The Bahá'í community in the West.</strong> The American Bahá'í community grew significantly in the early 20th century, particularly after 'Abdu'l-Bahá's 1912 visit. The Bahá'í House of Worship in Wilmette, Illinois (begun 1920, completed 1953) was the first major Bahá'í House of Worship outside the Middle East. The European, Australian, and other Western communities developed in parallel.</p>
    <p><strong>The Universal House of Justice.</strong> Established in 1963 in Haifa, the Universal House of Justice is the supreme administrative and legislative authority of the Bahá'í Faith. The election of the nine male members of the House every five years marks the most significant institutional event of the Bahá'í Faith.</p>
    <p><strong>Persecution in Iran.</strong> Since the Islamic Revolution of 1979, the Bahá'í community in Iran (the largest religious minority in Iran, comprising approximately 300,000 people) has faced systematic state persecution. Bahá'ís have been excluded from universities, denied government employment, prevented from holding public worship, had cemeteries desecrated, and faced periodic imprisonments and executions. The international human rights community — including major Christian denominations — has been a significant advocate for the Iranian Bahá'í community. Major Christian voices including the World Council of Churches, the Vatican, and Anglican leaders have spoken out in support of Bahá'í religious freedom in Iran and elsewhere.</p>
    <p><strong>Christian theological engagement.</strong> Substantial Christian engagement with Bahá'í theology has been limited but has produced significant works. <strong>William McElwee Miller's <em>The Baha'i Faith: Its History and Teachings</em></strong> (1974) gave the major mid-20th century evangelical Protestant assessment, generally critical. <strong>Francis Beckwith</strong>, <strong>Robert Stockman</strong>, and others have engaged Bahá'í theology in more recent decades. Bahá'í engagement with Christian theology has been characteristically irenic and inclusive, with major Bahá'í authors (Stockman, Moojan Momen, William Hatcher) producing substantial works on the relationship between the two faiths.</p>
    <p><strong>The contemporary encounter.</strong> Bahá'í communities exist in essentially every country and territory; estimated 8 million adherents make the Faith small but globally dispersed. Bahá'í-Christian dialogue has been substantial particularly in interfaith and religious-freedom contexts. The Bahá'í International Community has been active in United Nations advocacy on religious freedom, the rights of women, and other matters that often align with Christian advocacy.</p>`,
    historicalNote: 'The Báb (Siyyid \'Alí Muhammad) was born in Shiraz, Iran, in 1819. His public declaration as the Báb ("the Gate") on May 23, 1844, is celebrated as the founding of the Bábí dispensation. He was executed by firing squad in Tabriz on July 9, 1850. Approximately 20,000 Bábís were killed in the Bábí persecutions of the 1850s. Bahá\'u\'lláh (Mírzá Husayn-\'Alí Núrí) was born in Tehran in 1817. After his initial declaration in the Garden of Ridván in Baghdad (April 21, 1863), he was successively exiled — to Constantinople, to Adrianople (Edirne), and finally to the Ottoman prison colony at Akká, where he arrived in 1868 and remained until his death on May 29, 1892. \'Abdu\'l-Bahá led the Faith from 1892 until his death in 1921; he is buried in the Shrine of the Báb on Mount Carmel. Shoghi Effendi (1897–1957) led the Faith as Guardian from 1921 to 1957. The Universal House of Justice was established in 1963. The Bahá\'í Faith\'s formal recognition by the United Nations as a non-governmental organization with consultative status reflects its diplomatic position in international religious dialogue. The current Bahá\'í population, while smaller than the major world religions, is one of the most geographically dispersed.',
    relatedReligions: ['rel-islam', 'rel-judaism'],
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
let allComments = [];          // every comment on the current topic
let userVotes = new Set();
let activeCategory = 'All';
let searchQuery = '';
let openForums = new Set();    // which denom forums are open (by denom name)
let activeReplyTo = null;      // id of comment being replied-to (anywhere)
let bottomCtype = 'general';   // selected comment-type for the bottom Open Discussion form

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
  const logged = document.getElementById('logged-in-form');
  const out = document.getElementById('logged-out-prompt');
  if (!logged || !out) return;
  if (currentUser && currentUserProfile) {
    logged.style.display = 'block';
    out.style.display = 'none';
  } else {
    logged.style.display = 'none';
    out.style.display = 'block';
    out.innerHTML = `Sign in to contribute to the Open discussion. <button class="btn btn-primary btn-sm" onclick="openModal('signup')">Join the Synod</button>`;
  }
}

// ═══════════════════════════════════════════════════════════════
//   CATEGORY FILTERS / SEARCH
// ═══════════════════════════════════════════════════════════════

function renderCategoryFilters() {
  const el = document.getElementById('category-filters');
  if (!el) return;
  const cats = ['All', ...CATEGORIES];
  el.innerHTML = cats.map(c =>
    `<button class="cat-pill ${activeCategory === c ? 'active' : ''}" onclick="setCategory('${escAttr(c)}')">${escHtml(c)}</button>`
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
  input.addEventListener('input', () => {
    searchQuery = input.value.trim().toLowerCase();
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
  if (searchQuery) {
    filtered = filtered.filter(t =>
      t.name.toLowerCase().includes(searchQuery) ||
      t.desc.toLowerCase().includes(searchQuery) ||
      t.category.toLowerCase().includes(searchQuery)
    );
  }
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-state-icon">🔍</div>No debates match your search.</div>`;
    return;
  }
  grid.innerHTML = filtered.map(t => `
    <div class="topic-card" onclick="showTopic('${t.id}')">
      <div class="topic-card-top">
        <div class="topic-icon">${t.icon}</div>
        <div class="cat-badge">${escHtml(t.category)}</div>
      </div>
      <div class="topic-name">${escHtml(t.name)}</div>
      <div class="topic-desc-preview">${escHtml(t.desc)}</div>
      <div class="topic-card-foot">
        <div class="controversy-bar-mini"><div class="controversy-fill-mini" style="width:${t.controversy}%"></div></div>
        <div class="topic-card-meta">
          <span>${t.denominations.length} traditions</span>
          <span>Controversy ${t.controversy}%</span>
        </div>
      </div>
    </div>`).join('');
}

function showHome() {
  currentTopic = null;
  currentMovement = null;
  document.getElementById('home-view').style.display = 'block';
  document.getElementById('detail-view').style.display = 'none';
  const mv = document.getElementById('movement-view');
  if (mv) mv.style.display = 'none';
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
  openForums = new Set();      // start with forums collapsed
  activeReplyTo = null;
  bottomCtype = 'general';

  document.getElementById('home-view').style.display = 'none';
  document.getElementById('detail-view').style.display = 'block';
  document.getElementById('detail-title').textContent = topic.name;
  document.getElementById('detail-desc').textContent = topic.desc;
  document.getElementById('controversy-fill').style.width = topic.controversy + '%';
  document.getElementById('controversy-text').textContent = topic.controversy + '%';

  const catEl = document.getElementById('detail-category');
  if (catEl) catEl.textContent = topic.category;

  // Definition
  const defBlock = document.getElementById('definition-block');
  const defBody = document.getElementById('definition-body');
  if (defBlock && defBody) {
    if (topic.definition) { defBlock.style.display = 'block'; defBody.innerHTML = topic.definition; }
    else defBlock.style.display = 'none';
  }

  renderSubtopics(topic);

  // Historical note
  const histEl = document.getElementById('historical-note');
  if (histEl) {
    if (topic.historicalNote) {
      histEl.style.display = 'block';
      histEl.innerHTML = `<span class="hist-label">📜 Historical context</span> ${topic.historicalNote}`;
    } else histEl.style.display = 'none';
  }

  // Key verses
  const versesEl = document.getElementById('key-verses');
  const versesBlock = document.getElementById('key-verses-block');
  if (versesEl && topic.keyVerses && topic.keyVerses.length) {
    versesBlock.style.display = 'block';
    versesEl.innerHTML = topic.keyVerses.map(v => `<span class="verse-pill">${escHtml(v)}</span>`).join('');
    enhanceVersePills();
  } else if (versesBlock) versesBlock.style.display = 'none';

  // Reset the bottom comment form to general
  setCommentType('general');

  // Render denoms (each with empty forum, comment counts populate after load)
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
  } else if (relatedSection) relatedSection.style.display = 'none';

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

// ═══════════════════════════════════════════════════════════════
//   DENOMINATIONS AS FORUMS
// ═══════════════════════════════════════════════════════════════

function renderDenominations(topic) {
  const grid = document.getElementById('denom-grid');
  if (!grid) return;
  grid.innerHTML = topic.denominations.map(d => {
    const isOpen = openForums.has(d.name);
    const count = countCommentsForDenom(d.name);
    return `
    <div class="denom-card stance-${d.stance} ${isOpen ? 'forum-open' : ''}" data-denom="${escAttr(d.name)}">
      <div class="denom-card-content">
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
      </div>
      <button class="denom-forum-toggle" onclick="toggleDenomForum('${escAttr(d.name)}')">
        <span class="denom-forum-toggle-left">
          <span class="denom-forum-icon">💬</span>
          <span>Discuss this position</span>
          <span class="denom-activity-count ${count === 0 ? 'zero' : ''}">${count}</span>
        </span>
        <span class="denom-forum-chevron">▾</span>
      </button>
      <div class="denom-forum-body" id="forum-body-${escAttr(d.name)}">
        ${renderForumForDenom(d.name)}
      </div>
    </div>`;
  }).join('');
  enhanceVersePills();
}

function countCommentsForDenom(denomName) {
  // count direct + replies that target this denom
  return allComments.filter(c =>
    c.target_denomination === denomName ||
    (c.parent_comment_id && getRootComment(c)?.target_denomination === denomName)
  ).length;
}

function getRootComment(c) {
  let cur = c;
  let safety = 10;
  while (cur && cur.parent_comment_id && safety-- > 0) {
    const parent = allComments.find(x => x.id === cur.parent_comment_id);
    if (!parent) return cur;
    cur = parent;
  }
  return cur;
}

function toggleDenomForum(denomName) {
  if (openForums.has(denomName)) {
    openForums.delete(denomName);
  } else {
    openForums.add(denomName);
  }
  // Re-render only this card's open state and forum body — but simplest correct path is full re-render
  if (currentTopic) renderDenominations(currentTopic);
}

function renderForumForDenom(denomName) {
  // Top-level comments targeting this denom (not replies)
  const topLevel = allComments.filter(c =>
    c.target_denomination === denomName && !c.parent_comment_id
  ).sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));

  const compose = renderForumCompose(denomName);
  const list = topLevel.length === 0
    ? `<div class="denom-forum-empty">No one has engaged this tradition's position yet. Be the first.</div>`
    : `<div class="forum-comment-list">${topLevel.map(c => renderThreadedComment(c, 0)).join('')}</div>`;
  return compose + list;
}

function renderForumCompose(denomName) {
  if (!currentUser || !currentUserProfile) {
    return `<div class="forum-locked">Sign in to respond to this tradition. <button class="btn btn-primary btn-sm" onclick="openModal('signup')">Join the Synod</button></div>`;
  }
  const fid = `forum-compose-${cssId(denomName)}`;
  return `
    <div class="forum-compose">
      <div class="ctype-tabs">
        <button class="ctype-tab active" data-ctype="responding">⚔️ Respond to this position</button>
        <button class="ctype-tab" data-ctype="edit_suggestion" onclick="toggleForumCtype('${escAttr(denomName)}', 'edit_suggestion')">✏️ Suggest an edit</button>
      </div>
      <div class="ctype-helper" id="${fid}-helper">Push back on, defend, or refine this tradition's position.</div>
      <textarea id="${fid}-text" maxlength="600" placeholder="Make your case. Cite Scripture. Be charitable. (Max 600 characters.)"></textarea>
      <div class="forum-compose-bottom">
        <span class="char-count" id="${fid}-count">0 / 600</span>
        <button class="btn btn-primary btn-sm" onclick="submitForumComment('${escAttr(denomName)}')">Post</button>
      </div>
      <div id="${fid}-msg"></div>
    </div>`;
}

function toggleForumCtype(denomName, ctype) {
  const fid = `forum-compose-${cssId(denomName)}`;
  const helper = document.getElementById(`${fid}-helper`);
  if (!helper) return;
  // Find tabs in this forum
  const card = document.querySelector(`.denom-card[data-denom="${cssAttr(denomName)}"]`);
  if (!card) return;
  card.querySelectorAll('.forum-compose .ctype-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.ctype === ctype);
  });
  card.querySelector('.forum-compose').dataset.ctype = ctype;
  helper.textContent = ctype === 'edit_suggestion'
    ? 'Propose a correction or refinement to how this tradition\'s position is summarised.'
    : 'Push back on, defend, or refine this tradition\'s position.';
}

async function submitForumComment(denomName) {
  if (!currentUser || !currentUserProfile) return;
  const fid = `forum-compose-${cssId(denomName)}`;
  const ta = document.getElementById(`${fid}-text`);
  const msg = document.getElementById(`${fid}-msg`);
  if (!ta) return;
  const body = ta.value.trim();
  if (!body) { showInlineMsg(msg, 'error', 'Please write something first.'); return; }
  if (body.length > 600) { showInlineMsg(msg, 'error', 'Keep it under 600 characters.'); return; }
  // ctype: read from active tab in this card
  const card = document.querySelector(`.denom-card[data-denom="${cssAttr(denomName)}"]`);
  const ctype = card?.querySelector('.forum-compose .ctype-tab.active')?.dataset.ctype || 'responding';
  try {
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: currentTopic.id,
      user_id: currentUser.id,
      display_name: currentUserProfile.display_name,
      denomination: currentUserProfile.denomination || null,
      body,
      upvotes: 0,
      comment_type: ctype,
      target_denomination: denomName,
      parent_comment_id: null,
    });
    if (error) throw error;
    ta.value = '';
    showInlineMsg(msg, 'success', 'Posted.');
    await loadComments(currentTopic.id);
  } catch (err) {
    showInlineMsg(msg, 'error', err.message || 'Failed to post.');
  }
}

// ═══════════════════════════════════════════════════════════════
//   THREADED COMMENT RENDERING
// ═══════════════════════════════════════════════════════════════

function _getAllDescendants(parentId) {
  const direct = allComments.filter(r => r.parent_comment_id === parentId)
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  const out = [];
  for (const r of direct) {
    out.push(r);
    out.push(..._getAllDescendants(r.id));
  }
  return out;
}

function renderThreadedComment(c, depth) {
  const directReplies = allComments.filter(r => r.parent_comment_id === c.id)
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  const initials = (c.display_name || 'A').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const voted = userVotes.has(c.id);
  const date = new Date(c.created_at).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
  const isOwn = currentUser && c.user_id === currentUser.id;
  const classes = depth === 0 ? 'comment-item' : 'comment-item comment-reply-item';
  const replyForm = (activeReplyTo === c.id) ? renderReplyForm(c.id) : '';

  // "In reply to X" marker for flattened deep replies
  let inReplyToMarker = '';
  if (depth >= 1 && c.parent_comment_id) {
    const parent = allComments.find(x => x.id === c.parent_comment_id);
    // Only show marker when the parent isn't the visual container above us
    // (i.e., only for depth 2+ that have been flattened)
    if (parent && depth >= 2) {
      inReplyToMarker = `<div class="in-reply-to">↳ in reply to <strong>${escHtml(parent.display_name || 'Anonymous')}</strong></div>`;
    }
  }

  // Reply nesting: depth 0 → render direct replies with depth=1 (nested visually).
  // Depth 1 → flatten ALL descendants as siblings at depth 1, no further nesting.
  let nestedHtml = '';
  if (directReplies.length) {
    if (depth === 0) {
      // First reply level: collect direct replies AND all their descendants, render all as siblings
      const flat = [];
      for (const r of directReplies) {
        flat.push(r);
        flat.push(..._getAllDescendants(r.id));
      }
      nestedHtml = `<div class="comment-replies-wrap">${flat.map((r, i) => renderThreadedComment(r, r.parent_comment_id === c.id ? 1 : 2)).join('')}</div>`;
    }
    // depth >= 1 → no further nesting; descendants are handled by the depth-0 ancestor
  }

  return `
    <div class="${classes}" data-comment-id="${c.id}">
      <div class="comment-avatar">${initials}</div>
      <div class="comment-body">
        ${inReplyToMarker}
        <div class="comment-meta">
          <span class="comment-author">${escHtml(c.display_name)}</span>
          ${c.denomination ? `<span class="comment-denom-tag">${escHtml(c.denomination)}</span>` : ''}
          ${renderCtypeBadge(c)}
          <span class="comment-date">${date}</span>
        </div>
        ${c.verse_reference ? `<div class="comment-target-line">📖 <strong>${escHtml(c.verse_reference)}</strong></div>` : ''}
        <div class="comment-text">${escHtml(c.body)}</div>
        <div class="comment-actions">
          <button class="upvote-btn ${voted ? 'voted' : ''}" onclick="toggleUpvote(${c.id})" id="upvote-${c.id}">
            ${voted ? '▲' : '△'} <span id="upvote-count-${c.id}">${c.upvotes || 0}</span>
          </button>
          ${currentUser ? `<button class="reply-btn" onclick="startReply(${c.id})">↳ Reply</button>` : ''}
          ${isOwn ? `<button class="delete-btn" onclick="deleteComment(${c.id})">Delete</button>` : ''}
        </div>
        ${replyForm}
      </div>
      ${nestedHtml}
    </div>`;
}

function renderCtypeBadge(c) {
  const t = c.comment_type;
  if (c.parent_comment_id) return `<span class="comment-type-badge ctb-reply">↳ Reply</span>`;
  if (!t || t === 'general') return `<span class="comment-type-badge ctb-general">💬 General</span>`;
  if (t === 'responding') return `<span class="comment-type-badge ctb-responding">⚔️ Response</span>`;
  if (t === 'edit_suggestion') return `<span class="comment-type-badge ctb-edit">✏️ Edit</span>`;
  if (t === 'verse_citation') return `<span class="comment-type-badge ctb-verse">📖 Verse</span>`;
  return '';
}

function renderReplyForm(parentId) {
  return `
    <div class="reply-form-wrap" id="reply-form-${parentId}">
      <textarea id="reply-text-${parentId}" maxlength="600" placeholder="Write your reply…"></textarea>
      <div class="form-bottom">
        <span class="char-count" id="reply-count-${parentId}">0 / 600</span>
        <div style="display:flex;gap:6px">
          <button class="btn btn-ghost btn-sm" onclick="cancelReply()">Cancel</button>
          <button class="btn btn-primary btn-sm" onclick="submitReply(${parentId})">Post reply</button>
        </div>
      </div>
      <div id="reply-msg-${parentId}"></div>
    </div>`;
}

function startReply(parentId) {
  if (!currentUser) { openModal('login'); return; }
  activeReplyTo = parentId;
  // Re-render the relevant section. Simplest: re-render denoms (if reply target is inside a forum) and the bottom list.
  if (currentTopic) renderDenominations(currentTopic);
  filterComments();
  // Focus the new textarea
  setTimeout(() => {
    const ta = document.getElementById(`reply-text-${parentId}`);
    if (ta) {
      ta.focus();
      ta.addEventListener('input', () => {
        const el = document.getElementById(`reply-count-${parentId}`);
        if (el) {
          const len = ta.value.length;
          el.textContent = `${len} / 600`;
          el.style.color = len > 500 ? 'var(--crimson)' : 'var(--ink-light)';
        }
      });
    }
  }, 30);
}

function cancelReply() {
  activeReplyTo = null;
  if (currentTopic) renderDenominations(currentTopic);
  filterComments();
}

async function submitReply(parentId) {
  if (!currentUser || !currentUserProfile) return;
  const ta = document.getElementById(`reply-text-${parentId}`);
  const msg = document.getElementById(`reply-msg-${parentId}`);
  if (!ta) return;
  const body = ta.value.trim();
  if (!body) { showInlineMsg(msg, 'error', 'Write something first.'); return; }
  if (body.length > 600) { showInlineMsg(msg, 'error', 'Keep it under 600 characters.'); return; }
  try {
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: currentTopic.id,
      user_id: currentUser.id,
      display_name: currentUserProfile.display_name,
      denomination: currentUserProfile.denomination || null,
      body,
      upvotes: 0,
      parent_comment_id: parentId,
    });
    if (error) throw error;
    activeReplyTo = null;
    await loadComments(currentTopic.id);
  } catch (err) {
    showInlineMsg(msg, 'error', err.message || 'Failed to post reply.');
  }
}

function stanceLabel(stance) {
  return { affirm: 'Affirms', deny: 'Denies', nuanced: 'Nuanced', varies: 'Varies' }[stance] || stance;
}

// ═══════════════════════════════════════════════════════════════
//   COMMENTS — LOAD & RENDER (Open Discussion at bottom)
// ═══════════════════════════════════════════════════════════════

async function loadComments(topicId) {
  const list = document.getElementById('comment-list');
  const countLabel = document.getElementById('comment-count-label');
  if (!list) return;

  if (!supabaseClient || typeof SUPABASE_CONFIGURED === 'undefined' || !SUPABASE_CONFIGURED) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">⚙️</div>Comments require Supabase configuration. Discussion will open once configured.</div>';
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

    // Re-render denoms so activity badges update
    if (currentTopic) renderDenominations(currentTopic);
    filterComments();
  } catch (err) {
    console.error(err);
    list.innerHTML = `<div class="error-msg">Failed to load comments: ${escHtml(err.message)}</div>`;
  }
}

// The bottom "Open discussion" section shows ONLY general comments and
// unattributed verse_citation comments (i.e. not targeting a denomination)
function filterComments() {
  const list = document.getElementById('comment-list');
  if (!list) return;
  const typeFilter = document.getElementById('ctype-filter')?.value || '';
  const sortEl = document.getElementById('comment-sort');
  const sort = sortEl ? sortEl.value : 'top';

  // Eligible for bottom section: top-level + (general or untargeted verse_citation)
  let bottom = allComments.filter(c =>
    !c.parent_comment_id &&
    !c.target_denomination &&
    (c.comment_type === 'general' || c.comment_type === 'verse_citation' || !c.comment_type)
  );
  if (typeFilter) bottom = bottom.filter(c => (c.comment_type || 'general') === typeFilter);
  if (sort === 'top') bottom.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
  else bottom.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  if (bottom.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🕊️</div>No open contributions yet on this debate.<br>To respond to a specific tradition, use that tradition's discussion above.</div>`;
  } else {
    list.innerHTML = bottom.map(c => renderThreadedComment(c, 0)).join('');
  }
}

// ═══════════════════════════════════════════════════════════════
//   COMMENT TYPE TABS (bottom Open Discussion form)
// ═══════════════════════════════════════════════════════════════

function setCommentType(t) {
  bottomCtype = t;
  document.querySelectorAll('#ctype-tabs .ctype-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.ctype === t);
  });
  const helper = document.getElementById('ctype-helper');
  const fields = document.getElementById('ctype-fields');
  const verseRow = document.getElementById('verse-ref-row');
  if (t === 'general') {
    if (helper) helper.textContent = 'Share a general observation about this debate.';
    if (fields) fields.style.display = 'none';
  } else if (t === 'verse_citation') {
    if (helper) helper.textContent = 'Cite a Bible passage you think bears on this debate.';
    if (fields) fields.style.display = 'block';
    if (verseRow) verseRow.style.display = 'flex';
  }
}

async function submitComment() {
  const body = document.getElementById('comment-text').value.trim();
  const btn = document.getElementById('submit-btn');
  if (!body) { showFormMsg('error', 'Please write something before posting.'); return; }
  if (body.length > 600) { showFormMsg('error', 'Keep it under 600 characters.'); return; }
  if (!currentUser || !currentUserProfile) { showFormMsg('error', 'Please sign in first.'); return; }
  const verseRef = document.getElementById('verse-ref-input')?.value.trim() || null;
  if (bottomCtype === 'verse_citation' && !verseRef) {
    showFormMsg('error', 'Please provide a Bible reference.'); return;
  }
  btn.disabled = true; btn.textContent = 'Posting…';
  try {
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: currentTopic.id,
      user_id: currentUser.id,
      display_name: currentUserProfile.display_name,
      denomination: currentUserProfile.denomination || null,
      body, upvotes: 0,
      comment_type: bottomCtype,
      verse_reference: bottomCtype === 'verse_citation' ? verseRef : null,
      target_denomination: null,
      parent_comment_id: null,
    });
    if (error) throw error;
    document.getElementById('comment-text').value = '';
    document.getElementById('char-count').textContent = '0 / 600';
    if (document.getElementById('verse-ref-input')) document.getElementById('verse-ref-input').value = '';
    showFormMsg('success', 'Posted!');
    await loadComments(currentTopic.id);
  } catch (err) {
    showFormMsg('error', err.message || 'Failed to post. Try again.');
  } finally {
    btn.disabled = false; btn.textContent = 'Post contribution';
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

function showInlineMsg(el, type, text) {
  if (!el) return;
  el.innerHTML = `<div class="${type}-msg">${escHtml(text)}</div>`;
  setTimeout(() => { el.innerHTML = ''; }, 4000);
}

async function toggleUpvote(commentId) {
  if (!currentUser) { openModal('login'); return; }
  if (!supabaseClient) return;
  const btn = document.getElementById(`upvote-${commentId}`);
  const countEl = document.getElementById(`upvote-count-${commentId}`);
  if (!btn || !countEl) return;
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

async function handleLogin() {
  if (!supabaseClient) return;
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const errEl = document.getElementById('modal-error');
  if (!email || !password) { errEl.textContent = 'Please enter your email and password.'; errEl.style.display = 'block'; return; }
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

// For attribute values being templated into onclick="..." — must escape single quotes safely
function escAttr(s) {
  if (s === null || s === undefined) return '';
  return String(s).replace(/&/g, '&amp;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
}

// For CSS-attribute-selector matching: convert a denom name to a quoted-safe form
function cssAttr(s) {
  if (s === null || s === undefined) return '';
  return String(s).replace(/&/g, '&amp;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
}

// For DOM ID suffixes: strip non-ID-safe chars
function cssId(s) {
  if (s === null || s === undefined) return '';
  return String(s).replace(/[^a-zA-Z0-9-]/g, '_');
}

function setupCharCount() {
  const ta = document.getElementById('comment-text');
  if (!ta) return;
  ta.addEventListener('input', () => {
    const len = ta.value.length;
    const el = document.getElementById('char-count');
    if (!el) return;
    el.textContent = `${len} / 600`;
    el.style.color = len > 500 ? 'var(--crimson)' : 'var(--ink-light)';
  });
}

// Close modal when clicking the backdrop
document.addEventListener('click', (e) => {
  const modal = document.getElementById('auth-modal');
  if (modal && e.target === modal) closeModal();
});

// ═══════════════════════════════════════════════════════════════
//   BIBLE VERSE LINKING + HOVER POPOVER
// ═══════════════════════════════════════════════════════════════

function verseToBGQuery(ref) {
  return encodeURIComponent(
    ref.replace(/[–—]/g, '-')
       .replace(/\s+/g, ' ')
       .trim()
  );
}

function verseToBibleGatewayURL(ref) {
  return `https://www.biblegateway.com/passage/?search=${verseToBGQuery(ref)}&version=ESV`;
}

function enhanceVersePills() {
  document.querySelectorAll('.verse-pill').forEach(pill => {
    if (pill.dataset.enhanced) return;
    pill.dataset.enhanced = '1';
    const ref = pill.textContent.trim();
    pill.dataset.verseRef = ref;
    pill.style.cursor = 'pointer';
    pill.setAttribute('title', `Click to open ${ref} on BibleGateway · hover for text`);
    pill.addEventListener('click', () => {
      window.open(verseToBibleGatewayURL(ref), '_blank', 'noopener');
    });
    pill.addEventListener('mouseenter', () => showVersePopover(pill, ref));
    pill.addEventListener('mouseleave', hideVersePopover);
  });
}

const verseTextCache = new Map();
let activePopover = null;

async function showVersePopover(anchorEl, ref) {
  hideVersePopover();
  const popover = document.createElement('div');
  popover.className = 'verse-popover';
  popover.innerHTML = `
    <div class="verse-popover-ref">${escHtml(ref)} <span style="opacity:.6;font-weight:400">· ESV</span></div>
    <div class="verse-popover-body" id="verse-popover-body">Loading…</div>
    <div class="verse-popover-foot">Click pill to open in BibleGateway →</div>
  `;
  document.body.appendChild(popover);
  activePopover = popover;
  const r = anchorEl.getBoundingClientRect();
  popover.style.left = Math.max(10, Math.min(window.innerWidth - 380, r.left)) + 'px';
  popover.style.top = (r.bottom + window.scrollY + 8) + 'px';

  let text = verseTextCache.get(ref);
  if (!text) {
    text = await fetchVerseText(ref);
    if (text) verseTextCache.set(ref, text);
  }
  const body = document.getElementById('verse-popover-body');
  if (body) {
    body.innerHTML = text
      ? text
      : `<em style="opacity:.7">Couldn't fetch verse text. Click the pill to read it on BibleGateway.</em>`;
  }
}

function hideVersePopover() {
  if (activePopover && activePopover.parentNode) activePopover.parentNode.removeChild(activePopover);
  activePopover = null;
}

async function fetchVerseText(ref) {
  try {
    const query = ref
      .replace(/[–—]/g, '-')
      .replace(/\s+/g, '+')
      .replace(/\u00A0/g, '+');
    const res = await fetch(`https://bible-api.com/${encodeURIComponent(query)}?translation=web`);
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || !data.text) return null;
    const clean = escHtml(data.text.trim()).replace(/\s+/g, ' ');
    if (Array.isArray(data.verses)) {
      return data.verses.map(v =>
        `<sup style="color:var(--gold-dark);font-weight:600;margin-right:3px">${v.verse}</sup>${escHtml(v.text.trim())}`
      ).join(' ');
    }
    return clean;
  } catch (err) {
    console.warn('Verse fetch failed:', err);
    return null;
  }
}

// Wire up the forum compose tabs (delegate clicks since they're rendered dynamically)
document.addEventListener('click', (e) => {
  const tab = e.target.closest('.forum-compose .ctype-tab');
  if (!tab) return;
  const card = tab.closest('.denom-card');
  if (!card) return;
  const denom = card.dataset.denom;
  if (denom) toggleForumCtype(denom, tab.dataset.ctype);
});

// Wire up forum compose textarea char counters (delegate)
document.addEventListener('input', (e) => {
  if (!e.target.matches('.forum-compose textarea')) return;
  const compose = e.target.closest('.forum-compose');
  if (!compose) return;
  const count = compose.querySelector('.char-count');
  if (count) {
    const len = e.target.value.length;
    count.textContent = `${len} / 600`;
    count.style.color = len > 500 ? 'var(--crimson)' : 'var(--ink-light)';
  }
});
// ═══════════════════════════════════════════════════════════════
//   MOVEMENTS — Outside the Creeds (Patch 5)
// ═══════════════════════════════════════════════════════════════

let currentMovement = null;
let openQuestions = new Set();  // which discussion-question forums are open

// Update stats to include movements
function updateMovementStats() {
  const el = document.getElementById('stat-movements');
  if (el) el.textContent = MOVEMENTS.length;
}

// Render the "Outside the Creeds" section on the homepage
function renderMovements() {
  const grid = document.getElementById('movement-grid');
  if (!grid) return;
  grid.innerHTML = MOVEMENTS.map(m => `
    <div class="movement-card" onclick="showMovement('${m.id}')">
      <div class="movement-card-top">
        <div class="movement-icon">${m.icon}</div>
        <div class="movement-badge">${escHtml(m.category)}</div>
      </div>
      <div class="movement-name">${escHtml(m.name)}</div>
      <div class="movement-founded">${escHtml(m.founded)}</div>
      <div class="movement-summary-preview">${escHtml(stripTags(m.summary).slice(0, 220))}…</div>
      <div class="movement-card-foot">
        <span class="movement-adherents">${escHtml(m.adherents)}</span>
        <span class="movement-questions-tag">Questions →</span>
      </div>
    </div>`).join('');
}

function stripTags(html) {
  return String(html || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

// Show a movement detail page
async function showMovement(id) {
  const m = MOVEMENTS.find(x => x.id === id);
  if (!m) return;
  currentMovement = m;
  currentTopic = null;
  openQuestions = new Set();
  bottomCtype = 'general';

  document.getElementById('home-view').style.display = 'none';
  document.getElementById('detail-view').style.display = 'none';
  const mv = document.getElementById('movement-view');
  if (mv) mv.style.display = 'block';

  document.getElementById('movement-title').textContent = m.name;
  document.getElementById('movement-founded-line').textContent = m.founded;
  document.getElementById('movement-adherents-line').textContent = m.adherents;
  document.getElementById('movement-hq-line').textContent = m.headquarters;
  document.getElementById('movement-category-tag').textContent = m.category;

  document.getElementById('movement-summary').innerHTML = escHtml(m.summary).replace(/\n/g, '<br/>');
  document.getElementById('movement-self-description').innerHTML = m.selfDescription;

  // Distinctives
  const distEl = document.getElementById('movement-distinctives');
  distEl.innerHTML = m.distinctives.map((d, i) => `
    <div class="distinctive-card">
      <div class="distinctive-num">${String(i + 1).padStart(2, '0')}</div>
      <div class="distinctive-content">
        <div class="distinctive-title">${escHtml(d.title)}</div>
        <p class="distinctive-body">${escHtml(d.body)}</p>
      </div>
    </div>`).join('');

  // Departures
  document.getElementById('movement-departures').innerHTML = m.departures;

  // Discussion questions — centerpiece
  await renderMovementQuestions(m);

  // Key texts
  const textsEl = document.getElementById('movement-key-texts');
  textsEl.innerHTML = m.keyTexts.map(t => `
    <div class="keytext-card">
      <div class="keytext-title">${escHtml(t.title)}</div>
      <div class="keytext-desc">${escHtml(t.desc)}</div>
    </div>`).join('');

  // Historical response
  document.getElementById('movement-historical-response').innerHTML = m.historicalResponse;

  // Historical note
  const noteEl = document.getElementById('movement-historical-note');
  if (noteEl) noteEl.innerHTML = `<span class="hist-label">📜 Historical context</span> ${escHtml(m.historicalNote)}`;

  // Related movements
  const relEl = document.getElementById('movement-related');
  if (relEl) {
    if (m.relatedMovements && m.relatedMovements.length) {
      relEl.innerHTML = `<h3 class="related-title">Related movements</h3><div class="related-pills">${m.relatedMovements.map(rid => {
        const rel = MOVEMENTS.find(x => x.id === rid);
        return rel ? `<button class="related-pill" onclick="showMovement('${rid}')">${rel.icon} ${escHtml(rel.name)}</button>` : '';
      }).join('')}</div>`;
      relEl.style.display = 'block';
    } else relEl.style.display = 'none';
  }

  // Load comments (using movement id as topic_id in the comments table)
  await loadMovementComments(m.id);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render the 5 discussion questions with their threaded mini-forums
async function renderMovementQuestions(m) {
  const container = document.getElementById('movement-questions');
  if (!container) return;
  container.innerHTML = m.discussionQuestions.map((q, i) => {
    const qKey = `${m.id}::${q.id}`;
    const isOpen = openQuestions.has(qKey);
    const count = countCommentsForQuestion(m.id, q.id);
    return `
      <div class="question-card ${isOpen ? 'q-open' : ''}" data-qkey="${escAttr(qKey)}">
        <div class="question-card-head">
          <div class="question-number">Q${i + 1}</div>
          <div class="question-content">
            <div class="question-title">${escHtml(q.title)}</div>
            <div class="question-body">${q.body}</div>
          </div>
        </div>
        <button class="question-toggle" onclick="toggleQuestionForum('${escAttr(qKey)}')">
          <span class="question-toggle-left">
            <span class="question-toggle-icon">💬</span>
            <span>${isOpen ? 'Hide responses' : 'Discuss this question'}</span>
            <span class="question-activity-count ${count === 0 ? 'zero' : ''}">${count}</span>
          </span>
          <span class="question-chevron">▾</span>
        </button>
        <div class="question-forum-body" id="qforum-${escAttr(qKey)}">
          ${renderQuestionForum(m.id, q.id)}
        </div>
      </div>`;
  }).join('');
}

function countCommentsForQuestion(movementId, questionId) {
  // We store discussion-question responses with target_denomination = `q:${questionId}` (reusing the field)
  const tag = 'q:' + questionId;
  return allComments.filter(c =>
    c.target_denomination === tag ||
    (c.parent_comment_id && getRootComment(c)?.target_denomination === tag)
  ).length;
}

function toggleQuestionForum(qKey) {
  if (openQuestions.has(qKey)) openQuestions.delete(qKey);
  else openQuestions.add(qKey);
  if (currentMovement) renderMovementQuestions(currentMovement);
}

function renderQuestionForum(movementId, questionId) {
  const tag = 'q:' + questionId;
  const topLevel = allComments.filter(c =>
    c.target_denomination === tag && !c.parent_comment_id
  ).sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));

  const compose = renderQuestionCompose(movementId, questionId);
  const list = topLevel.length === 0
    ? `<div class="denom-forum-empty">No one has weighed in on this question yet. Be the first.</div>`
    : `<div class="forum-comment-list">${topLevel.map(c => renderThreadedComment(c, 0)).join('')}</div>`;
  return compose + list;
}

function renderQuestionCompose(movementId, questionId) {
  if (!currentUser || !currentUserProfile) {
    return `<div class="forum-locked">Sign in to respond to this question. <button class="btn btn-primary btn-sm" onclick="openModal('signup')">Join the Synod</button></div>`;
  }
  const fid = `qc-${cssId(questionId)}`;
  return `
    <div class="forum-compose" data-question="${escAttr(questionId)}">
      <div class="ctype-helper">Make your case. Engage the question, cite Scripture if relevant, be charitable.</div>
      <textarea id="${fid}-text" maxlength="600" placeholder="Your response (max 600 characters)…"></textarea>
      <div class="forum-compose-bottom">
        <span class="char-count" id="${fid}-count">0 / 600</span>
        <button class="btn btn-primary btn-sm" onclick="submitQuestionResponse('${escAttr(movementId)}', '${escAttr(questionId)}')">Post response</button>
      </div>
      <div id="${fid}-msg"></div>
    </div>`;
}

async function submitQuestionResponse(movementId, questionId) {
  if (!currentUser || !currentUserProfile) return;
  const fid = `qc-${cssId(questionId)}`;
  const ta = document.getElementById(`${fid}-text`);
  const msg = document.getElementById(`${fid}-msg`);
  if (!ta) return;
  const body = ta.value.trim();
  if (!body) { showInlineMsg(msg, 'error', 'Please write something first.'); return; }
  if (body.length > 600) { showInlineMsg(msg, 'error', 'Keep it under 600 characters.'); return; }
  try {
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: movementId,
      user_id: currentUser.id,
      display_name: currentUserProfile.display_name,
      denomination: currentUserProfile.denomination || null,
      body,
      upvotes: 0,
      comment_type: 'responding',
      target_denomination: 'q:' + questionId,
      parent_comment_id: null,
    });
    if (error) throw error;
    ta.value = '';
    showInlineMsg(msg, 'success', 'Posted.');
    await loadMovementComments(movementId);
  } catch (err) {
    showInlineMsg(msg, 'error', err.message || 'Failed to post.');
  }
}

async function loadMovementComments(movementId) {
  if (!supabaseClient || typeof SUPABASE_CONFIGURED === 'undefined' || !SUPABASE_CONFIGURED) {
    allComments = [];
    if (currentMovement) renderMovementQuestions(currentMovement);
    return;
  }
  try {
    const { data, error } = await supabaseClient
      .from('comments').select('*').eq('topic_id', movementId)
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

    if (currentMovement) renderMovementQuestions(currentMovement);
  } catch (err) {
    console.error('Movement comments load failed:', err);
  }
}

// Wire up movements on DOM load (additive, doesn't replace existing handler)
document.addEventListener('DOMContentLoaded', () => {
  renderMovements();
  updateMovementStats();
});

// When replying to a comment inside a question forum, re-render that forum
const _origStartReply = startReply;
startReply = function(parentId) {
  if (!currentUser) { openModal('login'); return; }
  activeReplyTo = parentId;
  if (currentTopic) renderDenominations(currentTopic);
  if (currentMovement) renderMovementQuestions(currentMovement);
  filterComments();
  setTimeout(() => {
    const ta = document.getElementById(`reply-text-${parentId}`);
    if (ta) {
      ta.focus();
      ta.addEventListener('input', () => {
        const el = document.getElementById(`reply-count-${parentId}`);
        if (el) {
          const len = ta.value.length;
          el.textContent = `${len} / 600`;
          el.style.color = len > 500 ? 'var(--crimson)' : 'var(--ink-light)';
        }
      });
    }
  }, 30);
};

const _origCancelReply = cancelReply;
cancelReply = function() {
  activeReplyTo = null;
  if (currentTopic) renderDenominations(currentTopic);
  if (currentMovement) renderMovementQuestions(currentMovement);
  filterComments();
};

// When a reply is submitted inside a movement question forum, refresh that view
const _origSubmitReply = submitReply;
submitReply = async function(parentId) {
  if (!currentUser || !currentUserProfile) return;
  const ta = document.getElementById(`reply-text-${parentId}`);
  const msg = document.getElementById(`reply-msg-${parentId}`);
  if (!ta) return;
  const body = ta.value.trim();
  if (!body) { showInlineMsg(msg, 'error', 'Write something first.'); return; }
  if (body.length > 600) { showInlineMsg(msg, 'error', 'Keep it under 600 characters.'); return; }
  try {
    const contextId = currentMovement ? currentMovement.id : (currentTopic ? currentTopic.id : null);
    if (!contextId) throw new Error('No active context');
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: contextId,
      user_id: currentUser.id,
      display_name: currentUserProfile.display_name,
      denomination: currentUserProfile.denomination || null,
      body,
      upvotes: 0,
      parent_comment_id: parentId,
    });
    if (error) throw error;
    activeReplyTo = null;
    if (currentMovement) await loadMovementComments(currentMovement.id);
    else if (currentTopic) await loadComments(currentTopic.id);
  } catch (err) {
    showInlineMsg(msg, 'error', err.message || 'Failed to post reply.');
  }
};

// ═══════════════════════════════════════════════════════════════
//   RELIGIONS — The Wider Conversation (Patch 6)
// ═══════════════════════════════════════════════════════════════

let currentReligion = null;
let openReligionQuestions = new Set();

function updateReligionStats() {
  const el = document.getElementById('stat-religions');
  if (el) el.textContent = RELIGIONS.length;
}

function renderReligions() {
  const grid = document.getElementById('religion-grid');
  if (!grid) return;
  grid.innerHTML = RELIGIONS.map(r => `
    <div class="religion-card" onclick="showReligion('${r.id}')">
      <div class="religion-card-top">
        <div class="religion-icon">${r.icon}</div>
        <div class="religion-badge">${escHtml(r.category)}</div>
      </div>
      <div class="religion-name">${escHtml(r.name)}</div>
      <div class="religion-founded">${escHtml(r.founded.slice(0, 80))}${r.founded.length > 80 ? '…' : ''}</div>
      <div class="religion-summary-preview">${escHtml(stripTags(r.summary).slice(0, 240))}…</div>
      <div class="religion-card-foot">
        <span class="religion-adherents">${escHtml(r.adherents.split(';')[0].split('(')[0].trim())}</span>
        <span class="religion-questions-tag">Questions →</span>
      </div>
    </div>`).join('');
}

async function showReligion(id) {
  const r = RELIGIONS.find(x => x.id === id);
  if (!r) return;
  currentReligion = r;
  currentTopic = null;
  currentMovement = null;
  openReligionQuestions = new Set();
  bottomCtype = 'general';

  document.getElementById('home-view').style.display = 'none';
  document.getElementById('detail-view').style.display = 'none';
  const mv = document.getElementById('movement-view');
  if (mv) mv.style.display = 'none';
  const rv = document.getElementById('religion-view');
  if (rv) rv.style.display = 'block';

  document.getElementById('religion-title').textContent = r.name;
  document.getElementById('religion-founded-line').textContent = r.founded;
  document.getElementById('religion-adherents-line').textContent = r.adherents;
  document.getElementById('religion-founder-line').textContent = r.founder;
  document.getElementById('religion-category-tag').textContent = r.category;

  document.getElementById('religion-summary').innerHTML = escHtml(r.summary).replace(/\n/g, '<br/>');
  document.getElementById('religion-core-beliefs').innerHTML = r.coreBeliefs;

  // Key texts
  const textsEl = document.getElementById('religion-key-texts');
  textsEl.innerHTML = r.keyTexts.map(t => `
    <div class="keytext-card">
      <div class="keytext-title">${escHtml(t.title)}</div>
      <div class="keytext-desc">${escHtml(t.desc)}</div>
    </div>`).join('');

  document.getElementById('religion-contact').innerHTML = r.pointsOfContact;
  document.getElementById('religion-divergence').innerHTML = r.pointsOfDivergence;

  // Discussion questions
  await renderReligionQuestions(r);

  document.getElementById('religion-historical-relation').innerHTML = r.historicalRelation;

  const noteEl = document.getElementById('religion-historical-note');
  if (noteEl) noteEl.innerHTML = `<span class="hist-label">📜 Historical context</span> ${escHtml(r.historicalNote)}`;

  const relEl = document.getElementById('religion-related');
  if (relEl) {
    if (r.relatedReligions && r.relatedReligions.length) {
      relEl.innerHTML = `<h3 class="related-title">Related traditions</h3><div class="related-pills">${r.relatedReligions.map(rid => {
        const rel = RELIGIONS.find(x => x.id === rid);
        return rel ? `<button class="related-pill" onclick="showReligion('${rid}')">${rel.icon} ${escHtml(rel.name)}</button>` : '';
      }).join('')}</div>`;
      relEl.style.display = 'block';
    } else relEl.style.display = 'none';
  }

  await loadReligionComments(r.id);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function renderReligionQuestions(r) {
  const container = document.getElementById('religion-questions');
  if (!container) return;
  container.innerHTML = r.discussionQuestions.map((q, i) => {
    const qKey = `${r.id}::${q.id}`;
    const isOpen = openReligionQuestions.has(qKey);
    const count = countCommentsForQuestion(r.id, q.id);
    return `
      <div class="question-card ${isOpen ? 'q-open' : ''}" data-rqkey="${escAttr(qKey)}">
        <div class="question-card-head">
          <div class="question-number">Q${i + 1}</div>
          <div class="question-content">
            <div class="question-title">${escHtml(q.title)}</div>
            <div class="question-body">${q.body}</div>
          </div>
        </div>
        <button class="question-toggle" onclick="toggleReligionQuestionForum('${escAttr(qKey)}')">
          <span class="question-toggle-left">
            <span class="question-toggle-icon">💬</span>
            <span>${isOpen ? 'Hide responses' : 'Discuss this question'}</span>
            <span class="question-activity-count ${count === 0 ? 'zero' : ''}">${count}</span>
          </span>
          <span class="question-chevron">▾</span>
        </button>
        <div class="question-forum-body">
          ${renderReligionQuestionForum(r.id, q.id)}
        </div>
      </div>`;
  }).join('');
}

function toggleReligionQuestionForum(qKey) {
  if (openReligionQuestions.has(qKey)) openReligionQuestions.delete(qKey);
  else openReligionQuestions.add(qKey);
  if (currentReligion) renderReligionQuestions(currentReligion);
}

function renderReligionQuestionForum(religionId, questionId) {
  const tag = 'q:' + questionId;
  const topLevel = allComments.filter(c =>
    c.target_denomination === tag && !c.parent_comment_id
  ).sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));

  const compose = renderReligionQuestionCompose(religionId, questionId);
  const list = topLevel.length === 0
    ? `<div class="denom-forum-empty">No one has weighed in on this question yet. Be the first.</div>`
    : `<div class="forum-comment-list">${topLevel.map(c => renderThreadedComment(c, 0)).join('')}</div>`;
  return compose + list;
}

function renderReligionQuestionCompose(religionId, questionId) {
  if (!currentUser || !currentUserProfile) {
    return `<div class="forum-locked">Sign in to respond to this question. <button class="btn btn-primary btn-sm" onclick="openModal('signup')">Join the Synod</button></div>`;
  }
  const fid = `rqc-${cssId(questionId)}`;
  return `
    <div class="forum-compose" data-question="${escAttr(questionId)}">
      <div class="ctype-helper">Engage the question, draw on Scripture or other sources, be charitable across traditions.</div>
      <textarea id="${fid}-text" maxlength="600" placeholder="Your response (max 600 characters)…"></textarea>
      <div class="forum-compose-bottom">
        <span class="char-count" id="${fid}-count">0 / 600</span>
        <button class="btn btn-primary btn-sm" onclick="submitReligionQuestionResponse('${escAttr(religionId)}', '${escAttr(questionId)}')">Post response</button>
      </div>
      <div id="${fid}-msg"></div>
    </div>`;
}

async function submitReligionQuestionResponse(religionId, questionId) {
  if (!currentUser || !currentUserProfile) return;
  const fid = `rqc-${cssId(questionId)}`;
  const ta = document.getElementById(`${fid}-text`);
  const msg = document.getElementById(`${fid}-msg`);
  if (!ta) return;
  const body = ta.value.trim();
  if (!body) { showInlineMsg(msg, 'error', 'Please write something first.'); return; }
  if (body.length > 600) { showInlineMsg(msg, 'error', 'Keep it under 600 characters.'); return; }
  try {
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: religionId,
      user_id: currentUser.id,
      display_name: currentUserProfile.display_name,
      denomination: currentUserProfile.denomination || null,
      body,
      upvotes: 0,
      comment_type: 'responding',
      target_denomination: 'q:' + questionId,
      parent_comment_id: null,
    });
    if (error) throw error;
    ta.value = '';
    showInlineMsg(msg, 'success', 'Posted.');
    await loadReligionComments(religionId);
  } catch (err) {
    showInlineMsg(msg, 'error', err.message || 'Failed to post.');
  }
}

async function loadReligionComments(religionId) {
  if (!supabaseClient || typeof SUPABASE_CONFIGURED === 'undefined' || !SUPABASE_CONFIGURED) {
    allComments = [];
    if (currentReligion) renderReligionQuestions(currentReligion);
    return;
  }
  try {
    const { data, error } = await supabaseClient
      .from('comments').select('*').eq('topic_id', religionId)
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

    if (currentReligion) renderReligionQuestions(currentReligion);
  } catch (err) {
    console.error('Religion comments load failed:', err);
  }
}

// Extend showHome to also clear religion state
const _origShowHomeP5 = showHome;
showHome = function() {
  currentTopic = null;
  currentMovement = null;
  currentReligion = null;
  document.getElementById('home-view').style.display = 'block';
  document.getElementById('detail-view').style.display = 'none';
  const mv = document.getElementById('movement-view');
  if (mv) mv.style.display = 'none';
  const rv = document.getElementById('religion-view');
  if (rv) rv.style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Extend startReply / cancelReply / submitReply to handle religion view
const _origStartReplyP5 = startReply;
startReply = function(parentId) {
  if (!currentUser) { openModal('login'); return; }
  activeReplyTo = parentId;
  if (currentTopic) renderDenominations(currentTopic);
  if (currentMovement) renderMovementQuestions(currentMovement);
  if (currentReligion) renderReligionQuestions(currentReligion);
  filterComments();
  setTimeout(() => {
    const ta = document.getElementById(`reply-text-${parentId}`);
    if (ta) {
      ta.focus();
      ta.addEventListener('input', () => {
        const el = document.getElementById(`reply-count-${parentId}`);
        if (el) {
          const len = ta.value.length;
          el.textContent = `${len} / 600`;
          el.style.color = len > 500 ? 'var(--crimson)' : 'var(--ink-light)';
        }
      });
    }
  }, 30);
};

const _origCancelReplyP5 = cancelReply;
cancelReply = function() {
  activeReplyTo = null;
  if (currentTopic) renderDenominations(currentTopic);
  if (currentMovement) renderMovementQuestions(currentMovement);
  if (currentReligion) renderReligionQuestions(currentReligion);
  filterComments();
};

const _origSubmitReplyP5 = submitReply;
submitReply = async function(parentId) {
  if (!currentUser || !currentUserProfile) return;
  const ta = document.getElementById(`reply-text-${parentId}`);
  const msg = document.getElementById(`reply-msg-${parentId}`);
  if (!ta) return;
  const body = ta.value.trim();
  if (!body) { showInlineMsg(msg, 'error', 'Write something first.'); return; }
  if (body.length > 600) { showInlineMsg(msg, 'error', 'Keep it under 600 characters.'); return; }
  try {
    const contextId = currentReligion ? currentReligion.id : (currentMovement ? currentMovement.id : (currentTopic ? currentTopic.id : null));
    if (!contextId) throw new Error('No active context');
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: contextId,
      user_id: currentUser.id,
      display_name: currentUserProfile.display_name,
      denomination: currentUserProfile.denomination || null,
      body,
      upvotes: 0,
      parent_comment_id: parentId,
    });
    if (error) throw error;
    activeReplyTo = null;
    if (currentReligion) await loadReligionComments(currentReligion.id);
    else if (currentMovement) await loadMovementComments(currentMovement.id);
    else if (currentTopic) await loadComments(currentTopic.id);
  } catch (err) {
    showInlineMsg(msg, 'error', err.message || 'Failed to post reply.');
  }
};

// Initialize religions on DOM load
document.addEventListener('DOMContentLoaded', () => {
  renderReligions();
  updateReligionStats();
});


// ═══════════════════════════════════════════════════════════════
//   NOTIFICATIONS  (Patch 7)
// ═══════════════════════════════════════════════════════════════

let userNotifications = [];
let notificationsLoaded = false;
let notificationPanelOpen = false;

async function loadNotifications() {
  if (!currentUser || !supabaseClient) {
    userNotifications = [];
    renderNotificationBell();
    return;
  }
  try {
    const { data, error } = await supabaseClient
      .from('notifications')
      .select('*')
      .eq('recipient_id', currentUser.id)
      .order('created_at', { ascending: false })
      .limit(50);
    if (error) throw error;
    userNotifications = data || [];
    notificationsLoaded = true;
    renderNotificationBell();
  } catch (err) {
    console.error('Notifications load failed:', err);
    userNotifications = [];
    renderNotificationBell();
  }
}

function unreadNotificationCount() {
  return userNotifications.filter(n => !n.read).length;
}

function renderNotificationBell() {
  const wrap = document.getElementById('notif-wrap');
  if (!wrap) return;
  if (!currentUser) {
    wrap.style.display = 'none';
    return;
  }
  wrap.style.display = 'inline-flex';
  const unread = unreadNotificationCount();
  wrap.innerHTML = `
   <button class="notif-bell ${unread > 0 ? 'has-unread' : ''}" onclick="event.stopPropagation(); toggleNotifPanel()" aria-label="Notifications">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
      ${unread > 0 ? `<span class="notif-badge">${unread > 99 ? '99+' : unread}</span>` : ''}
    </button>
    <div class="notif-panel ${notificationPanelOpen ? 'open' : ''}" id="notif-panel">
      <div class="notif-panel-head">
        <span>Notifications</span>
        ${unread > 0 ? `<button class="notif-mark-all" onclick="event.stopPropagation(); markAllNotificationsRead()">Mark all read</button>` : ''}
      </div>
      <div class="notif-panel-body">
        ${userNotifications.length === 0
          ? `<div class="notif-empty">No notifications yet. When someone replies to your contribution or upvotes it, you'll see it here.</div>`
          : userNotifications.map(renderNotificationItem).join('')}
      </div>
    </div>
  `;
}

function renderNotificationItem(n) {
  const when = timeAgo(n.created_at);
  const icon = n.type === 'reply' ? '💬' : '👍';
  const verb = n.type === 'reply' ? 'replied to your comment' : 'upvoted your comment';
  const excerpt = n.comment_excerpt ? `<div class="notif-excerpt">"${escHtml(n.comment_excerpt.slice(0, 100))}${n.comment_excerpt.length > 100 ? '…' : ''}"</div>` : '';
  return `
    <button class="notif-item ${n.read ? 'read' : 'unread'}" onclick="onNotificationClick(${n.id}, '${escAttr(n.topic_id)}', ${n.comment_id || 'null'})">
      <div class="notif-item-icon">${icon}</div>
      <div class="notif-item-body">
        <div class="notif-item-line"><strong>${escHtml(n.actor_name || 'Someone')}</strong> ${verb}</div>
        ${excerpt}
        <div class="notif-item-when">${when}</div>
      </div>
      ${!n.read ? '<span class="notif-dot"></span>' : ''}
    </button>`;
}

function timeAgo(iso) {
  if (!iso) return '';
  const then = new Date(iso).getTime();
  const now = Date.now();
  const sec = Math.floor((now - then) / 1000);
  if (sec < 60) return 'just now';
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const day = Math.floor(hr / 24);
  if (day < 7) return `${day}d ago`;
  return new Date(iso).toLocaleDateString();
}

function toggleNotifPanel() {
  notificationPanelOpen = !notificationPanelOpen;
  renderNotificationBell();
}

async function markAllNotificationsRead() {
  if (!currentUser || !supabaseClient) return;
  try {
    const { error } = await supabaseClient
      .from('notifications')
      .update({ read: true })
      .eq('recipient_id', currentUser.id)
      .eq('read', false);
    if (error) throw error;
    userNotifications = userNotifications.map(n => ({ ...n, read: true }));
    renderNotificationBell();
  } catch (err) {
    console.error('Mark all read failed:', err);
  }
}

async function onNotificationClick(notifId, topicId, commentId) {
  // Mark this one as read
  if (currentUser && supabaseClient) {
    try {
      await supabaseClient.from('notifications').update({ read: true }).eq('id', notifId);
    } catch (e) { console.error(e); }
  }
  userNotifications = userNotifications.map(n => n.id === notifId ? { ...n, read: true } : n);
  notificationPanelOpen = false;
  renderNotificationBell();

  // Navigate
  if (topicId.startsWith('rel-')) {
    await showReligion(topicId);
  } else if (topicId.startsWith('mov-')) {
    await showMovement(topicId);
  } else {
    const t = TOPICS.find(x => x.id === topicId);
    if (t) await showTopic(topicId);
  }

  // Try to scroll to the comment after a beat
  if (commentId) {
    setTimeout(() => {
      const el = document.querySelector(`[data-comment-id="${commentId}"]`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('notif-flash');
        setTimeout(() => el.classList.remove('notif-flash'), 2000);
      }
    }, 600);
  }
}

// ─── Hooks: create notifications when replies/upvotes happen ──────────
// We wrap submitReply and toggleUpvote to also insert a notifications row.

async function createNotificationForReply(parentComment, replyBody) {
  if (!parentComment || !currentUser || !supabaseClient) return;
  if (parentComment.user_id === currentUser.id) return; // don't notify yourself
  try {
    await supabaseClient.from('notifications').insert({
      recipient_id: parentComment.user_id,
      type: 'reply',
      actor_name: currentUserProfile?.display_name || 'Someone',
      actor_denom: currentUserProfile?.denomination || null,
      comment_id: parentComment.id,
      comment_excerpt: replyBody,
      topic_id: parentComment.topic_id,
    });
  } catch (err) {
    console.error('Notif (reply) failed:', err);
  }
}

async function createNotificationForUpvote(comment) {
  if (!comment || !currentUser || !supabaseClient) return;
  if (comment.user_id === currentUser.id) return;
  try {
    await supabaseClient.from('notifications').insert({
      recipient_id: comment.user_id,
      type: 'upvote',
      actor_name: currentUserProfile?.display_name || 'Someone',
      actor_denom: currentUserProfile?.denomination || null,
      comment_id: comment.id,
      comment_excerpt: comment.body,
      topic_id: comment.topic_id,
    });
  } catch (err) {
    console.error('Notif (upvote) failed:', err);
  }
}

// Wrap submitReply to also create a notification
const _origSubmitReplyP7 = submitReply;
submitReply = async function(parentId) {
  if (!currentUser || !currentUserProfile) return;
  const parent = allComments.find(c => c.id === parentId);
  const ta = document.getElementById(`reply-text-${parentId}`);
  const body = ta ? ta.value.trim() : '';
  await _origSubmitReplyP7(parentId);
  if (parent && body) await createNotificationForReply(parent, body);
};

// Wrap toggleUpvote to create a notification (only on the upvote action, not the un-upvote)
if (typeof toggleUpvote === 'function') {
  const _origToggleUpvote = toggleUpvote;
  toggleUpvote = async function(commentId) {
    const wasVoted = userVotes.has(commentId);
    const comment = allComments.find(c => c.id === commentId);
    await _origToggleUpvote(commentId);
    if (!wasVoted && comment) await createNotificationForUpvote(comment);
  };
}

// Click-outside to close panel
document.addEventListener('click', (e) => {
  if (!notificationPanelOpen) return;
  const wrap = document.getElementById('notif-wrap');
  if (wrap && !wrap.contains(e.target)) {
    notificationPanelOpen = false;
    renderNotificationBell();
  }
});

// Load notifications when user signs in — wrap updateAuthUI
const _origUpdateAuthUI = updateAuthUI;
updateAuthUI = function() {
  _origUpdateAuthUI();
  if (currentUser) {
    loadNotifications();
  } else {
    userNotifications = [];
    renderNotificationBell();
  }
};

// Initial render of bell wrapper (it'll be hidden if no user yet)
document.addEventListener('DOMContentLoaded', () => {
  renderNotificationBell();
});

// Poll for new notifications every 60 seconds when user is logged in
setInterval(() => {
  if (currentUser && document.visibilityState === 'visible') {
    loadNotifications();
  }
}, 60000);


// ═══════════════════════════════════════════════════════════════
//   PATCH 8 — Hash routing (Ledger / Movements / Religions / About)
// ═══════════════════════════════════════════════════════════════

function _getRoute() {
  const h = (window.location.hash || '').toLowerCase();
  if (h.startsWith('#/movements')) return 'movements';
  if (h.startsWith('#/religions')) return 'religions';
  if (h.startsWith('#/about')) return 'about';
  return 'ledger';
}

function _applyRoute() {
  const route = _getRoute();
  const hero = document.querySelector('.hero');
  const topics = document.getElementById('topics');
  const movements = document.getElementById('movements');
  const religions = document.getElementById('religions');
  const about = document.getElementById('about');
  const show = (el, on) => { if (el) el.style.display = on ? '' : 'none'; };

  if (route === 'ledger') {
    show(hero, true); show(topics, true); show(movements, false); show(religions, false); show(about, true);
  } else if (route === 'movements') {
    show(hero, false); show(topics, false); show(movements, true); show(religions, false); show(about, false);
  } else if (route === 'religions') {
    show(hero, false); show(topics, false); show(movements, false); show(religions, true); show(about, false);
  } else if (route === 'about') {
    show(hero, false); show(topics, false); show(movements, false); show(religions, false); show(about, true);
  }

  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.dataset.route === route);
  });
  window.scrollTo({ top: 0, behavior: 'auto' });
}

window.addEventListener('hashchange', () => {
  // If currently on a detail view, return to home first
  const dv = document.getElementById('detail-view');
  const mv = document.getElementById('movement-view');
  const rv = document.getElementById('religion-view');
  const onDetail = (dv && dv.style.display !== 'none')
                || (mv && mv.style.display !== 'none')
                || (rv && rv.style.display !== 'none');
  if (onDetail) {
    if (dv) dv.style.display = 'none';
    if (mv) mv.style.display = 'none';
    if (rv) rv.style.display = 'none';
    const hv = document.getElementById('home-view');
    if (hv) hv.style.display = '';
  }
  _applyRoute();
});

document.addEventListener('DOMContentLoaded', _applyRoute);

// Wrap showHome so it respects the current route
const _origShowHomeP8 = showHome;
showHome = function() {
  _origShowHomeP8();
  _applyRoute();
};

// Navigation helpers
function goLedger()    { if (window.location.hash !== '#/' && window.location.hash !== '') { window.location.hash = '#/'; } else { showHome(); } }
function goMovements() { if (window.location.hash !== '#/movements') { window.location.hash = '#/movements'; } else { showHome(); } }
function goReligions() { if (window.location.hash !== '#/religions') { window.location.hash = '#/religions'; } else { showHome(); } }
function goAbout()     { if (window.location.hash !== '#/about') { window.location.hash = '#/about'; } else { showHome(); } }

// ═══════════════════════════════════════════════════════════════
//   PATCH 9 v2 — Questions Corner (with per-denom ask) + routing
//   REPLACES patch-9-engine.js. Append to app.js.
// ═══════════════════════════════════════════════════════════════

// ─── Routing (overrides patch-8) ───────────────────────────────
function _getRoute() {
  const h = (window.location.hash || '').toLowerCase();
  if (h.startsWith('#/movements')) return 'movements';
  if (h.startsWith('#/religions')) return 'religions';
  if (h.startsWith('#/questions')) return 'questions';
  if (h.startsWith('#/about'))     return 'about';
  return 'ledger';
}
function _applyRoute() {
  const route = _getRoute();
  const els = {
    hero: document.querySelector('.hero'),
    topics: document.getElementById('topics'),
    movements: document.getElementById('movements'),
    religions: document.getElementById('religions'),
    questions: document.getElementById('questions'),
    about: document.getElementById('about'),
  };
  const layouts = {
    ledger:    ['hero', 'topics'],
    movements: ['movements'],
    religions: ['religions'],
    questions: ['questions'],
    about:     ['about'],
  };
  const visible = layouts[route] || layouts.ledger;
  Object.entries(els).forEach(([k, el]) => { if (el) el.style.display = visible.includes(k) ? '' : 'none'; });
  if (route === 'questions') renderQuestionsCorner();
  document.querySelectorAll('.nav-link').forEach(a => a.classList.toggle('active', a.dataset.route === route));
  window.scrollTo({ top: 0, behavior: 'auto' });
}
function goQuestions() {
  if (window.location.hash !== '#/questions') window.location.hash = '#/questions';
  else showHome();
}

// ─── Seed: 5 challenge questions × 12 traditions = 60 ──────────
const QC_SEEDS = [
  { d: 'Roman Catholic', q: 'What is the strongest biblical case for papal infallibility?' },
  { d: 'Roman Catholic', q: 'How does Catholic theology reconcile the Marian dogmas (Immaculate Conception, Assumption) with sola scriptura concerns?' },
  { d: 'Roman Catholic', q: 'What is the best Catholic defense of purgatory given Hebrews 9:27?' },
  { d: 'Roman Catholic', q: 'How is transubstantiation philosophically coherent given modern critiques of Aristotelian substance metaphysics?' },
  { d: 'Roman Catholic', q: 'Why did the Catholic Church only formally define the Immaculate Conception in 1854 if it was always believed?' },

  { d: 'Eastern Orthodox', q: 'What is the strongest case against the filioque clause given John 15:26?' },
  { d: 'Eastern Orthodox', q: 'How does Orthodoxy defend apostolic continuity against Catholic and Old Catholic counter-claims?' },
  { d: 'Eastern Orthodox', q: 'How is theosis (deification) compatible with the Creator-creature distinction?' },
  { d: 'Eastern Orthodox', q: 'Why is rejecting later Western developments principled, given Orthodoxy\'s own developments like Palamism?' },
  { d: 'Eastern Orthodox', q: 'How does Orthodox ancestral-sin doctrine handle the Augustinian-sounding language of Romans 5:12–19?' },

  { d: 'Anglican / Episcopal', q: 'How does Anglicanism remain coherent given the wide gulf between Anglo-Catholic and evangelical Anglicans?' },
  { d: 'Anglican / Episcopal', q: 'What is the defense of episcopal government given that "elder" and "overseer" appear interchangeable in the New Testament?' },
  { d: 'Anglican / Episcopal', q: 'How do Anglicans defend retention of the 39 Articles when many clergy don\'t actually believe several of them?' },
  { d: 'Anglican / Episcopal', q: 'Is the Book of Common Prayer a true reform of medieval worship, or a political compromise?' },
  { d: 'Anglican / Episcopal', q: 'Can the Anglican via media survive modern polarization, or is it inherently unstable?' },

  { d: 'Lutheran', q: 'What is the strongest biblical case for sacramental union ("in, with, and under") over transubstantiation?' },
  { d: 'Lutheran', q: 'How does Luther\'s bondage of the will avoid making God the author of evil?' },
  { d: 'Lutheran', q: 'If salvation is by faith alone, on what basis do Lutherans retain infant baptism?' },
  { d: 'Lutheran', q: 'How does the two-kingdoms doctrine handle the church\'s prophetic call against state injustice?' },
  { d: 'Lutheran', q: 'Does "simul justus et peccator" undermine genuine sanctification?' },

  { d: 'Presbyterian / Reformed', q: 'What is the strongest biblical case for infant baptism given that all explicit New Testament baptisms involve professing believers?' },
  { d: 'Presbyterian / Reformed', q: 'How does limited atonement avoid making God\'s love arbitrary or insufficient?' },
  { d: 'Presbyterian / Reformed', q: 'Was the Westminster Confession right to call the pope the Antichrist (WCF 25.6 original)?' },
  { d: 'Presbyterian / Reformed', q: 'How does Reformed Sabbatarianism reconcile with Romans 14:5–6 and Colossians 2:16?' },
  { d: 'Presbyterian / Reformed', q: 'Why should Presbyterian polity be preferred when the early church practiced various forms of governance?' },

  { d: 'Baptist', q: 'How do Baptists respond to household baptisms (Acts 16:33; 1 Cor 1:16) and covenant-continuity arguments from Genesis 17?' },
  { d: 'Baptist', q: 'How do Baptists defend local church autonomy given the apostolic regulation of multiple churches in the Pauline letters?' },
  { d: 'Baptist', q: 'What is the strongest biblical case for believer\'s-only baptism by immersion?' },
  { d: 'Baptist', q: 'Why is the Lord\'s Supper typically a memorial rather than a means of grace in Baptist practice?' },
  { d: 'Baptist', q: 'How does Baptist "soul liberty" coexist with meaningful church discipline?' },

  { d: 'Methodist / Wesleyan', q: 'What is the strongest defense of entire sanctification / Christian perfection given Romans 7\'s continuing struggle?' },
  { d: 'Methodist / Wesleyan', q: 'How does prevenient grace differ functionally from Catholic actual grace?' },
  { d: 'Methodist / Wesleyan', q: 'If salvation is decisional and personal, why retain infant baptism?' },
  { d: 'Methodist / Wesleyan', q: 'How does the Wesleyan quadrilateral avoid relativizing sola scriptura?' },
  { d: 'Methodist / Wesleyan', q: 'How does Methodism respond to Reformed charges that Arminianism makes salvation cooperative?' },

  { d: 'Pentecostal', q: 'What is the strongest biblical case for tongues as the initial physical evidence of Spirit baptism?' },
  { d: 'Pentecostal', q: 'How do Pentecostals respond to cessationist appeals to 1 Corinthians 13:8–10?' },
  { d: 'Pentecostal', q: 'Why isn\'t healing always available to those with sufficient faith?' },
  { d: 'Pentecostal', q: 'How do Pentecostals distinguish authentic ecstatic worship from psychological or social phenomena?' },
  { d: 'Pentecostal', q: 'What is the Pentecostal response when prophetic words demonstrably fail to come true?' },

  { d: 'Charismatic', q: 'What distinguishes Charismatic Renewal from classical Pentecostalism beyond initial-evidence theology?' },
  { d: 'Charismatic', q: 'How do Charismatics defend modern apostolic and prophetic offices given Ephesians 2:20\'s foundation language?' },
  { d: 'Charismatic', q: 'What is the strongest defense of impartation through laying on of hands?' },
  { d: 'Charismatic', q: 'How do Charismatics respond to prosperity-gospel critiques without abandoning expectation of supernatural provision?' },
  { d: 'Charismatic', q: 'What is the case for the New Apostolic Reformation\'s restructuring of church governance?' },

  { d: 'Anabaptist / Mennonite', q: 'What is the case for pacifism given Romans 13\'s affirmation of the state\'s sword?' },
  { d: 'Anabaptist / Mennonite', q: 'How does Anabaptist separation from the world differ from monastic withdrawal?' },
  { d: 'Anabaptist / Mennonite', q: 'Why reject infant baptism when the broader church has practiced it since at least the 2nd century?' },
  { d: 'Anabaptist / Mennonite', q: 'How do Anabaptists respond to charges that the discipleship emphasis trends toward works-righteousness?' },
  { d: 'Anabaptist / Mennonite', q: 'Can Anabaptist non-participation in civic life avoid collapsing into social irresponsibility?' },

  { d: 'Non-denominational', q: 'How do non-denominational churches handle questions where Scripture is genuinely ambiguous (e.g., baptism)?' },
  { d: 'Non-denominational', q: 'Why does the non-denominational impulse keep producing new denominations?' },
  { d: 'Non-denominational', q: 'Does non-denominationalism preserve apostolic simplicity or abandon theological discipline?' },
  { d: 'Non-denominational', q: 'How do non-denominational churches address every-pastor-as-pope without external doctrinal checks?' },
  { d: 'Non-denominational', q: 'What is the defense against charges of consumerism in church choice?' },

  { d: 'Seventh-day Adventist', q: 'What is the strongest biblical case for Saturday Sabbath being binding on New Covenant believers?' },
  { d: 'Seventh-day Adventist', q: 'How do SDAs respond to charges that Ellen G. White functions as a quasi-canonical authority?' },
  { d: 'Seventh-day Adventist', q: 'What is the best defense of the investigative judgment doctrine and its 1844 dating?' },
  { d: 'Seventh-day Adventist', q: 'How does conditional immortality / annihilationism handle Matthew 25:46 and Revelation 14:11?' },
  { d: 'Seventh-day Adventist', q: 'Why is the SDA position on health and diet theologically significant rather than merely cultural?' },
];

function _qcSlug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40); }

const QC_INDEXED = (() => {
  const byDenom = {};
  QC_SEEDS.forEach(s => {
    if (!byDenom[s.d]) byDenom[s.d] = [];
    byDenom[s.d].push({ ...s, threadId: `qc-${_qcSlug(s.d)}-${byDenom[s.d].length + 1}` });
  });
  return byDenom;
})();

let qcRendered = false;
function renderQuestionsCorner() {
  if (qcRendered) return;
  const root = document.getElementById('questions');
  if (!root) return;
  qcRendered = true;

  root.innerHTML = `
    <div class="section-inner">
      <div class="section-head">
        <div class="section-eyebrow qc-eyebrow">Questions Corner</div>
        <h2 class="section-title">Pose, defend, refine.</h2>
        <p class="section-sub">Every tradition opens with five challenge questions hitting its hardest theological pressure points. Answer them, vote on the strongest defenses, or pose your own question to any tradition.</p>
      </div>

      <div class="qc-floor">
        <h3 class="qc-section-h">📣 Open the floor — any question, any tradition</h3>
        <div id="qc-floor-thread" class="qc-thread-host"></div>
      </div>

      <h3 class="qc-section-h qc-section-h-spaced">Ask any tradition anything</h3>
      <div class="qc-denom-list">
        ${Object.entries(QC_INDEXED).map(([denom, qs]) => {
          const slug = _qcSlug(denom);
          const openTopicId = `qc-${slug}-open`;
          return `
          <details class="qc-denom" data-denom-thread="${openTopicId}">
            <summary class="qc-denom-head">
              <span class="qc-denom-name">${escHtml(denom)}</span>
              <span class="qc-denom-arrow">▾</span>
            </summary>
            <div class="qc-denom-body">

              <div class="qc-subsection-label">⭑ Starter challenges</div>
              <div class="qc-questions-list">
                ${qs.map(q => `
                  <details class="qc-q" data-thread="${q.threadId}">
                    <summary class="qc-q-head">
                      <span class="qc-q-text">${escHtml(q.q)}</span>
                      <span class="qc-q-arrow">›</span>
                    </summary>
                    <div class="qc-q-thread"></div>
                  </details>
                `).join('')}
              </div>

              <div class="qc-subsection-label qc-subsection-label-spaced">💬 Community questions to ${escHtml(denom)}</div>
              <div class="qc-user-q-list" id="qc-userq-${slug}"></div>

              <div class="qc-ask-host">
                <div class="qc-ask-label">Pose your own question to ${escHtml(denom)}</div>
                <textarea class="comment-textarea qc-ask-input" id="qc-ask-input-${slug}" maxlength="400" placeholder="e.g., What is your tradition's best response to…" ${currentUser ? '' : 'disabled'}></textarea>
                <div class="qc-form-actions">
                  ${currentUser
                    ? `<button class="btn btn-primary btn-sm" onclick="_qcAskQuestion('${openTopicId}','${slug}')">Ask ${escHtml(denom)}</button>`
                    : `<span class="qc-locked-inline">Sign in to ask.</span>`}
                </div>
              </div>

            </div>
          </details>
        `}).join('')}
      </div>
    </div>
  `;

  root.querySelectorAll('details.qc-q').forEach(d => {
    d.addEventListener('toggle', async () => {
      if (!d.open) return;
      const host = d.querySelector('.qc-q-thread');
      if (host.dataset.loaded) return;
      host.dataset.loaded = '1';
      await _qcMountSeedThread(d.dataset.thread, host);
    });
  });

  root.querySelectorAll('details.qc-denom').forEach(d => {
    d.addEventListener('toggle', async () => {
      if (!d.open) return;
      if (d.dataset.userQLoaded) return;
      d.dataset.userQLoaded = '1';
      await _qcLoadUserQuestions(d.dataset.denomThread);
    });
  });

  const floor = document.getElementById('qc-floor-thread');
  if (floor) _qcMountSeedThread('qc-open-floor', floor);
}

// ─── Seeded / Open-floor threads (flat) ────────────────────────
async function _qcMountSeedThread(threadId, host) {
  host.innerHTML = `
    <div class="qc-form-host">
      ${currentUser
        ? `<textarea class="comment-textarea qc-input" id="qc-input-${threadId}" maxlength="600" placeholder="Post an answer or comment…"></textarea>
           <div class="qc-form-actions"><button class="btn btn-primary btn-sm" onclick="_qcSubmitFlat('${threadId}')">Post</button></div>`
        : `<div class="qc-locked">Sign in to participate.</div>`}
    </div>
    <div class="qc-list" id="qc-list-${threadId}"></div>
  `;
  await _qcLoadFlat(threadId);
}
async function _qcLoadFlat(threadId) {
  const listEl = document.getElementById(`qc-list-${threadId}`);
  if (!listEl) return;
  if (!supabaseClient) { listEl.innerHTML = '<div class="qc-empty">Discussion unavailable — Supabase not configured.</div>'; return; }
  try {
    const { data, error } = await supabaseClient.from('comments').select('*')
      .eq('topic_id', threadId).is('parent_id', null)
      .order('upvote_count', { ascending: false }).order('created_at', { ascending: false });
    if (error) throw error;
    if (!data || !data.length) { listEl.innerHTML = '<div class="qc-empty">Be the first.</div>'; return; }
    listEl.innerHTML = data.map(c => _qcRenderAnswer(c, `_qcVoteFlat(${c.id}, '${escAttr(c.topic_id)}')`)).join('');
  } catch (err) { console.error(err); listEl.innerHTML = '<div class="qc-empty">Couldn\'t load discussion.</div>'; }
}
async function _qcSubmitFlat(threadId) {
  if (!currentUser || !currentUserProfile) return;
  const ta = document.getElementById(`qc-input-${threadId}`);
  if (!ta) return;
  const body = ta.value.trim(); if (!body) return;
  try {
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: threadId, user_id: currentUser.id,
      display_name: currentUserProfile.display_name, user_denomination: currentUserProfile.denomination,
      body, comment_type: 'general', parent_id: null,
    });
    if (error) throw error;
    ta.value = ''; await _qcLoadFlat(threadId);
  } catch (err) { alert('Could not post: ' + err.message); }
}
async function _qcVoteFlat(commentId, threadId) {
  if (!currentUser) return;
  if (typeof toggleUpvote === 'function') await toggleUpvote(commentId);
  await _qcLoadFlat(threadId);
}

// ─── Community questions per denom ─────────────────────────────
async function _qcLoadUserQuestions(openTopicId) {
  const slug = openTopicId.replace(/^qc-/, '').replace(/-open$/, '');
  const listEl = document.getElementById(`qc-userq-${slug}`);
  if (!listEl) return;
  if (!supabaseClient) { listEl.innerHTML = '<div class="qc-empty">Discussion unavailable — Supabase not configured.</div>'; return; }
  try {
    const { data, error } = await supabaseClient.from('comments').select('*')
      .eq('topic_id', openTopicId).is('parent_id', null)
      .order('upvote_count', { ascending: false }).order('created_at', { ascending: false });
    if (error) throw error;
    if (!data || !data.length) { listEl.innerHTML = '<div class="qc-empty">No community questions yet — be the first to ask.</div>'; return; }
    listEl.innerHTML = data.map(q => _qcRenderUserQuestion(q, openTopicId)).join('');
    listEl.querySelectorAll('details.qc-uq').forEach(d => {
      d.addEventListener('toggle', async () => {
        if (!d.open) return;
        const host = d.querySelector('.qc-uq-answers');
        if (host.dataset.loaded) return;
        host.dataset.loaded = '1';
        await _qcMountAnswerThread(parseInt(d.dataset.questionId, 10), openTopicId, host);
      });
    });
  } catch (err) { console.error(err); listEl.innerHTML = '<div class="qc-empty">Couldn\'t load community questions.</div>'; }
}

function _qcRenderUserQuestion(q, openTopicId) {
  const voted = (typeof userVotes !== 'undefined' && userVotes && userVotes.has) ? userVotes.has(q.id) : false;
  return `
    <details class="qc-uq" data-question-id="${q.id}">
      <summary class="qc-uq-head">
        <div class="qc-vote qc-vote-inline" onclick="event.preventDefault(); event.stopPropagation();">
          <button class="qc-upbtn ${voted ? 'voted' : ''}" onclick="_qcVoteUserQ(${q.id}, '${escAttr(openTopicId)}')" ${!currentUser ? 'disabled' : ''}>▲</button>
          <div class="qc-votecount">${q.upvote_count || 0}</div>
        </div>
        <div class="qc-uq-body">
          <div class="qc-uq-text">${escHtml(q.body)}</div>
          <div class="qc-uq-meta">
            <strong>${escHtml(q.display_name || 'Anonymous')}</strong>
            ${q.user_denomination ? `<span class="qc-denom-tag">${escHtml(q.user_denomination)}</span>` : ''}
            <span class="qc-when">${typeof timeAgo === 'function' ? timeAgo(q.created_at) : ''}</span>
          </div>
        </div>
        <span class="qc-q-arrow">›</span>
      </summary>
      <div class="qc-uq-answers"></div>
    </details>
  `;
}

async function _qcAskQuestion(openTopicId, slug) {
  if (!currentUser || !currentUserProfile) return;
  const ta = document.getElementById(`qc-ask-input-${slug}`);
  if (!ta) return;
  const body = ta.value.trim(); if (!body) return;
  try {
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: openTopicId, user_id: currentUser.id,
      display_name: currentUserProfile.display_name, user_denomination: currentUserProfile.denomination,
      body, comment_type: 'general', parent_id: null,
    });
    if (error) throw error;
    ta.value = ''; await _qcLoadUserQuestions(openTopicId);
  } catch (err) { alert('Could not post: ' + err.message); }
}

async function _qcVoteUserQ(commentId, openTopicId) {
  if (!currentUser) return;
  if (typeof toggleUpvote === 'function') await toggleUpvote(commentId);
  await _qcLoadUserQuestions(openTopicId);
}

// ─── Answer threads under a community question ─────────────────
async function _qcMountAnswerThread(questionId, openTopicId, host) {
  host.innerHTML = `
    <div class="qc-form-host">
      ${currentUser
        ? `<textarea class="comment-textarea qc-input" id="qc-ans-input-${questionId}" maxlength="600" placeholder="Answer this question…"></textarea>
           <div class="qc-form-actions"><button class="btn btn-primary btn-sm" onclick="_qcSubmitAnswer(${questionId}, '${escAttr(openTopicId)}')">Post answer</button></div>`
        : `<div class="qc-locked">Sign in to answer.</div>`}
    </div>
    <div class="qc-list" id="qc-ans-list-${questionId}"></div>
  `;
  await _qcLoadAnswers(questionId, openTopicId);
}
async function _qcLoadAnswers(questionId, openTopicId) {
  const listEl = document.getElementById(`qc-ans-list-${questionId}`);
  if (!listEl) return;
  try {
    const { data, error } = await supabaseClient.from('comments').select('*')
      .eq('topic_id', openTopicId).eq('parent_id', questionId)
      .order('upvote_count', { ascending: false }).order('created_at', { ascending: false });
    if (error) throw error;
    if (!data || !data.length) { listEl.innerHTML = '<div class="qc-empty">No answers yet.</div>'; return; }
    listEl.innerHTML = data.map(c => _qcRenderAnswer(c, `_qcVoteAnswer(${c.id}, ${questionId}, '${escAttr(openTopicId)}')`)).join('');
  } catch (err) { console.error(err); listEl.innerHTML = '<div class="qc-empty">Couldn\'t load answers.</div>'; }
}
async function _qcSubmitAnswer(questionId, openTopicId) {
  if (!currentUser || !currentUserProfile) return;
  const ta = document.getElementById(`qc-ans-input-${questionId}`);
  if (!ta) return;
  const body = ta.value.trim(); if (!body) return;
  try {
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: openTopicId, user_id: currentUser.id,
      display_name: currentUserProfile.display_name, user_denomination: currentUserProfile.denomination,
      body, comment_type: 'general', parent_id: questionId,
    });
    if (error) throw error;
    ta.value = ''; await _qcLoadAnswers(questionId, openTopicId);
  } catch (err) { alert('Could not post: ' + err.message); }
}
async function _qcVoteAnswer(commentId, questionId, openTopicId) {
  if (!currentUser) return;
  if (typeof toggleUpvote === 'function') await toggleUpvote(commentId);
  await _qcLoadAnswers(questionId, openTopicId);
}

function _qcRenderAnswer(c, voteOnclick) {
  const voted = (typeof userVotes !== 'undefined' && userVotes && userVotes.has) ? userVotes.has(c.id) : false;
  return `
    <div class="qc-item" data-comment-id="${c.id}">
      <div class="qc-vote">
        <button class="qc-upbtn ${voted ? 'voted' : ''}" onclick="${voteOnclick}" ${!currentUser ? 'disabled' : ''}>▲</button>
        <div class="qc-votecount">${c.upvote_count || 0}</div>
      </div>
      <div class="qc-body-wrap">
        <div class="qc-meta">
          <strong>${escHtml(c.display_name || 'Anonymous')}</strong>
          ${c.user_denomination ? `<span class="qc-denom-tag">${escHtml(c.user_denomination)}</span>` : ''}
          <span class="qc-when">${typeof timeAgo === 'function' ? timeAgo(c.created_at) : ''}</span>
        </div>
        <div class="qc-text">${escHtml(c.body)}</div>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════════════════
//   PATCH 12 — Discussion page refactor + findability + QC column fixes
//   Append entire contents to end of app.js
// ═══════════════════════════════════════════════════════════════════════

// ─── Tradition slug helpers ─────────────────────────────────────────────
function _denomSlug(name) {
  return (name || '').toLowerCase()
    .replace(/[/]/g, ' ')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function _findDenomByDisplayName(name) {
  for (const t of TOPICS) {
    if (!t.denominations) continue;
    const d = t.denominations.find(x => x.name === name);
    if (d) return d;
  }
  return null;
}

// Build a canonical list of denomination names from all topics
const _ALL_DENOMS = (() => {
  const seen = new Set();
  const out = [];
  for (const t of TOPICS) {
    if (!t.denominations) continue;
    for (const d of t.denominations) {
      if (!seen.has(d.name)) { seen.add(d.name); out.push(d.name); }
    }
  }
  return out;
})();

function _slugToDenom(slug) {
  return _ALL_DENOMS.find(n => _denomSlug(n) === slug) || null;
}

// ─── URL parsing for discussion routes ──────────────────────────────────
// Routes: #/d/{tradition}/{topic}  optionally ?c=NNN
function _parseDiscussionRoute() {
  const raw = window.location.hash || '';
  // Strip leading #
  const stripped = raw.replace(/^#/, '');
  // Split off query string
  const [path, queryStr] = stripped.split('?');
  const parts = path.split('/').filter(Boolean);
  if (parts[0] !== 'd' || parts.length < 3) return null;
  const tradition = decodeURIComponent(parts[1]);
  const topic = decodeURIComponent(parts[2]);
  const query = {};
  if (queryStr) {
    queryStr.split('&').forEach(kv => {
      const [k, v] = kv.split('=');
      if (k) query[k] = decodeURIComponent(v || '');
    });
  }
  return { tradition, topic, query };
}

// Determine whether a tradition slug refers to a denomination, movement, or religion
function _traditionContext(traditionSlug) {
  if (traditionSlug.startsWith('m-')) {
    const movId = 'mov-' + traditionSlug.slice(2);
    const mov = MOVEMENTS && MOVEMENTS.find(m => m.id === movId);
    if (mov) return { type: 'movement', movement: mov };
  }
  if (traditionSlug.startsWith('r-')) {
    const relId = 'rel-' + traditionSlug.slice(2);
    const rel = (typeof RELIGIONS !== 'undefined') && RELIGIONS.find(r => r.id === relId);
    if (rel) return { type: 'religion', religion: rel };
  }
  // Denomination
  const denomName = _slugToDenom(traditionSlug);
  if (denomName) return { type: 'denomination', denomName };
  return { type: 'unknown' };
}

// ─── Navigation helpers ────────────────────────────────────────────────
function goDiscussion(traditionSlug, topicId, commentId) {
  let hash = `#/d/${encodeURIComponent(traditionSlug)}/${encodeURIComponent(topicId)}`;
  if (commentId) hash += `?c=${commentId}`;
  if (window.location.hash === hash) { showDiscussion(); }
  else { window.location.hash = hash; }
}

function goMe() {
  if (window.location.hash !== '#/me') window.location.hash = '#/me';
  else showMePage();
}

// ─── Update routing to handle new routes ────────────────────────────────
function _getRoute() {
  const h = (window.location.hash || '').toLowerCase();
  if (h.startsWith('#/d/'))         return 'discussion';
  if (h.startsWith('#/me'))         return 'me';
  if (h.startsWith('#/movements'))  return 'movements';
  if (h.startsWith('#/religions'))  return 'religions';
  if (h.startsWith('#/questions'))  return 'questions';
  if (h.startsWith('#/about'))      return 'about';
  return 'ledger';
}

function _applyRoute() {
  const route = _getRoute();

  // Hide all detail views
  const hide = (id) => { const el = document.getElementById(id); if (el) el.style.display = 'none'; };
  hide('detail-view');
  hide('movement-view');
  hide('religion-view');
  hide('discussion-view');
  hide('me-view');

  const homeView = document.getElementById('home-view');

  if (route === 'discussion') {
    if (homeView) homeView.style.display = 'none';
    showDiscussion();
    return;
  }
  if (route === 'me') {
    if (homeView) homeView.style.display = 'none';
    showMePage();
    return;
  }

  // Home routes
  if (homeView) homeView.style.display = '';
  const els = {
    hero: document.querySelector('.hero'),
    topics: document.getElementById('topics'),
    movements: document.getElementById('movements'),
    religions: document.getElementById('religions'),
    questions: document.getElementById('questions'),
    about: document.getElementById('about'),
  };
  const layouts = {
    ledger:    ['hero', 'topics'],
    movements: ['movements'],
    religions: ['religions'],
    questions: ['questions'],
    about:     ['about'],
  };
  const visible = layouts[route] || layouts.ledger;
  Object.entries(els).forEach(([k, el]) => { if (el) el.style.display = visible.includes(k) ? '' : 'none'; });
  if (route === 'questions') renderQuestionsCorner();
  document.querySelectorAll('.nav-link').forEach(a => a.classList.toggle('active', a.dataset.route === route));
  window.scrollTo({ top: 0, behavior: 'auto' });
}

// ─── DISCUSSION PAGE ───────────────────────────────────────────────────
let _discussionCache = null;  // { traditionSlug, topicId, comments }

async function showDiscussion() {
  const parsed = _parseDiscussionRoute();
  if (!parsed) return;
  const view = document.getElementById('discussion-view');
  if (!view) return;
  view.style.display = '';

  const ctx = _traditionContext(parsed.tradition);
  const positionHtml = _renderDiscussionPosition(ctx, parsed.topic);

  view.innerHTML = `
    <div class="detail-bar">
      <div class="detail-bar-inner">
        <button class="back-link" onclick="_discussionBack('${escAttr(parsed.tradition)}','${escAttr(parsed.topic)}')">← Back</button>
        <span class="detail-category-tag">${_discussionContextLabel(ctx)}</span>
      </div>
    </div>
    <article class="discussion-article">
      <div class="detail-inner">
        ${positionHtml}
        <section class="discussion-thread" id="discussion-thread-host">
          <div class="loading-state">Loading discussion…</div>
        </section>
      </div>
    </article>
  `;
  window.scrollTo({ top: 0, behavior: 'auto' });

  await _loadDiscussionThread(parsed.tradition, parsed.topic, ctx);

  // Handle permalink: scroll to specific comment if ?c=N
  if (parsed.query.c) {
    setTimeout(() => {
      const el = document.querySelector(`[data-comment-id="${parsed.query.c}"]`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('notif-flash');
        setTimeout(() => el.classList.remove('notif-flash'), 2200);
      }
    }, 350);
  }
}

function _discussionBack(traditionSlug, topicSlug) {
  // Smart back: if tradition is a movement/religion, go to its detail; if denom, go to topic
  if (traditionSlug.startsWith('m-')) {
    const movId = 'mov-' + traditionSlug.slice(2);
    showMovement(movId);
  } else if (traditionSlug.startsWith('r-')) {
    const relId = 'rel-' + traditionSlug.slice(2);
    showReligion(relId);
  } else {
    // Try to find the topic
    const t = TOPICS.find(x => x.id === topicSlug);
    if (t) { showTopic(topicSlug); }
    else { showHome(); }
  }
}

function _discussionContextLabel(ctx) {
  if (ctx.type === 'movement') return 'Outside the Creeds';
  if (ctx.type === 'religion') return 'The Wider Conversation';
  return 'The Ledger';
}

function _renderDiscussionPosition(ctx, topicSlug) {
  if (ctx.type === 'denomination') {
    const topic = TOPICS.find(t => t.id === topicSlug);
    if (!topic) return `<div class="discussion-error">Topic not found.</div>`;
    const d = topic.denominations.find(x => x.name === ctx.denomName);
    if (!d) return `<div class="discussion-error">Position not found.</div>`;
    return `
      <header class="discussion-head">
        <div class="discussion-eyebrow">${escHtml(topic.name)} · ${escHtml(ctx.denomName)}</div>
        <h1 class="discussion-title">The ${escHtml(ctx.denomName)} position on ${escHtml(topic.name)}</h1>
        <div class="discussion-stance stance-${d.stance}">${stanceLabel ? stanceLabel(d.stance) : d.stance}</div>
        <div class="discussion-position-body">${d.position}</div>
        ${d.verses && d.verses.length ? `
          <div class="discussion-verses">
            <div class="discussion-verses-label">Their proof-texts</div>
            <div>${d.verses.map(v => `<span class="verse-pill">${escHtml(v)}</span>`).join(' ')}</div>
          </div>` : ''}
      </header>
    `;
  }
  if (ctx.type === 'movement') {
    const mov = ctx.movement;
    const q = (mov.discussionQuestions || []).find(x => x.id === topicSlug);
    if (!q) return `<div class="discussion-error">Question not found.</div>`;
    return `
      <header class="discussion-head movement-discussion-head">
        <div class="discussion-eyebrow">${escHtml(mov.name)} · Discussion question</div>
        <h1 class="discussion-title">${escHtml(q.title)}</h1>
        <div class="discussion-position-body">${q.body}</div>
      </header>
    `;
  }
  if (ctx.type === 'religion') {
    const rel = ctx.religion;
    const q = (rel.discussionQuestions || []).find(x => x.id === topicSlug);
    if (!q) return `<div class="discussion-error">Question not found.</div>`;
    return `
      <header class="discussion-head religion-discussion-head">
        <div class="discussion-eyebrow">${escHtml(rel.name)} · Discussion question</div>
        <h1 class="discussion-title">${escHtml(q.title)}</h1>
        <div class="discussion-position-body">${q.body}</div>
      </header>
    `;
  }
  return `<div class="discussion-error">Discussion context not found.</div>`;
}

async function _loadDiscussionThread(traditionSlug, topicSlug, ctx) {
  const host = document.getElementById('discussion-thread-host');
  if (!host) return;
  if (!supabaseClient) {
    host.innerHTML = `<div class="discussion-locked">Discussion unavailable — Supabase not configured.</div>`;
    return;
  }
  try {
    let q = supabaseClient.from('comments').select('*');
    let targetTag = null;
    if (ctx.type === 'denomination') {
      q = q.eq('topic_id', topicSlug);
      targetTag = ctx.denomName;
    } else if (ctx.type === 'movement') {
      q = q.eq('topic_id', ctx.movement.id);
      targetTag = 'q:' + topicSlug;
    } else if (ctx.type === 'religion') {
      q = q.eq('topic_id', ctx.religion.id);
      targetTag = 'q:' + topicSlug;
    }
    const { data, error } = await q.order('created_at', { ascending: true });
    if (error) throw error;

    // Filter: top-level matching this target, plus all descendants of those
    const allForTopic = data || [];
    const topLevel = allForTopic.filter(c =>
      c.target_denomination === targetTag && !c.parent_comment_id
    );
    const ids = new Set(topLevel.map(c => c.id));
    // Collect descendants by parent-id chain
    let added = true;
    while (added) {
      added = false;
      for (const c of allForTopic) {
        if (!ids.has(c.id) && c.parent_comment_id && ids.has(c.parent_comment_id)) {
          ids.add(c.id); added = true;
        }
      }
    }
    const threadComments = allForTopic.filter(c => ids.has(c.id));

    // Stash into globals so existing renderThreadedComment works
    allComments = threadComments;

    _renderDiscussionThread(traditionSlug, topicSlug, ctx, topLevel);
  } catch (err) {
    console.error('discussion load:', err);
    host.innerHTML = `<div class="discussion-locked">Couldn't load the discussion.</div>`;
  }
}

let _discussionSort = 'upvotes';
let _discussionFilter = 'all';

function _renderDiscussionThread(traditionSlug, topicSlug, ctx, topLevelAll) {
  const host = document.getElementById('discussion-thread-host');
  if (!host) return;

  // Apply filter
  let topLevel = topLevelAll.slice();
  if (_discussionFilter !== 'all') {
    topLevel = topLevel.filter(c => (c.comment_type || 'general') === _discussionFilter);
  }
  // Apply sort
  if (_discussionSort === 'upvotes') {
    topLevel.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
  } else if (_discussionSort === 'recent') {
    topLevel.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }

  const targetTag = ctx.type === 'denomination' ? ctx.denomName : ('q:' + topicSlug);
  const composeHtml = _renderDiscussionCompose(traditionSlug, topicSlug, ctx, targetTag);

  const filterChips = `
    <div class="discussion-filter-bar">
      <div class="discussion-filter-chips">
        ${['all', 'general', 'responding', 'edit_suggestion', 'verse_citation'].map(f => {
          const labels = { all: 'All', general: '💬 General', responding: '⚔️ Response', edit_suggestion: '✏️ Edit', verse_citation: '📖 Verse' };
          return `<button class="discussion-chip ${_discussionFilter === f ? 'active' : ''}" onclick="_setDiscussionFilter('${f}','${escAttr(traditionSlug)}','${escAttr(topicSlug)}')">${labels[f]}</button>`;
        }).join('')}
      </div>
      <div class="discussion-sort">
        <label>Sort:</label>
        <select onchange="_setDiscussionSort(this.value, '${escAttr(traditionSlug)}', '${escAttr(topicSlug)}')">
          <option value="upvotes" ${_discussionSort === 'upvotes' ? 'selected' : ''}>Most upvoted</option>
          <option value="recent" ${_discussionSort === 'recent' ? 'selected' : ''}>Most recent</option>
        </select>
      </div>
    </div>
  `;

  // "Your contributions in this discussion" jump shortcut
  let myShortcut = '';
  if (currentUser) {
    const mine = allComments.filter(c => c.user_id === currentUser.id);
    if (mine.length > 0) {
      const firstId = mine[0].id;
      myShortcut = `
        <div class="my-contributions-bar">
          📍 You have ${mine.length} contribution${mine.length > 1 ? 's' : ''} in this discussion.
          <button class="my-jump-btn" onclick="_jumpToMyComment(${firstId})">Jump to mine ↓</button>
        </div>`;
    }
  }

  const listHtml = topLevel.length === 0
    ? `<div class="discussion-empty">No contributions yet. Be the first.</div>`
    : `<div class="forum-comment-list discussion-list">${topLevel.map(c => renderThreadedComment(c, 0)).join('')}</div>`;

  host.innerHTML = `
    <h2 class="discussion-section-title">Open discussion</h2>
    ${composeHtml}
    ${myShortcut}
    ${filterChips}
    ${listHtml}
  `;

  // Wire up permalink-on-timestamp clicks
  setTimeout(_wireTimestampPermalinks, 50);
}

function _renderDiscussionCompose(traditionSlug, topicSlug, ctx, targetTag) {
  if (!currentUser || !currentUserProfile) {
    return `<div class="forum-locked">Sign in to engage this discussion. <button class="btn btn-primary btn-sm" onclick="openModal('signup')">Join the Synod</button></div>`;
  }
  return `
    <div class="discussion-compose">
      <div class="ctype-tabs ctype-tabs-discussion">
        <button class="ctype-tab active" data-ctype="general" onclick="_setDiscussionCtype('general')">💬 General</button>
        <button class="ctype-tab" data-ctype="responding" onclick="_setDiscussionCtype('responding')">⚔️ Respond</button>
        <button class="ctype-tab" data-ctype="edit_suggestion" onclick="_setDiscussionCtype('edit_suggestion')">✏️ Suggest edit</button>
        <button class="ctype-tab" data-ctype="verse_citation" onclick="_setDiscussionCtype('verse_citation')">📖 Cite verse</button>
      </div>
      <div id="discussion-verse-ref-row" style="display:none">
        <label class="ctype-field-label">Bible reference</label>
        <input type="text" id="discussion-verse-ref" class="text-input" placeholder="e.g. Rom 9:11–23" autocomplete="off"/>
      </div>
      <textarea id="discussion-compose-text" class="comment-textarea" maxlength="600" placeholder="Make your case. Cite Scripture. Be charitable. (Max 600 characters.)"></textarea>
      <div class="form-bottom">
        <span class="char-count" id="discussion-char-count">0 / 600</span>
        <button class="btn btn-primary" onclick="_submitDiscussionContribution('${escAttr(traditionSlug)}','${escAttr(topicSlug)}','${escAttr(targetTag)}')">Post contribution</button>
      </div>
    </div>
  `;
}

let _discussionCtype = 'general';
function _setDiscussionCtype(t) {
  _discussionCtype = t;
  document.querySelectorAll('.ctype-tabs-discussion .ctype-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.ctype === t);
  });
  const row = document.getElementById('discussion-verse-ref-row');
  if (row) row.style.display = (t === 'verse_citation') ? '' : 'none';
}

function _setDiscussionFilter(f, traditionSlug, topicSlug) {
  _discussionFilter = f;
  const ctx = _traditionContext(traditionSlug);
  _loadDiscussionThread(traditionSlug, topicSlug, ctx);
}

function _setDiscussionSort(s, traditionSlug, topicSlug) {
  _discussionSort = s;
  const ctx = _traditionContext(traditionSlug);
  _loadDiscussionThread(traditionSlug, topicSlug, ctx);
}

async function _submitDiscussionContribution(traditionSlug, topicSlug, targetTag) {
  if (!currentUser || !currentUserProfile) return;
  const ta = document.getElementById('discussion-compose-text');
  const body = ta ? ta.value.trim() : '';
  if (!body) return;
  const verseRef = document.getElementById('discussion-verse-ref');
  const verseValue = (verseRef && _discussionCtype === 'verse_citation') ? verseRef.value.trim() : null;
  const ctx = _traditionContext(traditionSlug);
  let topicIdForInsert;
  if (ctx.type === 'denomination') topicIdForInsert = topicSlug;
  else if (ctx.type === 'movement') topicIdForInsert = ctx.movement.id;
  else if (ctx.type === 'religion') topicIdForInsert = ctx.religion.id;
  else return;
  try {
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: topicIdForInsert,
      user_id: currentUser.id,
      display_name: currentUserProfile.display_name,
      denomination: currentUserProfile.denomination,
      target_denomination: targetTag,
      body,
      comment_type: _discussionCtype,
      verse_reference: verseValue,
      parent_comment_id: null,
    });
    if (error) throw error;
    if (ta) ta.value = '';
    if (verseRef) verseRef.value = '';
    _setDiscussionCtype('general');
    await _loadDiscussionThread(traditionSlug, topicSlug, ctx);
  } catch (err) {
    alert('Could not post: ' + err.message);
  }
}

function _jumpToMyComment(commentId) {
  const el = document.querySelector(`[data-comment-id="${commentId}"]`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('notif-flash');
    setTimeout(() => el.classList.remove('notif-flash'), 2000);
  }
}

// Permalinks: clicking a comment date copies its permalink URL
function _wireTimestampPermalinks() {
  document.querySelectorAll('.discussion-list .comment-date').forEach(el => {
    if (el.dataset.permalinked) return;
    el.dataset.permalinked = '1';
    el.style.cursor = 'pointer';
    el.title = 'Click to copy permalink to this comment';
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const card = el.closest('[data-comment-id]');
      if (!card) return;
      const cid = card.dataset.commentId;
      const parsed = _parseDiscussionRoute();
      if (!parsed) return;
      const baseUrl = window.location.origin + window.location.pathname;
      const permalink = `${baseUrl}#/d/${encodeURIComponent(parsed.tradition)}/${encodeURIComponent(parsed.topic)}?c=${cid}`;
      navigator.clipboard.writeText(permalink).then(() => {
        const tip = document.createElement('span');
        tip.textContent = ' ✓ link copied';
        tip.style.color = 'var(--ledger-green, #2d5547)';
        tip.style.marginLeft = '6px';
        tip.style.fontSize = '11px';
        el.appendChild(tip);
        setTimeout(() => tip.remove(), 1600);
      }).catch(() => {
        alert('Permalink:\n' + permalink);
      });
    });
  });
}

// ─── TOPIC PAGE — refactor tradition cards to use "Discuss →" button ───
function renderDenominations(topic) {
  const grid = document.getElementById('denom-grid');
  if (!grid) return;
  grid.innerHTML = topic.denominations.map(d => {
    const count = countCommentsForDenom(d.name);
    const slug = _denomSlug(d.name);
    return `
    <div class="denom-card stance-${d.stance}" data-denom="${escAttr(d.name)}">
      <div class="denom-card-content">
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
      </div>
      <a class="denom-discuss-btn" href="#/d/${encodeURIComponent(slug)}/${encodeURIComponent(topic.id)}">
        <span class="denom-discuss-btn-left">
          <span class="denom-discuss-icon">💬</span>
          <span class="denom-discuss-label">${count > 0 ? `${count} ${count === 1 ? 'contribution' : 'contributions'}` : 'Start the discussion'}</span>
        </span>
        <span class="denom-discuss-arrow">Discuss →</span>
      </a>
    </div>`;
  }).join('');
  if (typeof enhanceVersePills === 'function') enhanceVersePills();
}

// ─── MOVEMENT PAGE — refactor question accordions to use "Discuss →" ───
function renderMovementQuestions(movement) {
  const host = document.getElementById('movement-questions');
  if (!host) return;
  const qs = movement.discussionQuestions || [];
  host.innerHTML = qs.map(q => {
    const count = countCommentsForQuestion(movement.id, q.id);
    const movSlug = 'm-' + movement.id.replace(/^mov-/, '');
    return `
      <div class="question-card-flat">
        <div class="question-card-flat-content">
          <h3 class="question-card-flat-title">${escHtml(q.title)}</h3>
          <div class="question-card-flat-body">${q.body}</div>
        </div>
        <a class="denom-discuss-btn" href="#/d/${encodeURIComponent(movSlug)}/${encodeURIComponent(q.id)}">
          <span class="denom-discuss-btn-left">
            <span class="denom-discuss-icon">💬</span>
            <span class="denom-discuss-label">${count > 0 ? `${count} ${count === 1 ? 'contribution' : 'contributions'}` : 'Start the discussion'}</span>
          </span>
          <span class="denom-discuss-arrow">Discuss →</span>
        </a>
      </div>
    `;
  }).join('');
}

// ─── RELIGION PAGE — same treatment ────────────────────────────────────
function renderReligionQuestions(religion) {
  const host = document.getElementById('religion-questions');
  if (!host) return;
  const qs = religion.discussionQuestions || [];
  host.innerHTML = qs.map(q => {
    const count = countCommentsForQuestion(religion.id, q.id);
    const relSlug = 'r-' + religion.id.replace(/^rel-/, '');
    return `
      <div class="question-card-flat">
        <div class="question-card-flat-content">
          <h3 class="question-card-flat-title">${escHtml(q.title)}</h3>
          <div class="question-card-flat-body">${q.body}</div>
        </div>
        <a class="denom-discuss-btn" href="#/d/${encodeURIComponent(relSlug)}/${encodeURIComponent(q.id)}">
          <span class="denom-discuss-btn-left">
            <span class="denom-discuss-icon">💬</span>
            <span class="denom-discuss-label">${count > 0 ? `${count} ${count === 1 ? 'contribution' : 'contributions'}` : 'Start the discussion'}</span>
          </span>
          <span class="denom-discuss-arrow">Discuss →</span>
        </a>
      </div>
    `;
  }).join('');
}

// ─── PERSONAL ACTIVITY PAGE (#/me) ─────────────────────────────────────
async function showMePage() {
  const view = document.getElementById('me-view');
  if (!view) return;
  view.style.display = '';
  if (!currentUser) {
    view.innerHTML = `
      <div class="detail-bar"><div class="detail-bar-inner">
        <button class="back-link" onclick="goLedger()">← Back to the Ledger</button>
      </div></div>
      <article class="discussion-article">
        <div class="detail-inner">
          <h1 class="discussion-title">Sign in to see your contributions</h1>
          <p class="me-empty">Your personal activity page shows every contribution you've made across the site, with links back to each discussion.</p>
          <p><button class="btn btn-primary" onclick="openModal('login')">Sign in</button></p>
        </div>
      </article>
    `;
    return;
  }
  view.innerHTML = `
    <div class="detail-bar"><div class="detail-bar-inner">
      <button class="back-link" onclick="goLedger()">← Back to the Ledger</button>
    </div></div>
    <article class="discussion-article">
      <div class="detail-inner">
        <header class="discussion-head">
          <div class="discussion-eyebrow">Your activity</div>
          <h1 class="discussion-title">My contributions</h1>
        </header>
        <section id="me-content" class="me-content">
          <div class="loading-state">Loading your contributions…</div>
        </section>
      </div>
    </article>
  `;
  await _loadMyContributions();
}

async function _loadMyContributions() {
  const host = document.getElementById('me-content');
  if (!host) return;
  if (!supabaseClient) { host.innerHTML = `<div class="me-empty">Discussion unavailable — Supabase not configured.</div>`; return; }
  try {
    const { data, error } = await supabaseClient.from('comments')
      .select('*').eq('user_id', currentUser.id)
      .order('created_at', { ascending: false });
    if (error) throw error;
    if (!data || data.length === 0) {
      host.innerHTML = `<div class="me-empty">You haven't posted any contributions yet. Browse the Ledger and join a discussion.</div>`;
      return;
    }
    // Group by (topic_id + target_denomination)
    const groups = new Map();
    for (const c of data) {
      const key = `${c.topic_id}|${c.target_denomination || ''}`;
      if (!groups.has(key)) groups.set(key, { topic_id: c.topic_id, target_denomination: c.target_denomination, comments: [] });
      groups.get(key).comments.push(c);
    }
    const rows = [];
    for (const g of groups.values()) {
      rows.push(_renderMeGroup(g));
    }
    host.innerHTML = rows.join('');
  } catch (err) {
    console.error('me load:', err);
    host.innerHTML = `<div class="me-empty">Couldn't load your contributions.</div>`;
  }
}

function _renderMeGroup(group) {
  const c0 = group.comments[0];
  // Figure out URL + title for this discussion
  let url = '#/', title = group.topic_id, contextLabel = '';
  const target = group.target_denomination || '';

  if (group.topic_id && group.topic_id.startsWith('mov-')) {
    // Movement question
    const mov = MOVEMENTS.find(m => m.id === group.topic_id);
    if (mov) {
      const qid = target.startsWith('q:') ? target.slice(2) : null;
      const q = qid && (mov.discussionQuestions || []).find(x => x.id === qid);
      const movSlug = 'm-' + mov.id.replace(/^mov-/, '');
      if (q) {
        url = `#/d/${encodeURIComponent(movSlug)}/${encodeURIComponent(q.id)}`;
        title = q.title;
        contextLabel = mov.name;
      }
    }
  } else if (group.topic_id && group.topic_id.startsWith('rel-')) {
    // Religion question
    const rel = (typeof RELIGIONS !== 'undefined') && RELIGIONS.find(r => r.id === group.topic_id);
    if (rel) {
      const qid = target.startsWith('q:') ? target.slice(2) : null;
      const q = qid && (rel.discussionQuestions || []).find(x => x.id === qid);
      const relSlug = 'r-' + rel.id.replace(/^rel-/, '');
      if (q) {
        url = `#/d/${encodeURIComponent(relSlug)}/${encodeURIComponent(q.id)}`;
        title = q.title;
        contextLabel = rel.name;
      }
    }
  } else if (group.topic_id && group.topic_id.startsWith('qc-')) {
    // Questions Corner
    url = `#/questions`;
    title = `Questions Corner`;
    contextLabel = '';
  } else {
    // Ledger topic + denomination
    const topic = TOPICS.find(t => t.id === group.topic_id);
    if (topic) {
      title = `${topic.name}${target ? ` · ${target}` : ''}`;
      contextLabel = 'Ledger';
      if (target) {
        const slug = _denomSlug(target);
        url = `#/d/${encodeURIComponent(slug)}/${encodeURIComponent(topic.id)}`;
      } else {
        url = `#/t/${encodeURIComponent(topic.id)}`;
      }
    }
  }

  return `
    <div class="me-group">
      <div class="me-group-head">
        <a class="me-group-title" href="${url}">${escHtml(title)}</a>
        ${contextLabel ? `<span class="me-context-tag">${escHtml(contextLabel)}</span>` : ''}
        <span class="me-count">${group.comments.length} contribution${group.comments.length > 1 ? 's' : ''}</span>
      </div>
      <div class="me-comments">
        ${group.comments.map(c => {
          // Build permalink to that specific comment
          let cmtUrl = url;
          if (cmtUrl.startsWith('#/d/')) cmtUrl += `?c=${c.id}`;
          const date = new Date(c.created_at).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
          return `
            <a class="me-comment" href="${cmtUrl}">
              <div class="me-comment-meta">${date} · ${(c.upvotes || 0)} upvote${(c.upvotes || 0) === 1 ? '' : 's'}</div>
              <div class="me-comment-body">${escHtml(c.body)}</div>
            </a>`;
        }).join('')}
      </div>
    </div>
  `;
}

// ─── NOTIFICATION DEEP-LINK UPDATE ─────────────────────────────────────
// Override onNotificationClick from patch 7 to use new discussion URLs
async function onNotificationClick(notifId, topicId, commentId) {
  if (currentUser && supabaseClient) {
    try { await supabaseClient.from('notifications').update({ read: true }).eq('id', notifId); }
    catch (e) { console.error(e); }
  }
  userNotifications = userNotifications.map(n => n.id === notifId ? { ...n, read: true } : n);
  notificationPanelOpen = false;
  renderNotificationBell();

  if (!commentId) {
    // Fallback: just navigate to the topic/movement/religion page
    if (topicId && topicId.startsWith('rel-')) { await showReligion(topicId); }
    else if (topicId && topicId.startsWith('mov-')) { await showMovement(topicId); }
    else if (topicId) { const t = TOPICS.find(x => x.id === topicId); if (t) await showTopic(topicId); }
    return;
  }

  // Look up the actual comment to figure out the right discussion URL
  try {
    const { data, error } = await supabaseClient.from('comments').select('*').eq('id', commentId).limit(1).maybeSingle();
    if (error || !data) throw new Error('comment lookup failed');
    const target = data.target_denomination || '';
    let traditionSlug = null, topicForUrl = null;
    if (data.topic_id.startsWith('mov-')) {
      const mov = MOVEMENTS.find(m => m.id === data.topic_id);
      if (mov && target.startsWith('q:')) {
        traditionSlug = 'm-' + mov.id.replace(/^mov-/, '');
        topicForUrl = target.slice(2);
      }
    } else if (data.topic_id.startsWith('rel-')) {
      const rel = (typeof RELIGIONS !== 'undefined') && RELIGIONS.find(r => r.id === data.topic_id);
      if (rel && target.startsWith('q:')) {
        traditionSlug = 'r-' + rel.id.replace(/^rel-/, '');
        topicForUrl = target.slice(2);
      }
    } else if (target) {
      traditionSlug = _denomSlug(target);
      topicForUrl = data.topic_id;
    }
    if (traditionSlug && topicForUrl) {
      window.location.hash = `#/d/${encodeURIComponent(traditionSlug)}/${encodeURIComponent(topicForUrl)}?c=${commentId}`;
      return;
    }
  } catch (e) { console.error('notif lookup', e); }

  // Last-resort fallback
  if (topicId && topicId.startsWith('rel-')) await showReligion(topicId);
  else if (topicId && topicId.startsWith('mov-')) await showMovement(topicId);
  else if (topicId) { const t = TOPICS.find(x => x.id === topicId); if (t) await showTopic(topicId); }
}

// ─── QC COLUMN FIXES — re-declare patch-9 functions with correct names ─
// parent_id → parent_comment_id, upvote_count → upvotes, user_denomination → denomination

async function _qcLoadFlat(threadId) {
  const listEl = document.getElementById(`qc-list-${threadId}`);
  if (!listEl) return;
  if (!supabaseClient) { listEl.innerHTML = '<div class="qc-empty">Discussion unavailable — Supabase not configured.</div>'; return; }
  try {
    const { data, error } = await supabaseClient.from('comments').select('*')
      .eq('topic_id', threadId).is('parent_comment_id', null)
      .order('upvotes', { ascending: false }).order('created_at', { ascending: false });
    if (error) throw error;
    if (!data || !data.length) { listEl.innerHTML = '<div class="qc-empty">Be the first.</div>'; return; }
    listEl.innerHTML = data.map(c => _qcRenderAnswer(c, `_qcVoteFlat(${c.id}, '${escAttr(c.topic_id)}')`)).join('');
  } catch (err) { console.error(err); listEl.innerHTML = '<div class="qc-empty">Couldn\'t load discussion.</div>'; }
}

async function _qcSubmitFlat(threadId) {
  if (!currentUser || !currentUserProfile) return;
  const ta = document.getElementById(`qc-input-${threadId}`);
  if (!ta) return;
  const body = ta.value.trim(); if (!body) return;
  try {
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: threadId, user_id: currentUser.id,
      display_name: currentUserProfile.display_name, denomination: currentUserProfile.denomination,
      body, comment_type: 'general', parent_comment_id: null,
    });
    if (error) throw error;
    ta.value = ''; await _qcLoadFlat(threadId);
  } catch (err) { alert('Could not post: ' + err.message); }
}

async function _qcLoadUserQuestions(openTopicId) {
  const slug = openTopicId.replace(/^qc-/, '').replace(/-open$/, '');
  const listEl = document.getElementById(`qc-userq-${slug}`);
  if (!listEl) return;
  if (!supabaseClient) { listEl.innerHTML = '<div class="qc-empty">Discussion unavailable — Supabase not configured.</div>'; return; }
  try {
    const { data, error } = await supabaseClient.from('comments').select('*')
      .eq('topic_id', openTopicId).is('parent_comment_id', null)
      .order('upvotes', { ascending: false }).order('created_at', { ascending: false });
    if (error) throw error;
    if (!data || !data.length) { listEl.innerHTML = '<div class="qc-empty">No community questions yet — be the first to ask.</div>'; return; }
    listEl.innerHTML = data.map(q => _qcRenderUserQuestion(q, openTopicId)).join('');
    listEl.querySelectorAll('details.qc-uq').forEach(d => {
      d.addEventListener('toggle', async () => {
        if (!d.open) return;
        const host = d.querySelector('.qc-uq-answers');
        if (host.dataset.loaded) return;
        host.dataset.loaded = '1';
        await _qcMountAnswerThread(parseInt(d.dataset.questionId, 10), openTopicId, host);
      });
    });
  } catch (err) { console.error(err); listEl.innerHTML = '<div class="qc-empty">Couldn\'t load community questions.</div>'; }
}

function _qcRenderUserQuestion(q, openTopicId) {
  const voted = (typeof userVotes !== 'undefined' && userVotes && userVotes.has) ? userVotes.has(q.id) : false;
  return `
    <details class="qc-uq" data-question-id="${q.id}">
      <summary class="qc-uq-head">
        <div class="qc-vote qc-vote-inline" onclick="event.preventDefault(); event.stopPropagation();">
          <button class="qc-upbtn ${voted ? 'voted' : ''}" onclick="_qcVoteUserQ(${q.id}, '${escAttr(openTopicId)}')" ${!currentUser ? 'disabled' : ''}>▲</button>
          <div class="qc-votecount">${q.upvotes || 0}</div>
        </div>
        <div class="qc-uq-body">
          <div class="qc-uq-text">${escHtml(q.body)}</div>
          <div class="qc-uq-meta">
            <strong>${escHtml(q.display_name || 'Anonymous')}</strong>
            ${q.denomination ? `<span class="qc-denom-tag">${escHtml(q.denomination)}</span>` : ''}
            <span class="qc-when">${typeof timeAgo === 'function' ? timeAgo(q.created_at) : ''}</span>
          </div>
        </div>
        <span class="qc-q-arrow">›</span>
      </summary>
      <div class="qc-uq-answers"></div>
    </details>
  `;
}

async function _qcAskQuestion(openTopicId, slug) {
  if (!currentUser || !currentUserProfile) return;
  const ta = document.getElementById(`qc-ask-input-${slug}`);
  if (!ta) return;
  const body = ta.value.trim(); if (!body) return;
  try {
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: openTopicId, user_id: currentUser.id,
      display_name: currentUserProfile.display_name, denomination: currentUserProfile.denomination,
      body, comment_type: 'general', parent_comment_id: null,
    });
    if (error) throw error;
    ta.value = ''; await _qcLoadUserQuestions(openTopicId);
  } catch (err) { alert('Could not post: ' + err.message); }
}

async function _qcLoadAnswers(questionId, openTopicId) {
  const listEl = document.getElementById(`qc-ans-list-${questionId}`);
  if (!listEl) return;
  try {
    const { data, error } = await supabaseClient.from('comments').select('*')
      .eq('topic_id', openTopicId).eq('parent_comment_id', questionId)
      .order('upvotes', { ascending: false }).order('created_at', { ascending: false });
    if (error) throw error;
    if (!data || !data.length) { listEl.innerHTML = '<div class="qc-empty">No answers yet.</div>'; return; }
    listEl.innerHTML = data.map(c => _qcRenderAnswer(c, `_qcVoteAnswer(${c.id}, ${questionId}, '${escAttr(openTopicId)}')`)).join('');
  } catch (err) { console.error(err); listEl.innerHTML = '<div class="qc-empty">Couldn\'t load answers.</div>'; }
}

async function _qcSubmitAnswer(questionId, openTopicId) {
  if (!currentUser || !currentUserProfile) return;
  const ta = document.getElementById(`qc-ans-input-${questionId}`);
  if (!ta) return;
  const body = ta.value.trim(); if (!body) return;
  try {
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: openTopicId, user_id: currentUser.id,
      display_name: currentUserProfile.display_name, denomination: currentUserProfile.denomination,
      body, comment_type: 'general', parent_comment_id: questionId,
    });
    if (error) throw error;
    ta.value = ''; await _qcLoadAnswers(questionId, openTopicId);
  } catch (err) { alert('Could not post: ' + err.message); }
}

function _qcRenderAnswer(c, voteOnclick) {
  const voted = (typeof userVotes !== 'undefined' && userVotes && userVotes.has) ? userVotes.has(c.id) : false;
  return `
    <div class="qc-item" data-comment-id="${c.id}">
      <div class="qc-vote">
        <button class="qc-upbtn ${voted ? 'voted' : ''}" onclick="${voteOnclick}" ${!currentUser ? 'disabled' : ''}>▲</button>
        <div class="qc-votecount">${c.upvotes || 0}</div>
      </div>
      <div class="qc-body-wrap">
        <div class="qc-meta">
          <strong>${escHtml(c.display_name || 'Anonymous')}</strong>
          ${c.denomination ? `<span class="qc-denom-tag">${escHtml(c.denomination)}</span>` : ''}
          <span class="qc-when">${typeof timeAgo === 'function' ? timeAgo(c.created_at) : ''}</span>
        </div>
        <div class="qc-text">${escHtml(c.body)}</div>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════════════════
//   PATCH 13 — Questions Corner as a filter view (replaces P9 version)
//   Append to end of app.js.  No DB migration required.
//
//   Re-uses existing columns: target_denomination as tradition tag for
//   Ledger; comment_type for response_type. Filter logic is client-side.
// ═══════════════════════════════════════════════════════════════════════

// ─── Catalog: all known discussion threads ─────────────────────────────
const _qcCatalog = (() => {
  const items = [];

  // QC seed questions (60) — always shown as starter content
  for (const [denom, qs] of Object.entries(QC_INDEXED)) {
    for (const q of qs) {
      items.push({
        kind: 'qc-seed',
        tradition: denom,
        traditionSlug: _denomSlug(denom),
        traditionType: 'denomination',
        topicId: q.threadId,           // e.g. 'qc-baptist-1'
        topicLabel: 'Starter challenge',
        ledgerTopicId: null,
        targetTag: null,
        title: q.q,
        url: `#/d/${_denomSlug(denom)}/${q.threadId}`,
        priorityShow: true,
      });
    }
  }

  // Ledger discussions: each topic × each denomination
  for (const t of TOPICS) {
    for (const d of (t.denominations || [])) {
      items.push({
        kind: 'ledger',
        tradition: d.name,
        traditionSlug: _denomSlug(d.name),
        traditionType: 'denomination',
        topicId: t.id,
        topicLabel: t.name,
        ledgerTopicId: t.id,
        targetTag: d.name,
        title: `${d.name} on ${t.name}`,
        url: `#/d/${_denomSlug(d.name)}/${t.id}`,
        priorityShow: false,
      });
    }
  }

  // Movement discussion questions
  if (typeof MOVEMENTS !== 'undefined') {
    for (const m of MOVEMENTS) {
      const slug = 'm-' + m.id.replace(/^mov-/, '');
      for (const q of (m.discussionQuestions || [])) {
        items.push({
          kind: 'movement',
          tradition: m.name,
          traditionSlug: slug,
          traditionType: 'movement',
          topicId: m.id,
          topicLabel: 'Movement question',
          ledgerTopicId: null,
          targetTag: 'q:' + q.id,
          title: q.title,
          url: `#/d/${slug}/${q.id}`,
          priorityShow: true,
        });
      }
    }
  }

  // Religion discussion questions
  if (typeof RELIGIONS !== 'undefined') {
    for (const r of RELIGIONS) {
      const slug = 'r-' + r.id.replace(/^rel-/, '');
      for (const q of (r.discussionQuestions || [])) {
        items.push({
          kind: 'religion',
          tradition: r.name,
          traditionSlug: slug,
          traditionType: 'religion',
          topicId: r.id,
          topicLabel: 'World religion question',
          ledgerTopicId: null,
          targetTag: 'q:' + q.id,
          title: q.title,
          url: `#/d/${slug}/${q.id}`,
          priorityShow: true,
        });
      }
    }
  }

  return items;
})();

// ─── Activity fetch — one query, group client-side ─────────────────────
let _qcActivityCache = null;
let _qcActivityFetching = null;
async function _qcFetchActivity(force) {
  if (force) _qcActivityCache = null;
  if (_qcActivityCache) return _qcActivityCache;
  if (_qcActivityFetching) return _qcActivityFetching;
  if (!supabaseClient) return new Map();
  _qcActivityFetching = (async () => {
    try {
      const { data, error } = await supabaseClient.from('comments')
        .select('id,topic_id,target_denomination,upvotes,created_at,body,comment_type')
        .limit(5000);
      if (error) throw error;
      const map = new Map();
      for (const c of (data || [])) {
        const target = c.target_denomination || '';
        const key = `${c.topic_id}|${target}`;
        let entry = map.get(key);
        if (!entry) {
          entry = { count: 0, latest: null, topUpvotes: -1, sampleBody: null, types: new Set() };
          map.set(key, entry);
        }
        entry.count++;
        const t = new Date(c.created_at).getTime();
        if (!entry.latest || t > entry.latest) entry.latest = t;
        if ((c.upvotes || 0) > entry.topUpvotes) {
          entry.topUpvotes = c.upvotes || 0;
          entry.sampleBody = c.body;
        }
        if (c.comment_type) entry.types.add(c.comment_type);
      }
      _qcActivityCache = map;
      return map;
    } catch (err) {
      console.error('qc activity:', err);
      return new Map();
    } finally {
      _qcActivityFetching = null;
    }
  })();
  return _qcActivityFetching;
}

// ─── Filter state + URL sync ────────────────────────────────────────────
let _qcFilters = { traditions: [], topics: [], types: [], showEmpty: false, sort: 'active' };

function _qcReadFiltersFromUrl() {
  const raw = window.location.hash || '';
  const parts = raw.replace(/^#/, '').split('?');
  const queryStr = parts[1] || '';
  const f = { traditions: [], topics: [], types: [], showEmpty: false, sort: 'active' };
  if (queryStr) {
    queryStr.split('&').forEach(kv => {
      const [k, v] = kv.split('=');
      if (!k) return;
      const val = decodeURIComponent(v || '');
      if (k === 't' && val) f.traditions = val.split(',');
      else if (k === 'topic' && val) f.topics = val.split(',');
      else if (k === 'type' && val) f.types = val.split(',');
      else if (k === 'all' && val === '1') f.showEmpty = true;
      else if (k === 'sort' && val) f.sort = val;
    });
  }
  _qcFilters = f;
}

function _qcWriteFiltersToUrl() {
  const f = _qcFilters;
  const params = [];
  if (f.traditions.length) params.push('t=' + encodeURIComponent(f.traditions.join(',')));
  if (f.topics.length) params.push('topic=' + encodeURIComponent(f.topics.join(',')));
  if (f.types.length) params.push('type=' + encodeURIComponent(f.types.join(',')));
  if (f.showEmpty) params.push('all=1');
  if (f.sort !== 'active') params.push('sort=' + encodeURIComponent(f.sort));
  const newHash = '#/questions' + (params.length ? '?' + params.join('&') : '');
  if (window.location.hash !== newHash) {
    history.replaceState(null, '', newHash);
  }
}

function _qcToggleFilter(dimension, value) {
  const arr = _qcFilters[dimension];
  const i = arr.indexOf(value);
  if (i >= 0) arr.splice(i, 1);
  else arr.push(value);
  _qcWriteFiltersToUrl();
  renderQuestionsCorner(true);
}

function _qcClearFilters() {
  _qcFilters = { traditions: [], topics: [], types: [], showEmpty: false, sort: 'active' };
  _qcWriteFiltersToUrl();
  renderQuestionsCorner(true);
}

function _qcToggleShowEmpty() {
  _qcFilters.showEmpty = !_qcFilters.showEmpty;
  _qcWriteFiltersToUrl();
  renderQuestionsCorner(true);
}

function _qcSetSort(val) {
  _qcFilters.sort = val;
  _qcWriteFiltersToUrl();
  renderQuestionsCorner(true);
}

// ─── Render Questions Corner (replaces P9 version) ─────────────────────
async function renderQuestionsCorner(forceRerender) {
  const root = document.getElementById('questions');
  if (!root) return;
  if (!forceRerender && root.dataset.qcRendered === '1') return;
  root.dataset.qcRendered = '1';

  _qcReadFiltersFromUrl();

  // Collect all distinct traditions from catalog
  const denomNames = []; const movNames = []; const relNames = [];
  const seen = new Set();
  for (const item of _qcCatalog) {
    if (seen.has(item.tradition)) continue;
    seen.add(item.tradition);
    if (item.traditionType === 'denomination') denomNames.push(item.tradition);
    else if (item.traditionType === 'movement') movNames.push(item.tradition);
    else if (item.traditionType === 'religion') relNames.push(item.tradition);
  }
  const topicList = TOPICS.map(t => ({ id: t.id, name: t.name }));
  const typeList = [
    { id: 'general', label: '💬 General' },
    { id: 'responding', label: '⚔️ Response' },
    { id: 'edit_suggestion', label: '✏️ Edit' },
    { id: 'verse_citation', label: '📖 Verse' },
  ];

  const f = _qcFilters;
  const isActive = (dim, v) => f[dim].includes(v);
  const pill = (dim, id, label, classes) =>
    `<button class="qc-pill ${classes || ''} ${isActive(dim, id) ? 'active' : ''}" onclick="_qcToggleFilter('${dim}','${escAttr(id)}')">${label}</button>`;

  root.innerHTML = `
    <div class="section-inner">
      <div class="section-head">
        <div class="section-eyebrow qc-eyebrow">Questions Corner</div>
        <h2 class="section-title">Browse every discussion</h2>
        <p class="section-sub">A unified view across the entire site. Filter by tradition, by topic, by response type — paste the URL to share any filter combination.</p>
      </div>

      <div class="qc-filter-panel">
        <div class="qc-filter-row">
          <div class="qc-filter-label">Tradition</div>
          <div class="qc-pills">
            ${denomNames.map(n => pill('traditions', n, escHtml(n), 'qc-pill-denom')).join('')}
            <span class="qc-pill-sep"></span>
            ${movNames.map(n => pill('traditions', n, escHtml(n), 'qc-pill-mov')).join('')}
            <span class="qc-pill-sep"></span>
            ${relNames.map(n => pill('traditions', n, escHtml(n), 'qc-pill-rel')).join('')}
          </div>
        </div>
        <div class="qc-filter-row">
          <div class="qc-filter-label">Topic <span class="qc-filter-sublabel">(Ledger only)</span></div>
          <div class="qc-pills">
            ${topicList.map(t => pill('topics', t.id, escHtml(t.name))).join('')}
          </div>
        </div>
        <div class="qc-filter-row">
          <div class="qc-filter-label">Type</div>
          <div class="qc-pills qc-pills-type">
            ${typeList.map(t => pill('types', t.id, t.label)).join('')}
          </div>
        </div>
        <div class="qc-filter-actions">
          <label class="qc-toggle">
            <input type="checkbox" ${f.showEmpty ? 'checked' : ''} onchange="_qcToggleShowEmpty()"/>
            Show empty discussions
          </label>
          <div class="qc-sort-control">
            <label>Sort:</label>
            <select onchange="_qcSetSort(this.value)">
              <option value="active" ${f.sort === 'active' ? 'selected' : ''}>Most recently active</option>
              <option value="upvotes" ${f.sort === 'upvotes' ? 'selected' : ''}>Top upvotes</option>
              <option value="count" ${f.sort === 'count' ? 'selected' : ''}>Most contributions</option>
            </select>
          </div>
          ${(f.traditions.length || f.topics.length || f.types.length || f.showEmpty || f.sort !== 'active')
            ? `<button class="qc-clear-btn" onclick="_qcClearFilters()">Clear all filters</button>`
            : ''}
        </div>
      </div>

      <div class="qc-results-info" id="qc-results-info">Loading…</div>
      <div class="qc-results" id="qc-results"></div>
    </div>
  `;

  const activity = await _qcFetchActivity();

  // Build filtered list
  let items = _qcCatalog.slice();

  if (f.traditions.length) {
    items = items.filter(it => f.traditions.includes(it.tradition));
  }
  if (f.topics.length) {
    // Topic filter only meaningful for Ledger items; non-Ledger items get filtered out when topics are selected
    items = items.filter(it => it.kind === 'ledger' && f.topics.includes(it.ledgerTopicId));
  }
  // Attach activity
  for (const it of items) {
    const key = `${it.topicId}|${it.targetTag || ''}`;
    const a = activity.get(key);
    it._activity = a || { count: 0, latest: null, topUpvotes: 0, sampleBody: null, types: new Set() };
  }
  // Type filter (filter by what types of comments exist in the thread)
  if (f.types.length) {
    items = items.filter(it => {
      if (!it._activity || !it._activity.types) return false;
      return f.types.some(t => it._activity.types.has(t));
    });
  }
  // Empty filter
  if (!f.showEmpty) {
    items = items.filter(it => it._activity.count > 0 || it.priorityShow);
  }
  // Sort
  items.sort((a, b) => {
    const ac = a._activity.count, bc = b._activity.count;
    if (f.sort === 'count') return bc - ac;
    if (f.sort === 'upvotes') return (b._activity.topUpvotes || 0) - (a._activity.topUpvotes || 0);
    // 'active' default
    if (ac && !bc) return -1;
    if (!ac && bc) return 1;
    if (ac && bc) return (b._activity.latest || 0) - (a._activity.latest || 0);
    // Both empty: keep priority items first, then by title
    if (a.priorityShow && !b.priorityShow) return -1;
    if (!a.priorityShow && b.priorityShow) return 1;
    return (a.title || '').localeCompare(b.title || '');
  });

  // Cap to first 200 for performance, show "load more" if exceeded
  const MAX_INITIAL = 200;
  const total = items.length;
  const display = items.slice(0, MAX_INITIAL);

  const infoEl = document.getElementById('qc-results-info');
  if (infoEl) {
    const filterCount = f.traditions.length + f.topics.length + f.types.length;
    infoEl.innerHTML = total === 0
      ? `<span class="qc-results-empty">No discussions match your filters. <button class="qc-link-btn" onclick="_qcClearFilters()">Clear filters</button>.</span>`
      : `<span class="qc-results-count">${total} ${total === 1 ? 'discussion' : 'discussions'}${filterCount ? ' matching filters' : ''}</span>${total > MAX_INITIAL ? ` <span class="qc-results-cap">· showing first ${MAX_INITIAL}</span>` : ''}`;
  }

  const resultsEl = document.getElementById('qc-results');
  if (!resultsEl) return;

  resultsEl.innerHTML = display.map(_qcRenderResultCard).join('');
}

function _qcRenderResultCard(item) {
  const a = item._activity || { count: 0, latest: null, topUpvotes: 0, sampleBody: null };
  const traditionClass =
    item.traditionType === 'movement' ? 'qc-card-mov' :
    item.traditionType === 'religion' ? 'qc-card-rel' : 'qc-card-denom';
  const topicChip = item.topicLabel
    ? `<span class="qc-card-chip qc-card-chip-topic">${escHtml(item.topicLabel)}</span>` : '';
  const sample = a.sampleBody
    ? `<div class="qc-card-sample">"${escHtml(a.sampleBody.slice(0, 180))}${a.sampleBody.length > 180 ? '…' : ''}"</div>` : '';
  const activeAgo = a.latest ? (typeof timeAgo === 'function' ? timeAgo(new Date(a.latest).toISOString()) : '') : '';
  return `
    <a class="qc-card ${traditionClass}" href="${item.url}">
      <div class="qc-card-head">
        <span class="qc-card-chip qc-card-chip-tradition">${escHtml(item.tradition)}</span>
        ${topicChip}
        ${item.priorityShow && item.kind === 'qc-seed' ? '<span class="qc-card-chip qc-card-chip-seed">⭑ Starter</span>' : ''}
      </div>
      <div class="qc-card-title">${escHtml(item.title)}</div>
      ${sample}
      <div class="qc-card-foot">
        ${a.count > 0
          ? `<span class="qc-card-count">💬 ${a.count} ${a.count === 1 ? 'contribution' : 'contributions'}</span>
             ${activeAgo ? `<span class="qc-card-when">active ${activeAgo}</span>` : ''}`
          : `<span class="qc-card-empty">No contributions yet — be the first</span>`}
      </div>
    </a>
  `;
}

// Reset cache + re-render on hash changes that affect filters
window.addEventListener('hashchange', () => {
  if (_getRoute() === 'questions') {
    const root = document.getElementById('questions');
    if (root) root.dataset.qcRendered = '0';
    renderQuestionsCorner(true);
  }
});

// ─── P12 discussion-page compat: handle QC seed topic_ids ──────────────
// Override _loadDiscussionThread so it correctly handles topic_ids that
// have no target_denomination filter (QC seeds, open-floor threads).
async function _loadDiscussionThread(traditionSlug, topicSlug, ctx) {
  const host = document.getElementById('discussion-thread-host');
  if (!host) return;
  if (!supabaseClient) {
    host.innerHTML = `<div class="discussion-locked">Discussion unavailable — Supabase not configured.</div>`;
    return;
  }
  try {
    let topicIdQuery = null;
    let targetTag = null;
    let isFlatThread = false;

    if (ctx.type === 'denomination' && topicSlug.startsWith('qc-')) {
      // QC seed thread — flat, no target filter
      topicIdQuery = topicSlug;
      isFlatThread = true;
    } else if (ctx.type === 'denomination') {
      topicIdQuery = topicSlug;
      targetTag = ctx.denomName;
    } else if (ctx.type === 'movement') {
      topicIdQuery = ctx.movement.id;
      targetTag = 'q:' + topicSlug;
    } else if (ctx.type === 'religion') {
      topicIdQuery = ctx.religion.id;
      targetTag = 'q:' + topicSlug;
    } else {
      host.innerHTML = `<div class="discussion-error">Unknown discussion context.</div>`;
      return;
    }

    const { data, error } = await supabaseClient.from('comments').select('*')
      .eq('topic_id', topicIdQuery).order('created_at', { ascending: true });
    if (error) throw error;
    const allForTopic = data || [];

    let topLevel;
    if (isFlatThread) {
      // QC flat thread: top-level = no parent
      topLevel = allForTopic.filter(c => !c.parent_comment_id);
      allComments = allForTopic;
    } else {
      topLevel = allForTopic.filter(c =>
        c.target_denomination === targetTag && !c.parent_comment_id
      );
      const ids = new Set(topLevel.map(c => c.id));
      let added = true;
      while (added) {
        added = false;
        for (const c of allForTopic) {
          if (!ids.has(c.id) && c.parent_comment_id && ids.has(c.parent_comment_id)) {
            ids.add(c.id); added = true;
          }
        }
      }
      allComments = allForTopic.filter(c => ids.has(c.id));
    }

    _renderDiscussionThread(traditionSlug, topicSlug, ctx, topLevel);
  } catch (err) {
    console.error('discussion load:', err);
    host.innerHTML = `<div class="discussion-locked">Couldn't load the discussion.</div>`;
  }
}

// Override _submitDiscussionContribution for QC seed threads (no target_denomination)
async function _submitDiscussionContribution(traditionSlug, topicSlug, targetTag) {
  if (!currentUser || !currentUserProfile) return;
  const ta = document.getElementById('discussion-compose-text');
  const body = ta ? ta.value.trim() : '';
  if (!body) return;
  const verseRef = document.getElementById('discussion-verse-ref');
  const verseValue = (verseRef && _discussionCtype === 'verse_citation') ? verseRef.value.trim() : null;
  const ctx = _traditionContext(traditionSlug);
  let topicIdForInsert;
  let useTargetTag = targetTag;
  if (ctx.type === 'denomination' && topicSlug.startsWith('qc-')) {
    topicIdForInsert = topicSlug;
    useTargetTag = null;  // QC seed: no target_denomination
  } else if (ctx.type === 'denomination') {
    topicIdForInsert = topicSlug;
  } else if (ctx.type === 'movement') {
    topicIdForInsert = ctx.movement.id;
  } else if (ctx.type === 'religion') {
    topicIdForInsert = ctx.religion.id;
  } else return;
  try {
    const insertRow = {
      topic_id: topicIdForInsert,
      user_id: currentUser.id,
      display_name: currentUserProfile.display_name,
      denomination: currentUserProfile.denomination,
      body,
      comment_type: _discussionCtype,
      verse_reference: verseValue,
      parent_comment_id: null,
    };
    if (useTargetTag) insertRow.target_denomination = useTargetTag;
    const { error } = await supabaseClient.from('comments').insert(insertRow);
    if (error) throw error;
    if (ta) ta.value = '';
    if (verseRef) verseRef.value = '';
    _setDiscussionCtype('general');
    _qcActivityCache = null;  // invalidate so QC reflects new activity
    await _loadDiscussionThread(traditionSlug, topicSlug, ctx);
  } catch (err) {
    alert('Could not post: ' + err.message);
  }
}

// Also fix the position rendering for QC seed discussions (no Ledger position to display)
function _renderDiscussionPosition(ctx, topicSlug) {
  if (ctx.type === 'denomination' && topicSlug.startsWith('qc-')) {
    // QC seed question — look up in QC_INDEXED
    let qFound = null;
    for (const qs of Object.values(QC_INDEXED)) {
      const f = qs.find(x => x.threadId === topicSlug);
      if (f) { qFound = f; break; }
    }
    if (qFound) {
      return `
        <header class="discussion-head qc-discussion-head">
          <div class="discussion-eyebrow">${escHtml(ctx.denomName)} · Starter question</div>
          <h1 class="discussion-title">${escHtml(qFound.q)}</h1>
          <div class="discussion-position-body"><em>This is a starter challenge question for the ${escHtml(ctx.denomName)} tradition. Post a response below.</em></div>
        </header>
      `;
    }
  }
  if (ctx.type === 'denomination') {
    const topic = TOPICS.find(t => t.id === topicSlug);
    if (!topic) return `<div class="discussion-error">Topic not found.</div>`;
    const d = topic.denominations.find(x => x.name === ctx.denomName);
    if (!d) return `<div class="discussion-error">Position not found.</div>`;
    return `
      <header class="discussion-head">
        <div class="discussion-eyebrow">${escHtml(topic.name)} · ${escHtml(ctx.denomName)}</div>
        <h1 class="discussion-title">The ${escHtml(ctx.denomName)} position on ${escHtml(topic.name)}</h1>
        <div class="discussion-stance stance-${d.stance}">${typeof stanceLabel === 'function' ? stanceLabel(d.stance) : d.stance}</div>
        <div class="discussion-position-body">${d.position}</div>
        ${d.verses && d.verses.length ? `
          <div class="discussion-verses">
            <div class="discussion-verses-label">Their proof-texts</div>
            <div>${d.verses.map(v => `<span class="verse-pill">${escHtml(v)}</span>`).join(' ')}</div>
          </div>` : ''}
      </header>
    `;
  }
  if (ctx.type === 'movement') {
    const mov = ctx.movement;
    const q = (mov.discussionQuestions || []).find(x => x.id === topicSlug);
    if (!q) return `<div class="discussion-error">Question not found.</div>`;
    return `
      <header class="discussion-head movement-discussion-head">
        <div class="discussion-eyebrow">${escHtml(mov.name)} · Discussion question</div>
        <h1 class="discussion-title">${escHtml(q.title)}</h1>
        <div class="discussion-position-body">${q.body}</div>
      </header>
    `;
  }
  if (ctx.type === 'religion') {
    const rel = ctx.religion;
    const q = (rel.discussionQuestions || []).find(x => x.id === topicSlug);
    if (!q) return `<div class="discussion-error">Question not found.</div>`;
    return `
      <header class="discussion-head religion-discussion-head">
        <div class="discussion-eyebrow">${escHtml(rel.name)} · Discussion question</div>
        <h1 class="discussion-title">${escHtml(q.title)}</h1>
        <div class="discussion-position-body">${q.body}</div>
      </header>
    `;
  }
  return `<div class="discussion-error">Discussion context not found.</div>`;
}

// ═══════════════════════════════════════════════════════════════════════
//   PATCH 13.1 — Discussion-page lifecycle fixes
//   Append to end of app.js. Tiny patch.
// ═══════════════════════════════════════════════════════════════════════

// Helper: re-render the current discussion thread (used after delete/reply/submit)
async function _refreshDiscussionView() {
  if (_getRoute() !== 'discussion') return;
  const parsed = _parseDiscussionRoute();
  if (!parsed) return;
  const ctx = _traditionContext(parsed.tradition);
  await _loadDiscussionThread(parsed.tradition, parsed.topic, ctx);
}

// Helper: re-render JUST the thread list (no refetch — uses current allComments)
function _rerenderDiscussionListOnly() {
  if (_getRoute() !== 'discussion') return;
  const parsed = _parseDiscussionRoute();
  if (!parsed) return;
  const ctx = _traditionContext(parsed.tradition);
  let targetTag = null;
  let isFlat = false;
  if (ctx.type === 'denomination' && parsed.topic.startsWith('qc-')) { isFlat = true; }
  else if (ctx.type === 'denomination') { targetTag = ctx.denomName; }
  else if (ctx.type === 'movement' || ctx.type === 'religion') { targetTag = 'q:' + parsed.topic; }
  const topLevel = isFlat
    ? allComments.filter(c => !c.parent_comment_id)
    : allComments.filter(c => c.target_denomination === targetTag && !c.parent_comment_id);
  _renderDiscussionThread(parsed.tradition, parsed.topic, ctx, topLevel);
}

// ─── Fix 1: back button uses browser history when available ────────────
function _discussionBack(traditionSlug, topicSlug) {
  if (window.history.length > 1) {
    window.history.back();
    return;
  }
  // Fallback if no history
  if (traditionSlug && traditionSlug.startsWith('m-')) {
    showMovement('mov-' + traditionSlug.slice(2));
  } else if (traditionSlug && traditionSlug.startsWith('r-')) {
    showReligion('rel-' + traditionSlug.slice(2));
  } else if (topicSlug && topicSlug.startsWith('qc-')) {
    goQuestions();
  } else {
    const t = TOPICS.find(x => x.id === topicSlug);
    if (t) showTopic(topicSlug); else showHome();
  }
}

// ─── Fix 2: delete refreshes the view ──────────────────────────────────
if (typeof deleteComment === 'function') {
  const _origDeleteCommentP13 = deleteComment;
  deleteComment = async function(commentId) {
    await _origDeleteCommentP13(commentId);
    await _refreshDiscussionView();
  };
}

// ─── Fix 3: clicking Reply re-renders so the form appears ──────────────
if (typeof startReply === 'function') {
  const _origStartReplyP13 = startReply;
  startReply = function(commentId) {
    _origStartReplyP13(commentId);
    _rerenderDiscussionListOnly();
  };
}
if (typeof cancelReply === 'function') {
  const _origCancelReplyP13 = cancelReply;
  cancelReply = function() {
    _origCancelReplyP13();
    _rerenderDiscussionListOnly();
  };
}

// ─── Fix 4: submitting a reply refreshes the view ──────────────────────
if (typeof submitReply === 'function') {
  const _origSubmitReplyP13 = submitReply;
  submitReply = async function(parentId) {
    await _origSubmitReplyP13(parentId);
    await _refreshDiscussionView();
  };
}

// ─── Fix 5: toggling upvotes refreshes the view ────────────────────────
if (typeof toggleUpvote === 'function') {
  const _origToggleUpvoteP13 = toggleUpvote;
  toggleUpvote = async function(commentId) {
    await _origToggleUpvoteP13(commentId);
    // Only refresh if we're on a discussion view — other views handle it themselves
    if (_getRoute() === 'discussion') {
      await _refreshDiscussionView();
    }
  };
}

// ═══════════════════════════════════════════════════════════════════════
//   PATCH 13.2 — "Show empty" toggle now hides ALL empty discussions
//   Append to end of app.js.
// ═══════════════════════════════════════════════════════════════════════
//
// Bug: starter content (QC seed questions, movement questions, religion
// questions) was always shown regardless of the "Show empty discussions"
// toggle, because of a `priorityShow` override in the filter logic.
//
// Fix: re-declare renderQuestionsCorner with the priorityShow override
// removed. The toggle now hides every discussion that has zero activity.

async function renderQuestionsCorner(forceRerender) {
  const root = document.getElementById('questions');
  if (!root) return;
  if (!forceRerender && root.dataset.qcRendered === '1') return;
  root.dataset.qcRendered = '1';

  _qcReadFiltersFromUrl();

  const denomNames = []; const movNames = []; const relNames = [];
  const seen = new Set();
  for (const item of _qcCatalog) {
    if (seen.has(item.tradition)) continue;
    seen.add(item.tradition);
    if (item.traditionType === 'denomination') denomNames.push(item.tradition);
    else if (item.traditionType === 'movement') movNames.push(item.tradition);
    else if (item.traditionType === 'religion') relNames.push(item.tradition);
  }
  const topicList = TOPICS.map(t => ({ id: t.id, name: t.name }));
  const typeList = [
    { id: 'general', label: '💬 General' },
    { id: 'responding', label: '⚔️ Response' },
    { id: 'edit_suggestion', label: '✏️ Edit' },
    { id: 'verse_citation', label: '📖 Verse' },
  ];

  const f = _qcFilters;
  const isActive = (dim, v) => f[dim].includes(v);
  const pill = (dim, id, label, classes) =>
    `<button class="qc-pill ${classes || ''} ${isActive(dim, id) ? 'active' : ''}" onclick="_qcToggleFilter('${dim}','${escAttr(id)}')">${label}</button>`;

  root.innerHTML = `
    <div class="section-inner">
      <div class="section-head">
        <div class="section-eyebrow qc-eyebrow">Questions Corner</div>
        <h2 class="section-title">Browse every discussion</h2>
        <p class="section-sub">A unified view across the entire site. Filter by tradition, by topic, by response type — paste the URL to share any filter combination.</p>
      </div>

      <div class="qc-filter-panel">
        <div class="qc-filter-row">
          <div class="qc-filter-label">Tradition</div>
          <div class="qc-pills">
            ${denomNames.map(n => pill('traditions', n, escHtml(n), 'qc-pill-denom')).join('')}
            <span class="qc-pill-sep"></span>
            ${movNames.map(n => pill('traditions', n, escHtml(n), 'qc-pill-mov')).join('')}
            <span class="qc-pill-sep"></span>
            ${relNames.map(n => pill('traditions', n, escHtml(n), 'qc-pill-rel')).join('')}
          </div>
        </div>
        <div class="qc-filter-row">
          <div class="qc-filter-label">Topic <span class="qc-filter-sublabel">(Ledger only)</span></div>
          <div class="qc-pills">
            ${topicList.map(t => pill('topics', t.id, escHtml(t.name))).join('')}
          </div>
        </div>
        <div class="qc-filter-row">
          <div class="qc-filter-label">Type</div>
          <div class="qc-pills qc-pills-type">
            ${typeList.map(t => pill('types', t.id, t.label)).join('')}
          </div>
        </div>
        <div class="qc-filter-actions">
          <label class="qc-toggle">
            <input type="checkbox" ${f.showEmpty ? 'checked' : ''} onchange="_qcToggleShowEmpty()"/>
            Show empty discussions (including starter questions)
          </label>
          <div class="qc-sort-control">
            <label>Sort:</label>
            <select onchange="_qcSetSort(this.value)">
              <option value="active" ${f.sort === 'active' ? 'selected' : ''}>Most recently active</option>
              <option value="upvotes" ${f.sort === 'upvotes' ? 'selected' : ''}>Top upvotes</option>
              <option value="count" ${f.sort === 'count' ? 'selected' : ''}>Most contributions</option>
            </select>
          </div>
          ${(f.traditions.length || f.topics.length || f.types.length || f.showEmpty || f.sort !== 'active')
            ? `<button class="qc-clear-btn" onclick="_qcClearFilters()">Clear all filters</button>`
            : ''}
        </div>
      </div>

      <div class="qc-results-info" id="qc-results-info">Loading…</div>
      <div class="qc-results" id="qc-results"></div>
    </div>
  `;

  const activity = await _qcFetchActivity();

  let items = _qcCatalog.slice();

  if (f.traditions.length) {
    items = items.filter(it => f.traditions.includes(it.tradition));
  }
  if (f.topics.length) {
    items = items.filter(it => it.kind === 'ledger' && f.topics.includes(it.ledgerTopicId));
  }
  for (const it of items) {
    const key = `${it.topicId}|${it.targetTag || ''}`;
    const a = activity.get(key);
    it._activity = a || { count: 0, latest: null, topUpvotes: 0, sampleBody: null, types: new Set() };
  }
  if (f.types.length) {
    items = items.filter(it => {
      if (!it._activity || !it._activity.types) return false;
      return f.types.some(t => it._activity.types.has(t));
    });
  }

  // FIX: respect the showEmpty toggle for ALL items.  No more priorityShow override.
  if (!f.showEmpty) {
    items = items.filter(it => it._activity.count > 0);
  }

  items.sort((a, b) => {
    const ac = a._activity.count, bc = b._activity.count;
    if (f.sort === 'count') return bc - ac;
    if (f.sort === 'upvotes') return (b._activity.topUpvotes || 0) - (a._activity.topUpvotes || 0);
    if (ac && !bc) return -1;
    if (!ac && bc) return 1;
    if (ac && bc) return (b._activity.latest || 0) - (a._activity.latest || 0);
    if (a.priorityShow && !b.priorityShow) return -1;
    if (!a.priorityShow && b.priorityShow) return 1;
    return (a.title || '').localeCompare(b.title || '');
  });

  const MAX_INITIAL = 200;
  const total = items.length;
  const display = items.slice(0, MAX_INITIAL);

  const infoEl = document.getElementById('qc-results-info');
  if (infoEl) {
    const filterCount = f.traditions.length + f.topics.length + f.types.length;
    if (total === 0 && !f.showEmpty && filterCount === 0) {
      // Helpful empty state: no active discussions and no filters applied
      infoEl.innerHTML = `<span class="qc-results-empty">No active discussions yet. <button class="qc-link-btn" onclick="_qcToggleShowEmpty()">Show all starter questions</button> to browse what's available, or post a contribution from any topic, movement, or religion page.</span>`;
    } else if (total === 0) {
      infoEl.innerHTML = `<span class="qc-results-empty">No discussions match your filters. <button class="qc-link-btn" onclick="_qcClearFilters()">Clear filters</button>.</span>`;
    } else {
      infoEl.innerHTML = `<span class="qc-results-count">${total} ${total === 1 ? 'discussion' : 'discussions'}${filterCount ? ' matching filters' : ''}</span>${total > MAX_INITIAL ? ` <span class="qc-results-cap">· showing first ${MAX_INITIAL}</span>` : ''}`;
    }
  }

  const resultsEl = document.getElementById('qc-results');
  if (!resultsEl) return;

  resultsEl.innerHTML = display.map(_qcRenderResultCard).join('');
}

// ═══════════════════════════════════════════════════════════════════════
//   PATCH 13.3 — renderThreadedComment layout fix
//   Append to end of app.js.
// ═══════════════════════════════════════════════════════════════════════
//
// Bug: replies were rendered as a sibling of .comment-body inside the
// flex-row .comment-item, squeezing the parent's text into a narrow
// vertical strip.
//
// Fix: put the replies block back INSIDE .comment-body, as a block-level
// child below the actions. The P11 flatten logic still prevents cascade
// because only one .comment-replies-wrap is ever created per chain.

function renderThreadedComment(c, depth) {
  const directReplies = allComments.filter(r => r.parent_comment_id === c.id)
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  const initials = (c.display_name || 'A').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const voted = userVotes.has(c.id);
  const date = new Date(c.created_at).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
  const isOwn = currentUser && c.user_id === currentUser.id;
  const classes = depth === 0 ? 'comment-item' : 'comment-item comment-reply-item';
  const replyForm = (activeReplyTo === c.id) ? renderReplyForm(c.id) : '';

  // "In reply to X" marker for flattened deep replies
  let inReplyToMarker = '';
  if (depth >= 2 && c.parent_comment_id) {
    const parent = allComments.find(x => x.id === c.parent_comment_id);
    if (parent) {
      inReplyToMarker = `<div class="in-reply-to">↳ in reply to <strong>${escHtml(parent.display_name || 'Anonymous')}</strong></div>`;
    }
  }

  // Reply nesting (P11 flatten): only top-level (depth 0) renders the wrap;
  // all descendants become siblings inside that single wrap at depth 1+.
  let nestedHtml = '';
  if (depth === 0 && directReplies.length) {
    const flat = [];
    for (const r of directReplies) {
      flat.push(r);
      flat.push(..._getAllDescendants(r.id));
    }
    nestedHtml = `<div class="comment-replies-wrap">${flat.map(r => renderThreadedComment(r, r.parent_comment_id === c.id ? 1 : 2)).join('')}</div>`;
  }

  return `
    <div class="${classes}" data-comment-id="${c.id}">
      <div class="comment-avatar">${initials}</div>
      <div class="comment-body">
        ${inReplyToMarker}
        <div class="comment-meta">
          <span class="comment-author">${escHtml(c.display_name)}</span>
          ${c.denomination ? `<span class="comment-denom-tag">${escHtml(c.denomination)}</span>` : ''}
          ${renderCtypeBadge(c)}
          <span class="comment-date">${date}</span>
        </div>
        ${c.verse_reference ? `<div class="comment-target-line">📖 <strong>${escHtml(c.verse_reference)}</strong></div>` : ''}
        <div class="comment-text">${escHtml(c.body)}</div>
        <div class="comment-actions">
          <button class="upvote-btn ${voted ? 'voted' : ''}" onclick="toggleUpvote(${c.id})" id="upvote-${c.id}">
            ${voted ? '▲' : '△'} <span id="upvote-count-${c.id}">${c.upvotes || 0}</span>
          </button>
          ${currentUser ? `<button class="reply-btn" onclick="startReply(${c.id})">↳ Reply</button>` : ''}
          ${isOwn ? `<button class="delete-btn" onclick="deleteComment(${c.id})">Delete</button>` : ''}
        </div>
        ${replyForm}
        ${nestedHtml}
      </div>
    </div>`;
}

// Also ensure .comment-body can shrink properly inside its flex parent
(function _ensureCommentBodyFlex() {
  const styleId = 'patch-13-3-comment-body-style';
  if (document.getElementById(styleId)) return;
  const s = document.createElement('style');
  s.id = styleId;
  s.textContent = `.comment-item > .comment-body { flex: 1; min-width: 0; }`;
  document.head.appendChild(s);
})();
