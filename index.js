import {subDays} from "date-fns";

export default {
    fetch() {
        const a = subDays(new Date(), 1);
        return new Response(a.getTime())
    }
}
