# SEO / GEO 工作记录

产品定位见根目录 [product-marketing-context.md](../../product-marketing-context.md)。

- [roadmap.md](roadmap.md)：路线、完成项、未解决问题及下一步验收条件。
- [performance-baseline.json](performance-baseline.json)、[pagespeed-before.txt](pagespeed-before.txt)：Google 手机实验室性能基线；没有真实用户 CrUX 数据。
- [asset-savings.json](asset-savings.json)：真实文件体积对比，不等于加载时间的同幅下降。
- [ai-baseline.json](ai-baseline.json)：匿名 AI 查询实际结果；要求登录时记为未测。
- [prompt-portfolio.csv](prompt-portfolio.csv)：固定中英文问题组合，区分品牌、需求、风险、价格与负对照。
- [skills-source.json](skills-source.json)：已安装技能的来源与固定版本。
- [distribution-drafts.md](distribution-drafts.md)：站外介绍稿，未对外发布。

发布前运行生产构建与 `python3 scripts/audit-seo.py --base-path /DailyChange-Web`。Google Search Console 的“请求已接受”、站点地图的“读取成功”、页面的“已编入索引”和真正的搜索展示分别记录。

IndexNow 使用根目录 `config/indexnow.json` 指定的公开网站所有权验证文件。项目路径验证只覆盖本项目，不能拿它提交同域其他项目。上线并核实文件可访问后，运行 `python3 scripts/submit-indexnow.py --url <实际改变的完整URL> --submit --output /private/tmp/indexnow-receipt.json`；有多页时重复 `--url`。只有全站确实更新时使用 `--all`。不带 `--submit` 只检查请求，不发通知。200 仅代表已接受，202 代表收到且验证待处理，都不代表已收录。依据：[官方协议](https://www.indexnow.org/documentation)。

后续按产品方选择，在再次询问时复查并更新记录；没有设置周期自动任务。站内检查会在每次 GitHub Pages 发布时执行。
