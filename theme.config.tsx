export default {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 7 22 17 12 22 2 17 2 7 12 2"></polygon></svg>
      <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>YKAA Scripts</span>
    </div>
  ),
  project: {
    link: 'https://github.com/nwhykaa',
  },
  navbar: {
    extraContent: (
      <a href="https://discord.gg/yourlink" style={{ marginLeft: '10px' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 10l5 5-5 5M4 4v7a4 4 0 0 0 4 4h12"></path></svg>
      </a>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – YKAA Scripts'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="YKAA Scripts Documentation" />
    </>
  ),
  footer: {
    text: (
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', color: '#666' }}>
        <p>⌘ Build by <a href="#" style={{ textDecoration: 'underline' }}>nwhykaa</a> . The source code is available on <a href="#" style={{ textDecoration: 'underline' }}>GitHub</a> .</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ background: '#111', border: '1px solid #333', padding: '5px 10px', borderRadius: '5px', fontSize: '12px' }}>▲ Deploy</button>
          <button style={{ background: '#111', border: '1px solid #333', padding: '5px 10px', borderRadius: '5px', fontSize: '12px' }}><span style={{ color: 'red' }}>❤</span> Sponsor</button>
        </div>
      </div>
    )
  },
  nextThemes: { defaultTheme: 'dark' },
  toc: { component: null },
  editLink: { component: null },
  feedback: { content: null },
}
