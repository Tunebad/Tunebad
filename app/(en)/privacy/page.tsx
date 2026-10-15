import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, LegalShell } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "TuneBad's privacy policy: what the website and the Chrome extension do and don't collect. Short version: no accounts, no tracking profiles, audio stays on your device.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy", title: "Privacy Policy" },
};

const LAST_UPDATED = "2026-10-15";

// The Chrome Web Store listing links here, so the extension section is the
// compliance reference for that review: keep it exact.
//
// Bilingual on one page: TuneBad is operated from Québec, where Law 25 requires
// a published privacy policy in clear terms naming who is responsible for
// personal information, and the Charter of the French language requires
// documents offered to the public to be available in French. The French
// version is complete and equally authoritative.
const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

export default function PrivacyPage() {
  return (
    <LegalShell>
      <article className="legal">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-updated">
          Last updated: {LAST_UPDATED} · <a href="#fr" lang="fr">Version française</a>
        </p>

        <p>
          TuneBad is a set of free audio tools: this website (tunebad.com) and a Chrome
          extension. The short version: there are no accounts, we do not build profiles of
          you, we do not sell or share data, and the audio you work with stays on your
          device unless a tool explicitly needs our server to fetch it for you.
        </p>

        <section>
          <h2>Who is responsible</h2>
          <p>
            TuneBad is an independent project operated from Québec, Canada. Its operator is the
            person responsible for the protection of personal information under Québec law, and
            can be reached at {mail} for any question, request, or complaint about privacy.
          </p>
        </section>

        <section>
          <h2>The website</h2>
          <p>
            Almost every tool on tunebad.com (the key &amp; BPM analyzer, cutter, loudness
            meter, slowed + reverb studio, and the file converters) runs entirely in your
            browser. Files you open with those tools are processed on your device and are
            never uploaded to us.
          </p>
          <p>
            The link converter is the exception: when you submit a media link, a server
            operated by TuneBad fetches and converts that media and delivers the file straight
            to your browser. Converted files are generated on demand and deleted automatically
            once delivered. The link itself, and non-personal analysis results for it (such as
            tempo and key), may be cached in our song catalog so later visitors get an instant
            answer. Nothing in that catalog is tied to you.
          </p>
          <p>
            Your tool history and language preference are stored in your own browser
            (localStorage), not on our servers. Clearing your browser data removes them.
          </p>
          <p>
            We use Vercel Analytics for aggregate, cookie-free page statistics (which pages are
            visited, roughly where from) and Vercel Speed Insights for anonymous page-speed
            measurements. Neither uses advertising identifiers, and we cannot identify
            individual visitors from them. We show no ads and use no ad trackers.
          </p>
        </section>

        <section>
          <h2>Error reports</h2>
          <p>
            If a page crashes in your browser, it sends us a short error report so we can fix
            it: the error message and code location, the page address, and your browser&apos;s
            user-agent string (its name and version). It contains no account information,
            because there are no accounts, and is used only to find and fix bugs.
          </p>
        </section>

        <section>
          <h2>Cookies and similar storage</h2>
          <p>
            TuneBad uses no tracking or advertising cookies, which is why there is no cookie
            banner: nothing here needs your consent to be switched on. Two kinds of storage are
            used, both strictly necessary:
          </p>
          <ul>
            <li>
              your preferences and tool history, kept in your browser&apos;s localStorage as
              described above; and
            </li>
            <li>
              short-lived security cookies set by our hosting provider&apos;s bot protection, which
              remember that your browser passed an automated check so you aren&apos;t asked again
              on every page. They identify a browser session, not a person.
            </li>
          </ul>
        </section>

        <section>
          <h2>Service providers and where data is processed</h2>
          <p>
            The website is hosted by Vercel, its song catalog and error reports are stored with
            Supabase, and link conversions reach our converter through Cloudflare. These
            providers process data on our behalf, under their own security and privacy
            commitments, on servers that may be located outside Québec, including in the United
            States.
          </p>
        </section>

        <section>
          <h2>The Chrome extension</h2>
          <p>
            The TuneBad extension collects nothing and transmits nothing. It has no
            accounts, no analytics, and no trackers, and it makes no network requests with
            your data. Recordings you make and settings you change are stored only in your
            browser&apos;s local extension storage, on your device. Uninstalling the
            extension removes them.
          </p>
          <p>Why it asks for each permission:</p>
          <ul>
            <li>
              Tab capture: records the audio of the current tab, only when you press Record
              or use the recording shortcut.
            </li>
            <li>Offscreen: keeps a recording you started running after the popup closes.</li>
            <li>Storage: saves your recordings and settings on this device only.</li>
            <li>
              Active tab: reads the current tab&apos;s title to name a recording, and lets
              the shortcut act on the tab you are viewing, only when you invoke it.
            </li>
            <li>Side panel: lets you dock the toolkit beside the page.</li>
            <li>
              tunebad.com (host permission): exists for exactly one feature, the
              &quot;Open in DAW&quot; button. A small script runs on tunebad.com/daw
              only, and its only job is to hand the clip you just recorded or edited
              to the timeline on that page — the audio goes straight from your
              browser&apos;s extension to your browser&apos;s tab, never through a
              server. It runs on no other site and no other page of ours, reads
              nothing from any page, and transmits nothing.
            </li>
          </ul>
          <p>
            Outside of that one page, the extension injects no scripts into websites
            and cannot read the pages you visit. It has no access to any site other
            than tunebad.com.
          </p>
        </section>

        <section>
          <h2>Your rights</h2>
          <p>
            You can ask what personal information we hold about you, ask us to correct or delete
            it, or withdraw consent, by writing to {mail}. Because TuneBad has no accounts, we
            usually hold nothing that identifies you. If you&apos;re not satisfied with our
            answer, you can complain to Québec&apos;s Commission d&apos;accès à
            l&apos;information.
          </p>
        </section>

        <section>
          <h2>What we never do</h2>
          <ul>
            <li>No selling, renting, or sharing of user data with third parties.</li>
            <li>No advertising profiles and no cross-site tracking.</li>
            <li>No collection of the audio you record, edit, or convert on-device.</li>
          </ul>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            If our practices change, this page changes first, with the date above updated.
            Meaningful changes will be visible here before they take effect. See also the{" "}
            <Link href="/terms">Terms of Use</Link>.
          </p>
        </section>

        <section id="fr" lang="fr">
          <h2 className="legal-title">Politique de confidentialité</h2>
          <p className="legal-updated">Dernière mise à jour : {LAST_UPDATED}</p>
          <p>
            TuneBad est un ensemble d&apos;outils audio gratuits : ce site (tunebad.com) et une
            extension Chrome. En bref : il n&apos;y a pas de compte, nous ne dressons aucun profil
            de vous, nous ne vendons ni ne partageons aucune donnée, et l&apos;audio que vous
            traitez reste sur votre appareil, sauf si un outil a besoin de notre serveur pour aller
            le chercher.
          </p>

          <h3>Personne responsable</h3>
          <p>
            TuneBad est un projet indépendant exploité depuis le Québec, au Canada. Son exploitant
            est la personne responsable de la protection des renseignements personnels au sens de
            la loi québécoise; vous pouvez le joindre à {mail} pour toute question, demande ou
            plainte relative à la confidentialité.
          </p>

          <h3>Le site Web</h3>
          <p>
            Presque tous les outils de tunebad.com (analyseur de tonalité et de BPM, découpeur,
            sonomètre, studio slowed + reverb et convertisseurs de fichiers) fonctionnent
            entièrement dans votre navigateur. Les fichiers que vous y ouvrez sont traités sur
            votre appareil et ne nous sont jamais transmis.
          </p>
          <p>
            Le convertisseur de liens fait exception : lorsque vous soumettez un lien, un serveur
            exploité par TuneBad récupère et convertit le média, puis remet le fichier directement
            à votre navigateur. Les fichiers convertis sont générés sur demande et supprimés
            automatiquement une fois remis. Le lien lui-même et des résultats d&apos;analyse non
            personnels (comme le tempo et la tonalité) peuvent être conservés dans notre catalogue
            de chansons afin que les visiteurs suivants obtiennent une réponse immédiate. Rien dans
            ce catalogue n&apos;est lié à vous.
          </p>
          <p>
            Votre historique d&apos;outils et votre préférence de langue sont enregistrés dans
            votre propre navigateur (localStorage), et non sur nos serveurs. Effacer les données de
            votre navigateur les supprime.
          </p>
          <p>
            Nous utilisons Vercel Analytics pour des statistiques de pages globales et sans témoins
            (quelles pages sont visitées, et à peu près d&apos;où), ainsi que Vercel Speed Insights
            pour des mesures anonymes de la vitesse des pages. Aucun des deux n&apos;utilise
            d&apos;identifiant publicitaire, et nous ne pouvons pas identifier un visiteur à partir
            de ces données. Nous n&apos;affichons aucune publicité et n&apos;utilisons aucun
            traceur publicitaire.
          </p>

          <h3>Rapports d&apos;erreur</h3>
          <p>
            Si une page plante dans votre navigateur, elle nous envoie un court rapport
            d&apos;erreur pour que nous puissions la corriger : le message d&apos;erreur et
            l&apos;endroit du code concerné, l&apos;adresse de la page et la chaîne
            d&apos;agent utilisateur de votre navigateur (son nom et sa version). Il ne contient
            aucune information de compte, puisqu&apos;il n&apos;y a pas de compte, et sert
            uniquement à trouver et corriger des bogues.
          </p>

          <h3>Témoins et stockage similaire</h3>
          <p>
            TuneBad n&apos;utilise aucun témoin de suivi ou publicitaire; c&apos;est pourquoi il
            n&apos;y a pas de bannière de témoins : rien ici ne requiert votre consentement pour
            être activé. Deux types de stockage sont utilisés, tous deux strictement nécessaires :
          </p>
          <ul>
            <li>
              vos préférences et votre historique d&apos;outils, conservés dans le localStorage de
              votre navigateur, comme décrit ci-dessus;
            </li>
            <li>
              des témoins de sécurité de courte durée, déposés par la protection anti-robots de
              notre hébergeur, qui retiennent que votre navigateur a réussi une vérification
              automatisée afin de ne pas vous la redemander à chaque page. Ils identifient une
              session de navigateur, et non une personne.
            </li>
          </ul>

          <h3>Fournisseurs de services et lieu de traitement</h3>
          <p>
            Le site est hébergé par Vercel, son catalogue de chansons et ses rapports
            d&apos;erreur sont conservés chez Supabase, et les conversions de liens transitent par
            Cloudflare jusqu&apos;à notre convertisseur. Ces fournisseurs traitent des données
            pour notre compte, selon leurs propres engagements de sécurité et de confidentialité,
            sur des serveurs qui peuvent se trouver à l&apos;extérieur du Québec, notamment aux
            États-Unis.
          </p>

          <h3>L&apos;extension Chrome</h3>
          <p>
            L&apos;extension TuneBad ne recueille rien et ne transmet rien. Elle n&apos;a ni
            compte, ni outil d&apos;analyse, ni traceur, et n&apos;effectue aucune requête réseau
            contenant vos données. Vos enregistrements et vos réglages sont conservés uniquement
            dans le stockage local de l&apos;extension, sur votre appareil. Désinstaller
            l&apos;extension les supprime.
          </p>
          <p>Pourquoi elle demande chaque autorisation :</p>
          <ul>
            <li>
              Capture d&apos;onglet : enregistre l&apos;audio de l&apos;onglet actif, seulement
              lorsque vous appuyez sur Enregistrer ou utilisez le raccourci.
            </li>
            <li>
              Document hors écran : poursuit un enregistrement que vous avez lancé après la
              fermeture de la fenêtre contextuelle.
            </li>
            <li>Stockage : conserve vos enregistrements et réglages sur cet appareil seulement.</li>
            <li>
              Onglet actif : lit le titre de l&apos;onglet pour nommer un enregistrement et permet
              au raccourci d&apos;agir sur l&apos;onglet affiché, seulement lorsque vous
              l&apos;utilisez.
            </li>
            <li>Panneau latéral : vous permet d&apos;ancrer la boîte à outils à côté de la page.</li>
            <li>
              tunebad.com (autorisation d&apos;hôte) : sert à une seule fonction, le bouton
              « Ouvrir dans le DAW ». Un petit script s&apos;exécute uniquement sur
              tunebad.com/daw et remet l&apos;extrait que vous venez d&apos;enregistrer ou de
              modifier à la ligne de temps de cette page — l&apos;audio passe directement de
              l&apos;extension à l&apos;onglet de votre navigateur, jamais par un serveur. Il ne
              s&apos;exécute sur aucun autre site ni aucune autre de nos pages, ne lit rien sur
              aucune page et ne transmet rien.
            </li>
          </ul>
          <p>
            En dehors de cette page, l&apos;extension n&apos;injecte aucun script dans les sites
            Web et ne peut pas lire les pages que vous visitez. Elle n&apos;a accès à aucun site
            autre que tunebad.com.
          </p>

          <h3>Vos droits</h3>
          <p>
            Vous pouvez demander quels renseignements personnels nous détenons sur vous, en
            demander la rectification ou la suppression, ou retirer votre consentement, en
            écrivant à {mail}. Comme TuneBad n&apos;a pas de comptes, nous ne détenons
            habituellement rien qui vous identifie. Si notre réponse ne vous satisfait pas, vous
            pouvez porter plainte auprès de la Commission d&apos;accès à l&apos;information du
            Québec.
          </p>

          <h3>Ce que nous ne faisons jamais</h3>
          <ul>
            <li>Aucune vente, location ou communication de données à des tiers.</li>
            <li>Aucun profil publicitaire et aucun suivi d&apos;un site à l&apos;autre.</li>
            <li>Aucune collecte de l&apos;audio que vous enregistrez, modifiez ou convertissez sur votre appareil.</li>
          </ul>

          <h3>Modifications</h3>
          <p>
            Si nos pratiques changent, cette page est modifiée en premier et la date ci-dessus est
            mise à jour. Tout changement important y sera visible avant de prendre effet. Voir
            aussi les <Link href="/terms">conditions d&apos;utilisation</Link>.
          </p>
        </section>

        <p className="legal-back">
          <Link href="/">← Back to TuneBad</Link>
        </p>
      </article>
    </LegalShell>
  );
}
