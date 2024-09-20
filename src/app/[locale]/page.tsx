import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className=" p-4 text-sm  flex flex-col items-center justify-center  " >
      <h1 className=" font-bold text-lg">{t('head')}</h1>
      <p className=" px-2 py-1 w-fit my-2 rounded-lg bg-[#272829]">{t('subhead')}</p>
    <p className=" w-[480px] text-justify">
      {t('para')}
    </p>
    
    <a href="" className="  mt-2 border rounded-lg p-2 shadow cursor-pointer transition hover:shadow-none hover:bg-[#272829]">{t("github")}</a>
    
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}