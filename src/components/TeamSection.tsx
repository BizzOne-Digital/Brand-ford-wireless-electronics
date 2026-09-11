import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { TEAM_VALUES } from '../data/mockData';
import { MediaFrame } from './MediaFrame';
import { MediaRef, WORKBENCH } from '../data/media';
import { demoTeam } from '../data/demoMedia';

/**
 * Compact team strip. Photo, name, one short role line. No biographies.
 *
 * The stand-in frame here is a workspace, not a portrait of a person. A stock
 * headshot on a real shop's team section reads as that shop's staff, and the
 * store would be shipping a stranger's face as its own; the DEMO chip does not
 * undo that. Roles come from `TEAM_VALUES`, and no names are invented.
 */
const PORTRAITS: MediaRef[] = [demoTeam, WORKBENCH];

export const TeamSection: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="team-section" className="section bg-white">
      <div className="shell">
        <div className="max-w-xl">
          <p className="eyebrow">The team</p>
          <h2 className="mt-3 text-2xl font-bold leading-[1.1] text-ink sm:text-3xl">
            The people who will handle your device
          </h2>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:max-w-3xl">
          {TEAM_VALUES.map((member, index) => (
            <motion.figure
              key={member.title}
              id={`team-member-${index}`}
              initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
              className="overflow-hidden rounded-2xl border border-line"
            >
              <MediaFrame
                media={PORTRAITS[index] ?? PORTRAITS[0]}
                ratio="aspect-[4/3]"
                objectPosition="object-top"
              />
              <figcaption className="p-4">
                <p className="font-display text-base font-bold text-ink">{member.title}</p>
                <p className="mt-0.5 text-sm text-copy">{member.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
