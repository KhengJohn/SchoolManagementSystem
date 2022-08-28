//State lists
var countryState = new Array();

countryState['Nigeria'] = new Array('Select State', 'FCT', 'Abia', 'Adamawa', 'Akwa Ibom',
    'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo',
    'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi',
    'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers',
    'Sokoto', 'Taraba', 'Yobe', 'Zamfara');

//Local Government Lists
var lgc = new Array();

lgc['Nigeria'] = new Array();

lgc['Nigeria']['Select State'] = new Array('Select LGC');

lgc['Nigeria']['FCT'] = new Array('Abaji', 'Abuja Municipal', 'Gwagwalada', 'Kuje', 'Bwari', 'Kwali');

lgc['Nigeria']['Abia'] = new Array('Aba North', 'Aba South', 'Arochukwu', 'Bende',
    'Ikawuno', 'Ikwuano', 'Isiala-Ngwa North', 'Isiala-Ngwa South',
    'Isikwuato', 'Isuikwuato', 'Nneochi', 'Obi Ngwa', 'Obi Ngwa',
    'Obioma Ngwa', 'Obioma-Ngwa', 'Ohafia', 'Ohaozara', 'Osisioma',
    'Ugwunagbo', 'Ukwa West', 'Ukwu East', 'Umuahia',
    'Umuahia North', 'Umuahia South', 'Umuahia-North',
    'Umunneochi');

lgc['Nigeria']['Adamawa'] = new Array('Demsa', 'Fufore', 'Ganye', 'Girei', 'Gombi',
    'Guyuk', 'Hong', 'Jada', 'Jimeta', 'Lamurde', 'Madagali',
    'Maiha', 'Mayo-Belwa', 'Michika', 'Mubi-North', 'Mubi-South',
    'Numan', 'Shelleng', 'Song', 'Toungo', 'Yola');

lgc['Nigeria']['Akwa Ibom'] = new Array('Abak', 'Eastern-Obolo', 'Eket', 'Ekpe-Atani',
    'Esit Ekit', 'Essien-Udim', 'Etim-Ekpo', 'Etinam', 'Ibeno',
    'Ibesikpo-Asutan', 'Ibiono-Ibom', 'Ika', 'Ikono', 'Ikot-Abasi',
    'Ikot-Ekpene', 'Ini', 'Itu', 'Mbo', 'Mkpat-Enin', 'Nsit-Ibom',
    'Nsit-Ubium', 'Obot-Akara', 'Okobo', 'Onna', 'Oron',
    'Oruk Anam', 'Udung-Uko', 'Ukanefun', 'Uquo Ibeno',
    'Uru Offong Oruko', 'Uruan', 'Uruk-Anam', 'Uyo');

lgc['Nigeria']['Anambra'] = new Array('Aguata', 'Akwa North', 'Anambra',
    'Anambra-West', 'Anaocha', 'Awka-North', 'Awka-South',
    'Ayamelum', 'Dunukofia', 'Ekwusigo', 'Idemili',
    'Idemili-North', 'Idemili-South', 'Ihiala', 'Imo', 'Nibo',
    'Njikoka', 'Nnewi', 'Nnewi-North', 'Nnewi-South', 'Ogbaru',
    'Olumba', 'Onitsha-North', 'Onitsha-South', 'Orumba-North',
    'Orumba-South', 'Oti', 'Otu-Ocha', 'Ubuluizor Ihiala', 'Uyi');

lgc['Nigeria']['Bauchi'] = new Array('Alkaleri', 'Bauchi', 'Bogoro', 'Damban',
    'Darazo', 'Dass', 'Gamawa', 'Ganjuwa', 'Giade', 'Itas/Gadau',
    'JamaAre', 'Katagum', 'Kirfi', 'Misau', 'Ningi', 'Shira',
    'Tafawa-Balewa', 'Toro', 'Warji', 'Zaki');

lgc['Nigeria']['Bayelsa'] = new Array('Adagbabiri', 'Brass', 'Ekeremor', 'Kembe',
    'Kolokuma', 'Kolokuma/Opkuma', 'Nembe', 'Ogbia', 'Sagbama',
    'Southern-Ijaw', 'Toru-Abubo', 'Yenegoa');

lgc['Nigeria']['Benue'] = new Array('Ado', 'Agatu', 'Apa', 'Buruku', 'Gboko', 'Guma',
    'Gwer-East', 'Gwer-West', 'Katsina-Ala', 'Konshisha', 'Kwande',
    'Logo', 'Makurdi', 'Ogbadibo', 'Ohimini', 'Oju', 'Okpokwu',
    'Otukpo', 'Oturkpa', 'Tarka', 'Ukum', 'Ushongo', 'Vandeikya');

