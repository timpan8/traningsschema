// Demonstrationer: StrengthLog. Se MEDIA-SOURCES.md.
const exerciseGuides = {
  "variants": [
    {
      "id": "machine-chest-press",
      "label": "Bröstpress i maskin",
      "equipment": "Sits med ryggstöd och två handtag framför bröstet.",
      "steps": [
        "Ställ sitsen så handtagen är i brösthöjd.",
        "Pressa handtagen framåt med ryggen mot stödet.",
        "Släpp tillbaka långsamt."
      ],
      "poster": "media/machine-chest-press.jpg",
      "video": "media/machine-chest-press.mp4",
      "source": "https://www.strengthlog.com/machine-chest-press/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/machine-chest-press.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "pec-deck",
      "label": "Pec deck – armbågsdynor",
      "equipment": "Sits med ryggstöd och två dynor för underarmarna.",
      "steps": [
        "Placera underarmarna mot dynorna.",
        "För armarna samman framför bröstet.",
        "Öppna kontrollerat så långt det känns bekvämt."
      ],
      "poster": "media/pec-deck.jpg",
      "video": "media/pec-deck.mp4",
      "source": "https://www.strengthlog.com/pec-deck/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/04/pec-deck.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "machine-chest-fly",
      "label": "Chest fly – handtag",
      "equipment": "Sittande flyesmaskin med handtag ut åt sidorna.",
      "steps": [
        "Ställ sitsen så handtagen är ungefär i brösthöjd.",
        "För händerna samman med lätt böjda armbågar.",
        "Bromsa när du öppnar armarna igen."
      ],
      "poster": "media/machine-chest-fly.jpg",
      "video": "media/machine-chest-fly.mp4",
      "source": "https://www.strengthlog.com/machine-chest-fly/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2025/11/machine-chest-fly.gif?resize=700%2C700&ssl=1"
    },
    {
      "id": "dumbbell-incline-press",
      "label": "Lutande hantelpress",
      "equipment": "Två hantlar och en bänk med lätt lutande ryggstöd.",
      "steps": [
        "Luta dig mot bänken med hantlarna vid övre bröstet.",
        "Pressa hantlarna uppåt.",
        "Sänk lugnt tillbaka till startläget."
      ],
      "poster": "media/dumbbell-incline-press.jpg",
      "video": "media/dumbbell-incline-press.mp4",
      "source": "https://www.strengthlog.com/dumbbell-incline-press/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Dumbbell-Incline-Press.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "machine-shoulder-press",
      "label": "Axelpress i maskin",
      "equipment": "Sits med ryggstöd och handtag vid axlarna.",
      "steps": [
        "Justera sitsen så handtagen hamnar vid axlarna.",
        "Pressa upp med ryggen kvar mot stödet.",
        "Sänk kontrollerat utan att svanka kraftigt."
      ],
      "poster": "media/machine-shoulder-press.jpg",
      "video": "media/machine-shoulder-press.mp4",
      "source": "https://www.strengthlog.com/machine-shoulder-press/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/machine-shoulder-press.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "dumbbell-lateral-raise",
      "label": "Sidolyft med hantlar",
      "equipment": "Två lätta hantlar. Du står fritt på golvet.",
      "steps": [
        "Stå med hantlarna vid sidorna och mjuka armbågar.",
        "Lyft armarna utåt till ungefär axelhöjd.",
        "Sänk långsamt utan att svinga kroppen."
      ],
      "poster": "media/dumbbell-lateral-raise.jpg",
      "video": "media/dumbbell-lateral-raise.mp4",
      "source": "https://www.strengthlog.com/dumbbell-lateral-raise/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/12/Dumbbell-Lateral-Raise.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "cable-lateral-raise",
      "label": "Sidolyft i kabel",
      "equipment": "Kabelmaskin med ett handtag i låg position.",
      "steps": [
        "Stå med sidan mot maskinen och greppa med handen längst bort.",
        "Lyft armen utåt till ungefär axelhöjd.",
        "Sänk kontrollerat och byt sedan sida."
      ],
      "poster": "media/cable-lateral-raise.jpg",
      "video": "media/cable-lateral-raise.mp4",
      "source": "https://www.strengthlog.com/cable-lateral-raise/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2025/11/cable-lateral-raise.gif?resize=700%2C700&ssl=1"
    },
    {
      "id": "tricep-pushdown-with-rope",
      "label": "Triceps pushdown",
      "equipment": "Kabelmaskin med rep fäst högt upp.",
      "steps": [
        "Greppa repet och håll armbågarna intill kroppen.",
        "Sträck underarmarna nedåt.",
        "Böj armbågarna långsamt tillbaka utan att flytta överarmarna."
      ],
      "poster": "media/tricep-pushdown-with-rope.jpg",
      "video": "media/tricep-pushdown-with-rope.mp4",
      "source": "https://www.strengthlog.com/tricep-pushdown-with-rope/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/triceps-pushdown-with-rope.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "overhead-cable-triceps-extension",
      "label": "Triceps över huvudet – kabel",
      "equipment": "Kabelmaskin med rep i låg position bakom dig.",
      "steps": [
        "Vänd ryggen mot maskinen och håll repet bakom huvudet.",
        "Sträck armarna uppåt med överarmarna stilla.",
        "Böj armbågarna och sänk lugnt tillbaka."
      ],
      "poster": "media/overhead-cable-triceps-extension.jpg",
      "video": "media/overhead-cable-triceps-extension.mp4",
      "source": "https://www.strengthlog.com/overhead-cable-triceps-extension/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2025/11/overhead-tricep-extension-lower-position.gif?resize=700%2C700&ssl=1"
    },
    {
      "id": "dumbbell-standing-triceps-extension",
      "label": "Triceps över huvudet – hantel",
      "equipment": "En hantel i ena handen. Filmen visar en arm i taget.",
      "steps": [
        "Håll hanteln ovanför huvudet.",
        "Böj armbågen och sänk hanteln bakom huvudet.",
        "Sträck armen med överarmen relativt stilla. Gör båda sidor."
      ],
      "poster": "media/dumbbell-standing-triceps-extension.jpg",
      "video": "media/dumbbell-standing-triceps-extension.mp4",
      "source": "https://www.strengthlog.com/dumbbell-standing-triceps-extension/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Dumbbell-Standing-Triceps-Extension.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "leg-press",
      "label": "Benpress",
      "equipment": "Säte eller ryggplatta framför en stor fotplatta.",
      "steps": [
        "Placera fötterna ungefär höftbrett och ryggen mot stödet.",
        "Böj benen så långt ryggen kan ligga stabilt.",
        "Pressa tillbaka utan att låsa knäna hårt."
      ],
      "poster": "media/leg-press.jpg",
      "video": "media/leg-press.mp4",
      "source": "https://www.strengthlog.com/leg-press/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2025/11/leg-press.gif?resize=700%2C700&ssl=1"
    },
    {
      "id": "seated-leg-curl",
      "label": "Sittande lårcurl",
      "equipment": "Sits med en dyna ovanpå låren och en bakom nedre benen.",
      "steps": [
        "Justera maskinens led i höjd med knäna och lås lårdynan.",
        "Böj knäna och dra hälarna nedåt och bakåt.",
        "Släpp tillbaka långsamt."
      ],
      "poster": "media/seated-leg-curl.jpg",
      "video": "media/seated-leg-curl.mp4",
      "source": "https://www.strengthlog.com/seated-leg-curl/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/leg-curl-seated.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "lying-leg-curl",
      "label": "Liggande lårcurl",
      "equipment": "Bänk där du ligger på mage med en rulle bakom anklarna.",
      "steps": [
        "Lägg dig på mage och justera rullen strax ovanför hälarna.",
        "Böj knäna och för hälarna mot sätet.",
        "Sänk långsamt med höften kvar mot bänken."
      ],
      "poster": "media/lying-leg-curl.jpg",
      "video": "media/lying-leg-curl.mp4",
      "source": "https://www.strengthlog.com/lying-leg-curl/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/09/lying-leg-curl.gif?resize=700%2C700&ssl=1"
    },
    {
      "id": "leg-extension",
      "label": "Benspark",
      "equipment": "Sits med ryggstöd och en rulle framför nedre benen.",
      "steps": [
        "Justera knäleden i linje med maskinens led.",
        "Sträck benen och lyft rullen.",
        "Sänk tillbaka lugnt utan att släppa vikten."
      ],
      "poster": "media/leg-extension.jpg",
      "video": "media/leg-extension.mp4",
      "source": "https://www.strengthlog.com/leg-extension/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/leg-extension-seated.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "dumbbell-romanian-deadlift",
      "label": "Rumänska marklyft – hantlar",
      "equipment": "Två hantlar framför låren.",
      "steps": [
        "Stå med lätt böjda knän.",
        "Skjut höften bakåt och sänk hantlarna nära benen med neutral rygg.",
        "Vänd när baksida lår sträcks och res dig genom att föra höften framåt."
      ],
      "poster": "media/dumbbell-romanian-deadlift.jpg",
      "video": "media/dumbbell-romanian-deadlift.mp4",
      "source": "https://www.strengthlog.com/dumbbell-romanian-deadlift/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/09/romanian-deadlift-with-dumbbells.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "romanian-deadlift",
      "label": "Rumänska marklyft – skivstång",
      "equipment": "En skivstång som hålls framför låren.",
      "steps": [
        "Håll stången nära kroppen med lätt böjda knän.",
        "Skjut höften bakåt och låt stången följa benen.",
        "Res dig med neutral rygg när baksida lår sträcks."
      ],
      "poster": "media/romanian-deadlift.jpg",
      "video": "media/romanian-deadlift.mp4",
      "source": "https://www.strengthlog.com/romanian-deadlift/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/01/Romanian-deadlift.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "dumbbell-lunge",
      "label": "Utfall med hantlar",
      "equipment": "Två hantlar och fri golvyta. Du kan börja utan vikter.",
      "steps": [
        "Ta ett steg framåt.",
        "Sänk kroppen kontrollerat genom att böja båda knäna.",
        "Tryck ifrån med främre benet och återgå. Byt ben."
      ],
      "poster": "media/dumbbell-lunge.jpg",
      "video": "media/dumbbell-lunge.mp4",
      "source": "https://www.strengthlog.com/dumbbell-lunge/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Dumbbell-Lunge.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "bulgarian-split-squat",
      "label": "Bulgarian split squat",
      "equipment": "Bänk bakom dig för bakre foten. Filmen visar skivstång; börja gärna utan vikt.",
      "steps": [
        "Lägg bakre foten på bänken och stå stadigt på främre benet.",
        "Sänk kroppen kontrollerat över främre benet.",
        "Pressa upp igen. Gör båda sidor."
      ],
      "poster": "media/bulgarian-split-squat.jpg",
      "video": "media/bulgarian-split-squat.mp4",
      "source": "https://www.strengthlog.com/bulgarian-split-squat/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/02/Bulgarian-split-squat-barbell.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "standing-calf-raise",
      "label": "Stående vadpress",
      "equipment": "Maskin med axeldynor och en liten plattform för framfötterna.",
      "steps": [
        "Placera framfötterna på kanten och axlarna under dynorna.",
        "Pressa upp på tå.",
        "Sänk hälarna lugnt utan att studsa."
      ],
      "poster": "media/standing-calf-raise.jpg",
      "video": "media/standing-calf-raise.mp4",
      "source": "https://www.strengthlog.com/standing-calf-raise/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/calf-raise-standing.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "seated-calf-raise",
      "label": "Sittande vadpress",
      "equipment": "Sits med lårdynor och en liten fotplatta.",
      "steps": [
        "Placera framfötterna på fotplattan och låren under dynorna.",
        "Lyft hälarna så högt du kan med kontroll.",
        "Sänk hälarna långsamt."
      ],
      "poster": "media/seated-calf-raise.jpg",
      "video": "media/seated-calf-raise.mp4",
      "source": "https://www.strengthlog.com/seated-calf-raise/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/calf-raise-seated.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "calf-raise-in-leg-press",
      "label": "Vadpress i benpress",
      "equipment": "Benpressens fotplatta används för framfötterna.",
      "steps": [
        "Placera framfötterna stadigt på fotplattan med hälarna fria.",
        "Håll knäna nästan raka och pressa med tårna.",
        "Låt hälarna sjunka tillbaka med kontroll."
      ],
      "poster": "media/calf-raise-in-leg-press.jpg",
      "video": "media/calf-raise-in-leg-press.mp4",
      "source": "https://www.strengthlog.com/calf-raise-in-leg-press/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2025/10/calf-raise-in-leg-press.gif?resize=700%2C700&ssl=1"
    },
    {
      "id": "cable-crunch",
      "label": "Cable crunch",
      "equipment": "Kabelmaskin med rep fäst högt och plats att stå på knä.",
      "steps": [
        "Stå på knä med repet vid huvudet.",
        "Böj överkroppen genom att föra revbenen mot bäckenet.",
        "Återgå långsamt med höften relativt stilla."
      ],
      "poster": "media/cable-crunch.jpg",
      "video": "media/cable-crunch.mp4",
      "source": "https://www.strengthlog.com/cable-crunch/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/cable-crunch.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "machine-crunch",
      "label": "Magmaskin",
      "equipment": "Sits med handtag eller dyna som följer överkroppen framåt.",
      "steps": [
        "Ställ in sitsen och placera dig mot maskinens stöd.",
        "Böj överkroppen framåt genom att spänna magen.",
        "Återgå långsamt utan att dra med armarna."
      ],
      "poster": "media/machine-crunch.jpg",
      "video": "media/machine-crunch.mp4",
      "source": "https://www.strengthlog.com/machine-crunch/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/machine-crunch.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "plank",
      "label": "Planka",
      "equipment": "En matta eller fri golvyta. Ingen maskin behövs.",
      "steps": [
        "Placera armbågarna under axlarna och stöd på tårna.",
        "Spänn mage och säte så kroppen håller en rak linje.",
        "Andas lugnt. Avsluta när du inte längre kan hålla positionen."
      ],
      "poster": "media/plank.jpg",
      "video": null,
      "source": "https://www.strengthlog.com/plank/",
      "original": "https://www.strengthlog.com/wp-content/uploads/2020/03/Plank.jpg"
    },
    {
      "id": "lat-pulldown-with-pronated-grip",
      "label": "Latsdrag",
      "equipment": "Kabelmaskin med lång stång ovanför sitsen och dynor över låren.",
      "steps": [
        "Ställ lårdynan och greppa stången lite bredare än axlarna.",
        "Dra stången mot övre bröstet med armbågarna nedåt.",
        "Låt armarna sträckas upp kontrollerat."
      ],
      "poster": "media/lat-pulldown-with-pronated-grip.jpg",
      "video": "media/lat-pulldown-with-pronated-grip.mp4",
      "source": "https://www.strengthlog.com/lat-pulldown-with-pronated-grip/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/lat-pulldown-with-pronated-grip.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "cable-close-grip-seated-row",
      "label": "Sittande kabelrodd",
      "equipment": "Låg kabel, en sittbänk och två fotstöd framför dig.",
      "steps": [
        "Sätt fötterna på stöden och håll handtaget med båda händerna.",
        "Dra handtaget mot magen med armbågarna bakåt.",
        "Sträck armarna långsamt med bålen stabil."
      ],
      "poster": "media/cable-close-grip-seated-row.jpg",
      "video": "media/cable-close-grip-seated-row.mp4",
      "source": "https://www.strengthlog.com/cable-close-grip-seated-row/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/cable-row-seated-narrow-grip.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "dumbbell-row",
      "label": "Enarmsrodd med hantel",
      "equipment": "En hantel och en bänk att stödja den fria handen på.",
      "steps": [
        "Stöd kroppen på bänken och låt hanteln hänga under axeln.",
        "Dra armbågen bakåt mot höften.",
        "Sänk lugnt utan att vrida bålen. Byt sida."
      ],
      "poster": "media/dumbbell-row.jpg",
      "video": "media/dumbbell-row.mp4",
      "source": "https://www.strengthlog.com/dumbbell-row/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Dumbbell-Row.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "one-handed-cable-row",
      "label": "Enarmsrodd i kabel",
      "equipment": "Låg kabel med ett enhandshandtag och plats att sitta.",
      "steps": [
        "Sitt stadigt och greppa handtaget med en hand.",
        "Dra armbågen bakåt mot höften.",
        "Släpp tillbaka lugnt och byt sida."
      ],
      "poster": "media/one-handed-cable-row.jpg",
      "video": "media/one-handed-cable-row.mp4",
      "source": "https://www.strengthlog.com/one-handed-cable-row/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/04/cable-row-seated-single-arm.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "reverse-machine-fly",
      "label": "Reverse pec deck",
      "equipment": "Flyesmaskin där du sitter vänd mot bröststödet.",
      "steps": [
        "Justera handtagen framför dig och sitt med bröstet mot stödet.",
        "För armarna utåt och bakåt med mjuka armbågar.",
        "Återgå långsamt."
      ],
      "poster": "media/reverse-machine-fly.jpg",
      "video": "media/reverse-machine-fly.mp4",
      "source": "https://www.strengthlog.com/reverse-machine-fly/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2025/11/reverse-machine-fly.gif?resize=700%2C700&ssl=1"
    },
    {
      "id": "face-pull",
      "label": "Face pulls",
      "equipment": "Kabelmaskin med rep ungefär i ansiktshöjd.",
      "steps": [
        "Stå stadigt och greppa repets ändar.",
        "Dra repet mot ansiktet och för händerna isär med höga armbågar.",
        "Sträck armarna kontrollerat tillbaka."
      ],
      "poster": "media/face-pull.jpg",
      "video": "media/face-pull.mp4",
      "source": "https://www.strengthlog.com/face-pull/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/05/face-pull.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "dumbbell-curl",
      "label": "Bicepscurl",
      "equipment": "Två hantlar med handflatorna vända framåt.",
      "steps": [
        "Stå stadigt med armbågarna nära kroppen.",
        "Böj armarna och lyft hantlarna.",
        "Sänk långsamt utan att svinga ryggen."
      ],
      "poster": "media/dumbbell-curl.jpg",
      "video": "media/dumbbell-curl.mp4",
      "source": "https://www.strengthlog.com/dumbbell-curl/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/02/Hantelcurl.gif?resize=600%2C600&ssl=1"
    },
    {
      "id": "hammer-curl",
      "label": "Hammer curls",
      "equipment": "Två hantlar med handflatorna vända mot varandra.",
      "steps": [
        "Håll hantlarna längs sidorna med tummarna framåt.",
        "Böj armarna utan att vrida greppet.",
        "Sänk lugnt med överarmarna stilla."
      ],
      "poster": "media/hammer-curl.jpg",
      "video": "media/hammer-curl.mp4",
      "source": "https://www.strengthlog.com/hammer-curl/",
      "original": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/02/Hammer-curl.gif?resize=600%2C600&ssl=1"
    }
  ],
  "days": {
    "tisdag": [
      [
        0
      ],
      [
        1,
        2
      ],
      [
        3
      ],
      [
        4
      ],
      [
        5,
        6
      ],
      [
        7
      ],
      [
        8,
        9
      ]
    ],
    "onsdag": [
      [
        10
      ],
      [
        11,
        12
      ],
      [
        13
      ],
      [
        14,
        15
      ],
      [
        16,
        17
      ],
      [
        18,
        19,
        20
      ],
      [
        21,
        22
      ],
      [
        23
      ]
    ],
    "torsdag": [
      [
        24
      ],
      [
        25
      ],
      [
        26,
        27
      ],
      [
        28
      ],
      [
        29
      ],
      [
        30
      ],
      [
        31
      ],
      [
        21,
        22
      ]
    ]
  }
};
