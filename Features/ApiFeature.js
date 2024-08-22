

class ApiFeature{
    constructor(query,params){
       this.query = query;
       this.params = params;
    }
    search(){
      this.query = this.query.find({params});
    }
}