lgc['Nigeria']['Borno'] = new Array('Abadan', 'Askira-Uba', 'Bama', 'Bayo', 'Biu',
    'Chibok', 'Damboa', 'Dikwa', 'Gubio', 'Guzamala', 'Gwoza',
    'Hawul', 'Jere', 'Kaga', 'Kala/Balge', 'Konduga', 'Kukawa',
    'Kwaya-Kusar', 'Mafa', 'Magumeri', 'Maiduguri', 'Marte',
    'Mobbar', 'Mongunu', 'Ngala', 'Nganzai', 'Shani');

lgc['Nigeria']['Cross River'] = new Array('Abi', 'Abuochichie', 'Akamkpa', 'Akpabuyo',
    'Bakassi', 'Bekwara', 'Biasi', 'Boki', 'Calabar-Municipal',
    'Calabar-South', 'Etunk', 'Ikom', 'Obanliku', 'Obubra', 'Obudu',
    'Odukpani', 'Ogoja', 'Ugep-North', 'Yakurr', 'Yala');

lgc['Nigeria']['Delta'] = new Array('Aniocha North', 'Aniocha-North',
    'Aniocha-South', 'Bomadi', 'Burutu', 'Effurun', 'Ethiope-East',
    'Ethiope-West', 'Idu', 'Ika-Ne', 'Ika-North-East', 'Ika-South',
    'Ikpemili', 'Isoko-North', 'Isoko-South', 'Ndokwa-East',
    'Ndokwa-North', 'Ndokwa-South', 'Ndokwa-West', 'Okpe',
    'Okwuani', 'Oleh', 'Oshielli-North', 'Oshimili',
    'Oshimili-North', 'Oshimili-South', 'Osimili',
    'Osimili-North', 'Osimili-South', 'Patani', 'Sapele', 'Udokwa',
    'Udu', 'Ughelli-North', 'Ughelli-South', 'Ukwuani', 'Uraun',
    'Urwie', 'Uvie', 'Uvwei', 'Uwvie', 'Warri-Central',
    'Warri-North', 'Warri-South');

lgc['Nigeria']['Ebonyi'] = new Array('Abakaliki', 'Afikpo-North', 'Afikpo-South',
    'Bomadim', 'Ebonyi', 'Ezza-North', 'Ezza-South', 'Ikwo',
    'Ishielu', 'Ivo', 'Izzi', 'Obaukwu', 'Ohakwu', 'Onicha', 'Ukaba');

lgc['Nigeria']['Edo'] = new Array('Afokpella', 'Afuze', 'Agbazilo', 'Akoko Edo',
    'Akoko-Edo', 'Egor', 'Esan-Central', 'Esan-North-East',
    'Esan-North-East', 'Esan-South-East', 'Esan-West',
    'Etsako-Central', 'Etsako-East', 'Etsako-West', 'Igueben',
    'Iguobano North East', 'Ikpoba-Okha', 'Ohunmwode', 'Ologbo',
    'Opoji Irrua', 'Oredo', 'Orhionmwon', 'Ovia-North-East',
    'Ovia-South-West', 'Owan East', 'Owan-East', 'Owan-West',
    'Uhunmwonde');

lgc['Nigeria']['Ekiti'] = new Array('Ado-Ekiti', 'Aiyekire', 'Efon', 'Ekiti-East',
    'Ekiti-South-West', 'Ekiti-West', 'Emure/Ise/Orun', 'Gbonyin',
    'Ido-Osi', 'Ijero', 'Ikare', 'Ikere', 'Ikole', 'Ilejemeje',
    'Irepodun/Ifelodun', 'Ise-Orun', 'Moba', 'Oye');

lgc['Nigeria']['Enugu'] = new Array('Aninri', 'Awgu', 'Enugu-East', 'Enugu-North',
    'Enugu-South', 'Ezeagu', 'Igbo-Etiti', 'Igbo-Eze-North',
    'Igbo-Eze-South', 'Isi-Uzo', 'Nkanu-East', 'Nkanu-West',
    'Nsukka', 'Nukanu East', 'Oji-River', 'Udenu', 'Udi',
    'Uzo-Uwani');

lgc['Nigeria']['Gombe'] = new Array('Akko', 'Balanga', 'Billiri', 'Dukku', 'Funakaye',
    'Gombe', 'Kaltungo', 'Kwami', 'Nafada/Bajoga', 'Shomgom',
    'Yamaltu/Deba');

