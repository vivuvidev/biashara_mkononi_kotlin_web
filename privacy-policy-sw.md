# Sera ya Faragha — BiasharaMkononi POS

**Imesasishwa: Juni 2025**
**Msanidi: FlavixLabs**
**Mawasiliano: [your-email@flavixlabs.com]**

---

## 1. Utangulizi

BiasharaMkononi POS ("Programu") ni programu ya mauzo ya maduka kwa biashara ndogo ndogo, iliyotengenezwa na FlavixLabs. Sera hii ya Faragha inaeleza taarifa gani tunazokusanya, jinsi tunavyozitumia, na haki zako kuhusu data yako.

Kwa kutumia Programu, unakubaliana na mazoea yaliyoelezwa katika sera hii.

---

## 2. Taarifa Tunazokusanya

### 2.1 Taarifa za Akaunti
Unapoingia kupitia Google, tunapokea kutoka kwa akaunti yako ya Google:
- Jina kamili
- Anwani ya barua pepe
- URL ya picha ya wasifu wa Google
- Kitambulisho cha kipekee cha mtumiaji wa Firebase

Taarifa hii inatumika tu kutambua akaunti yako na haiuzwi au kushirikiwa na watangazaji kamwe.

### 2.2 Data ya Biashara Unayoingiza
Programu huhifadhi taarifa zifuatazo za biashara unazotoa:
- **Wasifu wa duka:** jina la duka, nembo, anwani, nambari ya simu, barua pepe ya biashara, nambari ya usajili wa kodi, mipangilio ya sarafu, na maandishi ya kichwa/mwisho wa risiti
- **Katalogi ya bidhaa:** majina ya bidhaa, bei, bei za gharama, idadi ya hisa, nambari za msimbo wa bidhaa, picha za bidhaa, na maelezo
- **Miamala ya mauzo:** jumla za miamala, punguzo, kiasi cha kodi, njia ya malipo (Pesa Taslimu, Kadi, au Pesa ya Simu), muhtasari wa kila kipengele, na alama za wakati
- **Maagizo yaliyowekwa:** lebo za maagizo za hiari na maelezo ya vipengele

### 2.3 Mapendeleo ya Kifaa (Ndani tu)
Yafuatayo huhifadhiwa kwenye kifaa chako tu na hayapitishwi popote:
- Upendeleo wa lugha uliyochagua
- Jina la printa ya Bluetooth iliyounganishwa na anwani ya MAC
- Upendeleo wa aina ya printa
- Taarifa za kipindi cha sasa

---

## 3. Jinsi Tunavyotumia Taarifa Zako

Tunatumia taarifa zako pekee kutoa utendakazi wa Programu:

- **Uthibitisho:** kuthibitisha utambulisho wako na kulinda akaunti yako
- **Ulandanisho wa data:** kuhifadhi nakala ya data yako ya biashara kwenye seva zetu ili ipatikane kwenye vifaa mbalimbali na kusalia baada ya usakinishaji upya
- **Uhifadhi wa picha:** kuhifadhi nembo ya duka lako na picha za bidhaa salama katika hifadhi ya wingu
- **Usimamizi wa mpango:** kulazimisha mipaka ya mpango wako wa usajili (idadi ya maduka, bidhaa)

Hatutumii data yako kwa matangazo, uundaji wa maelezo, au madhumuni yoyote zaidi ya kuendesha Programu.

---

## 4. Uhifadhi na Usalama wa Data

### 4.1 Uhifadhi wa Ndani ya Kifaa
Data yako yote huhifadhiwa ndani ya kifaa chako kwanza katika hifadhidata iliyofichwa ya SQLite. Hifadhidata hii ni ya kibinafsi kwa Programu na haiwezi kufikiwi na programu nyingine kwenye kifaa chako.

### 4.2 Seva Yetu ya Nyuma
Kifaa chako kinapokuwa mtandaoni, data hulandanishwa na seva yetu ya nyuma iliyohostishwa kwenye Render.com, na hifadhidata ya PostgreSQL iliyohostishwa kwenye Supabase. Mawasiliano yote kati ya Programu na seva yetu hutumia HTTPS na uthibitisho wa JWT.

### 4.3 Uhifadhi wa Picha
Nembo za maduka na picha za bidhaa huhifadhiwa katika bakuli ya hifadhi ya wingu ya Cloudflare R2. Picha zimepangwa kwa akaunti yako ya mtumiaji na duka. Programu haiwasiliani na Cloudflare moja kwa moja — upakiaji wote unashughulikiwa kupitia seva yetu ya nyuma.

