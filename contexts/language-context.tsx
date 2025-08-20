'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Language = 'en' | 'vi'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const translations = {
  en: {
    // Header
    'header.name': 'Harry Dương',
    'header.title': 'Entrepreneur',
    
    // Summary
    'summary.title': 'Summary',
    'summary.description': 'Entrepreneur, LHPer, Monash Alumni, Poker Coach, Airbnb Super Host & a good Soccer player.',
    
    // Experience
    'experience.title': 'Experience',
    'experience.hd_ventures.title': 'HD Ventures',
    'experience.hd_ventures.role': 'Managing Director',
    'experience.hd_ventures.duration': 'June 2021 - Present (4 years 3 months)',
    'experience.hd_ventures.location': 'Ho Chi Minh City, Vietnam',
    
    'experience.ezycar.title': 'EZYCAR SERVICE',
    'experience.ezycar.role': 'Founder & CEO',
    'experience.ezycar.duration': 'May 2018 - March 2020 (1 year 11 months)',
    'experience.ezycar.location': 'Thao Dien, District 2, Ho Chi Minh City',
    
    'experience.poker_coach.title': 'Poker Coach Vietnam',
    'experience.poker_coach.role': 'Founder, Poker Coach. Poker Player',
    'experience.poker_coach.duration': 'July 2013 - December 2017 (4 years 6 months)',
    'experience.poker_coach.location': 'Blue Sapphire Residence Vung Tau',
    
    'experience.airbnb.title': 'Super Host @ Airbnb',
    'experience.airbnb.role': 'Super Host',
    'experience.airbnb.duration': 'January 2017 - October 2017 (10 months)',
    'experience.airbnb.location': 'Vung Tau',
    
    'experience.petrovietnam.title': 'PetroVietnam Finance Corporation',
    'experience.petrovietnam.role': 'Corporate Finance Officer',
    'experience.petrovietnam.duration': 'August 2010 - July 2013 (3 years)',
    'experience.petrovietnam.location': 'Ho Chi Minh City',
    
    // Education
    'education.title': 'Education',
    'education.monash.title': 'Monash University',
    'education.monash.degree': 'Bachelor of Commerce (B.Com.), Accounting and Finance',
    'education.monash.duration': '2006 - 2009',
    'education.monash.skills': 'Skills:',
    'education.monash.skills_list': 'Finance · High Pressure · Financial Analysis · Data Analysis · Crypto',
    
    'education.lhp.title': 'Le Hong Phong High school',
    'education.lhp.duration': '1998 - 2001',
    
    // Footer
    'footer.copyright': '© 2024 Nim.',
    'footer.built_with': 'Built with Motion-Primitives.',
  },
  vi: {
    // Header
    'header.name': 'Harry Dương',
    'header.title': 'Doanh nhân',
    
    // Summary
    'summary.title': 'Tóm tắt',
    'summary.description': 'Doanh nhân, Cựu học sinh LHP, Cựu sinh viên Monash, Huấn luyện viên Poker, Chủ nhà siêu cấp Airbnb & Cầu thủ bóng đá giỏi.',
    
    // Experience
    'experience.title': 'Kinh nghiệm',
    'experience.hd_ventures.title': 'HD Ventures',
    'experience.hd_ventures.role': 'Giám đốc điều hành',
    'experience.hd_ventures.duration': 'Tháng 6/2021 - Hiện tại (4 năm 3 tháng)',
    'experience.hd_ventures.location': 'Thành phố Hồ Chí Minh, Việt Nam',
    
    'experience.ezycar.title': 'EZYCAR SERVICE',
    'experience.ezycar.role': 'Người sáng lập & CEO',
    'experience.ezycar.duration': 'Tháng 5/2018 - Tháng 3/2020 (1 năm 11 tháng)',
    'experience.ezycar.location': 'Thảo Điền, Quận 2, Thành phố Hồ Chí Minh',
    
    'experience.poker_coach.title': 'Poker Coach Vietnam',
    'experience.poker_coach.role': 'Người sáng lập, Huấn luyện viên Poker. Cầu thủ Poker',
    'experience.poker_coach.duration': 'Tháng 7/2013 - Tháng 12/2017 (4 năm 6 tháng)',
    'experience.poker_coach.location': 'Blue Sapphire Residence Vũng Tàu',
    
    'experience.airbnb.title': 'Chủ nhà siêu cấp @ Airbnb',
    'experience.airbnb.role': 'Chủ nhà siêu cấp',
    'experience.airbnb.duration': 'Tháng 1/2017 - Tháng 10/2017 (10 tháng)',
    'experience.airbnb.location': 'Vũng Tàu',
    
    'experience.petrovietnam.title': 'Tập đoàn Tài chính Dầu khí Việt Nam',
    'experience.petrovietnam.role': 'Chuyên viên Tài chính Doanh nghiệp',
    'experience.petrovietnam.duration': 'Tháng 8/2010 - Tháng 7/2013 (3 năm)',
    'experience.petrovietnam.location': 'Thành phố Hồ Chí Minh',
    
    // Education
    'education.title': 'Học vấn',
    'education.monash.title': 'Đại học Monash',
    'education.monash.degree': 'Cử nhân Thương mại (B.Com.), Kế toán và Tài chính',
    'education.monash.duration': '2006 - 2009',
    'education.monash.skills': 'Kỹ năng:',
    'education.monash.skills_list': 'Tài chính · Áp lực cao · Phân tích tài chính · Phân tích dữ liệu · Tiền điện tử',
    
    'education.lhp.title': 'Trường THPT Lê Hồng Phong',
    'education.lhp.duration': '1998 - 2001',
    
    // Footer
    'footer.copyright': '© 2024 Nim.',
    'footer.built_with': 'Được xây dựng với Motion-Primitives.',
  },
}

interface LanguageProviderProps {
  children: React.ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'vi')) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}