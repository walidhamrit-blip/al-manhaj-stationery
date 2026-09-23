import { useEffect, useState } from 'react';
import { client } from '../tina/__generated__/client';

interface Post {
  id: string;
  title: string;
  category: string;
}

interface Category {
  id: string;
  categoryId: string;
  nameAr: string;
  nameEn?: string;
  descAr?: string;
  image?: string;
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // Récupération des articles
        const postRes = await client.queries.postConnection();
        const fetchedPosts = postRes.data.postConnection.edges?.map(edge => edge?.node) || [];
        setPosts(fetchedPosts as Post[]);

        // Récupération des catégories
        const categoryRes = await client.queries.categoryConnection();
        const fetchedCategories = categoryRes.data.categoryConnection.edges?.map(edge => edge?.node) || [];
        setCategories(fetchedCategories as Category[]);

      } catch (err) {
        console.error("Erreur lors du chargement :", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Filtrer les articles selon la catégorie sélectionnée
  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.category === selectedCategory) 
    : posts;

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'system-ui, sans-serif' }}>
        <p style={{ color: '#64748b', fontWeight: 500 }}>جاري تحميل المحتوى...</p>
      </div>
    );
  }

  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: 'system-ui, -apple-system, sans-serif', direction: 'rtl', background: '#f8fafc', minHeight: '100vh' }}>
      
      {/* En-tête */}
      <header style={{ background: '#ffffff', borderRadius: '16px', padding: '30px', marginBottom: '40px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
        <h1 style={{ color: '#0f172a', fontSize: '2rem', margin: '0 0 10px 0', fontWeight: '800' }}>موقعنا الديناميكي الحديث</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>تم تحديث المحتوى وإدارته بذكاء عبر TinaCMS</p>
      </header>

      {/* Section des Catégories (Cliquables) */}
      <section style={{ marginBottom: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
          <h2 style={{ color: '#1e293b', fontSize: '1.5rem', margin: 0 }}>التصنيفات (اضغط للتصفية)</h2>
          {selectedCategory && (
            <button 
              onClick={() => setSelectedCategory(null)}
              style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 14px', borderRadius: '20px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold' }}
            >
              عرض كل المقالات ✕
            </button>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.categoryId;
            return (
              <div 
                key={cat.categoryId || cat.id} 
                onClick={() => setSelectedCategory(cat.categoryId)}
                style={{ 
                  background: isSelected ? '#eff6ff' : '#ffffff', 
                  border: isSelected ? '2px solid #3b82f6' : '1px solid #e2e8f0', 
                  borderRadius: '14px', 
                  padding: '20px',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 8px 0', color: '#0f172a', fontSize: '1.2rem', fontWeight: '700' }}>
                    {cat.nameAr}
                  </h3>
                  {cat.descAr && (
                    <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>
                      {cat.descAr}
                    </p>
                  )}
                </div>
                <div style={{ marginTop: '15px', paddingTop: '10px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748b', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                    ID: {cat.categoryId}
                  </span>
                  <span style={{ color: isSelected ? '#2563eb' : '#64748b', fontSize: '0.85rem', fontWeight: '600' }}>
                    {isSelected ? 'المعرض حالياً ✓' : 'اختر التصنيف ←'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section des Articles Filtrés */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
          <h2 style={{ color: '#1e293b', fontSize: '1.5rem', margin: 0 }}>
            {selectedCategory ? `مقالات تصنيف: ${selectedCategory}` : 'جميع المقالات'}
          </h2>
          <span style={{ background: '#3b82f6', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
            {filteredPosts.length} مقالات
          </span>
        </div>

        {filteredPosts.length === 0 ? (
          <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', textAlign: 'center', border: '1px solid #e2e8f0', color: '#64748b' }}>
            لا توجد مقالات مرتبطة بهذا التصنيف حالياً.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                style={{ 
                  background: '#ffffff', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '14px', 
                  padding: '24px',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3b82f6' }}></div>
                    <span style={{ background: '#f1f5f9', color: '#475569', padding: '2px 8px', borderRadius: '6px', fontSize: '0.75rem' }}>
                      {post.category}
                    </span>
                  </div>
                  <h3 style={{ margin: '0 0 12px 0', color: '#0f172a', fontSize: '1.25rem', fontWeight: '700', lineHeight: '1.4' }}>
                    {post.title}
                  </h3>
                </div>
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '14px', marginTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748b', fontSize: '0.8rem', fontFamily: 'monospace' }}>
                    ID: {post.id}
                  </span>
                  <span style={{ color: '#2563eb', fontSize: '0.85rem', fontWeight: '600' }}>
                    اقرأ المزيد ←
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}