lgc['Nigeria']['Imo'] = new Array('Aboh-Mbaise', 'Ahiazu-Mbaise', 'Dral-Esat',
    'Ehime-Mbano', 'Ezeobodo', 'Ezinihitte', 'Ideato',
    'Ideato-North', 'Ideato-South', 'Ihitte/Uboma', 'Ikeduru',
    'Isiala-Mbano', 'Isu', 'Mbaitoli', 'Ngor-Okpala', 'Njaba',
    'Nkwerre', 'Nwangele', 'Obowo', 'Oguta', 'Ohaji-Egbema',
    'Okigwe', 'Onuimo', 'Orlu', 'Oro-West', 'Orsu', 'Oru-East',
    'Oru-West', 'Owerri-Municipal', 'Owerri-North', 'Owerri-West',
    'Ugiri-Ike Ikeduru', 'Ugiri-Ikedikeduru', 'Unbano',
    'Zinihitte');

lgc['Nigeria']['Jigawa'] = new Array('Auyo', 'Babura', 'Biriniwa', 'Birnin-Kudu',
    'Bosuwa', 'Buji', 'Dutse', 'Gagarawa', 'Garki', 'Gumel', 'Guri',
    'Gwaram', 'Gwiwa', 'Hadejia', 'Jahun', 'Kafin-Hausa',
    'Kaugama', 'Kazaure', 'Kirkasamma', 'Maigatari',
    'Malam-Maduri', 'Miga', 'Ringim', 'Roni', 'Sule-Tankarkar',
    'Taura', 'Yankwashi');

lgc['Nigeria']['Kebbi'] = new Array('Aleiro', 'Arewa-Dandi', 'Argungu', 'Augie',
    'Bagudo', 'Birnin-Kebbi', 'Bumza', 'Dandi', 'Danko', 'Fakai',
    'Gwandu', 'Jega', 'Kalgo', 'Koko-Besse', 'Maiyama', 'Ngaski',
    'Sakaba', 'Shanga', 'Suru', 'Wasagu', 'Yauri', 'Zuru');

lgc['Nigeria']['Kaduna'] = new Array('Birnin-Gwari', 'Chikun', 'Giwa', 'Gwagwada',
    'Igabi', 'Ikara', 'Jaba', 'Jema A', 'Kachia', 'Kaduna-North',
    'Kagarko', 'Kajuru', 'Kaura', 'Kauru', 'Koka/Kawo',
    'Kubah', 'Kudan', 'Lere', 'Makarfi', 'Sabon-Gari',
    'Sanga', 'Soba', 'Tudun-Wada/Makera', 'Zango-Kataf', 'Zaria');

lgc['Nigeria']['Kano'] = new Array('Ajingi', 'Albasu', 'Bagwai', 'Bebeji', 'Bichi',
    'Bunkure', 'Dala', 'Dambatta', 'Dawakin-Kudu', 'Dawakin-Tofa',
    'Doguwa', 'Fagge', 'Gabasawa', 'Garko', 'Garun-Mallam',
    'Gaya', 'Gezawa', 'Gwale', 'Gwarzo', 'Kano-Municipal',
    'Karaye', 'Kibiya', 'Kiru', 'Kumbotso', 'Kunchi', 'Kura',
    'Madobi', 'Makoda', 'Minjibir', 'Nasarawa', 'Rano',
    'Rimin-Gado', 'Rogo', 'Shanono', 'Sumaila', 'Takai',
    'Tarauni', 'Tofa', 'Tsanyawa', 'Tudun-Wada', 'Ungogo', 'Warawa',
    'Wudil');

lgc['Nigeria']['Kogi'] = new Array('Adavi', 'Ajaokuta', 'Ankpa', 'Dekina', 'Ibaji',
    'Idah', 'Igalamela', 'Ijumu', 'Ikoyi-Ijumu', 'Kabba/Bunu',
    'Kogi', 'Lokoja', 'Mopa-Muro-Mopi', 'Obaji', 'Ofu',
    'Ogori/Magongo', 'Okehi', 'Okene', 'Olamaboro', 'Omala', 'Oru',
    'Oyi', 'Yagba-East', 'Yagba-West');

