export default {
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            page: 1,
            size: 20,
            params: {},
            pageAPI: null,
            refreshing: false,
        };
    },
    methods: {
        onLoad() {
            if (this.pageAPI) {
                this.pageAPI({ ...this.params, size: this.size, page: this.page++ }).then(({ data }) => {
                    // 加载状态结束
                    this.loading = false;
                    if (this.refreshing) {
                        this.refreshing = false;
                    }
                    this.list = this.list.concat(data.data);
                    if (this.list.length >= data.total) {
                        this.finished = true;
                    }
                });
            }
        },
        // 初始化翻页
        initPage() {
            this.page = 1;
            this.list = [];
            this.loading = true;
            this.finished = false;
            this.onLoad();
        },
    },
};
