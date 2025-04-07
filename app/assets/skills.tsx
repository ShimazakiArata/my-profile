export default function Skills() {
    return (
      <main className="px-6 py-12 max-w-3xl mx-auto text-gray-800 dark:text-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center">特技・技術経験</h1>
        <section className="space-y-6 text-lg">
          <div>
            <h2 className="text-xl font-semibold mb-2">🖥️ 開発経験</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Unity での3Dゲーム開発（C#）</li>
              <li>JavaScript / React / Tailwind CSS</li>
              <li>ポートフォリオサイト制作（HTML/CSS/React）</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">🛠️ 使用ツール</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Unity, Blender, GitHub, VS Code</li>
              <li>Figma（UIデザイン作成）</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">📜 資格・検定</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>CGエンジニア検定ベーシック</li>
              <li>情報処理検定 2級</li>
            </ul>
          </div>
        </section>
      </main>
    );
  }
  