lgc['Nigeria']['Katsina'] = new Array('Bakori', 'Batagarawa', 'Batsari', 'Baure',
    'Bindawa', 'Charanchi', 'Dan-Musa', 'Dandume', 'Danji', 'Daura',
    'Dutsi', 'Dutsinma', 'Faskari', 'Funtua', 'Ingawa', 'Jibia',
    'Kafur', 'Kaita', 'Kankara', 'Kankia', 'Katsina', 'Kurfi',
    'Kusada', 'Mai-Adua', 'Malumfashi', 'Mani', 'Mashi', 'Matazu',
    'Musawa', 'Rimi', 'Sabuwa', 'Safana', 'Sandamu', 'Zango');

lgc['Nigeria']['Kwara'] = new Array('Asa', 'Baruten', 'Edu', 'Ekiti', 'Ilorin-East',
    'Ilorin-South', 'Ilorin-West', 'Isin', 'Kaiama', 'Moro',
    'Offa', 'Oke-Ero', 'Oyun', 'Pategi');

lgc['Nigeria']['Lagos'] = new Array('Agege', 'Ajeromi-Ifelodun', 'Alimosho',
    'Amuwo-Odofin', 'Apapa', 'Badagry', 'Epe', 'Eti-Osa',
    'Ibeju-Lekki', 'Ifako-Ijaiye', 'Ikeja', 'Ikorodu', 'Island',
    'Kosofe', 'Lagos-Island', 'Lagos-Mainland', 'Mushin', 'Ojo',
    'Oshodi-Isolo', 'Shomolu', 'SuruLere', 'Yewa-South');

lgc['Nigeria']['Nasarawa'] = new Array('Akwanga', 'Awe', 'Doma', 'Karu', 'Keana',
    'Keffi', 'Kokona', 'Lafia', 'Nassawara', 'Nassawara Eggon',
    'Obi', 'Wambu');

lgc['Nigeria']['Niger'] = new Array('Agaie', 'Agwara', 'Bida', 'Borgu', 'Bosso',
    'Chanchaga', 'Edati', 'Gbako', 'Gurara', 'Katcha', 'Kontagora',
    'Lapai', 'Lavun', 'Magama', 'Mariga', 'Mashegu', 'Mokwa',
    'Muya', 'Paikoro', 'Rafi', 'Rijau', 'Shiroro', 'Suleja',
    'Tafa', 'Wushishi');

lgc['Nigeria']['Ogun'] = new Array('Abeokuta-North', 'Abeokuta-South', 'Adoodo-Ota',
    'Ewekoro', 'Idarapo', 'Iffo-Otta', 'Ifo', 'Igbado-North',
    'Igbado-South', 'Ijebu-East', 'Ijebu-North',
    'Ijebu-North-East', 'Ijebu-Ode', 'Ikenne', 'Ilishan Remo',
    'Ilugun-Alaro', 'Imeko-Afon', 'Ipokia', 'lgcyekpe',
    'Obafemi-Owode', 'Odedah', 'Odogbolu', 'Ogun-Waterside',
    'Remo-North', 'Shagamu', 'Yewa');

lgc['Nigeria']['Ondo'] = new Array('Akoko', 'Akoko-North', 'Akoko-North-West',
    'Akoko-South', 'Akoko-South-East', 'Akure', 'Akure-North',
    'Akure-South', 'Ese-Odo', 'Idanre', 'Ifedore', 'Igbisin',
    'Ikale', 'Ilaje', 'Ilaje-West', 'Ile-Oluji-Okeigbo', 'Irele',
    'Odigbo', 'Oka Ak0Ko', 'Okiti Pupa Ijuodo', 'Okiti-Pupa',
    'Ondo', 'Ondo West', 'Ondo-East', 'Ose', 'Owo');

lgc['Nigeria']['Osun'] = new Array('Atakumosa', 'Atakumosa East', 'Ayeda-Ade',
    'Ayedire', 'Boluwaduro', 'Boripe', 'Ede', 'Ede North',
    'Egbedore', 'Ejigbo', 'Ife', 'Ife North', 'Ife South',
    'Ife-Central', 'Ife-East', 'Ifelodun', 'Ila', 'Ilesa-East',
    'Ilesa-West', 'Ilesha', 'Ilesha West', 'Irepodun', 'Irewole',
    'Isokan', 'Iwo', 'Obokun', 'Odo-Otin', 'Ola Oluwa',
    'Olorunda', 'Ori-Ade', 'Orolu', 'Osogbo');

