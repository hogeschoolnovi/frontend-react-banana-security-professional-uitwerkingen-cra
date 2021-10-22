# Opdrachtbeschrijving

## Inleiding

Vorige week heb je het toonaangevende bedrijf Banana Security geholpen met het opzetten van een beveiligde omgeving,
waarin gebruikers konden inloggen. En hoewel de implementatie hartstikke goed is, is daar ook gelijk alles mee gezegd:
je kunt namelijk **alleen in- en uitloggen**. Gebruikers hebben geen accounts en kunnen ook geen accounts aanmaken...
Maar omdat Banana Security tot nu toe ontzettend blij met je is (je bent immers een stuk sneller
dan [Tim](https://speld.nl/2016/01/08/icter-tim-ging-een-jaar-offline-en-nu-is-hij-ontslagen/)) hebben ze je nogmaals
ingehuurd om de inlog-omgeving helemaal te professionaliseren.

![screenshot](src/assets/screenshot.png)

## Applicatie starten

Als je de opdracht van vorige week afgemaakt hebt, kun je gewoon verder werken in jouw eigen project. Wacht echter nog
even met het opstarten van jouw project.

Clone eerst de [nep database server](https://github.com/hogeschoolnovi/frontend-fake-server) naar jouw lokale machine.
Voor je de server kunt gebruiken zul je de dependencies moeten installeren met het commando:

```shell
npm install
```

Om de server te starten hoef je slechts het volgende commando in jouw terminal in te voeren:

```shell
npm run json:server
```

Deze server draait op [http://localhost:3000](http://localhost:3000/), wanneer je dit in de browser opent zul je alle
beschikbare endpoints zien verschijnen. **Let op**: omdat deze server op `localhost:3000` draait is het belangrijk deze
server te starten vóór je een React-project start. React zal dan automatisch vragen om dat project op een andere poort
te draaien.

## Uitwerkingen

1. Bekijk de basis-uitwerkingen op de branch _uitwerkingen_ (hoofd branch)
2. Bekijk de uitwerkingen van de bonus-opdracht op de branch [uitwerkingen-bonus]()

## Bonus-opdrachten

* Check tijdens de persist on refresh ook of de token nog geldig is. *Tip*: schrijf hier een helper-functie voor
  die `true` of `false` returned.
* Implementeer *unmounting*-effecten op de registreer-, inlog- en profielpagina door het request te annuleren met een
  Axios Canceltoken. Hoe je dit doet, vindt je in [hoofdstuk 7.4](https://edhub.novi.nl/study/courses/516/content/12791)
  van de cursus React op EdHub.