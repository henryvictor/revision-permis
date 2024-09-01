var numeroQuestion = document.getElementById('numero-question');
const question1 = document.getElementById('question1');
const containerReponse1 = document.getElementById('container-reponse1');
const containerReponse2 = document.getElementById('container-reponse2');
const question2 = document.getElementById('question2');
const reponse1 = document.getElementById('reponse1');
const imgReponse1 = document.getElementById('img-reponse1');
const reponse2 = document.getElementById('reponse2');
const imgReponse2 = document.getElementById('img-reponse2');
const boutonChangerQuestion = document.getElementById('changer-question');
const question3 = document.getElementById('question3');
const imgReponse3 = document.getElementById('img-reponse3');
const reponse3 = document.getElementById('reponse3');
const containerReponse3 = document.getElementById('container-reponse3');

const boutonQuestionPrecedente = document.getElementById('question-precedente');
const boutonQuestionSuivante = document.getElementById('question-suivante');


data = [
    [
        1,
        "Montrez la commande de réglage de hauteur des feux.",
        ["./img/001.jpeg"],
        "Pourquoi doit-on régler la hauteur des feux ?",
        ["Pour ne pas éblouir les autres usagers."],
        "Comment et pourquoi protéger une zone de danger en cas d’accident de la route ?",
        ["En délimitant clairement et largement la zone de danger de façon visible pour potéger les victimes et éviter un sur-accident."]
    ],
    [
        2,
        "Montrez où s’effectue le remplissage du produit lave-glace.",
        ["./img/002.jpeg", "Le candidat ouvre le capot et montre le bocal."],
        "Pourquoi est-il préférable d’utiliser un liquide spécial en hiver ?",
        ["Pour éviter le gel du liquide."],
        "Quels comportements adopter en cas de diffusion du signal d’alerte du Système d’Alerte et d’Information des Populations (SAIP) ?",
        ["– Se mettre en sécurité. – S’informer grâce aux médias et sites internet des autorités dès que leur consultation est possible. – Respecter les consignes des autorités."]
    ],
    [
        3,
        "Mettez le rétroviseur intérieur en position « nuit ». Si le rétroviseur de l’accompagnateur gène la manipulation du dispositif, l’explication suffit.",
        ["./img/003.jpeg", "Si le véhicule possède un système automatique de mise en position « nuit » du rétroviseur intérieur, le candidat l’indique. Nos 208 ne sont pas équipées de dispositif automatique."],
        "Quel est l’intérêt de la position nuit ?",
        ["Ne pas être ébloui par les feux du véhicule suiveur."],
        "Comment est composé le signal d’alerte du Système d’Alerte et d’Information des Populations (SAIP) diffusé par les sirènes ?",
        ["Il se compose de deux codes distincts : – le Signal National d’Alerte (SNA), variation du signal sur trois cycles successifs. – Le signal de fin d’alerte, signal continu."]
    ],
    [
        4,
        "Contrôlez l’état du flanc sur l’un des pneumatiques.",
        ["./img/004.jpeg", "En bon état (toute anomalie doit être signalée)."],
        "Citez un endroit où l’on peut trouver les pressions préconisées pour les pneumatiques ?",
        ["Elles sont indiquées : – soit sur une plaque sur une portière. – soit dans la notice d’utilisation du véhicule. – soit au niveau de la trappe à carburant."],
        "Sur autoroute, comment indiquer avec précision les lieux de l’accident depuis un téléphone portable ?",
        ["En indiquant le numéro del’autoroute, le sens de circulation et le point kilométrique."]
    ],
    [
        5,
        "Faites fonctionner les essuie-glaces avants du véhicule sur la position la plus rapide.",
        ["./img/005.jpeg"],
        "Comment détecter leur usure en circulation ?",
        ["En cas de pluie, lorsqu’ils laissent des traces sur le pare brise."],
        "Comment vérifier la respiration d’une victime ?",
        ["Regarder si le ventre et la poitrine se soulèvent et sentir de l’air à l’expiration."]
    ],
    [
        6,
        "Vérifiez l’état et la propreté des plaques d’immatriculation.",
        ["Vérification des plaques à l’avant et à l’arrière, propres et en bon état (toute anomalie doit être signalée)."],
        "Quelles sont les précautions à prendre en cas d’installation d’un porte vélo ?",
        ["La plaque d’immatriculation et les feux doivent être visibles."],
        "Qu’est ce qu’une perte de connaissance ?",
        ["C’est lorsque la victime ne répond pas et ne réagit pas mais respire."]
    ],
    [
        7,
        "Vérifiez la présence du gilet de haute visibilité ( » gilet jaune »).",
        ["Le candidat doit indiquer où il se trouve sans obligation de le sortir (Boite à gants)."],
        "En cas de panne ou d’accident, quel autre accessoire de sécurité est obligatoire ?",
        ["Le triangle de pré-signalisation."],
        "Si un dégagement d’urgence de la victime est nécessaire, où doit- elle être déplacée ?",
        ["Dans un endroit suffisamment éloigné du danger et de ses conséquences."]
    ],
    [
        8,
        "Montrez où s’effectue le contrôle du niveau du liquide de frein.",
        ["./img/008.jpeg", "Le candidat montre que le niveau est entre le mini et le maxi. Si le candidat a des difficultés pour ouvrir le capot, l’accompagnateur peut lui indiquer comment procéder."],
        "Quelle est la conséquence d’un niveau insuffisant du liquide de frein ?",
        ["Une perte d’efficacité du freinage."],
        "En cas de panne ou d’accident, quel équipement de sécurité doit être porté avant de quitter le véhicule ?",
        ["Il faut porter le gilet de haute visibilité avant de sortir du véhicule. Le terme  » gilet jaune » peut être utilisé par le candidat."]
    ],
    [
        9,
        "Vérifiez la présence du certificat d’immatriculation du véhicule (ou carte grise).",
        ["La photocopie est acceptée  et elle se trouve dans la boite à gant."],
        "Quels sont les deux autres documents obligatoires à présenter en cas de contrôle par les forces de l’ordre ?",
        ["L’attestation d’assurance et le permis de conduire."],
        "Pourquoi l’alerte auprès des services de secours doit-elle être rapide et précise ?",
        ["Pour permettre aux services des secours d’apporter les moyens adaptés aux victimes dans le délai le plus court."]
    ],
    [
        10,
        "Contrôlez l’état de tous les balais d’essuie-glace du véhicule.",
        ["Vérifiez  que la partie en caoutchouc ne soit pas déchirée"],
        "Quel est le risque de circuler avec des balais d’essuie glace défectueux ?",
        ["Une mauvaise visibilité en cas d’intempéries."],
        "Quels sont les numéros d’urgence à composer ?",
        ["– Le 18, numéro d’appel des sapeurs-pompiers. – Le 15, numéro d’appel des SAMU. – Le 112, numéro de téléphone réservé aux appels d’urgence et valide dans l’ensemble de l’Union Européenne."]
    ],
    [
        11,
        "Montrez l’indicateur de niveau de carburant.",
        ["./img/011.jpeg"],
        "Quelles sont les précautions à prendre lors du remplissage du réservoir ?",
        ["Arrêter le moteur, ne pas fumer, ne pas téléphoner."],
        "Quels comportements adopter en présence d’une victime qui ne répond pas et ne réagit pas, mais respire ?",
        ["– La placer en position stable sur le côté ou position latérale de sécurité. – Alerter les secours. – Surveiller la respiration de la victime jusqu’à l’arrivée des secours."]
    ],
    [
        12,
        "Montrez où s’effectue le remplissage du liquide de refroidissement.",
        ["./img/012.jpeg", "Le candidat ouvre le capot et montre le bocal."],
        "Quel est le danger si l’on complète le niveau du liquide lorsque le moteur est chaud ?",
        ["Un risque de brûlure."],
        "Comment arrêter une hémorragie ?",
        ["En appuyant fortement sur l’endroit qui saigne avec les doigts ou avec la paume de la main en mettant un tissu propre sur la plaie."]
    ],
    [
        13,
        "Actionnez le dégivrage de la lunette arrière et montrez le voyant.",
        ["./img/013.png"],
        "Quelle peut être la conséquence d’une panne de dégivrage de la lunette arrière ?",
        ["Une insuffisance ou une absence de visibilité vers l’arrière."],
        "Hors autoroute ou endroit dangereux, en cas de panne ou d’accident, où doit être placé le triangle de pré-signalisation ?",
        ["Le triangle de pré-signalisation doit être placé à une distance d’environ 30 m de la panne ou de l’accident, ou avant un virage, ou un sommet de côte."]
    ],
    [
        14,
        "Contrôlez l’état, la propreté et le fonctionnement de tous les clignotants côté trottoir.",
        ["./img/014.png", "Vérification des clignotants: propres, en bon état et fonctionnent (toute anomalie doit être signalée)."],
        "Quelle est la signification d’un clignotement plus rapide ?",
        ["Non fonctionnement de l’une des ampoules."],
        "Quelles sont les conditions pour réaliser le dégagement d’urgence d’une victime en présence d’un danger réel, immédiat et non contrôlable ?",
        ["La victime doit être visible, facile à atteindre et rien ne doit gêner son dégagement. Il faut être sûr(e) de pouvoir réaliser le dégagement de la victime."]
    ],
    [
        15,
        "Montrez le voyant d’alerte signalant une pression insuffisante d’huile dans le moteur.",
        ["./img/015.png"],
        "Quelles sont les conditions à respecter pour contrôler le niveau d’huile ?",
        ["Moteur froid et sur un terrain plat."],
        "Quelles sont les trois informations à transmettre aux services de secours ?",
        ["Le numéro de téléphone à partir duquel l’appel est émis, la nature et la localisation la plus précise du problème."]
    ],
    /*Cette question a deux images (une petite 016 et une grand 016bis*/
    [
        16,
        "Contrôlez l’état, la propreté et le fonctionnement du ou des feux de brouillard arrière.",
        ["./img/016bis.jpeg", "Vérification des feux, propres,en bon état et fonctionnent (toute anomalie doit être signalée)."],
        "Dans quels cas les utilise-t-on ?",
        ["Par temps de brouillard et neige."],
        "Par quels moyens doit être réalisée l’alerte des secours ?",
        ["L’alerte doit être donnée à l’aide d’un téléphone portable ou, à défaut, d’un téléphone fixe ou d’une borne d’appel d’urgence."]
    ],
    [
        17,
        "Vérifiez la présence de l’éthylotest.",
        ["Dans la boite à gants."],
        "A partir de quel taux d’alcoolémie, en période de permis probatoire, est-on en infraction ?",
        ["0,2 g /l, c’est à dire 0 verre, car dès le 1er verre ce seuil peut être dépassé."],
        "Quel comportement doit-on adopter en présence d’une victime en arrêt cardiaque ?",
        ["– ALERTER: alerter immédiatement les secours. – MASSER: pratiquer une réanimation cardio-pulmonaire. – DEFIBRILLER: utiliser un défibrillateur automatique (DAE) si possible."]
    ],
    [
        18,
        "Contrôlez l’état, la propreté et le fonctionnement des feux de détresse (Warning) à l’avant et à l’arrière.",
        ["Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée)."],
        "Dans quels cas doit-on les utiliser ?",
        ["En cas de panne, d’accident ou de ralentissement important."],
        "Dans quel cas peut-on positionner une victime en Position Latérale de Sécurité (PLS) ?",
        ["Si la victime ne répond pas, ne réagit pas et respire."]
    ],
    [
        19,
        "Montrez la commande de réglage du volant.",
        ["./img/019.jpeg", "Le candidat montre l’emplacement. Il ne lui est pas demandé de changer son réglage."],
        "Pourquoi est-il important de bien régler son volant ?",
        ["Citez deux exemples. – Le confort de conduite. – L’accessibilité aux commandes. – La visibilité du tableau de bord. – L’efficacité des airbags."],
        "Dans quelle situation peut-on déplacer une victime ?",
        ["En présence d’un danger réel, immédiat, non contrôlable. Le déplacement de la victime doit rester exceptionnel."]
    ],
    [
        20,
        "Contrôlez l’état, la propreté et le fonctionnement des feux de route.",
        ["./img/020bis.jpeg", "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée)."],
        "Citez un cas d’utilisation de l’appel lumineux.",
        ["– Pour avertir de son approche. – En cas de danger. – A la place de l’avertisseur sonore."],
        "En cas de panne ou d’accident, quel équipement de sécurité doit être porté avant de quitter le véhicule ?",
        ["Il faut porter le gilet de haute visibilité avant de sortir du véhicule. Le terme  «&nbsp;gilet jaune&nbsp;» peut être utilisé par le candidat."]
    ],
    [
        21,
        "Positionnez la commande pour diriger l’air vers le pare-brise.",
        ["./img/021.jpeg"],
        "Citez deux éléments complémentaires permettant un désembuage efficace.",
        ["– La commande de vitesse de ventilation. – La commande d’air chaud. – La climatisation."],
        "Quel est l’objectif du Signal d’Alerte et d’Information des Populations (SAIP) ?",
        ["Avertir la population d’un danger imminent ou qu’un événement grave est en train de se produire."]
    ],
    [
        22,
        "Montrez où doit s’effectuer le contrôle du niveau d’huile moteur.",
        ["./img/022.jpeg", "Le candidat montre la jauge. Pas de manipulation exigée."],
        "Quel est le principal risque d’un manque d’huile moteur ?",
        ["Un risque de détérioration ou de casse du moteur."],
        "Comment est diffusée l’alerte émise par le Signal d’Alerte et d’Information aux Populations (SAIP) ?",
        ["Grâce aux sirènes, aux médias tels que Radio France et France Télévision ou encore grâce à l’application SAIP."]
    ],
    [
        23,
        "Montrez le voyant d’alerte signalant un défaut de batterie.",
        ["./img/023.png"],
        "Qu’est-ce qui peut provoquer la décharge de la batterie, moteur éteint ?",
        ["Les feux ou accessoires électriques en fonctionnement."],
        "A partir de quel âge peut-on suivre une formation aux premiers secours ?",
        ["A partir de 10 ans."]
    ],
    [
        24,
        "Montrez l’emplacement de la batterie du véhicule.",
        ["./img/024.jpeg"],
        "Quelle est la solution en cas de panne de batterie pour démarrer le véhicule sans le déplacer ?",
        ["Brancher une deuxième batterie en parallèle (ou les « + » ensemble et les « – » ensemble) ou la remplacer."],
        "Pourquoi faut-il pratiquer immédiatement une réanimation cardio-pulmonaire sur une victime en arrêt cardiaque ?",
        ["Car les lésions du cerveau, surviennent dès les premières minutes."]
    ],
    [
        25,
        "De quelle couleur est le voyant qui indique une défaillance du système de freinage ?",
        ["./img/025.png"],
        "Quel est le risque de circuler avec un frein de parking mal desserré ?",
        ["Une dégradation du système de freinage."],
        "Hors autoroute ou endroit dangereux, en cas de panne ou d’accident, où doit être placé le triangle de pré-signalisation ?",
        ["Le triangle de pré-signalisation doit être placé à une distance d’environ 30 m de la panne ou de l’accident, ou avant un virage, ou un sommet de côte."]
    ],
    [
        26,
        "Contrôlez l’état, la propreté et le fonctionnement des feux de croisement.",
        ["./img/026.jpeg"],
        "Quelles sont les conséquences d’un mauvais réglage de ces feux ?",
        ["Une mauvaise vision vers l’avant et un risque d’éblouissement des autres usagers."],
        "Dans quelle situation peut-on déplacer une victime ?",
        ["En présence d’un danger réel, immédiat, non contrôlable. Le déplacement de la victime doit rester exceptionnel."]
    ],
    [
        27,
        "Montrez le voyant d’alerte signalant une température trop élevée du liquide de refroidissement.",
        ["./img/027bis.jpeg", "Le voyant rouge accolé à la jauge de température moteur."],
        "Quelle est la conséquence d’une température trop élevée de ce liquide ?",
        ["Une surchauffe ou une casse moteur."],
        "Lors d’un appel avec les services de secours, pourquoi devez-vous attendre que votre correspondant vous autorise à raccrocher ?",
        ["Car il peut nous conseiller ou nous guider dans la réalisation des gestes à faire, ou ne pas faire, jusqu’à l’arrivée des secours."]
    ],
    [
        28,
        "Vérifiez l’état et la propreté des dispositifs réfléchissants.",
        ["./img/028.jpeg", "Vérification des dispositifs, propres et en bon état (toute anomalie doit être signalée)."],
        "Quelle est l’utilité des dispositifs réfléchissants ?",
        ["Rendre visible le véhicule la nuit."],
        "A quel moment pouvez-vous mettre fin à un appel avec les secours ?",
        ["Uniquement lorsque notre correspondant nous invite à le faire."]
    ],
    [
        29,
        "Montrez le voyant signalant la mauvaise fermeture d’une portière.",
        ["./img/029.png"],
        "Quelle précaution dois-je prendre pour que les enfants installés à l’arrière ne puissent pas ouvrir leur portière ?",
        ["Actionner la sécurité enfant sur les deux portières arrière."],
        "Citez les trois manières d’évaluer l’état de conscience d’une victime.",
        [" – Lui poser des questions simples (« comment ça va ? », « vous m’entendez ? »). – Lui secouer doucement les épaules. – Lui prendre la main en lui demandant d’exécuter un geste simple (« serrez-moi la main »)."]
    ],
    [
        30,
        "Contrôlez l’état, la propreté et le fonctionnement des feux de position à l’avant et à l’arrière du véhicule.",
        ["./img/030.jpeg", "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée)."],
        "Par temps clair, à quelle distance doivent-ils être visibles ?",
        ["A 150 mètres."],
        "Quels sont les risques pour une personne en perte de connaissance qui est allongée sur le dos ?",
        ["L’arrêt respiratoire et l’arrêt cardiaque."]
    ],
    [
        31,
        "Actionnez les feux de détresse.",
        ["./img/031.jpeg"],
        "Quand les utilise-t-on ? En cas de panne, d’accident ou de ralentissement important.",
        ["A 150 mètres."],
        "Quels comportements adopter en cas de diffusion du signal d’alerte du Système d’Alerte et d’Information des Populations (SAIP) ?",
        ["– Se mettre en sécurité. – S’informer grâce aux médias et sites internet des autorités dès que leur consultation est possible. – Respecter les consignes des autorités."]
    ],
    [
        32,
        "Sur le flanc d’un pneumatique, désignez le repère du témoin d’usure de la bande de roulement.",
        ["./img/032ter.jpeg", "TWI ou logo Michelin ou triangle"],
        "Qu’est-ce que l’aquaplanage, et quelle peut être sa conséquence ?",
        ["La présence d’un film d’eau entre le pneumatique et la chaussée pouvant entraîner une perte de contrôle du véhicule."],
        "Si un dégagement d’urgence de la victime est nécessaire, où doit- elle être déplacée ?",
        ["Dans un endroit suffisamment éloigné du danger et de ses conséquences."]
    ],
    [
        33,
        "Montrez la commande permettant d’actionner le régulateur de vitesse.",
        ["./img/033.jpeg"],
        "Sans actionner la commande du régulateur, comment le désactiver rapidement ?",
        ["En appuyant sur la pédale de frein ou d’embrayage."],
        "Sur autoroute, comment indiquer avec précision les lieux de l’accident depuis un téléphone portable ?",
        ["En indiquant le numéro de l’autoroute, le sens de circulation et le point kilométrique."]
    ],
    [
        34,
        "Ouvrez la trappe à carburant et/ou vérifiez la bonne fermeture du bouchon.",
        ["./img/034.jpg"],
        "Quelles sont les précautions à prendre lors du remplissage du réservoir ?",
        ["Arrêter le moteur, ne pas fumer, ne pas téléphoner."],
        "Pourquoi l’alerte auprès des services de secours doit-elle être rapide et précise ?",
        ["Pour permettre aux services de secours d’apporter les moyens adaptés aux victimes dans le délai le plus court."]
    ],
    [
        35,
        "Sans l’actionner, montrez la commande de l’avertisseur sonore.",
        ["./img/035.webp"],
        "Dans quel cas peut-on utiliser l’avertisseur sonore en agglomération ?",
        ["En cas de danger immédiat."],
        "Pourquoi ne faut-il pas laisser une personne en perte de connaissance allongée sur le dos ?",
        ["Car elle risque un étouffement par : – Des liquides présents dans la gorge. – La chute de la langue en arrière."]
    ],
    [
        36,
        "Montrez où s’effectue le remplissage de l’huile moteur.",
        ["./img/036.jpeg", "Le candidat montre le bouchon de remplissage."],
        "Quel est le risque d’un manque d’huile moteur ?",
        ["Un risque de détérioration ou de casse du moteur."],
        "L’utilisation d’un Défibrillateur Automatisé (DAE) sur une victime qui n’est pas en arrêt cardiaque présente-t-elle un risque ?",
        ["Non, car le défibrillateur se déclenche uniquement quand la victime est en arrêt cardiaque."]
    ],
    [
        37,
        "Montrez la commande permettant de désactiver l’airbag du passager avant. Le bouton rouge se situe dans la boite à gant.",
        ["./img/037.jpeg", "Le bouton rouge se situe dans la boite à gant."],
        "Dans quelle situation doit-on le désactiver ?",
        ["Lors du transport d’un enfant à l’avant dans un siège auto, dos à la route."],
        "Quelles sont les conditions pour réaliser le dégagement d’urgence d’une victime en présence d’un danger réel, immédiat et non contrôlable ?",
        ["La victime doit être visible, facile à atteindre et rien ne doit gêner son dégagement. Il faut être sûr(e) de pouvoir réaliser le dégagement de la victime."]
    ],
    [
        38,
        "A l’aide de la plaque indicative, donnez la pression préconisée pour les pneumatiques arrières, véhicule chargé.",
        ["La plaque se situe en bas de la portière conducteur."],
        "A quelle fréquence est-il préconisé de vérifier la pression des pneus ?",
        ["Chaque mois, pour une utilisation normale de son véhicule, et avant chaque long trajet."],
        "Comment et pourquoi protéger une zone de danger en cas d’accident de la route ?",
        ["En délimitant clairement et largement la zone de danger de façon visible pour protéger les victimes et éviter un sur-accident."]
    ],
    [
        39,
        "Montrez le voyant signalant l’absence de bouclage de la ceinture de sécurité du conducteur.",
        ["./img/039.png"],
        "En règle générale, à partir de quel âge un enfant peut-il être installé sur le siège passager avant du véhicule ?",
        ["10 ans."],
        "Comment est composé le signal d’alerte du Système d’Alerte et d’Information des Populations (SAIP) diffusé par les sirènes ?",
        ["Il se compose de deux codes distincts : – Le Signal National d’Alerte (SNA), variation du signal sur trois cycles successifs. – Le signal de fin d’alerte, signal continu."]
    ],
    [
        40,
        "Vérifiez le fonctionnement de l’éclairage de la plaque d’immatriculation à l’arrière.",
        ["Il s’allume en même temps que les feux de position."],
        "Un défaut d’éclairage de la plaque lors du contrôle technique entraîne-t-il une contre-visite ?",
        ["Oui."],
        "Quelles sont les trois informations à transmettre aux services de secours ?",
        ["Le numéro de téléphone à parti duquel l’appel est émis, la nature et la localisation la plus précise du problème."]
    ],
    [
        41,
        "Vérifiez la présence de l’attestation d’assurance du véhicule ainsi que de sa vignette d'assurance.",
        ["L'attestation d'assurance se trouve dans la boîte à gants et la vignette se situe sur le pare-brise."],
        "Quels sont les deux autres documents obligatoires à présenter en cas de contrôle par les forces de l’ordre ?",
        ["Le certificat d’immatriculation « carte grise » et le permis de conduire."],
        "Qu’est ce qu’une hémorragie ?",
        ["C’est une perte de sang prolongée qui ne s’arrête pas. Elle imbibe de sang un mouchoir en quelques secondes."]
    ],
    [
        42,
        "Indiquez où se situe la sécurité enfant sur l’une des portières à l’arrière du véhicule.",
        ["./img/042.jpeg"],
        "Si la sécurité enfant est enclenchée, est-il possible d’ouvrir la portière arrière depuis l’extérieur ?",
        ["Oui."],
        "Quels sont les risques pour une personne victime d’une hémorragie ?",
        ["Entraîner pour la victime une détresse circulatoire ou un arrêt cardiaque."]
    ],
    [
        43,
        "Allumez le(s) feu(x) de brouillard arrière(s) et montrez le voyant correspondant.",
        ["./img/043bis.jpeg"],
        "Pouvez-vous les utiliser par forte pluie ?",
        ["Non."],
        "Quels sont les signes d’un arrêt cardiaque ?",
        ["La victime ne répond pas, ne réagit pas et ne respire pas ou présente une respiration anormale."]
    ],
    [
        44,
        "Avec l’assistance de l’accompagnateur, contrôlez l’état, la propreté et le fonctionnement du ou des feux de recul.",
        ["Allumez le contact (en non le moteur) et enclencher la marche arrière. Vérification des feux, propres, en bon état et qui fonctionnent (toute anomalie doit être signalée)."],
        "Quelles sont leurs deux utilités ?",
        ["– Éclairer la zone de recul la nuit. – Avertir les autres usagers de la manœuvre."],
        "Qu’est ce qu’un défibrillateur automatisé externe (DAE) ?",
        ["./img/044.jpeg", "C’est un appareil qui peut permettre de rétablir une activité cardiaque normale à une victime en arrêt cardiaque."]
    ],
    [
        45,
        "Montrez comment régler la hauteur de l’appui-tête du siège conducteur.",
        ["./img/045.webp"],
        "Quelle est son utilité ?",
        ["Permet de retenir le mouvement de la tête en cas de choc et de limiter les blessures."],
        "Par quels moyens doit être réalisée l’alerte des secours ?",
        ["L’alerte doit être donnée à l’aide d’un téléphone portable ou, à défaut, d’un téléphone fixe, ou d’une borne d’appel d’urgence."]
    ],
    /*La question gagnerait à avoir une image montrant les feux de stop*/
    [
        46,
        "Avec l’assistance de l’accompagnateur, contrôlez l’état, la propreté et le fonctionnement des feux de stop.",
        ["Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée)."],
        "Quelle est la conséquence en cas de panne des feux de stop ?",
        ["Un manque d’information pour les usagers suiveurs et un risque de collision."],
        "Lors d’un appel avec les services de secours, pourquoi devez-vous attendre que votre correspondant vous autorise à raccrocher ?",
        ["Car il peut nous conseiller ou nous guider dans la réalisation des gestes à faire, ou ne pas faire, jusqu’à l’arrivée des secours."]
    ],
    [
        47,
        "De quelle couleur est le voyant qui indique au conducteur que le feu de brouillard arrière est allumé ?",
        ["./img/047.png"],
        "Quelle est la différence entre un voyant orange et un voyant rouge ?",
        ["– Rouge : Une anomalie de fonctionnement ou un danger. – Orange : un élément important."],
        "Qu’est ce qu’un arrêt cardiaque ?",
        ["Le cœur ne fonctionne plus ou fonctionne d’une façon anarchique."]
    ],
    [
        48,
        "Ouvrez et refermez le capot, puis vérifiez sa bonne fermeture.",
        ["./img/048.jpeg"],
        "En roulant, quel est le risque d’une mauvaise fermeture du capot ?",
        ["Un risque d’ouverture du capot pouvant entraîner un accident."],
        "Quel est le risque principal d’un arrêt cardiaque sans intervention des secours ?",
        ["La mort de la victime qui survient en quelques minutes."]
    ],
    [
        49,
        "Montrez la commande de recyclage de l’air.",
        ["./img/049.jpeg"],
        "Quel peut être le risque de maintenir le recyclage de l’air de manière prolongée ?",
        ["Un risque de mauvaise visibilité par l’apparition de buée sur les surfaces vitrées."],
        "Quels sont les risques pour une personne en perte de connaissance qui est allongée sur le dos ?",
        ["L’arrêt respiratoire et l’arrêt cardiaque."]
    ],
    [
        50,
        "Montrez l’orifice de remplissage du produit lave-glace.",
        ["./img/050.jpeg"],
        "Quel est le principal risque d’une absence de liquide lave-glace ?",
        ["Une mauvaise visibilité."],
        "Pourquoi faut-il pratiquer immédiatement une réanimation cardio-pulmonaire sur une victime en arrêt cardiaque ?",
        ["Car les lésions du cerveau surviennent dès les premières minutes."]
    ],
]

