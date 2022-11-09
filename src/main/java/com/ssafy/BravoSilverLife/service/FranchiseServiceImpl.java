package com.ssafy.BravoSilverLife.service;

import com.ssafy.BravoSilverLife.dto.FranchiseDto;
import com.ssafy.BravoSilverLife.entity.Franchise;
import com.ssafy.BravoSilverLife.repository.FranchiseRepository;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.SimpleTimeZone;

@Service
public class FranchiseServiceImpl implements FranchiseService {

    @Autowired
    FranchiseRepository franchiseRepository;


    @Override
    public List<FranchiseDto> getFranchisesByCount(String category) throws Exception {

        try {
            URL url = new URL("https://backend-ecs.myfranchise.kr/graphql");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("POST"); // http 메서드
            conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
            conn.setRequestProperty("cookie", "_gcl_au=1.1.618404503.1666234004; dable_uid=85530244.1657588813043; _fbp=fb.1.1666234003961.1639574948; ch-veil-id=bada3dd7-3b35-4e77-b1ea-f8e9b76c62e3; _gaexp=GAX1.2.HQokcJyuT468kzPZtibArg.19379.0; _gcl_aw=GCL.1667779363.CjwKCAjwtp2bBhAGEiwAOZZTuMx8amfET1SHQRfnA2AaMOhcCrQ9SZShItxwakCQfvqd24Q4wvCbghoCHT0QAvD_BwE; connect.sid=s%3Ad8728d36-b835-4f9c-877c-13862c6c3042.0StYLRRP6WFOew7uobkGpxcG%2B8drr1DWKZxtyulMgA0; _gid=GA1.2.1921027951.1667779363; _gac_UA-153867773-1=1.1667779363.CjwKCAjwtp2bBhAGEiwAOZZTuMx8amfET1SHQRfnA2AaMOhcCrQ9SZShItxwakCQfvqd24Q4wvCbghoCHT0QAvD_BwE; _gac_UA-153867773-6=1.1667779363.CjwKCAjwtp2bBhAGEiwAOZZTuMx8amfET1SHQRfnA2AaMOhcCrQ9SZShItxwakCQfvqd24Q4wvCbghoCHT0QAvD_BwE; _gac_UA-181637923-9=1.1667779364.CjwKCAjwtp2bBhAGEiwAOZZTuMx8amfET1SHQRfnA2AaMOhcCrQ9SZShItxwakCQfvqd24Q4wvCbghoCHT0QAvD_BwE; _clck=712lcn|1|f6d|0; _ga=GA1.2.1522383083.1666234004; _gat_gtag_UA_153867773_1=1; ch-session-18358=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzZXMiLCJrZXkiOiIxODM1OC02MzUwYjY5M2RjMWE0NDEzZjBjNCIsImlhdCI6MTY2Nzc4NTY0OSwiZXhwIjoxNjcwMzc3NjQ5fQ.OIIRLfvDq9ErNDifU6evtNDXwDYJhFQ-k24vxHfkIJY; _clsk=je78qt|1667785650114|7|1|d.clarity.ms/collect; _ga_DNG02PC9B9=GS1.1.1667784498.5.1.1667785650.0.0.0");
            conn.setRequestProperty("path", "/graphql");
            conn.setRequestProperty("authority", "backend-ecs.myfranchise.kr");
            conn.setRequestProperty("origin", "https://myfranchise.kr");


            conn.setDoInput(true); // 서버에 전달할 값이 있다면 true
            conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

            // 서버에 데이터 전달
            String body = "{\"operationName\":\"franchisePagination\",\"variables\":{\"filter\":{\"stopped\":false,\"terminated\":false,\"categoryNames\":[\"" +
                    category +
                    "\"],\"top10Exception\":true,\"source\":\"FTC\"},\"sort\":\"FRANCHISEECOUNT_DESC\",\"page\":1,\"perPage\":10},\"query\":\"query franchisePagination($filter: FilterFindManyFranchiseInput, $sort: SortFindManyFranchiseInput, $page: Int, $perPage: Int, $dateFilter: String) {\\n  result: franchisePagination(\\n    filter: $filter\\n    sort: $sort\\n    page: $page\\n    perPage: $perPage\\n  ) {\\n    items {\\n      id\\n      businessItems {\\n        alias\\n        name\\n        id\\n        __typename\\n      }\\n      name\\n      registrationNumber\\n      franchiseeCount\\n      metadata {\\n        hasLaunched\\n        logoUrl\\n        __typename\\n      }\\n      stopped\\n      terminated\\n      __typename\\n    }\\n    __typename\\n  }\\n  standardDate: metadataMany(filter: {key: $dateFilter}) {\\n    value\\n    __typename\\n  }\\n}\"}";

            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            bw.write(body); // 버퍼에 담기
            bw.flush(); // 버퍼에 담긴 데이터 전달
            bw.close();

            // 서버로부터 데이터 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuilder sb = new StringBuilder();
            String line = null;

            while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
                sb.append(line);
            }

            List<FranchiseDto> franchiseDtos = new ArrayList<>();
            JSONParser parser = new JSONParser();
            JSONObject jsonObj = (JSONObject) parser.parse(sb.toString());

            JSONObject data = (JSONObject) jsonObj.get("data");
            JSONObject result = (JSONObject) data.get("result");
            JSONArray items = (JSONArray) result.get("items");

            for (int i = 0; i < items.size(); i++) {
                JSONObject jsonObject = (JSONObject) items.get(i);
                JSONArray businessItems = (JSONArray) jsonObject.get("businessItems");
                JSONObject name = (JSONObject) businessItems.get(0);
                JSONObject metadata = (JSONObject) jsonObject.get("metadata");

                FranchiseDto franchiseDto = FranchiseDto.builder()
                        .count((Long) jsonObject.get("franchiseeCount"))
                        .name((String) jsonObject.get("name"))
                        .category((String) name.get("name"))
                        .id((String) jsonObject.get("id"))
                        .url((String) metadata.get("logoUrl"))
                        .registrationNumber((String) jsonObject.get("registrationNumber"))
                        .build();
                franchiseDtos.add(franchiseDto);
            }

            return franchiseDtos;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public List<FranchiseDto> getFranchisesByPopular(String category) throws Exception {

        try {
            URL url = new URL("https://backend-ecs.myfranchise.kr/graphql");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("POST"); // http 메서드
            conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
            conn.setRequestProperty("cookie", "_gcl_au=1.1.618404503.1666234004; dable_uid=85530244.1657588813043; _fbp=fb.1.1666234003961.1639574948; ch-veil-id=bada3dd7-3b35-4e77-b1ea-f8e9b76c62e3; _gaexp=GAX1.2.HQokcJyuT468kzPZtibArg.19379.0; _gcl_aw=GCL.1667779363.CjwKCAjwtp2bBhAGEiwAOZZTuMx8amfET1SHQRfnA2AaMOhcCrQ9SZShItxwakCQfvqd24Q4wvCbghoCHT0QAvD_BwE; connect.sid=s%3Ad8728d36-b835-4f9c-877c-13862c6c3042.0StYLRRP6WFOew7uobkGpxcG%2B8drr1DWKZxtyulMgA0; _gid=GA1.2.1921027951.1667779363; _gac_UA-153867773-1=1.1667779363.CjwKCAjwtp2bBhAGEiwAOZZTuMx8amfET1SHQRfnA2AaMOhcCrQ9SZShItxwakCQfvqd24Q4wvCbghoCHT0QAvD_BwE; _gac_UA-153867773-6=1.1667779363.CjwKCAjwtp2bBhAGEiwAOZZTuMx8amfET1SHQRfnA2AaMOhcCrQ9SZShItxwakCQfvqd24Q4wvCbghoCHT0QAvD_BwE; _gac_UA-181637923-9=1.1667779364.CjwKCAjwtp2bBhAGEiwAOZZTuMx8amfET1SHQRfnA2AaMOhcCrQ9SZShItxwakCQfvqd24Q4wvCbghoCHT0QAvD_BwE; _clck=712lcn|1|f6d|0; _ga=GA1.2.1522383083.1666234004; _gat_gtag_UA_153867773_1=1; ch-session-18358=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzZXMiLCJrZXkiOiIxODM1OC02MzUwYjY5M2RjMWE0NDEzZjBjNCIsImlhdCI6MTY2Nzc4NTY0OSwiZXhwIjoxNjcwMzc3NjQ5fQ.OIIRLfvDq9ErNDifU6evtNDXwDYJhFQ-k24vxHfkIJY; _clsk=je78qt|1667785650114|7|1|d.clarity.ms/collect; _ga_DNG02PC9B9=GS1.1.1667784498.5.1.1667785650.0.0.0");
            conn.setRequestProperty("path", "/graphql");
            conn.setRequestProperty("authority", "backend-ecs.myfranchise.kr");
            conn.setRequestProperty("origin", "https://myfranchise.kr");
            conn.setDoInput(true); // 서버에 전달할 값이 있다면 true
            conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

            String body = "{\"operationName\":\"franchisePagination\",\"variables\":{\"filter\":{\"stopped\":false,\"terminated\":false,\"categoryNames\":[\"" +
                    category +
                    "\"],\"top10Exception\":false,\"hasBrandChartValue\":\"brandHotScore\"},\"sort\":\"METADATA__BRANDHOTSCORE_STORECOUNT_DESC\",\"page\":1,\"perPage\":10,\"dateFilter\":\"brandHotScore\"},\"query\":\"query franchisePagination($filter: FilterFindManyFranchiseInput, $sort: SortFindManyFranchiseInput, $page: Int, $perPage: Int, $dateFilter: String) {\\n  result: franchisePagination(\\n    filter: $filter\\n    sort: $sort\\n    page: $page\\n    perPage: $perPage\\n  ) {\\n    items {\\n      id\\n      businessItems {\\n        alias\\n        name\\n        id\\n        __typename\\n      }\\n      name\\n      registrationNumber\\n      franchiseeCount\\n      metadata {\\n        hasLaunched\\n        logoUrl\\n        __typename\\n      }\\n      stopped\\n      terminated\\n      __typename\\n    }\\n    __typename\\n  }\\n  standardDate: metadataMany(filter: {key: $dateFilter}) {\\n    value\\n    __typename\\n  }\\n}\"}";

            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            bw.write(body); // 버퍼에 담기
            bw.flush(); // 버퍼에 담긴 데이터 전달
            bw.close();

            // 서버로부터 데이터 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuilder sb = new StringBuilder();
            String line = null;

            while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
                sb.append(line);
            }

            List<FranchiseDto> franchiseDtos = new ArrayList<>();
            JSONParser parser = new JSONParser();
            JSONObject jsonObj = (JSONObject) parser.parse(sb.toString());

            JSONObject data = (JSONObject) jsonObj.get("data");
            JSONObject result = (JSONObject) data.get("result");
            JSONArray items = (JSONArray) result.get("items");

            for (int i = 0; i < items.size(); i++) {
                JSONObject jsonObject = (JSONObject) items.get(i);
                JSONArray businessItems = (JSONArray) jsonObject.get("businessItems");
                JSONObject name = (JSONObject) businessItems.get(0);
                JSONObject metadata = (JSONObject) jsonObject.get("metadata");

                FranchiseDto franchiseDto = FranchiseDto.builder()
                        .count((Long) jsonObject.get("franchiseeCount"))
                        .name((String) jsonObject.get("name"))
                        .category((String) name.get("name"))
                        .id((String) jsonObject.get("id"))
                        .url((String) metadata.get("logoUrl"))
                        .registrationNumber((String) jsonObject.get("registrationNumber"))
                        .build();
                franchiseDtos.add(franchiseDto);
            }

            return franchiseDtos;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public void test() throws Exception {

        for (int i = 0; i < 265; i++) {
            try {
                URL url = new URL("https://backend-ecs.myfranchise.kr/graphql");
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();

                conn.setRequestMethod("POST"); // http 메서드
                conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
                conn.setRequestProperty("cookie", "_gcl_au=1.1.618404503.1666234004; dable_uid=85530244.1657588813043; _fbp=fb.1.1666234003961.1639574948; ch-veil-id=bada3dd7-3b35-4e77-b1ea-f8e9b76c62e3; _gaexp=GAX1.2.HQokcJyuT468kzPZtibArg.19379.0; mf-refresh=cb139f85-e577-465a-91d6-54210978b6c6; _gid=GA1.2.632813659.1667894171; _clck=712lcn|1|f6f|0; connect.sid=s%3A73ee474c-55ff-4654-826c-901d84357a90.9e7LVkHvqQO9NfA4X%2FGBM0JBz7KM%2B3Z%2FT1w0s%2FOD67k; mf-showInstallAppBanner=false; _ga_ERN0ZF08RF=GS1.1.1667957788.1.1.1667957831.0.0.0; _gcl_aw=GCL.1667968010.Cj0KCQiAmaibBhCAARIsAKUlaKSo5v-NyH135i7C8IzwfIvZ8I9IK19XJN2hvqIkjt3b_SU14BZ03fcaAu8eEALw_wcB; __dbl__pv=4; _gac_UA-153867773-1=1.1667968011.Cj0KCQiAmaibBhCAARIsAKUlaKSo5v-NyH135i7C8IzwfIvZ8I9IK19XJN2hvqIkjt3b_SU14BZ03fcaAu8eEALw_wcB; _gat_gtag_UA_153867773_1=1; _gac_UA-153867773-6=1.1667968011.Cj0KCQiAmaibBhCAARIsAKUlaKSo5v-NyH135i7C8IzwfIvZ8I9IK19XJN2hvqIkjt3b_SU14BZ03fcaAu8eEALw_wcB; _gat_gtag_UA_153867773_6=1; _ga=GA1.2.1522383083.1666234004; _gac_UA-181637923-9=1.1667968011.Cj0KCQiAmaibBhCAARIsAKUlaKSo5v-NyH135i7C8IzwfIvZ8I9IK19XJN2hvqIkjt3b_SU14BZ03fcaAu8eEALw_wcB; ch-session-18358=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzZXMiLCJrZXkiOiIxODM1OC02MzUwYjY5M2RjMWE0NDEzZjBjNCIsImlhdCI6MTY2Nzk2ODAxMywiZXhwIjoxNjcwNTYwMDEzfQ.6OG9cvY56X_UbNHHt_yM5c1DmadCKNPpLn1EPUen4Ls; _clsk=rtmpws|1667968019660|3|1|d.clarity.ms/collect; _ga_DNG02PC9B9=GS1.1.1667968010.12.1.1667968023.0.0.0");
                conn.setRequestProperty("path", "/graphql");
                conn.setRequestProperty("authority", "backend-ecs.myfranchise.kr");
                conn.setRequestProperty("origin", "https://myfranchise.kr");
                conn.setDoInput(true); // 서버에 전달할 값이 있다면 true
                conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

                String body = "{\"operationName\":\"franchiseSearch\",\"variables\":{\"query\":{\"bool\":{\"must\":[{\"bool\":{\"must_not\":[{\"term\":{\"metadata__searchBlind\":{\"value\":true}}}]}},{\"bool\":{\"must_not\":[{\"match\":{\"sourceType\":{\"query\":\"non-franchise\"}}}]}},{\"bool\":{\"must_not\":[{\"term\":{\"metadata__isTesting\":{\"value\":true}}}]}},{\"bool\":{\"should\":[{\"term\":{\"businessItems\":{\"value\":\"5e0a83eeb4934698dafe1a16\"}}},{\"term\":{\"businessItems\":{\"value\":\"5e0a89ccb4934698da07042e\"}}},{\"term\":{\"businessItems\":{\"value\":\"5e0a89deb4934698da0713f3\"}}},{\"term\":{\"businessItems\":{\"value\":\"5e0a86e8b4934698da02ef6d\"}}},{\"term\":{\"businessItems\":{\"value\":\"5e0a89cbb4934698da0703af\"}}},{\"term\":{\"businessItems\":{\"value\":\"5e0a89e3b4934698da0718a2\"}}},{\"term\":{\"businessItems\":{\"value\":\"5e0a89feb4934698da073370\"}}}]}},{\"term\":{\"stopped\":{\"value\":false}}},{\"term\":{\"terminated\":{\"value\":false}}}]}},\"limit\":24,\"skip\":" +
                        i * 24 +
                        ",\"sort\":[\"sortingScore__desc\",\"ftcId__asc\"]},\"query\":\"query franchiseSearch($query: FranchiseESQuery, $sort: [FranchiseESSortEnum], $limit: Int, $skip: Int) {\\n  result: franchiseSearch(query: $query, sort: $sort, limit: $limit, skip: $skip) {\\n    count\\n    hits {\\n      _id\\n      _source {\\n        id\\n        closureRates\\n        currentCompany\\n        description\\n        directStoresCount\\n        enabled\\n        annualSalesStatus\\n        franchiseeCount\\n        franchiseeCountStatus\\n        franchiseeCounts\\n        ftcDocumentRegisteredAt\\n        ftcDocumentUpdatedAt\\n        ftcId\\n        ftcListing\\n        hash\\n        initialCost {\\n          deposit\\n          education\\n          franchise\\n          interior\\n          interiorDetail\\n          other\\n          otherDetail\\n          total\\n          __typename\\n        }\\n        monthlySales\\n        listing\\n        name\\n        registrationNumber\\n        sortingScore\\n        source\\n        sourceType\\n        standardAreaSize\\n        startAt\\n        adminMessageCount\\n        adminMessages\\n        stopped\\n        terminated\\n        businessItemsString\\n        businessItems\\n        _businessItems {\\n          alias\\n          name\\n          createdAt\\n          enabled\\n          franchiseeCount\\n          id\\n          initialCostAverage\\n          listing\\n          updatedAt\\n          __typename\\n        }\\n        metadata {\\n          hasLaunched\\n          hasBrandInformation\\n          isGoodFranchise\\n          isKfaMember\\n          isTesting\\n          theme\\n          logoUrl\\n          thumbUrl\\n          no_need_inquiry\\n          __typename\\n        }\\n        eventBrandContents {\\n          contents\\n          event {\\n            type\\n            name\\n            enabled\\n            endDate\\n            brandBannerTitleColor\\n            brandBannerSubTitleColor\\n            brandBannerBgColor\\n            brandBannerBgImage\\n            mapBannerFontColor\\n            mapBannerBgColor\\n            mapBannerBgImage\\n            createdAt\\n            id\\n            __typename\\n          }\\n          createdAt\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\"}";


                BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
                bw.write(body); // 버퍼에 담기
                bw.flush(); // 버퍼에 담긴 데이터 전달
                bw.close();

                // 서버로부터 데이터 읽어오기
                BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                StringBuilder sb = new StringBuilder();
                String line = null;

                while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
                    sb.append(line);
                }


                JSONParser parser = new JSONParser();
                JSONObject jsonObj = (JSONObject) parser.parse(sb.toString());
                JSONObject data = (JSONObject) jsonObj.get("data");
                JSONObject result = (JSONObject) data.get("result");
                JSONArray hits = (JSONArray) result.get("hits");
                for (int j = 0; j < hits.size(); j++) {

                    JSONObject jsonObject = (JSONObject) hits.get(j);
                    JSONObject source = (JSONObject) jsonObject.get("_source");
                    JSONObject metadata = (JSONObject) source.get("metadata");

                    Franchise franchise = Franchise.builder()
                            .count((Long) source.get("franchiseeCount"))
                            .category((String) source.get("businessItemsString"))
                            .name((String) source.get("name"))
                            .url((String) metadata.get("thumbUrl"))
                            .id((String) source.get("registrationNumber"))
                            .build();

                    franchiseRepository.save(franchise);
                }

            } catch (Exception e) {
                e.printStackTrace();
            }
        }


    }

    @Override
    public List<Franchise> searchFranchise(String category, String name) throws Exception {
        List<Franchise> franchises = franchiseRepository.findByCategoryAndNameContains(category, name);
        for (Franchise franchise : franchises) {
            System.out.println(franchise.getName());
        }
        return franchises;
    }

//    @Override
//    public FranchiseDetail getFranchiseDetail(String name) throws Exception {
//        try {
//            URL url = new URL("https://backend-ecs.myfranchise.kr/graphql");
//            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//
//            conn.setRequestMethod("POST"); // http 메서드
//            conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
//            conn.setRequestProperty("cookie", "_gcl_au=1.1.618404503.1666234004; dable_uid=85530244.1657588813043; _fbp=fb.1.1666234003961.1639574948; ch-veil-id=bada3dd7-3b35-4e77-b1ea-f8e9b76c62e3; _gaexp=GAX1.2.HQokcJyuT468kzPZtibArg.19379.0; _gcl_aw=GCL.1667779363.CjwKCAjwtp2bBhAGEiwAOZZTuMx8amfET1SHQRfnA2AaMOhcCrQ9SZShItxwakCQfvqd24Q4wvCbghoCHT0QAvD_BwE; connect.sid=s%3Ad8728d36-b835-4f9c-877c-13862c6c3042.0StYLRRP6WFOew7uobkGpxcG%2B8drr1DWKZxtyulMgA0; _gid=GA1.2.1921027951.1667779363; _gac_UA-153867773-1=1.1667779363.CjwKCAjwtp2bBhAGEiwAOZZTuMx8amfET1SHQRfnA2AaMOhcCrQ9SZShItxwakCQfvqd24Q4wvCbghoCHT0QAvD_BwE; _gac_UA-153867773-6=1.1667779363.CjwKCAjwtp2bBhAGEiwAOZZTuMx8amfET1SHQRfnA2AaMOhcCrQ9SZShItxwakCQfvqd24Q4wvCbghoCHT0QAvD_BwE; _gac_UA-181637923-9=1.1667779364.CjwKCAjwtp2bBhAGEiwAOZZTuMx8amfET1SHQRfnA2AaMOhcCrQ9SZShItxwakCQfvqd24Q4wvCbghoCHT0QAvD_BwE; _clck=712lcn|1|f6d|0; _ga=GA1.2.1522383083.1666234004; _gat_gtag_UA_153867773_1=1; ch-session-18358=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzZXMiLCJrZXkiOiIxODM1OC02MzUwYjY5M2RjMWE0NDEzZjBjNCIsImlhdCI6MTY2Nzc4NTY0OSwiZXhwIjoxNjcwMzc3NjQ5fQ.OIIRLfvDq9ErNDifU6evtNDXwDYJhFQ-k24vxHfkIJY; _clsk=je78qt|1667785650114|7|1|d.clarity.ms/collect; _ga_DNG02PC9B9=GS1.1.1667784498.5.1.1667785650.0.0.0");
//            conn.setRequestProperty("path", "/graphql");
//            conn.setRequestProperty("authority", "backend-ecs.myfranchise.kr");
//            conn.setRequestProperty("origin", "https://myfranchise.kr");
//            conn.setDoInput(true); // 서버에 전달할 값이 있다면 true
//            conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true
//
//            String body = "";
//            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
//            bw.write(body); // 버퍼에 담기
//            bw.flush(); // 버퍼에 담긴 데이터 전달
//            bw.close();
//
//            // 서버로부터 데이터 읽어오기
//            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
//            StringBuilder sb = new StringBuilder();
//            String line = null;
//
//            while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
//                sb.append(line);
//            }
//
//            List<Franchise> franchises = new ArrayList<>();
//            JSONParser parser = new JSONParser();
//            JSONObject jsonObj = (JSONObject) parser.parse(sb.toString());
//
//            JSONObject data = (JSONObject) jsonObj.get("data");
//            JSONObject result = (JSONObject) data.get("result");
//            JSONArray items = (JSONArray) result.get("items");
//
//            for (int i = 0; i < items.size(); i++) {
//                JSONObject jsonObject = (JSONObject) items.get(i);
//                JSONArray businessItems = (JSONArray) jsonObject.get("businessItems");
//                JSONObject name = (JSONObject) businessItems.get(0);
//                JSONObject metadata = (JSONObject) jsonObject.get("metadata");
//
//                Franchise franchise = Franchise.builder()
//                        .count((Long) jsonObject.get("franchiseeCount"))
//                        .name((String) jsonObject.get("name"))
//                        .category((String) name.get("name"))
//                        .id((String) jsonObject.get("id"))
//                        .url((String) metadata.get("logoUrl"))
//                        .build();
//                franchises.add(franchise);
//            }
//
//            return franchises;
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//
//        return null;
//    }
}
