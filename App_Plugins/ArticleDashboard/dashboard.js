class ArticleDashboard extends HTMLElement {

    connectedCallback() {
        this.loadData();
    }

    async loadData() {
        try {
            this.innerHTML = `<uui-loader></uui-loader>`;
            const res = await fetch('/umbraco/management/api/articles');
            const data = await res.json();
            this.render(data);
        } catch {
            this.innerHTML = `<uui-alert color="danger">Failed to load dashboard</uui-alert>`;
        }
    }

    render(data) {
        this.innerHTML = `
            <uui-box headline="Article Dashboard">

                <div style="display:grid; gap:16px;">

                    <uui-card>
                        <div style="font-size:24px;padding:20px">
                            <strong>Total Articles</strong>
                            <uui-badge>
                                ${data.total}
                            </uui-badge>
                        </div>
                    </uui-card>

                    <uui-card>
                        <div style="display:flex; flex-direction:column; gap:12px;width:100%;padding:20px">
                            <strong style="font-size:16px;">Latest Articles</strong>

                            <uui-table>
                                ${data.latest.map(title => `
                                    <uui-table-row>
                                        <uui-table-cell>
                                            <span style="padding:6px 0; display:block;">
                                                ${title}
                                            </span>
                                        </uui-table-cell>
                                    </uui-table-row>
                                `).join('')}
                            </uui-table>

                        </div>
                    </uui-card>

                </div>

            </uui-box>
        `;
    }
}

customElements.define('article-dashboard', ArticleDashboard);