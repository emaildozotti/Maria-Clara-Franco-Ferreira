import { motion } from 'motion/react'
import { FadeIn } from '../App'

const WHATSAPP_URL = 'https://wa.me/5522988393631?text=Oi%2C%20acabei%20de%20vir%20da%20p%C3%A1gina%20da%20Clara%20e%20quero%20agendar%20uma%20consulta.'

const includes = [
  'Análise completa do seu campo energético',
  'Alinhamento dos chakras',
  'Limpeza do campo vibracional',
  'Investigação dos bloqueios',
  'Acompanhamento por 15 dias após a consulta',
]

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: '#D9A0E8' }}
    >
      <div className="container-ultra relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <FadeIn>
            <p
              className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8 font-light"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-bg-light)', opacity: 0.7 }}
            >
              A Consulta
            </p>
            <h2
              className="leading-[1.15] font-display"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: 'var(--color-bg-light)',
                letterSpacing: '-0.02em'
              }}
            >
              Tudo o que você precisa,{' '}
              <span className="italic font-light" style={{ color: 'var(--color-accent)' }}>
                em uma sessão.
              </span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* O que inclui */}
          <FadeIn delay={0.1} direction="up">
            <div
              className="p-10 rounded-sm"
              style={{
                backgroundColor: 'rgba(245, 247, 250, 0.12)',
                border: '1px solid rgba(245, 247, 250, 0.18)',
              }}
            >
              <p
                className="uppercase tracking-[0.2em] text-[10px] mb-8 font-light"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-accent)' }}
              >
                O que está incluído
              </p>
              <ul className="flex flex-col gap-5">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      className="mt-1 text-base leading-none flex-shrink-0"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      ✦
                    </span>
                    <p
                      className="text-lg leading-relaxed font-light"
                      style={{ color: 'var(--color-bg-light)', opacity: 0.95 }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Investimento + Como funciona */}
          <div className="flex flex-col gap-8">

            {/* Investimento */}
            <FadeIn delay={0.2} direction="up">
              <div
                className="p-10 rounded-sm"
                style={{
                  backgroundColor: 'rgba(245, 247, 250, 0.12)',
                  border: '1px solid rgba(245, 247, 250, 0.18)',
                }}
              >
                <p
                  className="uppercase tracking-[0.2em] text-[10px] mb-6 font-light"
                  style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-accent)' }}
                >
                  Investimento
                </p>
                <p
                  className="font-display leading-none mb-4"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    color: 'var(--color-bg-light)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  R$ 600
                </p>
                <p
                  className="text-base leading-relaxed font-light"
                  style={{ color: 'var(--color-bg-light)', opacity: 0.85 }}
                >
                  Pode ser feito de forma antecipada ou com um sinal para garantir a vaga. O valor precisa estar totalmente quitado antes da consulta.
                </p>
              </div>
            </FadeIn>

            {/* Como agendar */}
            <FadeIn delay={0.3} direction="up">
              <div
                className="p-10 rounded-sm"
                style={{
                  backgroundColor: 'rgba(245, 247, 250, 0.12)',
                  border: '1px solid rgba(245, 247, 250, 0.18)',
                }}
              >
                <p
                  className="uppercase tracking-[0.2em] text-[10px] mb-6 font-light"
                  style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-accent)' }}
                >
                  Como agendar
                </p>
                <p
                  className="text-lg leading-relaxed font-light mb-8"
                  style={{ color: 'var(--color-bg-light)', opacity: 0.95 }}
                >
                  Entre em contato com a equipe pelo WhatsApp para tirar dúvidas e finalizar o agendamento.
                </p>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-shimmer inline-block"
                >
                  Falar com a equipe pelo WhatsApp
                </motion.a>
              </div>
            </FadeIn>

          </div>
        </div>

      </div>
    </section>
  )
}