### 4.4 Muundo wa Kwanza nje ya Mtandao
Programu imeundwa kufanya kazi kikamilifu bila mtandao. Data yako huandikwa kwenye kifaa chako kwanza. Ulandanisho na seva zetu hufanyika nyuma ya skrini wakati muunganisho wa mtandao unapatikana. Ukiwa nje ya mtandao, Programu inaendelea kufanya kazi kawaida.

---

## 5. Huduma za Watu Wengine

Programu hutumia huduma zifuatazo za watu wengine:

| Huduma | Madhumuni | Sera Yao ya Faragha |
|---|---|---|
| Google Firebase Authentication | Kuingia na Google | [Sera ya Faragha ya Google](https://policies.google.com/privacy) |
| Cloudflare R2 (kupitia seva yetu ya nyuma) | Uhifadhi wa picha | [Sera ya Faragha ya Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| Google ML Kit | Usomaji wa msimbo wa bidhaa kwenye kifaa — hakuna data inayotoka nje ya kifaa chako | [Sera ya Faragha ya Google](https://policies.google.com/privacy) |

**Muhimu:** Programu haina SDK zozote za matangazo, huduma za uchanganuzi (kama vile Firebase Analytics), huduma za kuripoti hitilafu, au mawakala wa data.

Usomaji wa msimbo wa bidhaa unafanywa kabisa kwenye kifaa chako ukitumia Google ML Kit. Fremu za kamera wala data ya msimbo wa bidhaa hazipitishwi popote.

---

## 6. Kamera na Bluetooth

### 6.1 Kamera
Programu huomba ruhusa ya kamera kwa madhumuni mawili tu:
1. **Picha za bidhaa na duka:** kuandika picha unazochagua kuambatanisha na bidhaa zako au wasifu wa duka
2. **Usomaji wa msimbo wa bidhaa:** kusoma misimbo ya bidhaa kwa utafutaji wa haraka wakati wa mauzo au uingizaji wa bidhaa

Ufikiaji wa kamera uko hai tu unapotumia vipengele hivi kikamilifu. Hakuna picha zinazochukuliwa nyuma ya skrini.

### 6.2 Bluetooth
Programu huomba ruhusa ya Bluetooth pekee kwa uchapishaji wa risiti kwenye printa ya joto ya Bluetooth uliyounganisha kwenye mipangilio ya mfumo wa kifaa chako. Programu:
- Inaunganishwa tu na printa ulizounganisha tayari katika mipangilio ya mfumo wa kifaa chako
- Inatuma tu data ya risiti iliyoumbizwa kwa printa (pato tu)
- Haisomi data kutoka kwa printa zaidi ya uthibitisho wa muunganisho
- Haitumii Bluetooth kwa madhumuni ya eneo (`neverForLocation` imetangazwa)
- Huhifadhi upendeleo wa printa wako (jina na anwani ya MAC) ndani ya kifaa chako tu

---

## 7. Uhifadhi wa Data

Data yako huhifadhiwa kwenye seva zetu kwa muda ambao akaunti yako iko hai.

Ukifuta akaunti yako kupitia Programu, tutaondoa data yako ya kibinafsi na data ya biashara kutoka kwa seva zetu. Data ya ndani kwenye kifaa chako inaondolewa unapofuta usakinishaji wa Programu.

---

## 8. Haki Zako

Una haki ya:
- **Kufikia** data tunayoshikilia kukuhusu
- **Kufuta** akaunti yako na data yote inayohusiana
- **Kuhamisha** data yako ya biashara (rekodi za mauzo, bidhaa)
- **Kusahihisha** taarifa zisizo sahihi

Ili kutumia haki hizi zozote, wasiliana nasi kwa **[your-email@flavixlabs.com]**.

Ufutaji wa akaunti unaweza kuanzishwa moja kwa moja kutoka ndani ya Programu.

---

## 9. Faragha ya Watoto

Programu imeundwa kutumika na wamiliki wa biashara na wafanyakazi wao. Haielekezi watoto chini ya umri wa miaka 13. Hatukusanyi kwa makusudi taarifa za kibinafsi kutoka kwa watoto.

---

## 10. Mabadiliko ya Sera Hii

Tunaweza kusasisha Sera hii ya Faragha mara kwa mara. Tutakapofanya hivyo, tutasasisha tarehe ya "Imesasishwa" juu ya ukurasa huu. Matumizi yanayoendelea ya Programu baada ya mabadiliko yanajumuisha kukubaliana na sera iliyosasishwa.

---

## 11. Wasiliana

Ikiwa una maswali kuhusu Sera hii ya Faragha, wasiliana:

**FlavixLabs**
Barua pepe: [your-email@flavixlabs.com]
Tovuti: https://biasharamkononi.flavixlabs.com
