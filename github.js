// c21ef23a87c13ada7c1add24e2e19c8698a555eb

class Github {

    constructor(){
        this.client_id = 'e6ed661a3dbd3ef715ff';
        this.client_secret = 'ebbb896af8409d1b5e25c6f9403976de47f9d65a';
        this.repo_count = 5;
        this.repo_sort = "created: asc";
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile : profile,
            repos : repos
        }
    }
}
