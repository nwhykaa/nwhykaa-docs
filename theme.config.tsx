export default {
  primaryHue: 200,
  banner: {
    dismissible: false,
  },
  sidebar: {
    defaultMenuCollapsed: true,
  },
  footer: {
    component: (
      <footer className="bg-[#050505] border-t border-gray-900 py-10">
        <div className="max-w-[90rem] mx-auto px-6 flex justify-between items-center text-gray-500 text-sm">
          <div>⌘ Build by <a href="#" className="underline text-gray-400">nwhykaa</a>. The source code is available on <a href="#" className="underline text-gray-400">GitHub</a>.</div>
          <div className="flex gap-3">
             <button className="bg-[#111] border border-gray-800 px-3 py-1 rounded text-xs flex items-center gap-1 hover:bg-[#1a1a1a]">▲ Deploy</button>
             <button className="bg-[#111] border border-gray-800 px-3 py-1 rounded text-xs flex items-center gap-1 hover:bg-[#1a1a1a]"><span className="text-red-500">❤</span> Sponsor</button>
          </div>
        </div>
      </footer>
    )
  }
}
