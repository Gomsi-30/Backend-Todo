

export class ApiFeature {
    constructor(query){
       this.query = query;
    }
    
    pagination(page,limit){
      const skip = (page - 1) * limit; 
      this.query = this.query.limit(limit).skip(skip); 
      return this;
    }
}