package com.example.datacenter.controller;
import java.util.Date;
import java.util.List;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;

import com.example.datacenter.model.domain.Culturepurchase;
import com.example.datacenter.model.domain.Productionprocess;
import com.example.datacenter.model.domain.request.CulturepurchaseRequest;
import com.example.datacenter.model.domain.request.ProductionprocessRequest;
import com.example.datacenter.service.CulturepurchaseService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * @author YanPAN
 * @create 2022-05-05 11:02
 */
@RestController
@RequestMapping("/culturepurchase")
public class CulturepurchaseController {

    @Resource
    private CulturepurchaseService culturepurchaseService;

    @PostMapping("/add")
    public String addCulturepurchase(@RequestBody CulturepurchaseRequest culturepurchaseRequest) {
        Culturepurchase culturepurchase = new Culturepurchase();
        culturepurchase.setCultureOrderID(culturepurchaseRequest.getCultureOrderID());
        culturepurchase.setSupplierName(culturepurchaseRequest.getSupplierName());
        culturepurchase.setCultureName(culturepurchaseRequest.getCultureName());
        culturepurchase.setCultureBatchCode(culturepurchaseRequest.getCultureBatchCode());
        culturepurchase.setCultureBestBefore(culturepurchaseRequest.getCultureBestBefore());
        culturepurchase.setCultureOpenDate(culturepurchaseRequest.getCultureOpenDate());
        culturepurchase.setQuantity(culturepurchaseRequest.getQuantity());
        culturepurchase.setCreateTime(new Date());
        culturepurchase.setUpdateTime(new Date());
        culturepurchase.setIsDelete(0);
        culturepurchase.setIsUsed(0);

        boolean save = culturepurchaseService.save(culturepurchase);
        if (!save) {
            return "null,";
        }
        return culturepurchase.getCultureOrderID();
    }

    @PostMapping("/update")
    public String updateCulturepurchase(@RequestBody CulturepurchaseRequest culturepurchaseRequest) {

        String orderID = culturepurchaseRequest.getCultureOrderID();
        if (orderID==null){
            return "null";
        }
        Culturepurchase culturepurchase = culturepurchaseService.getById(orderID);
        culturepurchase.setCultureOrderID(culturepurchaseRequest.getCultureOrderID());
        culturepurchase.setSupplierName(culturepurchaseRequest.getSupplierName());
        culturepurchase.setCultureName(culturepurchaseRequest.getCultureName());
        culturepurchase.setCultureBatchCode(culturepurchaseRequest.getCultureBatchCode());
        culturepurchase.setCultureBestBefore(culturepurchaseRequest.getCultureBestBefore());
        culturepurchase.setCultureOpenDate(culturepurchaseRequest.getCultureOpenDate());
        culturepurchase.setQuantity(culturepurchaseRequest.getQuantity());
        culturepurchase.setIsDelete(0);
        culturepurchase.setIsUsed(0);

        culturepurchaseService.saveOrUpdate(culturepurchase);
        return culturepurchase.getCultureOrderID();
    }

    @GetMapping("/search")
    public List<Culturepurchase> searchCulturepurchase(String id, HttpServletRequest request) {
        QueryWrapper<Culturepurchase> queryWrapper = new QueryWrapper<>();
        if (StringUtils.isNotBlank(id)) {
            queryWrapper.like("CultureOrderID", id);
        }
        return culturepurchaseService.list(queryWrapper);
    }

    @PostMapping("/delete")
    public void deleteCulturepurchase(@RequestBody CulturepurchaseRequest request) {
        Culturepurchase culturepurchase = new Culturepurchase();
        culturepurchase.setCultureOrderID(request.getCultureOrderID());
        culturepurchaseService.removeById(culturepurchase);
    }

}
