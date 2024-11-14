'use client'

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('질문 TOP');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['질문 TOP', '법적 절차', '저작권 보호 방법', '웹소설 관련 자주 묻는 질문'];
  const faqs = {
    '질문 TOP': [
      { q: '내 웹툰/웹소설이 불법 사이트에 올라갔어요. 어떻게 신고할 수 있나요?', a: '불법 웹툰/웹소설 사이트에 대한 신고는 한국저작권보호원이나 KISA(한국인터넷진흥원)를 통해 할 수 있습니다. 저작권 침해 신고서를 작성하고, 피해 자료(캡처, URL)를 첨부해 제출하면 됩니다. 또한, 해당 사이트에서 게시중단 요청을 할 수 있습니다.' },
      { q: '저작권 침해 사실을 발견한 후, 법적 조치를 어떻게 취할 수 있나요?', a: '저작권법에 따라 저작권 침해자는 민사 및 형사상 처벌을 받을 수 있습니다. 먼저, 변호사와 상담하여 증거를 모으고, 법적 대응 방안을 결정하는 것이 중요합니다. 피해 보상을 청구하거나 침해 중단을 요구할 수 있습니다.' },
    ],
    '법적 절차': [
      { q: '저작권 침해에 대한 소송을 제기하려면 어떤 준비가 필요한가요?', a: '소송을 준비하려면 저작권 등록증, 침해 증(스크린샷, 링크 등), 그리고 침해로 인한 피해 금액을 산정할 수 있는 자료가 필요합니다. 변호사와의 상담을 통해 구체적인 절차를 알아보는 것이 좋습니다.' },
      { q: '침해자가 해외에 있을 경우 어떻게 대응할 수 있나요?', a: '침해자가 해외에 있을 경우, 한국 법률 적용이 어려울 수 있습니다. 이 경우, 해외 법률 전문가와 상담하거나 해외 법률 서비스를 이용하는 것이 좋습니다.' },
    ],
    '저작권 보호 방법': [
      { q: '미리 내 작품을 보호할 방법이 있나요?', a: '저작권 등록을 통해 작품을 보호할 수 있습니다. 저작권 등록은 저작권 보호를 위한 중요한 단계입니다.' },
      { q: '내 웹툰을 불법 복제하지 못하게 하는 방법이 있을까요?', a: '완전히 막을 방법은 없지만, DRM(디지털 저작권 관리) 기술을 활용하거나, 불법 복제 사이트 탐지를 위한 자동화 도구를 사용하는 것이 도움이 될 수 있습니다. 그리고 정기적으로 자신의 작품을 모니터링하여 빠르게 대응하는 것이 중요합니다.' },
    ],
    '웹소설 관련 자주 묻는 질문': [
      { q: '내 웹소설이 불법적으로 변형된 내용을 포함해 배포되고 있어요. 어떻게 대응해 하나요?', a: '불법적으로 변형된 웹소설을 발견한 경우, 먼저 해당 사이트에 게시중단 요청을 해야 합니다. 이후, 저작권 침해 신고를 통해 법적 조치를 취할 수 있습니다. 또한, 변형된 웹소설을 제거하고 원본 웹소설을 보호하는 방법을 고려해야 합니다.' },
      { q: '웹소설도 저작권 등록을 해야 하나요?', a: '웹소설도 저작권 등록을 해야 합니다. 저작권 등록은 저작권 보호를 위한 중요한 단계입니다.' },
      { q: '내 웹소설이 번역되어 불법 배포되고 있어요. 어떻게 대응할 수 있나요?', a: '번역도 원작자의 허락 없이는 저작권 침해에 해당됩니다. 번역물 또한 저작권 보호 대상이므로, 불법 배포된 번역본에 대해 법적 조치를 취할 수 있습니다.' },
    ],
  };

  const filteredFAQs = (faqs[activeCategory] || []).filter(faq =>
    faq.q.includes(searchTerm) || faq.a.includes(searchTerm)
  );

  const allFilteredFAQs = Object.values(faqs).flat().filter(faq =>
    faq.q.includes(searchTerm) || faq.a.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b">

      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-black">법률 정보</h2>
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="무엇이든 찾아보세요"
            className="w-full py-3 pl-12 pr-4 text-gray-900 border rounded-lg focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
        <div className="flex flex-col md:flex-row">
          <aside className="w-full md:w-1/4 pr-0 md:pr-8 mb-6 md:mb-0">
            <ul className="flex flex-wrap md:flex-col">
              {categories.map(category => (
                <li key={category} className="mb-2 w-1/2 md:w-full">
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`text-left w-full py-2 px-4 rounded ${
                      activeCategory === category ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <div className="w-full md:w-3/4">
            {(searchTerm ? allFilteredFAQs : filteredFAQs).map((faq, index) => (
              <div key={index} className="mb-6 border-b pb-6">
                <h3 
                  className="text-base md:text-lg font-medium text-gray-900 mb-2 cursor-pointer" 
                  onClick={() => {
                    const answerElement = document.getElementById(`answer-${index}`);
                    answerElement.classList.toggle('hidden');
                  }}
                >
                  {faq.q}
                </h3>
                <p id={`answer-${index}`} className="text-gray-600 hidden">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            현재 이 페이지는 개발진행 중이며, 제공된 정보는 참고용입니다. 보다 정확한 법률 자문이 필요하시다면 전문가와 상의하시기 바랍니다.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FAQPage;