function naviguerQuestions(x) {
    choisirQuestion(x);
}

function derniereQuestion() {
    let currentIndex = parseInt(numeroQuestion.innerText) - 1;
    if (currentIndex != 0) {
        naviguerQuestions(currentIndex - 1);
        boutonQuestionSuivante.removeAttribute("disabled");
        currentIndex = parseInt(numeroQuestion.innerText) - 1;
        if (currentIndex == 0) {
            boutonQuestionPrecedente.setAttribute("disabled", true);
        }
    }
    if (currentIndex == 0) {
        boutonQuestionPrecedente.setAttribute("disabled", true);
    }
}

boutonQuestionPrecedente.addEventListener('click', () => {
    derniereQuestion();
});

function prochaineQuestion() {
    let currentIndex = parseInt(numeroQuestion.innerText) - 1;
    if (currentIndex != (data.length)) {
        naviguerQuestions(currentIndex + 1);
        boutonQuestionPrecedente.removeAttribute("disabled");
        currentIndex = parseInt(numeroQuestion.innerText) - 1;
        if (currentIndex == (data.length - 1)) {
            boutonQuestionSuivante.setAttribute("disabled", true);
        }
    }
    if (currentIndex == (data.length)) {
        boutonQuestionSuivante.setAttribute("disabled", true);
    }
}

