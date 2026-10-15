import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, LegalShell } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms for using TuneBad's free audio tools: acceptable use, no automated access, song data accuracy, and the limits of what a free service promises.",
  alternates: { canonical: "/terms" },
  openGraph: { url: "/terms", title: "Terms of Use" },
};

const LAST_UPDATED = "2026-10-15";

// Bilingual on one page. TuneBad is operated from Québec, where standard-form
// contracts offered to the public (which website terms are) must be available
// in French (Charter of the French language, as amended by Bill 96). English
// comes first because that's the site's default language; the French version
// is complete and equally authoritative, one link away.
const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

export default function TermsPage() {
  return (
    <LegalShell>
      <article className="legal">
        <h1 className="legal-title">Terms of Use</h1>
        <p className="legal-updated">
          Last updated: {LAST_UPDATED} · <a href="#fr" lang="fr">Version française</a>
        </p>

        <p>
          These terms cover your use of tunebad.com and its tools (the &ldquo;Service&rdquo;). By
          using the Service you agree to them. They sit alongside our{" "}
          <Link href="/privacy">Privacy Policy</Link> and{" "}
          <Link href="/copyright">Copyright Disclaimer</Link>, which also apply.
        </p>

        <section>
          <h2>1. Who runs TuneBad</h2>
          <p>
            TuneBad is an independent project operated from Québec, Canada. You can reach the
            operator at {mail}.
          </p>
        </section>

        <section>
          <h2>2. The Service is free</h2>
          <p>
            Every tool is free to use. There are no accounts, subscriptions, or purchases, so no
            payment is ever taken and there is nothing to refund.
          </p>
        </section>

        <section>
          <h2>3. Acceptable use</h2>
          <p>You may use the Service for lawful, personal purposes. You agree not to:</p>
          <ul>
            <li>
              process content you don&apos;t have the right to use — see the{" "}
              <Link href="/copyright">Copyright Disclaimer</Link> for exactly what that means;
            </li>
            <li>
              access the Service through bots, scripts, scrapers, or other automated means, or try to
              get around its rate limits or bot checks;
            </li>
            <li>overload, disrupt, or attempt to gain unauthorized access to the Service; or</li>
            <li>use the Service to break any law or anyone else&apos;s rights.</li>
          </ul>
          <p>
            We may block or limit access for anyone who doesn&apos;t follow these rules, without
            notice.
          </p>
        </section>

        <section>
          <h2>4. Your files and links</h2>
          <p>
            Most tools run entirely in your browser: files you open are processed on your device
            and never uploaded to us. When you submit a media link for conversion, it&apos;s
            processed as described in the <Link href="/copyright">Copyright Disclaimer</Link> and
            the resulting file is delivered to you directly. You remain responsible for what you
            submit.
          </p>
        </section>

        <section>
          <h2>5. Song data is an estimate</h2>
          <p>
            Keys, tempos, Camelot codes, loudness readings, and other results are produced
            automatically by audio analysis. They are usually right and sometimes wrong. Please
            check anything that matters before relying on it.
          </p>
        </section>

        <section>
          <h2>6. No guarantees</h2>
          <p>
            The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. It runs on
            free hosting with usage limits, so any tool may be slow, unavailable, changed, or
            discontinued at any time. To the fullest extent permitted by law, TuneBad is not liable
            for any loss arising from your use of, or inability to use, the Service. Nothing in
            these terms limits rights you have under laws that can&apos;t be waived, including
            Québec&apos;s Consumer Protection Act.
          </p>
        </section>

        <section>
          <h2>7. Other services</h2>
          <p>
            Links to and from other sites, and any content you process from them, are governed by
            those services&apos; own terms. TuneBad is not affiliated with YouTube, Spotify,
            SoundCloud, or any other platform it works with.
          </p>
        </section>

        <section>
          <h2>8. Changes and governing law</h2>
          <p>
            If these terms change, this page changes first, with the date above updated. These
            terms are governed by the laws of Québec and the federal laws of Canada that apply
            there.
          </p>
        </section>

        <section id="fr" lang="fr">
          <h2 className="legal-title">Conditions d&apos;utilisation</h2>
          <p className="legal-updated">Dernière mise à jour : {LAST_UPDATED}</p>
          <p>
            Les présentes conditions encadrent votre utilisation de tunebad.com et de ses outils
            (le « Service »). En utilisant le Service, vous les acceptez. Elles s&apos;ajoutent à
            notre <Link href="/privacy">politique de confidentialité</Link> et à notre{" "}
            <Link href="/copyright">avis sur le droit d&apos;auteur</Link>, qui s&apos;appliquent
            aussi.
          </p>

          <h3>1. Qui exploite TuneBad</h3>
          <p>
            TuneBad est un projet indépendant exploité depuis le Québec, au Canada. Vous pouvez
            joindre l&apos;exploitant à {mail}.
          </p>

          <h3>2. Le Service est gratuit</h3>
          <p>
            Tous les outils sont gratuits. Il n&apos;y a ni compte, ni abonnement, ni achat :
            aucun paiement n&apos;est jamais perçu et il n&apos;y a donc rien à rembourser.
          </p>

          <h3>3. Utilisation acceptable</h3>
          <p>Vous pouvez utiliser le Service à des fins personnelles et licites. Vous vous engagez à ne pas :</p>
          <ul>
            <li>
              traiter un contenu que vous n&apos;avez pas le droit d&apos;utiliser — voir
              l&apos;<Link href="/copyright">avis sur le droit d&apos;auteur</Link> pour savoir
              précisément ce que cela signifie;
            </li>
            <li>
              accéder au Service au moyen de robots, de scripts, d&apos;outils
              d&apos;extraction ou d&apos;autres moyens automatisés, ni tenter de contourner ses
              limites d&apos;utilisation ou ses vérifications anti-robots;
            </li>
            <li>surcharger ou perturber le Service, ni tenter d&apos;y accéder sans autorisation;</li>
            <li>utiliser le Service pour enfreindre la loi ou les droits d&apos;autrui.</li>
          </ul>
          <p>
            Nous pouvons bloquer ou limiter l&apos;accès de quiconque ne respecte pas ces règles,
            sans préavis.
          </p>

          <h3>4. Vos fichiers et vos liens</h3>
          <p>
            La plupart des outils fonctionnent entièrement dans votre navigateur : les fichiers que
            vous ouvrez sont traités sur votre appareil et ne nous sont jamais transmis. Lorsque
            vous soumettez un lien pour le convertir, il est traité comme le décrit l&apos;
            <Link href="/copyright">avis sur le droit d&apos;auteur</Link> et le fichier obtenu vous
            est remis directement. Vous demeurez responsable de ce que vous soumettez.
          </p>

          <h3>5. Les données musicales sont des estimations</h3>
          <p>
            Les tonalités, tempos, codes Camelot, mesures de sonie et autres résultats sont produits
            automatiquement par analyse audio. Ils sont généralement exacts, mais pas toujours.
            Vérifiez toute information importante avant de vous y fier.
          </p>

          <h3>6. Aucune garantie</h3>
          <p>
            Le Service est fourni « tel quel » et « selon sa disponibilité ». Il fonctionne sur un
            hébergement gratuit soumis à des limites d&apos;utilisation : tout outil peut être lent,
            indisponible, modifié ou abandonné à tout moment. Dans toute la mesure permise par la
            loi, TuneBad n&apos;est pas responsable des pertes découlant de l&apos;utilisation du
            Service ou de l&apos;impossibilité de l&apos;utiliser. Rien dans les présentes ne limite
            les droits auxquels vous ne pouvez renoncer en vertu de la loi, notamment la Loi sur la
            protection du consommateur du Québec.
          </p>

          <h3>7. Autres services</h3>
          <p>
            Les liens vers d&apos;autres sites, ou provenant de ceux-ci, ainsi que tout contenu que
            vous en traitez, sont régis par les conditions de ces services. TuneBad n&apos;est
            affilié ni à YouTube, ni à Spotify, ni à SoundCloud, ni à aucune autre plateforme avec
            laquelle il fonctionne.
          </p>

          <h3>8. Modifications et droit applicable</h3>
          <p>
            Si ces conditions changent, cette page est modifiée en premier et la date ci-dessus est
            mise à jour. Les présentes conditions sont régies par les lois du Québec et les lois
            fédérales du Canada qui s&apos;y appliquent.
          </p>
        </section>

        <p className="legal-back">
          <Link href="/">← Back to TuneBad</Link>
        </p>
      </article>
    </LegalShell>
  );
}