lgc['Nigeria']['Oyo '] = new Array('Afijio', 'Akinyele', 'Atiba', 'Atigbo', 'Egbeda',
    'Ibadan-Central', 'Ibadan-North-East', 'Ibadan-North-West',
    'Ibadan-South-East', 'Ibadan-South-West', 'Ibarapa-Central',
    'Ibarapa-East', 'Ibarapa-North', 'Ido', 'Ifedayo',
    'Ifeloju', 'Irepo', 'Iseyin', 'Itseiwaju', 'Iwajowa',
    'Kajola', 'Lagelu', 'Odo-Oluwa', 'Ogbomosho-North',
    'Ogbomosho-South', 'Olorunsogo', 'Oluyole', 'Ona-Ara',
    'Orelope', 'Ori-Ire', 'Oyo-West', 'Saki-East',
    'Saki-West', 'Surulere');

lgc['Nigeria']['Plateau'] = new Array('Barkin-Ladi', 'Bassa', 'Bokkos', 'Jos-East',
    'Jos-North', 'Jos-South', 'Kanam', 'Kanke', 'Langtang-North',
    'Langtang-South', 'Mangu', 'Mikang', 'Pankshin',
    'Quan Anpan', 'Riyom', 'Shendam', 'Wase');

lgc['Nigeria']['Rivers'] = new Array('Aboa/Odual', 'Ahoada-East', 'Ahoada-West',
    'Akukutoru', 'Andoni', 'Asari-Toru', 'Bonny', 'Buguma',
    'Degema', 'Eleme', 'Elfane', 'Emuoha', 'Etche', 'Gokana',
    'Ikwerre', 'Khana', 'Obia/Akpor', 'Ogba-Egbema-Ndoni',
    'Ogba/Egbema/Ndoni', 'Ogu/Bolo', 'Okirika', 'Omuma',
    'Opobo/Nkoro', 'Oyigbo', 'Port-Harcourt', 'Tai');

lgc['Nigeria']['Sokoto'] = new Array('Binji', 'Bodinga', 'Dange-Shuni', 'Gada',
    'Goronyo', 'Gudu', 'Gwadabawa', 'Illela', 'Kebbe', 'Kware',
    'Raba', 'Sabo-Birni', 'Shagari', 'Silame', 'Sokoto-North',
    'Sokoto-South', 'Tambuwal', 'Tangaza', 'Tureta', 'Wamakko',
    'Wurno', 'Yabo');

lgc['Nigeria']['Taraba'] = new Array('Ardo-Kola', 'Bali', 'Donga', 'Gashaka',
    'Gassol', 'Ibi', 'Jalingo', 'Karim-Lamido', 'Kurmi', 'Lau',
    'Oilingo', 'Sardauna', 'Takum', 'Ussa', 'Wukari', 'Yorro',
    'Zing');

lgc['Nigeria']['Yobe'] = new Array('Bade', 'Borsali', 'Damaturu', 'Fika', 'Fune',
    'Geidam', 'Gogaram', 'Gujba', 'Gulani', 'Jakusko',
    'Karasuwa', 'Machina', 'Nangere', 'Nguru', 'Potiskum',
    'Tarmua', 'Yunusari', 'Yusufari');

lgc['Nigeria']['Zamfara'] = new Array('Anka', 'Bakura', 'Bukkuyum', 'Bungudu', 'Gumi',
    'Gusau', 'Isa', 'Kaura-Namoda', 'Kiyawa', 'Maradun', 'Maru',
    'Shinkafi', 'Talata-Mafara', 'Tsafe', 'Zurmi');

function setStates() {
    countrySel = document.getElementById('country');
    stateList = countryState[countrySel.value];
    if (stateList !== null) {
        changeSelect('countryState', stateList, stateList);
        setLgcs();
    }
}

function setLgcs() {
    countrySel = document.getElementById('country');
    stateSel = document.getElementById('countryState');
    lgcList = lgc[countrySel.value][stateSel.value];
    changeSelect('lgc', lgcList, lgcList);
}

function changeSelect(fieldId, newOptions, newValues) {
    selectField = document.getElementById(fieldId);
    selectField.options.length = 0;
    try {
        for (i = 0; i < newOptions.length; i++) {
            selectField.options[selectField.length] = new Option(newOptions[i], newValues[i]);
        }
    } catch (e) {
        countrySel = document.getElementById('country').value;
        selectField.options[selectField.length] = new Option(countrySel, countrySel);
    }
}

//function addLoadEvent(func){
//    var oldOnLoad = window.onload;
//    if(typeof window.onload != 'function'){
//        window.onload = func;
//    }else{
//        window.onload = function () {
//            if(oldOnLoad){
//                oldOnLoad();
//            }
//            func();
//        }
//    }
//}
//
//addLoadEvent(function () {
//    setStates();
//});