boutonQuestionSuivante.addEventListener('click', () => {
    prochaineQuestion();
});

function pickRandom() {
    x = (Math.floor(Math.random() * data.length));
    choisirQuestion(x);
    if (x != 0 || x != data.length) {
        boutonQuestionPrecedente.removeAttribute("disabled");
        boutonQuestionSuivante.removeAttribute("disabled");
    }
    if (x == 0) {
        boutonQuestionPrecedente.setAttribute("disabled", true);
    }
    if (x == (data.length - 1)) {
        boutonQuestionSuivante.setAttribute("disabled", true);
    }
}

function choisirQuestion (x) {
    /*random = (Math.floor(Math.random() * data.length));*/
    question = data[x]; 

    if (question) {
        numeroQuestion.innerText = question[0];

        if (question[1]) {
            question1.innerText = question[1];

            if (question[2].length == 2) {
                imgReponse1.style.display = "block";
                imgReponse1.src = question[2][0];
                reponse1.style.display = "block";
                reponse1.innerText = question[2][1];
            }
            else if (question[2].length == 1 && question[2][0].charAt(0) == ".") {
                imgReponse1.style.display = "block";
                imgReponse1.src = question[2][0];
                reponse1.innerText = "";
                reponse1.style.display = "none";
            }
            else if (question[2].length == 1 && question[2][0].charAt(0) != ".") {
                imgReponse1.style.display = "none";
                reponse1.style.display = "block";
                reponse1.innerText = question[2][0];
            }
        }

        if (question[3]) {
            question2.innerText = question[3];

            if (question[4].length == 2) {
                imgReponse2.style.display = "block";
                imgReponse2.src = question[4][0];
                reponse2.style.display = "block";
                reponse2.innerText = question[4][1];
            }
            else if (question[4].length == 1 && question[4][0].charAt(0) == ".") {
                imgReponse2.style.display = "block";
                imgReponse2.src = question[4][0];
                reponse2.innerText = "";
                reponse2.style.display = "none";
            }
            else if (question[4].length == 1 && question[4][0].charAt(0) != ".") {
                imgReponse2.style.display = "none";
                reponse2.style.display = "block";
                reponse2.innerText = question[4][0];
            }
        }

        if (question[5]) {
            question3.innerText = question[5];

            if (question[6].length == 2) {
                imgReponse3.style.display = "block";
                imgReponse3.src = question[6][0];
                reponse3.style.display = "block";
                reponse3.innerText = question[6][1];
            }
            else if (question[6].length == 1 && question[6][0].charAt(0) == "/") {
                imgReponse3.style.display = "block";
                imgReponse3.src = question[6][0];
                reponse3.innerText = "";
                reponse3.style.display = "none";
            }
            else if (question[6].length == 1 && question[6][0].charAt(0) != "/") {
                imgReponse3.style.display = "none";
                reponse3.style.display = "block";
                reponse3.innerText = question[6][0];
            }
        }
    }
}

/*pickRandom();*/
naviguerQuestions(0);
boutonQuestionPrecedente.setAttribute("disabled", true);

boutonChangerQuestion.addEventListener('click', () => {
    pickRandom();
    containerReponse1.removeAttribute('open');
    containerReponse2.removeAttribute('open');
    containerReponse3.removeAttribute('open');
});
        