/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="bg-surface text-on-surface font-body pb-24 md:pb-0 min-h-screen">
      {/* Header */}
      <header className="max-w-screen-xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-3xl">insights</span>
          <span className="font-headline font-extrabold text-xl tracking-tight">Essence Analytics</span>
        </div>
        <div className="hidden md:flex gap-8 font-label font-semibold text-sm text-on-surface-variant">
          <a href="#" className="hover:text-primary transition-colors">Overview</a>
          <a href="#" className="text-primary">Details</a>
          <a href="#" className="hover:text-primary transition-colors">Export</a>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-6">
        {/* Hero & Phase 01 */}
        <section className="py-12 md:py-20 flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1">
            <p className="font-label font-bold text-xs tracking-[0.2em] text-primary uppercase mb-6">Editorial Report 2024</p>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight mb-8">
              라쿤 오드 퍼퓸<br />
              <span className="text-secondary">히트맵 분석 및<br />UX 개선 제안</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
              프리미엄 향수 브랜드 'Racoon'의 이커머스 상세 페이지 사용자 행동 데이터를 분석하고, 전환율 극대화를 위한 전략적 UX 개선 로드맵을 제안합니다.
            </p>
          </div>

          <div className="w-full lg:w-[400px] shrink-0">
            <div className="bg-surface-container-low p-8 md:p-10 rounded-[2rem] relative overflow-hidden">
              <span className="material-symbols-outlined absolute top-8 right-8 text-6xl text-outline-variant opacity-20">bar_chart</span>
              
              <h2 className="font-headline text-xl font-bold mb-8 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary rounded-full"></div>
                Phase 01: Executive Summary
              </h2>
              
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-headline text-7xl font-black text-primary tracking-tighter">84</span>
                <span className="font-label font-bold text-on-surface-variant">/ 100</span>
              </div>
              <p className="font-headline font-bold text-lg mb-8">Conversion Potential Index</p>
              
              <div className="bg-surface-container-highest p-6 rounded-2xl border-l-4 border-primary">
                <p className="font-label font-bold text-primary mb-2">Key Insight</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  감성적인 비주얼 요소는 높은 반응을 끌어내지만, 구매 단계에서의 마찰이 존재함.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 02: Heatmaps */}
        <section className="py-16 md:py-24">
          <div className="mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-3">Phase 02: Visual Heatmaps</h2>
            <p className="text-on-surface-variant font-label">모바일 환경에서의 시선 집중도 분석</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Heatmap 1 */}
            <div className="bg-surface-container-low rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center">
              <div className="w-[280px] h-[580px] bg-black rounded-[3rem] border-[12px] border-on-surface relative overflow-hidden shadow-2xl mb-10 shrink-0">
                <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop" alt="Perfume Bottle" className="w-full h-full object-cover opacity-90" referrerPolicy="no-referrer" />
                
                <div className="absolute top-[45%] left-[15%] w-48 h-48 bg-orange-500 rounded-full heatmap-glow opacity-80"></div>
                <div className="absolute top-[50%] left-[30%] w-24 h-24 bg-red-600 rounded-full heatmap-glow opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="w-1/3 h-2 bg-white/30 rounded-full mb-3"></div>
                  <div className="w-full h-2 bg-white/20 rounded-full mb-2"></div>
                  <div className="w-4/5 h-2 bg-white/20 rounded-full"></div>
                </div>
              </div>
              <div className="w-full">
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">Heatmap 1: Product Story</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  <strong className="text-on-surface">'성분 리스트'</strong> 영역에 시선 집중.<br />
                  고객의 호기심은 높지만 체류 시간이 짧음. 원료의 시각적 설명 부족이 원인으로 분석됨.
                </p>
              </div>
            </div>

            {/* Heatmap 2 */}
            <div className="bg-surface-container-low rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center">
              <div className="w-[280px] h-[580px] bg-surface-container-lowest rounded-[3rem] border-[12px] border-on-surface relative overflow-hidden shadow-2xl mb-10 shrink-0">
                <div className="p-6 space-y-6 mt-12">
                  <div className="w-1/2 h-8 bg-surface-container-highest rounded-lg"></div>
                  <div className="space-y-3">
                    <div className="w-full h-3 bg-surface-container-highest rounded-full"></div>
                    <div className="w-full h-3 bg-surface-container-highest rounded-full"></div>
                    <div className="w-3/4 h-3 bg-surface-container-highest rounded-full"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-10 left-6 right-6 h-16 bg-primary rounded-2xl flex items-center justify-center z-10">
                  <div className="w-1/3 h-3 bg-white/30 rounded-full"></div>
                </div>

                <div className="absolute bottom-[8%] left-[10%] w-56 h-40 bg-orange-400 rounded-full heatmap-glow opacity-60"></div>
                <div className="absolute bottom-[10%] left-[25%] w-32 h-24 bg-red-500 rounded-full heatmap-glow opacity-80"></div>
              </div>
              <div className="w-full">
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">Heatmap 2: Pricing/CTA</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  <strong className="text-on-surface">가격과 구매 버튼</strong> 근처에서 시선이 머뭇거림(Hesitation). 구매 결정을 위한 마지막 확신(리뷰, 혜택 등)이 해당 영역에서 부족함.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 03: Hypotheses */}
        <section className="py-16 md:py-24">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-12">Phase 03: UX Hypotheses</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] shadow-ambient relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <span className="inline-block px-4 py-1.5 bg-secondary-container text-primary font-label font-bold text-xs rounded-full mb-8">가설 1</span>
              <h3 className="font-headline text-xl font-bold mb-4">텍스트 가독성 개선</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                현재 모바일에서 폰트가 너무 얇아 가독성이 떨어짐 -&gt; <strong className="text-on-surface">행간과 굵기 조절</strong>을 통해 정보 전달력 강화 제안.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] shadow-ambient relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <span className="inline-block px-4 py-1.5 bg-secondary-container text-primary font-label font-bold text-xs rounded-full mb-8">가설 2</span>
              <h3 className="font-headline text-xl font-bold mb-4">향의 시각화</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                단순 텍스트보다 <strong className="text-on-surface">원료 이미지와 '향기 피라미드'</strong> 비주얼 도입 제안. 향을 눈으로 느끼게 하여 체류 시간 증대.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] shadow-ambient relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <span className="inline-block px-4 py-1.5 bg-secondary-container text-primary font-label font-bold text-xs rounded-full mb-8">가설 3</span>
              <h3 className="font-headline text-xl font-bold mb-4">72시간 지속력 강조</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                가장 큰 강점인 지속력 수치가 하단에 있어 인지가 늦음 -&gt; <strong className="text-on-surface">히어로 섹션 및 상단 배치</strong> 제안으로 USP 각인.
              </p>
            </div>
          </div>
        </section>

        {/* Phase 04: Roadmap */}
        <section className="py-16 md:py-24">
          <div className="bg-primary text-white p-10 md:p-20 rounded-[3rem]">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold mb-16 md:mb-24">Phase 04:<br />Implementation Roadmap</h2>
            
            <div className="space-y-16 md:space-y-20">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                <div className="font-headline text-6xl md:text-7xl font-black text-white/20 leading-none">01</div>
                <div className="pt-2">
                  <h3 className="font-headline text-2xl font-bold mb-4">비주얼 자산 리프레시</h3>
                  <p className="text-white/70 leading-relaxed max-w-2xl">AI 기술을 활용한 고해상도 원료 이미지와 텍스처 컷을 생성하여 프리미엄 무드를 극대화합니다.</p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                <div className="font-headline text-6xl md:text-7xl font-black text-white/20 leading-none">02</div>
                <div className="pt-2">
                  <h3 className="font-headline text-2xl font-bold mb-4">타이포그래피 스케일 조정</h3>
                  <p className="text-white/70 leading-relaxed max-w-2xl">Manrope 서체를 기반으로 모바일 최적화 계층 구조를 재정의하여 가독성을 25% 향상시킵니다.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                <div className="font-headline text-6xl md:text-7xl font-black text-white/20 leading-none">03</div>
                <div className="pt-2">
                  <h3 className="font-headline text-2xl font-bold mb-4">인터랙션 디자인</h3>
                  <p className="text-white/70 leading-relaxed max-w-2xl">장바구니 담기 시 마이크로 인터랙션을 추가하여 사용자의 심리적 구매 만족도를 높입니다.</p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                <div className="font-headline text-6xl md:text-7xl font-black text-white/20 leading-none">04</div>
                <div className="pt-2">
                  <h3 className="font-headline text-2xl font-bold mb-4">A/B 테스트 및 배포</h3>
                  <p className="text-white/70 leading-relaxed max-w-2xl">개선된 디자인과 기존 디자인의 성과를 데이터로 검증하고 최종 롤아웃을 진행합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Mobile Bottom Navigation (Glassmorphism) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/80 backdrop-blur-xl border-t border-surface-container-highest z-50 pb-safe">
        <div className="flex justify-around items-center px-2 py-3">
          <button className="flex flex-col items-center gap-1 p-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[28px]">grid_view</span>
            <span className="font-label text-[10px] font-bold uppercase tracking-widest">Overview</span>
          </button>
          <button className="flex flex-col items-center gap-1 px-6 py-2 bg-primary-container/10 text-primary rounded-full">
            <span className="material-symbols-outlined text-[28px]">analytics</span>
            <span className="font-label text-[10px] font-bold uppercase tracking-widest">Details</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[28px]">ios_share</span>
            <span className="font-label text-[10px] font-bold uppercase tracking-widest">Export</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
